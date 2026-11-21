/* =========================================================
   Aula de Teoría de la Firma — lógica de la aplicación
   Versión de estudio 0.3 · Unidades 05 y 06
   ========================================================= */

(() => {
  "use strict";

  const UNITS = window.CONTENT.units;
  const U5 = UNITS.find((u) => u.id === "u5");

  function findSubunit(subunitId) {
    for (const unit of UNITS) {
      const subunit = (unit.subunits || []).find((item) => item.id === subunitId);
      if (subunit) return subunit;
    }
    return null;
  }

  function hasContent(unit) {
    return Boolean(unit && Array.isArray(unit.subunits) && unit.subunits.some((item) => item.theory));
  }

  const TABS = [
    { id: "teoria", label: "Teoría", short: "Teoría", icon: "book" },
    { id: "conceptos", label: "Conceptos clave", short: "Conceptos", icon: "layers" },
    { id: "practica", label: "Práctica", short: "Práctica", icon: "pencil" },
    { id: "autoeval", label: "Autoevaluación", short: "Autoeval.", icon: "target" },
    { id: "repaso", label: "Repaso", short: "Repaso", icon: "refresh" },
    { id: "fuentes", label: "Fuentes", short: "Fuentes", icon: "library" }
  ];

  const STORAGE_KEY = "tf-aula-v1";
  const UPDATED_KEY = "tf-aula-v1:updated";
  const THEME_KEY = "tf-theme";
  const REMOTE_KEY = "tf-aula-v1";
  const DEFAULT_STATE = {
    theme: "light",
    bannerDismissed: false,
    completed: {},
    mastered: {},
    quizBest: {},
    plan: {},
    practice: {},
    priorityOrder: []
  };

  /* ------------------------------ Estado ------------------------------ */

  let state = structuredClone(DEFAULT_STATE);
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    state = { ...state, ...saved };
  } catch (error) {
    /* Si el almacenamiento está roto, seguimos con los valores por defecto. */
  }
  state.completed = state.completed || {};
  state.mastered = state.mastered || {};
  state.quizBest = state.quizBest || {};
  state.plan = state.plan || {};
  state.practice = state.practice || {};
  state.priorityOrder = Array.isArray(state.priorityOrder) ? state.priorityOrder : [];

  let remoteReady = false;
  let remoteTimer = null;
  let lastLocalWrite = readLocalTimestamp();

  function readLocalTimestamp() {
    try {
      return Number(localStorage.getItem(UPDATED_KEY) || 0) || 0;
    } catch (error) {
      return 0;
    }
  }

  function normalizeState() {
    state.completed = state.completed || {};
    state.mastered = state.mastered || {};
    state.quizBest = state.quizBest || {};
    state.plan = state.plan || {};
    state.practice = state.practice || {};
    state.priorityOrder = Array.isArray(state.priorityOrder) ? state.priorityOrder : [];
    state.theme = state.theme === "dark" ? "dark" : "light";
  }

  function hasLocalProgress() {
    return Boolean(
      Object.keys(state.completed || {}).length ||
      Object.keys(state.mastered || {}).length ||
      Object.keys(state.quizBest || {}).length ||
      Object.keys(state.plan || {}).length ||
      Object.keys(state.practice || {}).some((key) => String(state.practice[key] || "").trim()) ||
      (state.priorityOrder || []).length
    );
  }

  function canOpenLocalFiles() {
    if (location.protocol === "file:") return true;
    const localHost = location.hostname === "localhost" || location.hostname === "127.0.0.1";
    // Los PDF viven en la carpeta del curso, un nivel arriba de «sitio/».
    return localHost && /\/sitio(\/|$)/.test(location.pathname);
  }

  function save() {
    const now = Date.now();
    lastLocalWrite = now;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      localStorage.setItem(UPDATED_KEY, String(now));
      localStorage.setItem(THEME_KEY, state.theme);
    } catch (error) {
      /* Modo privado o almacenamiento lleno: la app sigue funcionando. */
    }
    scheduleRemoteSave();
  }

  function scheduleRemoteSave() {
    if (!remoteReady || !window.storage) return;
    setSyncStatus("saving");
    window.clearTimeout(remoteTimer);
    remoteTimer = window.setTimeout(pushRemoteState, 800);
  }

  async function pushRemoteState() {
    if (!remoteReady || !window.storage) return;
    const updatedAt = lastLocalWrite || Date.now();
    try {
      await window.storage.set(REMOTE_KEY, JSON.stringify({ version: 1, updatedAt, state }));
      setSyncStatus("saved", updatedAt);
    } catch (error) {
      console.error("[sync] no se pudo guardar en Supabase:", error);
      setSyncStatus("local");
    }
  }

  async function hydrateRemoteState() {
    if (!window.storage || typeof window.storage.get !== "function" || !window.fukuro || !window.fukuro.ready) {
      setSyncStatus("local");
      return;
    }

    setSyncStatus("connecting");
    try {
      const user = await window.fukuro.ready;
      setAccount(user);

      const remote = await window.storage.get(REMOTE_KEY);
      let envelope = remote && remote.value;
      if (typeof envelope === "string") {
        try {
          envelope = JSON.parse(envelope);
        } catch (error) {
          envelope = null;
        }
      }
      const remoteState = envelope && envelope.state
        ? envelope.state
        : (envelope && envelope.completed ? envelope : null);
      const remoteUpdatedAt = Number(envelope && envelope.updatedAt) || 0;
      const localUpdatedAt = Number(lastLocalWrite) || 0;

      if (remoteState && (!hasLocalProgress() || remoteUpdatedAt > localUpdatedAt)) {
        const localTheme = state.theme;
        state = { ...structuredClone(DEFAULT_STATE), ...remoteState };
        normalizeState();
        state.theme = localTheme;
        const stamp = remoteUpdatedAt || Date.now();
        lastLocalWrite = stamp;
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
          localStorage.setItem(UPDATED_KEY, String(stamp));
        } catch (error) {}
        applyTheme();
        renderBanner();
        renderView({ preserveScroll: true });
        refreshProgressUI();
        remoteReady = true;
        setSyncStatus("saved", stamp);
        return;
      }

      remoteReady = true;
      if (hasLocalProgress() || !remoteState) {
        lastLocalWrite = Math.max(localUpdatedAt, Date.now());
        try { localStorage.setItem(UPDATED_KEY, String(lastLocalWrite)); } catch (error) {}
        await pushRemoteState();
      } else {
        setSyncStatus("saved", remoteUpdatedAt);
      }
    } catch (error) {
      console.error("[sync] no se pudo conectar con Supabase:", error);
      remoteReady = false;
      setSyncStatus("local");
    }
  }

  function setSyncStatus(mode, updatedAt) {
    const pill = document.getElementById("syncPill");
    const text = document.getElementById("syncText");
    if (!pill || !text) return;

    const labels = {
      connecting: "Conectando…",
      saving: "Guardando…",
      saved: "Sincronizado",
      local: "Solo este dispositivo"
    };
    pill.hidden = false;
    pill.dataset.state = mode;
    text.textContent = labels[mode] || "Sincronizado";

    if (mode === "saved" && updatedAt) {
      const time = new Date(updatedAt).toLocaleTimeString("es-AR", {
        hour: "2-digit",
        minute: "2-digit"
      });
      pill.title = `Guardado en tu cuenta · ${time}`;
    } else if (mode === "local") {
      pill.title = "Sin conexión con Supabase: el progreso queda guardado en este dispositivo.";
    } else {
      pill.title = "Progreso vinculado a tu cuenta de Fukuro.";
    }
  }

  function setAccount(user) {
    const button = document.getElementById("accountBtn");
    const email = document.getElementById("accountEmail");
    if (!button) return;
    if (!user) {
      button.hidden = true;
      return;
    }
    const mail = user.email || "";
    const initials = (mail.split("@")[0] || "TF")
      .replace(/[^a-zA-Z0-9]/g, "")
      .slice(0, 2)
      .toUpperCase() || "TF";
    button.hidden = false;
    button.textContent = initials;
    button.title = mail ? `Cuenta: ${mail}` : "Cuenta";
    button.setAttribute("aria-label", mail ? `Cuenta: ${mail}` : "Cuenta");
    if (email) email.textContent = mail;
  }

  /* ------------------------------ Utilidades ------------------------------ */

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  const esc = (value = "") =>
    String(value).replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[char]));

  const stripHTML = (html = "") =>
    html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

  const normalize = (value = "") =>
    String(value)
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

  const prefersReducedMotion = () =>
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function formatMinutes(total) {
    const hours = Math.floor(total / 60);
    const minutes = total % 60;
    if (!hours) return `${minutes} min`;
    if (!minutes) return `${hours} h`;
    return `${hours} h ${minutes} min`;
  }

  function readingMinutes(subunit) {
    const words = stripHTML(
      [subunit.theory.lead, ...subunit.theory.sections.map((section) => section.html)].join(" ")
    ).split(/\s+/).filter(Boolean).length;
    return Math.max(3, Math.round(words / 180));
  }

  /* ------------------------------ Iconos ------------------------------ */

  const ICONS = {
    book: '<path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>',
    layers: '<path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/>',
    pencil: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
    target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    refresh: '<path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/>',
    library: '<path d="m16 6 4 14"/><path d="M12 6v14"/><path d="M8 8v12"/><path d="M4 4v16"/>',
    check: '<path d="m20 6-11 11-5-5"/>',
    circle: '<circle cx="12" cy="12" r="9"/>',
    "arrow-right": '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
    "arrow-up": '<path d="m18 15-6-6-6 6"/>',
    "arrow-up-right": '<path d="M7 17 17 7"/><path d="M7 7h10v10"/>',
    "chevron-down": '<path d="m6 9 6 6 6-6"/>',
    lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.2-3.2"/>',
    close: '<path d="M18 6 6 18M6 6l12 12"/>',
    alert: '<path d="M12 9v4"/><path d="M12 17h.01"/><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/>',
    lightbulb: '<path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7c.6.4 1 1 1 1.8V18h6v-1.5c0-.8.4-1.4 1-1.8A7 7 0 0 0 12 2Z"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
    link: '<path d="M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1"/>',
    external: '<path d="M15 3h6v6"/><path d="m10 14 11-11"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
    copy: '<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M8 13h8"/><path d="M8 17h6"/>',
    presentation: '<path d="M2 3h20"/><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"/><path d="m7 21 5-5 5 5"/>',
    clipboard: '<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>',
    graduation: '<path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/>',
    flag: '<path d="M4 22V4"/><path d="M4 4c5-3 9 3 16 0v10c-7 3-11-3-16 0"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="m16 8-2.4 5.6L8 16l2.4-5.6Z"/>',
    sparkles: '<path d="m12 3 1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7Z"/><path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8Z"/>',
    calendar: '<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M8 2v4M16 2v4M3 10h18"/>',
    list: '<path d="M8 6h13M8 12h13M8 18h13"/><path d="M3 6h.01M3 12h.01M3 18h.01"/>',
    key: '<circle cx="7.5" cy="15.5" r="4.5"/><path d="m10.7 12.3 9.3-9.3"/><path d="m17 6 3 3"/><path d="m14 9 3 3"/>',
    play: '<path d="m8 5 11 7-11 7Z"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>'
  };

  function icon(name, className = "") {
    return `<svg class="${className ? `i ${className}` : "i"}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name] || ""}</svg>`;
  }

  const TYPE_ICON = {
    Libro: "book",
    Artículo: "file",
    Capítulo: "file",
    Clase: "presentation",
    Práctica: "clipboard",
    Tesis: "graduation"
  };

  /* ------------------------------ Progreso ------------------------------ */

  function isDone(subunitId, tabId) {
    return Boolean(state.completed[`${subunitId}:${tabId}`]);
  }

  function completedInSubunit(subunit) {
    return TABS.filter((tab) => isDone(subunit.id, tab.id)).length;
  }

  function subunitProgress(subunit) {
    return Math.round((completedInSubunit(subunit) / TABS.length) * 100);
  }

  function completedInUnit(unit) {
    return unit.subunits.reduce((total, subunit) => total + completedInSubunit(subunit), 0);
  }

  function unitProgress(unit) {
    const total = unit.subunits.length * TABS.length;
    return total ? Math.round((completedInUnit(unit) / total) * 100) : 0;
  }

  function isMastered(subunitId, conceptIndex) {
    return Boolean(state.mastered[`${subunitId}:${conceptIndex}`]);
  }

  function masteredCount(subunit) {
    return subunit.concepts.filter((_, index) => isMastered(subunit.id, index)).length;
  }

  function ringHTML(percent, options = {}) {
    const { size = "", label = "unidad" } = options;
    const circumference = 263.8938;
    const offset = circumference * (1 - percent / 100);
    return `<div class="ring ${size}">
      <svg viewBox="0 0 100 100" aria-hidden="true">
        <circle class="ring__track" cx="50" cy="50" r="42"></circle>
        <circle class="ring__bar" cx="50" cy="50" r="42" stroke-dasharray="${circumference}" stroke-dashoffset="${offset}"></circle>
      </svg>
      <div class="ring__value"><strong>${percent}%</strong><span>${label}</span></div>
    </div>`;
  }

  function setRing(container, percent) {
    if (!container) return;
    const circumference = 263.8938;
    const bar = $(".ring__bar", container);
    const value = $(".ring__value strong", container);
    if (bar) bar.style.strokeDashoffset = String(circumference * (1 - percent / 100));
    if (value) value.textContent = `${percent}%`;
  }

  function refreshProgressUI() {
    if (!currentRoute || currentRoute.mode !== "unit") return;
    const { unit, subunit } = currentRoute;

    setRing($("[data-hero-ring]"), unitProgress(unit));
    const heroCount = $("[data-hero-count]");
    if (heroCount) heroCount.textContent = `${completedInUnit(unit)} de ${unit.subunits.length * TABS.length} secciones`;

    unit.subunits.forEach((item) => {
      const tab = $(`.subunit-tab[data-subunit-tab="${item.id}"]`);
      if (!tab) return;
      const percent = subunitProgress(item);
      const meta = $(".subunit-tab__meta", tab);
      if (meta) {
        meta.innerHTML = percent === 100 ? `${icon("check")} ${completedInSubunit(item)}/6` : `${completedInSubunit(item)}/6`;
        meta.title = `${completedInSubunit(item)} de 6 secciones estudiadas`;
      }
      tab.classList.toggle("is-active", item.id === subunit.id);
    });

    TABS.forEach((tab) => {
      const link = $(`.content-tab[data-tab="${tab.id}"]`);
      if (link) link.classList.toggle("is-done", isDone(subunit.id, tab.id));
    });

    setRing($("[data-rail-ring]"), subunitProgress(subunit));
    const railCount = $("[data-rail-count]");
    if (railCount) railCount.textContent = `${completedInSubunit(subunit)}/6 secciones`;
    $$("[data-rail-tab]").forEach((button) => {
      const item = button.closest("li");
      if (item) item.classList.toggle("is-done", isDone(subunit.id, button.dataset.railTab));
    });
  }

  /* ------------------------------ Rutas ------------------------------ */

  let currentRoute = null;
  let pendingAction = null;
  const lastVisited = {};
  let conceptFilters = {};
  const quizRuntime = {};
  let openConceptRef = null;

  function routeKey(route) {
    return `${route.unit.id}/${route.subunit ? route.subunit.id : ""}/${route.tab || ""}`;
  }

  function resolveRoute() {
    const parts = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
    let unit = UNITS.find((item) => item.id === parts[0]);
    if (!unit) unit = U5;

    if (unit.id === "u5" || (unit.id === "u6" && parts.length >= 2)) {
      const subunit = unit.subunits.find((item) => item.id === parts[1]) || unit.subunits[0];
      const tab = TABS.some((item) => item.id === parts[2]) ? parts[2] : "teoria";
      return { unit, subunit, tab, mode: "unit" };
    }

    return {
      unit,
      mode: unit.id === "u6" ? "roadmap" : "locked"
    };
  }

  function navigate(hash, pending = null) {
    pendingAction = pending;
    if (location.hash === hash) {
      renderView();
      runPending();
    } else {
      location.hash = hash;
    }
  }

  function runPending() {
    if (!pendingAction) return;
    const action = pendingAction;
    pendingAction = null;
    window.setTimeout(() => {
      if (action.type === "concept") {
        const subunit = findSubunit(action.subunit);
        if (subunit) openConcept(subunit, action.index);
      }
      if (action.type === "scroll") {
        const target = document.getElementById(action.target);
        if (target) scrollToElement(target, 155);
      }
    }, 0);
  }

  function scrollToElement(element, offset = 130) {
    if (!element) return;
    const top = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({
      top: Math.max(0, top),
      behavior: prefersReducedMotion() ? "auto" : "smooth"
    });
  }

  /* ------------------------------ Render general ------------------------------ */

  function applyTheme() {
    document.documentElement.dataset.theme = state.theme === "dark" ? "dark" : "light";
    try {
      localStorage.setItem(THEME_KEY, state.theme === "dark" ? "dark" : "light");
    } catch (error) {
      /* Sin almacenamiento local: el tema igual se aplica en esta visita. */
    }
  }

  function renderBanner() {
    const container = document.getElementById("mockBanner");
    if (!container) return;
    if (state.bannerDismissed) {
      container.innerHTML = "";
      return;
    }
    container.innerHTML = `
      <div class="mock-banner">
        <div class="mock-banner__inner">
          <span class="mock-banner__dot"></span>
          <p><strong>Versión de estudio.</strong> Las unidades 05 y 06 ya están desarrolladas: teoría extensa, fichas de conceptos, prácticas, autoevaluación, repaso y fuentes. Navegá las subunidades, abrí las fichas, resolvé el quiz y cambiá el tema.</p>
          <button class="mock-banner__close" type="button" data-action="dismiss-banner">Entendido</button>
        </div>
      </div>`;
  }

  function renderUnitTabs() {
    const container = document.getElementById("unitTabs");
    if (!container) return;
    const currentId = currentRoute ? currentRoute.unit.id : null;
    container.innerHTML = `
      <div class="unit-tabs__inner" role="tablist" aria-label="Unidades de la materia">
        ${UNITS.map((unit) => {
          const isCurrent = unit.id === currentId;
          const locked = unit.status === "locked";
          return `<button class="unit-tab ${locked ? "is-locked" : ""}" type="button" role="tab"
              aria-selected="${isCurrent}" data-action="unit-go" data-unit="${unit.id}">
            <span class="unit-tab__num">${unit.num}</span>
            <span>${esc(unit.short)}</span>
            ${locked ? icon("lock", "unit-tab__lock") : ""}
            ${unit.status === "next" ? '<span class="unit-tab__soon" title="Próxima unidad"></span>' : ""}
          </button>`;
        }).join("")}
      </div>`;
    const active = $('[aria-selected="true"]', container);
    if (active) {
      requestAnimationFrame(() => {
        const inner = $(".unit-tabs__inner", container);
        if (!inner) return;
        const targetLeft = active.offsetLeft - 18;
        inner.scrollTo({ left: Math.max(0, targetLeft), behavior: "auto" });
      });
    }
  }

  function emphasizedTitle(unit) {
    const words = { u5: "evolución", u6: "innovación" };
    const word = words[unit.id];
    const title = esc(unit.title);
    return word ? title.replace(word, `<em>${word}</em>`) : title;
  }

  function heroHTML(unit) {
    const percent = unitProgress(unit);
    const minutes = unit.subunits.reduce((total, subunit) => total + subunit.minutes, 0);
    const sources = unit.sourceCount || unit.subunits.reduce((total, subunit) => total + subunit.sourceCount, 0);
    return `
      <section class="hero" data-num="${unit.num}">
        <div class="hero__main">
          <p class="eyebrow">Unidad ${unit.num} · ${unit.subunits.length} subunidades</p>
          <h1>${emphasizedTitle(unit)}</h1>
          <p class="hero__lead">${esc(unit.subtitle)}</p>
          <div class="hero__meta">
            <span>${icon("layers")} ${unit.subunits.length} subunidades</span>
            <span class="dot"></span>
            <span>${icon("library")} ${sources} fuentes</span>
            <span class="dot"></span>
            <span>${icon("clock")} ~${formatMinutes(minutes)} de estudio</span>
          </div>
          ${unit.id === "u6" ? `<a class="hero__map-link" href="#/u6">${icon("compass")} Ver mapa de la unidad</a>` : ""}
        </div>
        <div class="hero__side">
          <div data-hero-ring>${ringHTML(percent, { label: "unidad" })}</div>
          <span class="hero__progress-label">Progreso</span>
          <span class="hero__progress-sub" data-hero-count>${completedInUnit(unit)} de ${unit.subunits.length * TABS.length} secciones</span>
        </div>
      </section>`;
  }

  function subunitTabsHTML(unit, activeSubunit, activeTab) {
    return `
      <section class="subunit-tabs-wrap" aria-label="Subunidades de la Unidad ${unit.num}">
        <p class="subunit-tabs__label">Subunidades</p>
        <div class="subunit-tabs" role="tablist" aria-label="Subunidades de la Unidad ${unit.num}">
          ${unit.subunits.map((subunit) => {
            const active = subunit.id === activeSubunit.id;
            const percent = subunitProgress(subunit);
            return `<a class="subunit-tab ${active ? "is-active" : ""}" role="tab" aria-selected="${active}"
              href="#/${unit.id}/${subunit.id}/${activeTab}" data-subunit-tab="${subunit.id}">
              <span class="subunit-tab__code">${subunit.code}</span>
              <span class="subunit-tab__title" title="${esc(subunit.title)}">${esc(subunit.title)}</span>
              <span class="subunit-tab__meta" title="${completedInSubunit(subunit)} de 6 secciones estudiadas">${percent === 100 ? `${icon("check")} ${completedInSubunit(subunit)}/6` : `${completedInSubunit(subunit)}/6`}</span>
            </a>`;
          }).join("")}
        </div>
      </section>`;
  }

  function contentTabsHTML(unit, subunit, activeTab) {
    return TABS.map((tab) => {
      const done = isDone(subunit.id, tab.id);
      let count = "";
      if (tab.id === "conceptos") count = subunit.concepts.length;
      if (tab.id === "autoeval") count = subunit.quiz.questions.length;
      if (tab.id === "fuentes") count = subunit.sources.length;
      return `<a class="content-tab ${done ? "is-done" : ""}" role="tab" aria-selected="${tab.id === activeTab}"
        aria-controls="panel-${tab.id}" data-tab="${tab.id}" href="#/${unit.id}/${subunit.id}/${tab.id}">
        ${icon(tab.icon)}
        <span>${tab.label}</span>
        ${icon("check", "content-tab__check")}
        ${count !== "" ? `<span class="content-tab__count">${count}</span>` : ""}
      </a>`;
    }).join("");
  }

  function nextDestination(unit, subunit, tab) {
    const index = TABS.findIndex((item) => item.id === tab);
    if (index < TABS.length - 1) {
      return {
        label: TABS[index + 1].label,
        href: `#/${unit.id}/${subunit.id}/${TABS[index + 1].id}`
      };
    }
    const subunitIndex = unit.subunits.findIndex((item) => item.id === subunit.id);
    const nextSubunit = unit.subunits[subunitIndex + 1];
    if (nextSubunit) {
      return {
        label: `${nextSubunit.code} · ${nextSubunit.title}`,
        href: `#/${unit.id}/${nextSubunit.id}/teoria`
      };
    }
    if (unit.id === "u5") {
      return {
        label: "Unidad 06 · CGV e innovación",
        href: "#/u6"
      };
    }
    return {
      label: `Mapa de la Unidad ${unit.num}`,
      href: `#/${unit.id}`
    };
  }

  function railHTML(unit, subunit, activeTab) {
    const toc = activeTab === "teoria"
      ? `<div class="rail-card">
          <p class="rail-card__label">En esta página ${icon("list")}</p>
          <ul class="rail-toc">
            ${subunit.theory.sections.map((section) => `<li><button type="button" data-action="scroll-to" data-target="${section.id}">${esc(section.title)}</button></li>`).join("")}
          </ul>
        </div>`
      : "";

    const next = nextDestination(unit, subunit, activeTab);
    const keySources = subunit.sources.slice(0, 3);

    return `
      <aside class="rail" aria-label="Progreso y atajos de la subunidad">
        <div class="rail-card">
          <p class="rail-card__label">Subunidad ${icon("layers")}</p>
          <div class="rail-subunit-switch">
            ${unit.subunits.map((item) => `<a class="rail-subunit-btn ${item.id === subunit.id ? "is-active" : ""}"
              href="#/${unit.id}/${item.id}/${activeTab}" title="${esc(item.title)}" aria-label="${item.code} · ${esc(item.title)}">${item.code}</a>`).join("")}
          </div>
          <a class="rail-map-link" href="#/${unit.id}">${icon("compass")} Mapa de la unidad</a>
        </div>
        ${toc}
        <div class="rail-card">
          <p class="rail-card__label">Tu progreso ${icon("compass")}</p>
          <div class="rail-progress-top">
            <div data-rail-ring>${ringHTML(subunitProgress(subunit), { size: "ring--sm" })}</div>
            <div>
              <strong data-rail-count>${completedInSubunit(subunit)}/6 secciones</strong>
              <span>${subunitProgress(subunit) === 100 ? "Subunidad completa" : "En curso"}</span>
            </div>
          </div>
          <ul class="rail-list">
            ${TABS.map((tab) => `<li class="${isDone(subunit.id, tab.id) ? "is-done" : ""} ${tab.id === activeTab ? "is-active" : ""}">
              <button type="button" data-action="go" data-rail-tab="${tab.id}" data-route="#/${unit.id}/${subunit.id}/${tab.id}">
                <span class="rail-dot">${icon("check")}</span>
                <span>${tab.short}</span>
                <span class="rail-count">${tab.id === "conceptos" ? subunit.concepts.length : tab.id === "autoeval" ? subunit.quiz.questions.length : ""}</span>
              </button>
            </li>`).join("")}
          </ul>
        </div>
        <div class="rail-card">
          <p class="rail-card__label">Fuentes clave ${icon("library")}</p>
          <ul class="rail-sources">
            ${keySources.map((source) => `<li><strong>${esc(source.author)} (${esc(source.year)})</strong><span>${esc(source.title)}</span></li>`).join("")}
          </ul>
        </div>
        <div class="rail-card rail-next">
          <div class="rail-next__text">
            <span>Siguiente</span>
            <strong>${esc(next.label)}</strong>
          </div>
          <button class="icon-btn" type="button" data-action="go" data-route="${next.href}" aria-label="Ir a ${esc(next.label)}">${icon("arrow-right")}</button>
        </div>
      </aside>`;
  }

  function unitViewHTML(unit, subunit, activeTab) {
    return `
      ${heroHTML(unit)}
      ${subunitTabsHTML(unit, subunit, activeTab)}
      <div class="workspace">
        <div class="workspace__main">
          <div class="content-tabs-wrap">
            <div class="content-tabs" role="tablist" aria-label="Secciones de la subunidad ${subunit.code}">
              ${contentTabsHTML(unit, subunit, activeTab)}
            </div>
          </div>
          <section class="panel" role="tabpanel" id="panel-${activeTab}" aria-label="${esc(TABS.find((tab) => tab.id === activeTab)?.label || "")}">
            ${panelHTML(subunit, activeTab)}
          </section>
        </div>
        ${railHTML(unit, subunit, activeTab)}
      </div>`;
  }

  /* ------------------------------ Paneles ------------------------------ */

  function unitPath(subunitId, tabId) {
    const unitId = currentRoute && currentRoute.unit ? currentRoute.unit.id : "u5";
    return `#/${unitId}/${subunitId}/${tabId}`;
  }

  function panelHead(kicker, countLabel, title, subtitle, meta) {
    return `
      <header class="panel__head">
        <div class="panel__kicker">${kicker}${countLabel ? `<span>${countLabel}</span>` : ""}</div>
        <h2>${title}</h2>
        <p class="panel__sub">${subtitle}</p>
        <div class="panel__meta">${meta}</div>
      </header>`;
  }

  function doneHTML(subunit, tabId) {
    const done = isDone(subunit.id, tabId);
    return `
      <div class="section-done ${done ? "is-done" : ""}" data-done-wrap>
        <div class="section-done__text">
          <strong>${done ? "Sección estudiada" : "¿Terminaste esta sección?"}</strong>
          <span>${done ? "Quedó marcada en tu progreso." : "Marcala para llevar tu avance de la unidad."}</span>
        </div>
        <button class="btn ${done ? "is-done" : "btn--primary"}" type="button"
          data-action="toggle-done" data-subunit="${subunit.id}" data-tab="${tabId}">
          ${icon(done ? "check" : "circle")} ${done ? "Estudiada" : "Marcar como estudiada"}
        </button>
      </div>`;
  }

  function panelHTML(subunit, tabId) {
    switch (tabId) {
      case "teoria": return theoryPanel(subunit);
      case "conceptos": return conceptsPanel(subunit);
      case "practica": return practicePanel(subunit);
      case "autoeval": return quizPanel(subunit);
      case "repaso": return reviewPanel(subunit);
      case "fuentes": return sourcesPanel(subunit);
      default: return theoryPanel(subunit);
    }
  }

  function theoryPanel(subunit) {
    const theory = subunit.theory;
    const minutes = readingMinutes(subunit);
    return `
      ${panelHead(
        `${subunit.code} · Teoría`,
        `${theory.sections.length} secciones`,
        esc(theory.title),
        esc(subunit.tagline),
        `<span>${icon("clock")} ${minutes} min de lectura</span><span class="dot"></span><span>${icon("layers")} ${theory.sections.length} secciones</span><span class="dot"></span><span>${icon("library")} ${theory.sources.length} fuentes citadas</span>`
      )}
      <p class="theory-lead">${theory.lead}</p>
      <div class="theory-keyidea">
        <span class="theory-keyidea__icon">${icon("sparkles")}</span>
        <div>
          <p class="theory-keyidea__label">La idea que sostiene todo</p>
          <p>${theory.keyIdea}</p>
          <p class="note" style="margin-top:6px;font-size:10.5px">${esc(theory.keyIdeaSource)}</p>
        </div>
      </div>
      ${theory.sections.map((section, index) => `
        <article class="theory-block" id="${section.id}">
          <p class="theory-block__num">${String(index + 1).padStart(2, "0")}</p>
          <h3>${esc(section.title)}</h3>
          <div class="prose">${section.html}</div>
        </article>`).join("")}
      ${theory.flow ? flowHTML(theory.flow) : ""}
      ${theory.table ? tableHTML(theory.table) : ""}
      <div class="callout callout--trap">
        <span class="callout__icon">${icon("alert")}</span>
        <div>
          <p class="callout__label">${esc(theory.trap.title)}</p>
          <p>${theory.trap.text}</p>
        </div>
      </div>
      <div class="callout callout--teach">
        <span class="callout__icon">${icon("lightbulb")}</span>
        <div>
          <p class="callout__label">${esc(theory.teach.title)}</p>
          <p>${theory.teach.text}</p>
        </div>
      </div>
      <div class="theory-sources">
        <span class="theory-sources__label">Fuentes de esta sección</span>
        ${theory.sources.map((source) => `<a class="source-chip" href="${unitPath(subunit.id, "fuentes")}">${icon("book")}${esc(source)}</a>`).join("")}
      </div>
      ${doneHTML(subunit, "teoria")}`;
  }

  function flowHTML(flow) {
    return `
      <div class="flow">
        <p class="flow__label">${esc(flow.label)}</p>
        <div class="flow__row">
          ${flow.nodes.map((node, index) => `
            ${index ? `<span class="flow__arrow">${icon("arrow-right")}</span>` : ""}
            <div class="flow__node">
              <span class="flow__num">${String(index + 1).padStart(2, "0")}</span>
              <h4>${esc(node.title)}</h4>
              <p>${esc(node.sub)}</p>
            </div>`).join("")}
        </div>
        <p class="flow__note">${esc(flow.note)}</p>
      </div>`;
  }

  function tableHTML(table) {
    return `
      <div class="review-block" style="margin-top:30px">
        <div class="review-block__head"><h3>${esc(table.title)}</h3><span>Cuadro comparativo</span></div>
        <table class="error-table compare-table">
          <thead><tr>${table.headers.map((header) => `<th>${esc(header)}</th>`).join("")}</tr></thead>
          <tbody>${table.rows.map((row) => `<tr>${row.map((cell, index) => `<td data-label="${esc(table.headers[index])}">${esc(cell)}</td>`).join("")}</tr>`).join("")}</tbody>
        </table>
      </div>`;
  }

  function conceptsPanel(subunit) {
    const mastered = masteredCount(subunit);
    const activeFilter = conceptFilters[subunit.id] || "all";
    return `
      ${panelHead(
        `${subunit.code} · Conceptos clave`,
        `${subunit.concepts.length} fichas`,
        `${subunit.concepts.length} ideas que sostienen el tema`,
        "Abrí cada ficha para ver la explicación, las conexiones, las fuentes, el error típico y un ejemplo.",
        `<span>${icon("target")} <span data-concept-count><strong>${mastered}</strong> de ${subunit.concepts.length} dominados</span></span><span class="dot"></span><span>${icon("clock")} ≈ ${Math.max(8, Math.round(subunit.minutes / 3))} min</span>`
      )}
      <div class="concept-toolbar">
        <button class="filter-chip ${activeFilter === "all" ? "is-active" : ""}" type="button" data-action="filter-concepts" data-filter="all">Todos</button>
        <button class="filter-chip ${activeFilter === "pending" ? "is-active" : ""}" type="button" data-action="filter-concepts" data-filter="pending">Para repasar</button>
        <button class="filter-chip ${activeFilter === "mastered" ? "is-active" : ""}" type="button" data-action="filter-concepts" data-filter="mastered">Dominados</button>
        <span class="concept-toolbar__count">Tocá una ficha para abrirla</span>
      </div>
      <div class="concept-grid" data-concept-grid>
        ${subunit.concepts.map((concept, index) => conceptCardHTML(subunit, concept, index)).join("")}
      </div>
      <p class="concept-empty" hidden>No hay conceptos en esta categoría todavía.</p>
      ${doneHTML(subunit, "conceptos")}`;
  }

  function conceptCardHTML(subunit, concept, index) {
    const mastered = isMastered(subunit.id, index);
    return `
      <button class="concept-card ${mastered ? "is-mastered" : ""}" type="button"
        data-action="open-concept" data-subunit="${subunit.id}" data-concept="${index}"
        aria-label="Abrir ficha del concepto ${esc(concept.term)}">
        <span class="concept-card__top">
          <span class="concept-card__num">${String(index + 1).padStart(2, "0")}</span>
          ${mastered ? `<span class="concept-card__mastered">${icon("check")} Dominado</span>` : ""}
        </span>
        <span class="concept-card__title">${esc(concept.term)}</span>
        <span class="concept-card__short">${esc(concept.short)}</span>
        <span class="concept-card__foot">
          <span class="concept-card__tags">${concept.tags.slice(0, 2).map((tag) => `<span class="concept-card__tag">${esc(tag)}</span>`).join("")}</span>
          <span class="concept-card__open">Ver ficha ${icon("arrow-right")}</span>
        </span>
      </button>`;
  }

  function practicePanel(subunit) {
    const practice = subunit.practice;
    return `
      ${panelHead(
        `${subunit.code} · Práctica`,
        `${practice.steps.length} pasos`,
        esc(practice.title),
        "Aplicá la teoría a un caso concreto. Escribí tu respuesta antes de revelar la guía.",
        `<span>${icon("pencil")} Caso aplicado</span><span class="dot"></span><span>${icon("key")} Respuestas orientativas</span>`
      )}
      <div class="case">
        <p class="case__label">${icon("pencil")} ${esc(practice.label)}</p>
        <h3>${esc(practice.caseTitle)}</h3>
        <div class="case__body">${practice.caseHtml}</div>
      </div>
      <div class="practice-steps">
        ${practice.steps.map((step, index) => {
          const key = `${subunit.id}:practica:${index}`;
          const hintId = `hint-${subunit.id}-${index}`;
          const answerId = `answer-${subunit.id}-${index}`;
          return `<article class="practice-step">
            <div class="practice-step__top">
              <span class="practice-step__num">${index + 1}</span>
              <h4>${esc(step.q)}</h4>
            </div>
            <div class="practice-step__body">
              <textarea data-practice-key="${key}" placeholder="Escribí tu respuesta acá. Se guarda en este navegador.">${esc(state.practice[key] || "")}</textarea>
              <div class="practice-step__actions">
                <button class="btn btn--sm btn--ghost" type="button" data-action="toggle-reveal" data-target="${hintId}" aria-expanded="false">${icon("lightbulb")} Pista</button>
                <button class="btn btn--sm" type="button" data-action="toggle-reveal" data-target="${answerId}" aria-expanded="false">${icon("key")} Ver respuesta orientativa</button>
                <span class="practice-step__saved">Guardado</span>
              </div>
              <div class="reveal reveal--hint" id="${hintId}" hidden>
                <p class="reveal__label">Pista</p>
                <p>${esc(step.hint)}</p>
              </div>
              <div class="reveal" id="${answerId}" hidden>
                <p class="reveal__label">Respuesta orientativa</p>
                <p>${esc(step.answer)}</p>
              </div>
            </div>
          </article>`;
        }).join("")}
      </div>
      <div class="callout callout--info" style="margin-top:22px">
        <span class="callout__icon">${icon("info")}</span>
        <div>
          <p class="callout__label">Para cerrar</p>
          <p>${esc(practice.closing)}</p>
        </div>
      </div>
      ${doneHTML(subunit, "practica")}`;
  }

  /* ------------------------------ Quiz ------------------------------ */

  function ensureQuiz(subunit) {
    if (!quizRuntime[subunit.id]) {
      quizRuntime[subunit.id] = {
        index: 0,
        selected: null,
        checked: false,
        answers: [],
        correct: 0,
        finished: false
      };
    }
    return quizRuntime[subunit.id];
  }

  function quizPanel(subunit) {
    return `
      ${panelHead(
        `${subunit.code} · Autoevaluación`,
        `${subunit.quiz.questions.length} preguntas`,
        "¿Podés usarlo, no solo reconocerlo?",
        "Cuatro preguntas interactivas para chequear la aplicación y tres preguntas abiertas para razonar.",
        `<span>${icon("target")} ${subunit.quiz.questions.length} multiple choice</span><span class="dot"></span><span>${icon("lightbulb")} ${subunit.quiz.open.length} abiertas</span>`
      )}
      <div id="quizMount">${quizShellHTML(subunit)}</div>
      ${openQuestionsHTML(subunit)}
      ${doneHTML(subunit, "autoeval")}`;
  }

  function quizShellHTML(subunit) {
    const runtime = ensureQuiz(subunit);
    if (runtime.finished) return quizResultHTML(subunit, runtime);
    return quizQuestionHTML(subunit, runtime);
  }

  function quizQuestionHTML(subunit, runtime) {
    const questions = subunit.quiz.questions;
    const question = questions[runtime.index];
    const letters = ["A", "B", "C", "D", "E"];
    const isLast = runtime.index === questions.length - 1;

    const options = question.options.map((option, index) => {
      let className = "";
      if (runtime.checked) {
        if (index === question.correct) className = "is-correct";
        else if (index === runtime.selected) className = "is-wrong";
      } else if (index === runtime.selected) {
        className = "is-selected";
      }
      return `<button class="quiz-option ${className}" type="button" data-action="quiz-select" data-option="${index}" ${runtime.checked ? "disabled" : ""}>
        <span class="quiz-option__letter">${letters[index]}</span>
        <span>${esc(option)}</span>
      </button>`;
    }).join("");

    const dots = questions.map((_, index) => {
      let className = "";
      if (index === runtime.index) className = "is-current";
      if (runtime.answers[index] === true) className = "is-correct";
      if (runtime.answers[index] === false) className = "is-wrong";
      return `<span class="quiz__dot ${className}"></span>`;
    }).join("");

    let feedback = "";
    if (runtime.checked) {
      const ok = runtime.selected === question.correct;
      feedback = `<div class="quiz-feedback quiz-feedback--${ok ? "ok" : "bad"}">
        <span class="quiz-feedback__icon">${icon(ok ? "check" : "x")}</span>
        <div>
          <strong>${ok ? "Correcto" : "No es la opción correcta"}</strong>
          <p>${question.explain}</p>
        </div>
      </div>`;
    }

    return `
      <div class="quiz">
        <div class="quiz__top">
          <div class="quiz__dots">${dots}</div>
          <span class="quiz__counter">${runtime.index + 1} / ${questions.length}</span>
        </div>
        <div class="quiz__body">
          <span class="quiz__level">${esc(question.level)}</span>
          <h3 class="quiz__question">${esc(question.q)}</h3>
          <div class="quiz__options">${options}</div>
          <div id="quizFeedback">${feedback}</div>
        </div>
        <div class="quiz__foot">
          <span>${runtime.checked ? (runtime.selected === question.correct ? "Bien. Pasá a la siguiente." : "Leé la explicación y seguí.") : runtime.selected === null ? "Elegí una opción" : "Listo para comprobar"}</span>
          <div class="quiz__foot-actions">
            <button class="btn btn--ghost btn--sm" type="button" data-action="quiz-reset">Reiniciar</button>
            ${runtime.checked
              ? `<button class="btn btn--primary btn--sm" type="button" data-action="quiz-next">${isLast ? "Ver resultado" : "Siguiente"} ${icon("arrow-right")}</button>`
              : `<button class="btn btn--primary btn--sm" id="quizCheck" type="button" data-action="quiz-check" ${runtime.selected === null ? "disabled" : ""}>Comprobar</button>`}
          </div>
        </div>
      </div>`;
  }

  function quizResultHTML(subunit, runtime) {
    const total = subunit.quiz.questions.length;
    const percent = Math.round((runtime.correct / total) * 100);
    const best = state.quizBest[subunit.id] || 0;
    let message = "Volvé a la teoría y a los conceptos antes de reintentar.";
    if (percent === 100) message = "Lo tenés claro. Podrías explicarlo sin mirar.";
    else if (percent >= 75) message = "Buen dominio. Revisá las preguntas que fallaste.";
    else if (percent >= 50) message = "Vas bien; todavía falta consolidar un par de ideas.";
    return `
      <div class="quiz">
        <div class="quiz-result">
          ${ringHTML(percent, { label: "logrado" })}
          <h3>${percent === 100 ? "Impecable" : percent >= 50 ? "Buen trabajo" : "A repasar"}</h3>
          <p>${message} Acertaste ${runtime.correct} de ${total}.</p>
          <div class="quiz-result__actions">
            <button class="btn btn--primary" type="button" data-action="quiz-retry">${icon("refresh")} Reintentar</button>
            <a class="btn" href="${unitPath(subunit.id, "repaso")}">Ir al kit de repaso ${icon("arrow-right")}</a>
          </div>
          ${best ? `<span class="quiz-result__best">Mejor resultado guardado: ${best}%</span>` : ""}
        </div>
      </div>`;
  }

  function openQuestionsHTML(subunit) {
    return `
      <section class="open-questions">
        <div class="open-questions__head">
          <h3>Preguntas de razonamiento</h3>
          <p>No tienen una única respuesta. Usá la guía para autoevaluarte.</p>
        </div>
        ${subunit.quiz.open.map((question, index) => `
          <details class="open-question">
            <summary>
              <span class="open-question__num">${index + 1}</span>
              <span>${esc(question.q)}</span>
              ${icon("chevron-down", "open-question__chev")}
            </summary>
            <div class="open-question__body">
              <span class="open-question__level">${esc(question.level)}</span>
              <p>${esc(question.guide)}</p>
            </div>
          </details>`).join("")}
      </section>`;
  }

  function refreshQuiz(subunit) {
    const mount = $("#quizMount");
    if (mount) mount.innerHTML = quizShellHTML(subunit);
  }

  function finishQuiz(subunit) {
    const runtime = ensureQuiz(subunit);
    runtime.finished = true;
    const total = subunit.quiz.questions.length;
    const percent = Math.round((runtime.correct / total) * 100);
    state.quizBest[subunit.id] = Math.max(state.quizBest[subunit.id] || 0, percent);
    save();
    refreshQuiz(subunit);
    refreshProgressUI();
  }

  /* ------------------------------ Repaso ------------------------------ */

  function reviewPanel(subunit) {
    const review = subunit.review;
    return `
      ${panelHead(
        `${subunit.code} · Repaso`,
        "Kit de consolidación",
        "El kit de repaso",
        "Una página de ideas clave, los errores típicos, flashcards y un plan de siete días.",
        `<span>${icon("refresh")} 7 días</span><span class="dot"></span><span>${icon("layers")} ${review.cards.length} flashcards</span>`
      )}
      <div class="review-stats">
        ${review.stats.map((stat) => `<div class="review-stat"><strong>${esc(stat.value)}</strong><span>${esc(stat.label)}</span></div>`).join("")}
      </div>

      <section class="review-block">
        <div class="review-block__head"><h3>La subunidad en una página</h3><span>Leé esto si tenés 5 minutos</span></div>
        <div class="review-onepage">
          <ol>
            ${review.summary.map((item) => `<li><strong>${esc(item.lead)}</strong> ${esc(item.text)}</li>`).join("")}
          </ol>
        </div>
      </section>

      <section class="review-block">
        <div class="review-block__head"><h3>Errores típicos y cómo corregirlos</h3><span>Revisalos antes del parcial</span></div>
        <table class="error-table">
          <thead><tr><th>Error típico</th><th>Cómo corregirlo</th></tr></thead>
          <tbody>${review.errors.map((item) => `<tr><td>${esc(item.error)}</td><td>${esc(item.fix)}</td></tr>`).join("")}</tbody>
        </table>
      </section>

      <section class="review-block">
        <div class="review-block__head"><h3>Flashcards</h3><span>Tocá para girar</span></div>
        <div class="flashcards">
          ${review.cards.map((card) => `<button class="flashcard" type="button" data-action="flip-card" aria-pressed="false">
            <span class="flashcard__inner">
              <span class="flashcard__face">
                <span class="flashcard__label">Pregunta</span>
                <strong>${esc(card.front)}</strong>
                <span class="flashcard__flip">Tocá para girar</span>
              </span>
              <span class="flashcard__face flashcard__face--back">
                <span class="flashcard__label">Respuesta</span>
                <span class="flashcard__back">${esc(card.back)}</span>
                <span class="flashcard__flip">Volver</span>
              </span>
            </span>
          </button>`).join("")}
        </div>
      </section>

      <section class="review-block">
        <div class="review-block__head"><h3>Plan de repaso de 7 días</h3><span>Marcá lo que ya hiciste</span></div>
        <div class="plan">
          ${review.plan.map((day, index) => {
            const key = `${subunit.id}:plan:${index}`;
            const checked = Boolean(state.plan[key]);
            return `<label class="plan-day ${checked ? "is-done" : ""}">
              <span class="plan-check">
                <input type="checkbox" data-plan-key="${key}" ${checked ? "checked" : ""}>
                <span>${icon("check")}</span>
              </span>
              <span class="plan-day__body"><strong>${esc(day.task)}</strong><span>${esc(day.day)}</span></span>
              <span class="plan-day__time">${esc(day.min)}</span>
            </label>`;
          }).join("")}
        </div>
      </section>

      <section class="review-block">
        <div class="review-block__head"><h3>Si te trabás</h3><span>Fuentes concretas, sin releer todo</span></div>
        <details class="session">
          <summary>${icon("play")} Sesión de 90 minutos <span>${review.session.length} bloques</span></summary>
          <div class="session__body">
            ${review.session.map((block) => `<div class="session-block">
              <span class="session-block__time">${esc(block.time)} min</span>
              <div><strong>${esc(block.title)}</strong><p>${esc(block.text)}</p></div>
            </div>`).join("")}
          </div>
        </details>
        <div class="stuck-list" style="margin-top:12px">
          ${review.stuck.map((item) => `<div class="stuck-item">${icon("lightbulb")}<div><strong>${esc(item.title)}</strong><span>${esc(item.source)}</span></div></div>`).join("")}
        </div>
      </section>
      ${doneHTML(subunit, "repaso")}`;
  }

  /* ------------------------------ Fuentes ------------------------------ */

  function sourcesPanel(subunit) {
    const baseCount = subunit.sources.filter((source) => source.priority === "base").length;
    const localFiles = canOpenLocalFiles();
    return `
      ${panelHead(
        `${subunit.code} · Fuentes`,
        `${subunit.sources.length} fuentes`,
        "De dónde sale todo esto",
        "Cada afirmación de la subunidad se puede rastrear a una fuente. Las de base son las que conviene leer primero.",
        `<span>${icon("library")} ${baseCount} fuentes base</span><span class="dot"></span><span>${icon("file")} PDF y material de clase</span>`
      )}
      <div class="sources-intro">
        <strong>Cómo leer esta lista:</strong> «Base» es lectura obligatoria para entender el tema; «Ampliatoria» profundiza o conecta con otras unidades; «Guía» es el material de clase. Si tenés poco tiempo, empezá por las de base y usá las demás para resolver dudas puntuales. ${localFiles ? "Los botones «Abrir PDF» apuntan a los archivos originales de la carpeta del curso." : "Esta versión del sitio no incluye los PDF: quedan como referencia para que cada estudiante use su propia copia."}
      </div>
      <div class="source-list">
        ${subunit.sources.map((source, index) => sourceItemHTML(subunit, source, index)).join("")}
      </div>
      ${doneHTML(subunit, "fuentes")}`;
  }

  function sourceItemHTML(subunit, source, index) {
    const priorityClass = { base: "base", ampliatoria: "amp", complementaria: "guide", "guía": "guide" }[source.priority] || "guide";
    const priorityLabel = { base: "Base", ampliatoria: "Ampliatoria", complementaria: "Complementaria", "guía": "Guía" }[source.priority] || "Fuente";
    const isPdf = source.file && source.file.toLowerCase().endsWith(".pdf");
    const localFiles = canOpenLocalFiles();
    const citation = `${source.author} (${source.year}). ${source.title}. ${source.cite}`;
    return `
      <article class="source-item ${source.priority === "base" ? "is-base" : ""}" id="source-${subunit.id}-${index}">
        <span class="source-item__icon">${icon(TYPE_ICON[source.type] || "file")}</span>
        <div class="source-item__body">
          <div class="source-item__top">
            <div>
              <h3>${esc(source.author)} (${esc(source.year)}). ${esc(source.title)}</h3>
              <p class="source-item__cite">${esc(source.cite)} · ${esc(source.type)}</p>
            </div>
            <span class="source-badge source-badge--${priorityClass}">${priorityLabel}</span>
          </div>
          <p class="source-item__what">${esc(source.what)}</p>
          <div class="source-item__foot">
            ${source.used.map((use) => `<span class="source-item__use">${esc(use)}</span>`).join("")}
          </div>
          <div class="source-item__actions">
            ${source.file ? `<button class="btn btn--sm" type="button" data-action="open-file" data-file="${esc(source.file)}" title="${localFiles ? "Abrir el archivo original" : "Los PDF no se publican: usá tu copia local"}">${icon("external")} ${localFiles ? (isPdf ? "Abrir PDF" : "Abrir archivo") : "PDF local"}</button>` : ""}
            <button class="btn btn--sm btn--ghost" type="button" data-action="copy-cite" data-cite="${esc(citation)}">${icon("copy")} Copiar cita</button>
          </div>
        </div>
      </article>`;
  }

  /* ------------------------------ Unidad 6 ------------------------------ */

  function unitRoadmapHTML(unit) {
    const minutes = unit.subunits.reduce((total, subunit) => total + subunit.minutes, 0);
    const sources = unit.sourceCount || unit.subunits.reduce((total, subunit) => total + subunit.sourceCount, 0);
    const first = unit.subunits.find((subunit) => subunit.theory) || unit.subunits[0];
    return `
      <section class="hero" data-num="${unit.num}">
        <div class="hero__main">
          <p class="eyebrow">Unidad ${unit.num} · Mapa de la unidad</p>
          <h1>${emphasizedTitle(unit)}</h1>
          <p class="hero__lead">${esc(unit.subtitle)}</p>
          <div class="hero__meta">
            <span>${icon("layers")} ${unit.subunits.length} subunidades</span>
            <span class="dot"></span>
            <span>${icon("library")} ${sources} fuentes</span>
            <span class="dot"></span>
            <span>${icon("clock")} ~${formatMinutes(minutes)} de estudio</span>
          </div>
        </div>
        <div class="hero__side">
          <div class="status-orb">${icon("compass")}<strong>${unit.num}</strong></div>
          <span class="hero__progress-label">Contenido disponible</span>
        </div>
      </section>

      <div class="roadmap-note">
        <span>${icon("info")}</span>
        <p><strong>La unidad ya está cargada.</strong> Este es el mapa de las tres subunidades y de lo que vas a encontrar en cada una. Entrá a la que quieras empezar; el orden 6.1 → 6.2 → 6.3 es el recomendado, pero podés recorrerlas como prefieras. Tu prioridad se guarda en este navegador.</p>
      </div>

      <div class="roadmap">
        ${unit.subunits.map((subunit) => roadmapCardHTML(unit, subunit)).join("")}
      </div>

      <section class="review-block">
        <div class="review-block__head"><h3>Cómo está armada cada subunidad</h3><span>Misma estructura que la Unidad 05</span></div>
        <div class="method-grid">
          ${TABS.map((tab) => `<div class="method-item">
            <span class="method-item__icon">${icon(tab.icon)}</span>
            <div><strong>${tab.label}</strong><span>${methodDescription(tab.id)}</span></div>
          </div>`).join("")}
        </div>
      </section>

      <div class="roadmap-cta">
        <div>
          <strong>¿Por dónde empezar?</strong>
          <span>La 6.1 explica la organización global de la producción; la 6.2, cómo se aprenden capacidades; la 6.3, el cambio de paradigma que enmarca todo.</span>
        </div>
        <div class="roadmap-cta__actions">
          <a class="btn" href="#/u5/5a/teoria">Volver a la Unidad 05</a>
          <a class="btn btn--primary" href="#/${unit.id}/${first.id}/teoria">Empezar por ${first.code} ${icon("arrow-right")}</a>
        </div>
      </div>`;
  }

  function roadmapCardHTML(unit, subunit) {
    const priorityIndex = state.priorityOrder.indexOf(subunit.id);
    const priority = priorityIndex >= 0 ? priorityIndex + 1 : 0;
    const available = Boolean(subunit.theory);
    const bullets = subunit.theory
      ? subunit.theory.sections.slice(0, 4).map((section) => section.title)
      : (subunit.bullets || []);
    return `
      <article class="roadmap-card">
        <div class="roadmap-card__code">
          <span>${subunit.code}</span>
          <span class="roadmap-card__status ${available ? "is-available" : ""}">${available ? "Disponible" : "Pendiente"}</span>
        </div>
        <h3>${esc(subunit.title)}</h3>
        <p>${esc(subunit.desc)}</p>
        <ul>${bullets.map((bullet) => `<li>${esc(bullet)}</li>`).join("")}</ul>
        <div class="roadmap-card__foot">
          <span>${subunit.sourceCount} fuentes · ${subunit.minutes} min</span>
          <button class="priority-btn ${priority ? "is-set" : ""}" type="button" data-action="set-priority" data-id="${subunit.id}">
            ${icon("flag")} ${priority ? `Prioridad ${priority}` : "Priorizar"}
          </button>
        </div>
        ${available ? `<a class="btn btn--sm btn--primary roadmap-card__enter" href="#/${unit.id}/${subunit.id}/teoria">Entrar a ${subunit.code} ${icon("arrow-right")}</a>` : ""}
      </article>`;
  }

  function methodDescription(tabId) {
    return {
      teoria: "Explicación desde cero, con ideas base y errores típicos.",
      conceptos: "Fichas con conexiones, fuentes y ejemplos.",
      practica: "Casos y ejercicios para aplicar.",
      autoeval: "Quiz interactivo y preguntas de razonamiento.",
      repaso: "Kit de una página, flashcards y plan de 7 días.",
      fuentes: "Trazabilidad completa de cada afirmación."
    }[tabId] || "";
  }

  function lockedUnitHTML(unit) {
    return `
      <section class="hero" data-num="${unit.num}">
        <div class="hero__main">
          <p class="eyebrow">Unidad ${unit.num} · En preparación</p>
          <h1>${emphasizedTitle(unit)}</h1>
          <p class="hero__lead">Esta unidad todavía no está cargada. Las unidades 05 y 06 ya están disponibles; el resto se construye más adelante con el mismo formato.</p>
        </div>
      </section>
      <div class="roadmap-note">
        <span>${icon("info")}</span>
        <p><strong>Mientras tanto:</strong> las unidades 05 y 06 ya están navegables de punta a punta. Podés usarlas como modelo para ver cómo van a quedar las demás.</p>
      </div>
      <section class="review-block">
        <div class="review-block__head"><h3>Qué está disponible hoy</h3><span>Prioridad del curso</span></div>
        <div class="roadmap">
          <article class="roadmap-card">
            <div class="roadmap-card__code"><span>05</span><span class="roadmap-card__status" style="background:var(--unit-accent-soft);color:var(--unit-accent)">Disponible</span></div>
            <h3>Competencias, evolución y regulación</h3>
            <p>Tres subunidades completas: recursos y capacidades, teoría evolucionista y teoría de la regulación.</p>
            <div class="roadmap-card__foot"><span>3 subunidades · 17 fuentes</span><a class="btn btn--sm btn--primary" href="#/u5/5a/teoria">Entrar ${icon("arrow-right")}</a></div>
          </article>
          <article class="roadmap-card">
            <div class="roadmap-card__code"><span>06</span><span class="roadmap-card__status" style="background:var(--unit-accent-soft);color:var(--unit-accent)">Disponible</span></div>
            <h3>Cadenas globales, innovación y cambio tecnológico</h3>
            <p>Tres subunidades completas: cadenas globales de valor, innovación en países emergentes y revoluciones tecnológicas.</p>
            <div class="roadmap-card__foot"><span>3 subunidades · 13 fuentes</span><a class="btn btn--sm btn--primary" href="#/u6/6a/teoria">Entrar ${icon("arrow-right")}</a></div>
          </article>
        </div>
      </section>`;
  }

  /* ------------------------------ Render principal ------------------------------ */

  function renderView(options = {}) {
    const preserveScroll = Boolean(options.preserveScroll);
    const previousScroll = window.scrollY;
    const previousKey = currentRoute ? routeKey(currentRoute) : null;
    const route = resolveRoute();
    currentRoute = route;

    const canonical = route.mode === "unit"
      ? `#/${route.unit.id}/${route.subunit.id}/${route.tab}`
      : `#/${route.unit.id}`;
    if (location.hash !== canonical) {
      history.replaceState(null, "", canonical);
    }

    if (route.mode === "unit") {
      lastVisited[route.unit.id] = { subunit: route.subunit.id, tab: route.tab };
      document.body.dataset.accent = route.subunit.accent || "teal";
    } else {
      document.body.dataset.accent = "teal";
    }

    renderUnitTabs();

    const view = document.getElementById("view");
    if (route.mode === "unit") {
      view.innerHTML = unitViewHTML(route.unit, route.subunit, route.tab);
      if (route.tab === "conceptos") {
        requestAnimationFrame(() => {
          if (!currentRoute || currentRoute.mode !== "unit" || currentRoute.subunit.id !== route.subunit.id) return;
          applyConceptFilter(conceptFilters[route.subunit.id] || "all");
        });
      }
      requestAnimationFrame(() => {
        const tabs = $(".subunit-tabs");
        const active = $(".subunit-tab.is-active");
        if (tabs && active) tabs.scrollTo({ left: Math.max(0, active.offsetLeft - 5), behavior: "auto" });
      });
    } else if (route.mode === "roadmap") {
      view.innerHTML = unitRoadmapHTML(route.unit);
    } else {
      view.innerHTML = lockedUnitHTML(route.unit);
    }

    if (route.mode === "unit") {
      document.title = `Unidad ${route.unit.num} · ${route.subunit.code} ${route.subunit.title} · ${TABS.find((tab) => tab.id === route.tab)?.label || ""} — Aula TF`;
    } else {
      document.title = `Unidad ${route.unit.num} · ${route.unit.title} — Aula TF`;
    }

    const newKey = routeKey(route);
    if (preserveScroll) {
      requestAnimationFrame(() => window.scrollTo(0, previousScroll));
    } else if (previousKey && previousKey !== newKey) {
      const hasPendingScroll = pendingAction && (pendingAction.type === "scroll" || pendingAction.type === "concept");
      if (!hasPendingScroll) {
        scrollAfterRoute(previousKey, newKey);
      }
    }

    runPending();
    updateReadingProgress();
  }

  function scrollAfterRoute(previousKey, newKey) {
    const [prevUnit, prevSubunit, prevTab] = previousKey.split("/");
    const [nextUnit, nextSubunit, nextTab] = newKey.split("/");
    window.setTimeout(() => {
      if (prevUnit !== nextUnit) {
        window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" });
        return;
      }
      if (prevSubunit !== nextSubunit) {
        if (!nextSubunit) {
          window.scrollTo({ top: 0, behavior: "auto" });
          return;
        }
        const tabs = $(".subunit-tabs-wrap");
        if (tabs) scrollToElement(tabs, 118);
        return;
      }
      if (prevTab !== nextTab) {
        const tabs = $(".content-tabs-wrap");
        if (tabs) scrollToElement(tabs, 130);
      }
    }, 0);
  }

  /* ------------------------------ Conceptos: modal ------------------------------ */

  function openConcept(subunit, index) {
    const concept = subunit.concepts[index];
    const dialog = document.getElementById("conceptDialog");
    const body = document.getElementById("conceptDialogBody");
    if (!concept || !dialog || !body) return;

    const mastered = isMastered(subunit.id, index);
    body.innerHTML = `
      <div class="dialog__head">
        <button class="dialog__close" type="button" data-action="close-dialog" aria-label="Cerrar ficha">${icon("close")}</button>
        <p class="dialog__kicker">${subunit.code} · Concepto ${String(index + 1).padStart(2, "0")}</p>
        <h2 id="conceptDialogTitle">${esc(concept.term)}</h2>
        <p class="dialog__oneliner">${esc(concept.short)}</p>
      </div>
      <div class="dialog__body">
        <section class="dialog-section">
          <p class="dialog-section__label">${icon("book")} En simple</p>
          <p>${esc(concept.body)}</p>
        </section>
        <section class="dialog-section">
          <p class="dialog-section__label">${icon("link")} Se conecta con</p>
          <div class="dialog-chips">${concept.connects.map((item) => `<span class="dialog-chip dialog-chip--link">${esc(item)}</span>`).join("")}</div>
        </section>
        <section class="dialog-section">
          <p class="dialog-section__label">${icon("library")} Fuentes</p>
          <div class="dialog-chips">${concept.sources.map((item) => `<span class="dialog-chip">${esc(item)}</span>`).join("")}</div>
        </section>
        <section class="dialog-section dialog-section--trap">
          <p class="dialog-section__label">${icon("alert")} Error típico</p>
          <p>${esc(concept.error)}</p>
        </section>
        <section class="dialog-section dialog-section--example">
          <p class="dialog-section__label">${icon("lightbulb")} Ejemplo</p>
          <p>${esc(concept.example)}</p>
        </section>
      </div>
      <div class="dialog__foot">
        <span data-dialog-mastered-label>${mastered ? "Marcado como dominado" : "Aún no lo marcaste"}</span>
        <button class="btn ${mastered ? "is-done" : "btn--primary"}" type="button"
          data-action="toggle-mastered" data-subunit="${subunit.id}" data-concept="${index}" data-dialog-mastered-btn>
          ${icon(mastered ? "check" : "circle")} ${mastered ? "Dominado" : "Marcar como dominado"}
        </button>
      </div>`;

    openConceptRef = { subunitId: subunit.id, index };
    document.body.classList.add("dialog-open");
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
  }

  function closeConcept() {
    const dialog = document.getElementById("conceptDialog");
    if (dialog && dialog.open) dialog.close();
    document.body.classList.remove("dialog-open");
    openConceptRef = null;
  }

  function updateConceptUI(subunitId, index) {
    const subunit = findSubunit(subunitId);
    if (!subunit) return;
    const mastered = isMastered(subunitId, index);
    const card = $(`.concept-card[data-subunit="${subunitId}"][data-concept="${index}"]`);
    if (card) {
      card.classList.toggle("is-mastered", mastered);
      const top = $(".concept-card__top", card);
      let badge = top ? $(".concept-card__mastered", top) : null;
      if (mastered && top && !badge) {
        badge = document.createElement("span");
        badge.className = "concept-card__mastered";
        badge.innerHTML = `${icon("check")} Dominado`;
        top.appendChild(badge);
      }
      if (!mastered && badge) badge.remove();
    }

    const count = $("[data-concept-count]");
    if (count) count.innerHTML = `<strong>${masteredCount(subunit)}</strong> de ${subunit.concepts.length} dominados`;

    if (openConceptRef && openConceptRef.subunitId === subunitId && openConceptRef.index === index) {
      const label = $("[data-dialog-mastered-label]");
      const button = $("[data-dialog-mastered-btn]");
      if (label) label.textContent = mastered ? "Marcado como dominado" : "Aún no lo marcaste";
      if (button) {
        button.classList.toggle("is-done", mastered);
        button.classList.toggle("btn--primary", !mastered);
        button.innerHTML = `${icon(mastered ? "check" : "circle")} ${mastered ? "Dominado" : "Marcar como dominado"}`;
      }
    }

    applyConceptFilter(conceptFilters[subunitId] || "all");
    refreshProgressUI();
  }

  function applyConceptFilter(filter) {
    if (!currentRoute || currentRoute.mode !== "unit") return;
    const subunit = currentRoute.subunit;
    conceptFilters[subunit.id] = filter;
    $$(".filter-chip").forEach((chip) => {
      chip.classList.toggle("is-active", chip.dataset.filter === filter);
    });
    let visible = 0;
    $$(".concept-card").forEach((card) => {
      const mastered = card.classList.contains("is-mastered");
      const show = filter === "all" || (filter === "mastered" && mastered) || (filter === "pending" && !mastered);
      card.hidden = !show;
      if (show) visible += 1;
    });
    const empty = $(".concept-empty");
    if (empty) empty.hidden = visible > 0;
  }

  /* ------------------------------ Búsqueda ------------------------------ */

  const searchIndex = [];
  let searchItems = [];
  let searchActive = 0;

  function buildSearchIndex() {
    UNITS.filter(hasContent).forEach((unit) => {
      unit.subunits.forEach((subunit) => {
        if (!subunit.theory) return;
        subunit.concepts.forEach((concept, index) => {
          searchIndex.push({
            type: "concept",
            title: concept.term,
            sub: `${subunit.code} · ${subunit.title}`,
            unit: unit.id,
            subunit: subunit.id,
            index,
            icon: "layers",
            keywords: `${concept.short} ${concept.body} ${concept.tags.join(" ")} ${concept.example} ${concept.error} ${concept.connects.join(" ")}`
          });
        });
        subunit.theory.sections.forEach((section) => {
          searchIndex.push({
            type: "theory",
            title: section.title,
            sub: `${subunit.code} · Teoría`,
            unit: unit.id,
            subunit: subunit.id,
            target: section.id,
            icon: "book",
            keywords: stripHTML(section.html)
          });
        });
        subunit.sources.forEach((source, index) => {
          searchIndex.push({
            type: "source",
            title: `${source.author} (${source.year})`,
            sub: source.title,
            unit: unit.id,
            subunit: subunit.id,
            target: `source-${subunit.id}-${index}`,
            icon: "library",
            keywords: `${source.title} ${source.what} ${source.used.join(" ")}`
          });
        });
      });
      if (unit.id === "u6") {
        searchIndex.push({
          type: "map",
          title: `Mapa de la Unidad ${unit.num}`,
          sub: unit.title,
          unit: unit.id,
          icon: "compass",
          keywords: `${unit.subtitle || ""} ${unit.description || ""} ${unit.subunits.map((item) => `${item.code} ${item.title} ${item.desc || ""}`).join(" ")}`
        });
      }
    });
  }

  function openSearch() {
    const overlay = document.getElementById("searchOverlay");
    const input = document.getElementById("searchInput");
    if (!overlay || !input) return;
    overlay.hidden = false;
    document.body.classList.add("search-open");
    input.value = "";
    renderSearch("");
    requestAnimationFrame(() => input.focus());
  }

  function closeSearch() {
    const overlay = document.getElementById("searchOverlay");
    if (!overlay) return;
    overlay.hidden = true;
    document.body.classList.remove("search-open");
  }

  function renderSearch(query) {
    const container = document.getElementById("searchResults");
    if (!container) return;
    const normalizedQuery = normalize(query.trim());
    let items;

    if (!normalizedQuery) {
      if (currentRoute && currentRoute.mode === "unit") {
        const currentSubunit = currentRoute.subunit.id;
        items = searchIndex.filter((item) => item.subunit === currentSubunit && item.type === "concept").slice(0, 6);
        if (items.length < 4) items = searchIndex.filter((item) => item.type === "concept").slice(0, 6);
      } else {
        items = searchIndex.filter((item) => item.type === "map");
      }
    } else {
      const matched = searchIndex.filter((item) => normalize(`${item.title} ${item.sub} ${item.keywords || ""}`).includes(normalizedQuery));
      const groups = { concept: [], theory: [], source: [], map: [] };
      matched.forEach((item) => {
        if (groups[item.type]) groups[item.type].push(item);
      });
      items = ["concept", "theory", "source", "map"].flatMap((type) => groups[type].slice(0, 8));
    }

    searchItems = items;
    searchActive = 0;

    if (!items.length) {
      container.innerHTML = `<div class="search-empty">No encontramos resultados. Probá con «gobernanza», «Hyundai» o «paradigma».</div>`;
      return;
    }

    let html = "";
    let lastType = null;
    items.forEach((item, index) => {
      if (item.type !== lastType) {
        html += `<div class="search-group-label">${searchGroupLabel(item.type, normalizedQuery)}</div>`;
        lastType = item.type;
      }
      html += `<button class="search-result ${index === 0 ? "is-active" : ""}" type="button" data-action="search-select" data-index="${index}">
        <span class="search-result__icon">${icon(item.icon)}</span>
        <span class="search-result__body"><strong>${esc(item.title)}</strong><span>${esc(item.sub)}</span></span>
        <kbd>↵</kbd>
      </button>`;
    });

    container.innerHTML = html;
  }

  function searchGroupLabel(type, hasQuery) {
    if (!hasQuery) {
      if (type === "concept") return "Sugerencias de esta subunidad";
      if (type === "map") return "Mapas de unidad";
      return "Resultados";
    }
    return { concept: "Conceptos", theory: "Teoría", source: "Fuentes", map: "Mapas de unidad" }[type] || "Resultados";
  }

  function moveSearch(direction) {
    if (!searchItems.length) return;
    searchActive = (searchActive + direction + searchItems.length) % searchItems.length;
    $$(".search-result").forEach((element, index) => {
      element.classList.toggle("is-active", index === searchActive);
    });
    const active = $(".search-result.is-active");
    if (active) active.scrollIntoView({ block: "nearest" });
  }

  function selectSearch(index) {
    const item = searchItems[index];
    if (!item) return;
    closeSearch();
    if (item.type === "concept") {
      navigate(`#/${item.unit}/${item.subunit}/conceptos`, { type: "concept", subunit: item.subunit, index: item.index });
    } else if (item.type === "theory") {
      navigate(`#/${item.unit}/${item.subunit}/teoria`, { type: "scroll", target: item.target });
    } else if (item.type === "source") {
      navigate(`#/${item.unit}/${item.subunit}/fuentes`, { type: "scroll", target: item.target });
    } else {
      navigate(`#/${item.unit}`);
    }
  }

  /* ------------------------------ Toasts ------------------------------ */

  function toast(message, type = "info") {
    const stack = document.getElementById("toasts");
    if (!stack) return;
    const element = document.createElement("div");
    element.className = `toast toast--${type}`;
    element.innerHTML = `${icon(type === "ok" ? "check" : "info")}<span>${esc(message)}</span>`;
    stack.appendChild(element);
    document.body.classList.add("has-toasts");
    window.setTimeout(() => {
      element.classList.add("is-leaving");
      window.setTimeout(() => {
        element.remove();
        if (!stack.children.length) document.body.classList.remove("has-toasts");
      }, 220);
    }, 3400);
  }

  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      toast("Cita copiada al portapapeles", "ok");
    } catch (error) {
      const area = document.createElement("textarea");
      area.value = text;
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      try {
        document.execCommand("copy");
        toast("Cita copiada al portapapeles", "ok");
      } catch (fallbackError) {
        toast("No se pudo copiar la cita", "info");
      }
      area.remove();
    }
  }

  /* ------------------------------ Acciones ------------------------------ */

  function toggleDone(subunitId, tabId) {
    const key = `${subunitId}:${tabId}`;
    const subunit = findSubunit(subunitId);
    if (!subunit) return;
    if (state.completed[key]) delete state.completed[key];
    else state.completed[key] = true;
    save();

    const wrapper = $("[data-done-wrap]");
    if (wrapper) wrapper.outerHTML = doneHTML(subunit, tabId);
    refreshProgressUI();
    toast(state.completed[key] ? "Sección marcada como estudiada" : "Sección desmarcada", "ok");
  }

  function handleAction(element) {
    const action = element.dataset.action;

    switch (action) {
      case "toggle-theme": {
        state.theme = state.theme === "dark" ? "light" : "dark";
        save();
        applyTheme();
        toast(state.theme === "dark" ? "Modo oscuro activado" : "Modo claro activado", "info");
        break;
      }
      case "dismiss-banner": {
        state.bannerDismissed = true;
        save();
        renderBanner();
        break;
      }
      case "unit-go": {
        const unit = UNITS.find((item) => item.id === element.dataset.unit);
        if (!unit) break;
        if (hasContent(unit)) {
          const fallback = { subunit: unit.subunits[0].id, tab: "teoria" };
          const last = lastVisited[unit.id] || fallback;
          navigate(`#/${unit.id}/${last.subunit}/${last.tab}`);
        } else {
          navigate(`#/${unit.id}`);
        }
        break;
      }
      case "go": {
        if (element.dataset.route) navigate(element.dataset.route);
        break;
      }
      case "toggle-done": {
        toggleDone(element.dataset.subunit, element.dataset.tab);
        break;
      }
      case "open-concept": {
        const subunit = findSubunit(element.dataset.subunit);
        if (subunit) openConcept(subunit, Number(element.dataset.concept));
        break;
      }
      case "close-dialog": {
        closeConcept();
        break;
      }
      case "toggle-mastered": {
        const subunitId = element.dataset.subunit;
        const index = Number(element.dataset.concept);
        const key = `${subunitId}:${index}`;
        if (state.mastered[key]) delete state.mastered[key];
        else state.mastered[key] = true;
        save();
        updateConceptUI(subunitId, index);
        toast(state.mastered[key] ? "Concepto marcado como dominado" : "Concepto desmarcado", "ok");
        break;
      }
      case "filter-concepts": {
        applyConceptFilter(element.dataset.filter);
        break;
      }
      case "toggle-reveal": {
        const target = document.getElementById(element.dataset.target);
        if (!target) break;
        const willShow = target.hidden;
        target.hidden = !willShow;
        element.setAttribute("aria-expanded", String(willShow));
        break;
      }
      case "quiz-select": {
        if (!currentRoute || currentRoute.mode !== "unit") break;
        const subunit = currentRoute.subunit;
        const runtime = ensureQuiz(subunit);
        if (runtime.checked) break;
        runtime.selected = Number(element.dataset.option);
        const mount = $("#quizMount");
        if (!mount) break;
        $$(".quiz-option", mount).forEach((option, index) => {
          option.classList.toggle("is-selected", index === runtime.selected);
        });
        const check = $("#quizCheck");
        if (check) check.disabled = false;
        const foot = $(".quiz__foot > span", mount);
        if (foot) foot.textContent = "Listo para comprobar";
        break;
      }
      case "quiz-check": {
        if (!currentRoute || currentRoute.mode !== "unit") break;
        const subunit = currentRoute.subunit;
        const runtime = ensureQuiz(subunit);
        if (runtime.checked || runtime.selected === null) break;
        const question = subunit.quiz.questions[runtime.index];
        const correct = runtime.selected === question.correct;
        runtime.checked = true;
        runtime.answers[runtime.index] = correct;
        if (correct) runtime.correct += 1;
        refreshQuiz(subunit);
        break;
      }
      case "quiz-next": {
        if (!currentRoute || currentRoute.mode !== "unit") break;
        const subunit = currentRoute.subunit;
        const runtime = ensureQuiz(subunit);
        if (runtime.index >= subunit.quiz.questions.length - 1) {
          finishQuiz(subunit);
        } else {
          runtime.index += 1;
          runtime.selected = null;
          runtime.checked = false;
          refreshQuiz(subunit);
        }
        break;
      }
      case "quiz-reset":
      case "quiz-retry": {
        if (!currentRoute || currentRoute.mode !== "unit") break;
        const subunit = currentRoute.subunit;
        quizRuntime[subunit.id] = {
          index: 0,
          selected: null,
          checked: false,
          answers: [],
          correct: 0,
          finished: false
        };
        refreshQuiz(subunit);
        break;
      }
      case "flip-card": {
        element.classList.toggle("is-flipped");
        element.setAttribute("aria-pressed", element.classList.contains("is-flipped") ? "true" : "false");
        break;
      }
      case "scroll-to": {
        const target = document.getElementById(element.dataset.target);
        if (target) scrollToElement(target, 150);
        break;
      }
      case "open-file": {
        const file = element.dataset.file;
        if (!file) break;
        if (!canOpenLocalFiles()) {
          toast("Los PDF no se publican en el sitio. Abrilos desde tu copia local de la carpeta del curso.", "info");
          break;
        }
        toast("Abriendo la fuente en una pestaña nueva…", "info");
        window.open(encodeURI(file), "_blank", "noopener");
        break;
      }
      case "copy-cite": {
        copyText(element.dataset.cite || "");
        break;
      }
      case "set-priority": {
        const id = element.dataset.id;
        const index = state.priorityOrder.indexOf(id);
        if (index >= 0) state.priorityOrder.splice(index, 1);
        else state.priorityOrder.push(id);
        save();
        renderView({ preserveScroll: true });
        toast(index >= 0 ? "Prioridad quitada" : `Prioridad ${state.priorityOrder.indexOf(id) + 1} guardada`, "ok");
        break;
      }
      case "open-search": {
        openSearch();
        break;
      }
      case "close-search": {
        closeSearch();
        break;
      }
      case "search-select": {
        selectSearch(Number(element.dataset.index));
        break;
      }
      case "scroll-top": {
        window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" });
        break;
      }
      case "skip-main": {
        const main = document.getElementById("contenido");
        if (main) {
          main.focus({ preventScroll: true });
          main.scrollIntoView({ block: "start", behavior: prefersReducedMotion() ? "auto" : "smooth" });
        }
        break;
      }
      default:
        break;
    }
  }

  /* ------------------------------ Eventos ------------------------------ */

  function bindEvents() {
    document.addEventListener("click", (event) => {
      const actionElement = event.target.closest("[data-action]");
      if (actionElement) {
        event.preventDefault();
        handleAction(actionElement);
        return;
      }
      const overlay = event.target.closest("#searchOverlay");
      if (overlay && event.target === overlay) closeSearch();
    });

    document.addEventListener("input", (event) => {
      const textarea = event.target.closest("textarea[data-practice-key]");
      if (!textarea) return;
      const key = textarea.dataset.practiceKey;
      state.practice[key] = textarea.value;
      save();
      const saved = textarea.closest(".practice-step")?.querySelector(".practice-step__saved");
      if (saved) {
        saved.classList.add("is-visible");
        window.clearTimeout(saved._timer);
        saved._timer = window.setTimeout(() => saved.classList.remove("is-visible"), 1200);
      }
    });

    document.addEventListener("change", (event) => {
      const checkbox = event.target.closest("input[data-plan-key]");
      if (!checkbox) return;
      state.plan[checkbox.dataset.planKey] = checkbox.checked;
      save();
      checkbox.closest(".plan-day")?.classList.toggle("is-done", checkbox.checked);
    });

    document.getElementById("searchInput")?.addEventListener("input", (event) => {
      renderSearch(event.target.value);
    });

    document.addEventListener("keydown", (event) => {
      const searchOverlay = document.getElementById("searchOverlay");
      const searchOpen = searchOverlay && !searchOverlay.hidden;

      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        if (searchOpen) closeSearch();
        else openSearch();
        return;
      }

      if (searchOpen) {
        if (event.key === "Escape") {
          event.preventDefault();
          closeSearch();
        } else if (event.key === "ArrowDown") {
          event.preventDefault();
          moveSearch(1);
        } else if (event.key === "ArrowUp") {
          event.preventDefault();
          moveSearch(-1);
        } else if (event.key === "Enter") {
          event.preventDefault();
          selectSearch(searchActive);
        }
        return;
      }

      const tabList = event.target.closest('[role="tablist"]');
      const currentTab = event.target.closest('[role="tab"]');
      if (tabList && currentTab && (event.key === "ArrowRight" || event.key === "ArrowLeft")) {
        const tabs = $$('[role="tab"]', tabList);
        const index = tabs.indexOf(currentTab);
        if (index >= 0) {
          event.preventDefault();
          const next = tabs[(index + (event.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length];
          next.focus();
          next.click();
        }
      }
    });

    const dialog = document.getElementById("conceptDialog");
    dialog?.addEventListener("click", (event) => {
      if (event.target === dialog) closeConcept();
    });
    dialog?.addEventListener("close", () => {
      document.body.classList.remove("dialog-open");
      openConceptRef = null;
    });

    window.addEventListener("hashchange", () => {
      closeSearch();
      renderView();
    });

    window.addEventListener("scroll", updateReadingProgress, { passive: true });
    window.addEventListener("resize", updateReadingProgress, { passive: true });

    const accountBtn = document.getElementById("accountBtn");
    const accountMenu = document.getElementById("accountMenu");
    accountBtn?.addEventListener("click", (event) => {
      event.stopPropagation();
      if (!accountMenu) return;
      accountMenu.hidden = !accountMenu.hidden;
      accountBtn.setAttribute("aria-expanded", String(!accountMenu.hidden));
    });
    document.addEventListener("click", (event) => {
      if (!accountMenu || accountMenu.hidden) return;
      if (!event.target.closest(".account-wrap")) {
        accountMenu.hidden = true;
        accountBtn?.setAttribute("aria-expanded", "false");
      }
    });
    document.getElementById("signOutBtn")?.addEventListener("click", () => {
      closeAccountMenu();
      if (window.confirm("¿Cerrar sesión en este dispositivo?")) window.fukuro?.signOut();
    });
  }

  function closeAccountMenu() {
    const accountMenu = document.getElementById("accountMenu");
    const accountBtn = document.getElementById("accountBtn");
    if (accountMenu) accountMenu.hidden = true;
    if (accountBtn) accountBtn.setAttribute("aria-expanded", "false");
  }

  function updateReadingProgress() {
    const bar = document.getElementById("readingProgress");
    const scrollTop = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const percent = height > 0 ? Math.min(100, (scrollTop / height) * 100) : 0;
    if (bar) bar.style.width = `${percent}%`;
    const button = $(".scroll-top");
    if (button) button.classList.toggle("is-visible", scrollTop > 700);
  }

  /* ------------------------------ Inicio ------------------------------ */

  function init() {
    applyTheme();
    renderBanner();
    buildSearchIndex();
    if (!location.hash) {
      history.replaceState(null, "", "#/u5/5a/teoria");
    }
    bindEvents();
    renderView();
    updateReadingProgress();
    hydrateRemoteState();
  }

  init();
})();
