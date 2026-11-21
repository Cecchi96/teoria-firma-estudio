/*
 * feedback-admin.js — bandeja de comentarios para el administrador.
 *
 * La seguridad real está en Supabase: solo las cuentas de tf_admins pueden
 * leer, actualizar o borrar filas de tf_feedback (ver supabase/tf_feedback.sql).
 * El chequeo del cliente es solo para mostrar una pantalla clara.
 */
(() => {
  "use strict";

  const state = {
    items: [],
    filter: "all",
    query: "",
    loading: false
  };

  const backend = {
    resolved: false,
    table: "tf_feedback",
    adminRpc: "tf_is_admin",
    prefixed: false
  };

  const els = {};

  function init() {
    els.gate = document.getElementById("fbGate");
    els.inbox = document.getElementById("fbInbox");
    els.status = document.getElementById("fbStatus");
    els.list = document.getElementById("fbList");
    els.empty = document.getElementById("fbEmpty");
    els.refresh = document.getElementById("fbRefresh");
    els.search = document.getElementById("fbSearch");
    els.statTotal = document.getElementById("statTotal");
    els.statOpen = document.getElementById("statOpen");
    els.statResolved = document.getElementById("statResolved");
    els.themeBtn = document.getElementById("themeBtn");
    els.signOut = document.getElementById("fbSignOut");

    initTheme();
    bind();

    boot();
  }

  async function boot() {
    let user = null;
    try {
      user = await window.fukuro.ready;
    } catch (error) {
      showStatus("No se pudo iniciar sesión. Recargá la página.", true);
      return;
    }

    let isAdmin = false;
    let checkError = null;
    try {
      const target = await resolveBackend();
      isAdmin = (await window.storage.rpc(target.adminRpc)) === true;
    } catch (error) {
      checkError = error;
      console.error("[feedback-admin] no se pudo verificar el acceso:", (error && error.message) || error);
    }

    if (checkError) {
      if (els.refresh) els.refresh.hidden = true;
      showStatus(explain(checkError), true);
      return;
    }

    if (!isAdmin) {
      if (els.refresh) els.refresh.hidden = true;
      hideStatus();
      if (els.gate) {
        els.gate.hidden = false;
        const who = user && user.email ? user.email : "otra cuenta";
        const detail = els.gate.querySelector("[data-user]");
        if (detail) detail.textContent = who;
      }
      return;
    }

    if (els.inbox) els.inbox.hidden = false;
    load();
  }

  function bind() {
    if (els.refresh) els.refresh.addEventListener("click", load);

    if (els.search) {
      els.search.addEventListener("input", () => {
        state.query = els.search.value.trim().toLowerCase();
        render();
      });
    }

    document.querySelectorAll("[data-filter]").forEach(button => {
      button.addEventListener("click", () => {
        state.filter = button.dataset.filter;
        document.querySelectorAll("[data-filter]").forEach(item => {
          const active = item === button;
          item.classList.toggle("active", active);
          item.setAttribute("aria-pressed", active ? "true" : "false");
        });
        render();
      });
    });

    if (els.list) {
      els.list.addEventListener("click", event => {
        const button = event.target.closest("[data-act]");
        if (!button) return;
        const id = button.dataset.id;
        if (button.dataset.act === "toggle") toggleStatus(id);
        if (button.dataset.act === "delete") remove(id);
      });
    }

    if (els.signOut) {
      els.signOut.addEventListener("click", () => {
        if (window.confirm("¿Cerrar sesión?")) window.fukuro.signOut();
      });
    }

    if (els.themeBtn) {
      els.themeBtn.addEventListener("click", () => {
        const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", next);
        try { localStorage.setItem("tf-theme", next); } catch (error) {}
        updateThemeButton(next);
      });
    }
  }

  function initTheme() {
    const theme = document.documentElement.getAttribute("data-theme") || "light";
    updateThemeButton(theme);
  }

  function updateThemeButton(theme) {
    if (!els.themeBtn) return;
    els.themeBtn.textContent = theme === "dark" ? "☀" : "☾";
    els.themeBtn.setAttribute("aria-label", theme === "dark" ? "Cambiar a modo día" : "Cambiar a modo noche");
    els.themeBtn.title = theme === "dark" ? "Modo día" : "Modo noche";
  }

  async function resolveBackend() {
    if (backend.resolved) return backend;
    try {
      const query = await window.storage.table("tf_feedback");
      const { error } = await query.select("id").limit(1);
      if (error && isMissingBackend(error)) switchToEcoFeedback();
    } catch (error) {
      if (isMissingBackend(error)) switchToEcoFeedback();
    }
    backend.resolved = true;
    return backend;
  }

  function switchToEcoFeedback() {
    backend.table = "eco_feedback";
    backend.adminRpc = "eco_is_admin";
    backend.prefixed = true;
  }

  function isMissingBackend(error) {
    const message = String((error && (error.message || error.details)) || error || "");
    return /does not exist|PGRST205|could not find the table|schema cache|function public\.tf_is_admin/i.test(message);
  }

  async function load() {
    if (state.loading) return;
    state.loading = true;
    if (els.refresh) {
      els.refresh.disabled = true;
      els.refresh.textContent = "Actualizando…";
    }
    showStatus("Cargando comentarios…");

    try {
      const target = await resolveBackend();
      const query = await window.storage.table(target.table);
      let request = query
        .select("*")
        .order("created_at", { ascending: false })
        .limit(500);
      if (target.prefixed) request = request.like("page_class", "tf:%");
      const { data, error } = await request;
      if (error) throw error;
      state.items = Array.isArray(data) ? data : [];
      hideStatus();
      render();
    } catch (error) {
      console.error("[feedback-admin] no se pudieron cargar los comentarios:", (error && error.message) || error);
      showStatus(explain(error), true);
      if (els.empty) els.empty.hidden = true;
    } finally {
      state.loading = false;
      if (els.refresh) {
        els.refresh.disabled = false;
        els.refresh.textContent = "Actualizar";
      }
    }
  }

  async function toggleStatus(id) {
    const item = state.items.find(entry => entry.id === id);
    if (!item) return;

    const next = item.status === "open" ? "resolved" : "open";
    setCardBusy(id, true);
    try {
      const target = await resolveBackend();
      const query = await window.storage.table(target.table);
      const { error } = await query
        .update({
          status: next,
          resolved_at: next === "resolved" ? new Date().toISOString() : null
        })
        .eq("id", id);
      if (error) throw error;
      item.status = next;
      item.resolved_at = next === "resolved" ? new Date().toISOString() : null;
      hideStatus();
      render();
    } catch (error) {
      console.error("[feedback-admin] no se pudo cambiar el estado:", (error && error.message) || error);
      showStatus(explain(error), true);
      setCardBusy(id, false);
    }
  }

  async function remove(id) {
    const item = state.items.find(entry => entry.id === id);
    if (!item) return;
    if (!window.confirm("¿Eliminar este comentario? No se puede deshacer.")) return;

    setCardBusy(id, true);
    try {
      const target = await resolveBackend();
      const query = await window.storage.table(target.table);
      const { error } = await query.delete().eq("id", id);
      if (error) throw error;
      state.items = state.items.filter(entry => entry.id !== id);
      hideStatus();
      render();
    } catch (error) {
      console.error("[feedback-admin] no se pudo borrar el comentario:", (error && error.message) || error);
      showStatus(explain(error), true);
      setCardBusy(id, false);
    }
  }

  function render() {
    const items = filteredItems();
    updateStats();

    if (!els.list) return;

    if (!items.length) {
      els.list.innerHTML = "";
      if (els.empty) {
        els.empty.hidden = false;
        els.empty.innerHTML = emptyHTML();
      }
      return;
    }

    if (els.empty) els.empty.hidden = true;
    els.list.innerHTML = items.map(cardHTML).join("");
  }

  function filteredItems() {
    return state.items.filter(item => {
      if (state.filter === "open" && item.status !== "open") return false;
      if (state.filter === "resolved" && item.status !== "resolved") return false;
      if (!state.query) return true;
      const haystack = [
        item.message,
        item.user_email,
        item.page_class,
        item.page_tab
      ].join(" ").toLowerCase();
      return haystack.includes(state.query);
    });
  }

  function updateStats() {
    if (els.statTotal) els.statTotal.textContent = state.items.length;
    if (els.statOpen) els.statOpen.textContent = state.items.filter(item => item.status === "open").length;
    if (els.statResolved) els.statResolved.textContent = state.items.filter(item => item.status === "resolved").length;
  }

  function cardHTML(item) {
    const resolved = item.status === "resolved";
    const email = item.user_email || "Sin correo";
    const label = classLabel(item.page_class, item.page_tab);
    const link = item.page_class
      ? `<a href="${escAttr(routeFor(item.page_class))}" target="_blank" rel="noopener">Abrir en el aula</a>`
      : "";

    return `
      <article class="fb-card${resolved ? " resolved" : ""}" data-card="${escAttr(item.id)}">
        <div class="fb-card-top">
          <div class="fb-card-who">
            <b>${esc(email)}</b>
            <span>${esc(formatDate(item.created_at))}</span>
          </div>
          <span class="fb-badge${resolved ? " resolved" : ""}">${resolved ? "Resuelto" : "Pendiente"}</span>
        </div>
        <p class="fb-message">${esc(item.message)}</p>
        <div class="fb-card-foot">
          <div class="fb-tags">
            <span class="fb-tag">${esc(label)}</span>
            ${link ? `<span class="fb-tag">${link}</span>` : ""}
          </div>
          <div class="fb-card-actions">
            <button class="fb-act" type="button" data-act="toggle" data-id="${escAttr(item.id)}">
              ${resolved ? "Reabrir" : "Marcar resuelto"}
            </button>
            <button class="fb-act danger" type="button" data-act="delete" data-id="${escAttr(item.id)}">
              Eliminar
            </button>
          </div>
        </div>
      </article>
    `;
  }

  function emptyHTML() {
    if (state.query) {
      return "<b>Sin resultados</b>No hay comentarios que coincidan con la búsqueda.";
    }
    if (state.filter === "open") {
      return "<b>Todo al día</b>No quedan comentarios pendientes.";
    }
    if (state.filter === "resolved") {
      return "<b>Todavía no hay resueltos</b>Cuando marques uno, va a aparecer acá.";
    }
    return "<b>Todavía no hay comentarios</b>Cuando alguien use el botón flotante, el mensaje va a aparecer acá.";
  }

  function cleanClassId(classId) {
    return String(classId || "").replace(/^tf:/, "");
  }

  function routeFor(pageClass) {
    const parts = cleanClassId(pageClass).split("/").filter(Boolean);
    if (parts.length >= 2) return `index.html#/${parts[0]}/${parts[1]}/teoria`;
    if (parts.length === 1) return `index.html#/${parts[0]}`;
    return "index.html";
  }

  function classLabel(classId, tab) {
    if (!classId) return tab || "Aula";
    const parts = cleanClassId(classId).split("/").filter(Boolean);
    const units = (window.CONTENT && window.CONTENT.units) || [];
    const unit = units.find(item => item.id === parts[0]);
    const subunit = unit && (unit.subunits || []).find(item => item.id === parts[1]);
    let label = subunit
      ? `Unidad ${unit.num} · ${subunit.code}`
      : (unit ? `Unidad ${unit.num} · Mapa` : classId);
    if (tab) label += ` · ${tab}`;
    return label;
  }

  function formatDate(value) {
    if (!value) return "";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "";
    try {
      return new Intl.DateTimeFormat("es-AR", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }).format(date);
    } catch (error) {
      return date.toLocaleString();
    }
  }

  function setCardBusy(id, busy) {
    const card = els.list && els.list.querySelector(`[data-card="${cssEscape(id)}"]`);
    if (card) card.classList.toggle("busy", busy);
  }

  function showStatus(message, error) {
    if (!els.status) return;
    els.status.hidden = false;
    els.status.textContent = message;
    els.status.classList.toggle("error", Boolean(error));
  }

  function hideStatus() {
    if (!els.status) return;
    els.status.hidden = true;
    els.status.textContent = "";
    els.status.classList.remove("error");
  }

  function explain(error) {
    const message = String((error && (error.message || error.details)) || error || "");
    if (/does not exist|PGRST205|could not find the table|schema cache|function public\.tf_is_admin/i.test(message)) {
      return "Falta configurar la bandeja. Ejecutá supabase/tf_feedback.sql en el SQL Editor de Supabase y recargá esta página.";
    }
    if (/function public\.eco_is_admin/i.test(message)) {
      return "La bandeja compartida de Fukuro no está configurada. Ejecutá supabase/tf_feedback.sql en el SQL Editor de Supabase.";
    }
    if (/permission denied|row-level security|jwt|not authenticated/i.test(message)) {
      return "Supabase rechazó la consulta. Revisá las políticas de tf_feedback y volvé a iniciar sesión.";
    }
    return "No se pudieron cargar los comentarios. Probá de nuevo en unos segundos.";
  }

  function esc(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[char]));
  }

  function escAttr(value) {
    return esc(value);
  }

  function cssEscape(value) {
    if (window.CSS && typeof window.CSS.escape === "function") return window.CSS.escape(String(value));
    return String(value).replace(/["\\]/g, "\\$&");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
