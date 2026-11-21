/*
 * storage.js — reemplaza window.storage del runtime de Artifacts por Supabase.
 *
 * Expone la MISMA firma que usaban los tableros, asi que el codigo de cada
 * instrumento no se toca:
 *
 *     await window.storage.get(key, global)     -> {value} | null
 *     await window.storage.set(key, value, global)
 *     await window.storage.delete(key, global)
 *
 * Uso, en el <head> de cada instrumento:
 *     <script src="storage.js" data-app="tareas"></script>
 *
 * data-app separa el espacio de nombres de cada tablero, para que dos
 * instrumentos puedan usar la misma clave sin pisarse.
 *
 * Acceso: correo + contrase&ntilde;a. No se envia ningun correo, para no depender
 * del servicio de email de Supabase (limitado a unos pocos envios por hora).
 * Requiere "Confirm email" APAGADO en el dashboard de Auth.
 */
(function () {
  'use strict';

  var SUPABASE_URL = 'https://guknbhqonmpjtcbjsbni.supabase.co';
  var SUPABASE_KEY = 'sb_publishable_XA86bKcoi6qezzkKVeJfNQ_BMHI8Wmx';

  var APP = (document.currentScript && document.currentScript.dataset.app) || 'app';

  var session = null;
  var release;
  var ready = new Promise(function (r) { release = r; });

  /* ---------- API publica ---------- */

  window.storage = {
    get: function (key, global) {
      return ready.then(function (sb) {
        assertLocal(global);
        return sb.from('kv')
          .select('value')
          .eq('app', APP)
          .eq('key', key)
          .maybeSingle()
          .then(function (r) {
            if (r.error) throw r.error;
            return r.data ? { value: r.data.value } : null;
          });
      });
    },

    set: function (key, value, global) {
      return ready.then(function (sb) {
        assertLocal(global);
        return sb.from('kv')
          .upsert(
            { user_id: session.user.id, app: APP, key: key, value: value },
            { onConflict: 'user_id,app,key' }
          )
          .then(function (r) { if (r.error) throw r.error; });
      });
    },

    delete: function (key, global) {
      return ready.then(function (sb) {
        assertLocal(global);
        return sb.from('kv')
          .delete()
          .eq('app', APP)
          .eq('key', key)
          .then(function (r) { if (r.error) throw r.error; });
      });
    },

    // Acceso generico, fuera del kv privado, para tableros que necesiten tablas
    // propias (ej. sesiones compartidas entre dos cuentas). "rpc" llama una
    // funcion de Postgres; "table" da el builder de supabase-js para esa tabla,
    // sujeto a las RLS que tenga esa tabla en el proyecto.
    rpc: function (fn, args) {
      return ready.then(function (sb) {
        return sb.rpc(fn, args).then(function (r) {
          if (r.error) throw r.error;
          return r.data;
        });
      });
    },

    table: function (name) {
      return ready.then(function (sb) { return sb.from(name); });
    }
  };

  window.fukuro = {
    // Resuelve cuando hay sesion y el almacen esta listo para usarse.
    ready: ready.then(function () { return session.user; }),
    signOut: function () {
      return ready.then(function (sb) { return sb.auth.signOut(); })
        .then(function () { location.reload(); });
    },
    email: function () { return session ? session.user.email : null; }
  };

  function assertLocal(global) {
    if (global === true) {
      throw new Error(
        'storage global no esta implementado: este almacen es privado por usuario.'
      );
    }
  }

  /* ---------- arranque ---------- */

  (async function boot() {
    var mod = await import('https://esm.sh/@supabase/supabase-js@2.58.0');
    var sb = mod.createClient(SUPABASE_URL, SUPABASE_KEY);

    var got = await sb.auth.getSession();
    session = got.data.session;

    if (!session) {
      session = await promptLogin(sb);
    }

    sb.auth.onAuthStateChange(function (event) {
      if (event === 'SIGNED_OUT') location.reload();
    });

    release(sb);
  })().catch(function (err) {
    console.error('[fukuro] no se pudo iniciar el almacenamiento', err);
    showFatal(err);
  });

  /* ---------- puerta de acceso ---------- */

  function promptLogin(sb) {
    return domReady().then(function () {
      return new Promise(function (resolve) {
        var root = document.createElement('div');
        root.id = 'fukuro-auth';
        root.innerHTML = [
          '<style>',
          '#fukuro-auth{position:fixed;inset:0;z-index:99999;background:#000;',
          'display:flex;align-items:center;justify-content:center;padding:24px;',
          "font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;}",
          '#fukuro-auth .box{display:flex;flex-direction:column;align-items:center;',
          'gap:20px;width:100%;max-width:300px;text-align:center;}',
          '#fukuro-auth .owl{width:30px;height:30px;color:#6f7789;}',
          '#fukuro-auth p{margin:0;font-size:13px;line-height:1.5;color:#6f7789;}',
          '#fukuro-auth form{display:flex;flex-direction:column;gap:9px;width:100%;}',
          '#fukuro-auth input{width:100%;padding:11px 13px;border-radius:9px;',
          'border:1px solid #2a3140;background:#12151c;color:#ece8de;font-size:14px;',
          'font-family:inherit;text-align:center;}',
          '#fukuro-auth input:focus{outline:none;border-color:#5b8def;}',
          '#fukuro-auth button{width:100%;padding:11px 13px;border-radius:9px;border:0;',
          'background:#ece8de;color:#000;font-size:14px;font-weight:500;font-family:inherit;',
          'cursor:pointer;transition:opacity .2s ease;}',
          '#fukuro-auth button:hover{opacity:.85;}',
          '#fukuro-auth button:disabled{opacity:.4;cursor:default;}',
          '#fukuro-auth .alt{background:none;border:0;padding:0;width:auto;',
          'color:#6f7789;font-size:12px;font-family:inherit;text-decoration:underline;',
          'text-underline-offset:3px;cursor:pointer;}',
          '#fukuro-auth .alt:hover{color:#ece8de;opacity:1;}',
          '#fukuro-auth .msg{font-size:12.5px;line-height:1.45;min-height:1.2em;}',
          '#fukuro-auth .msg.err{color:#f2a93b;}',
          '#fukuro-auth .msg.ok{color:#4fae7b;}',
          '</style>',
          '<div class="box">',
          '<svg class="owl" viewBox="0 0 24 24" fill="none" stroke="currentColor" ',
          'stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">',
          '<path d="M4 9a8 8 0 0 1 16 0v5a8 8 0 0 1-16 0Z"/>',
          '<path d="M4 9 6.5 4.5 10 7"/><path d="M20 9 17.5 4.5 14 7"/>',
          '<circle cx="9" cy="11" r="2.1"/><circle cx="15" cy="11" r="2.1"/>',
          '<path d="M12 14v2.5"/></svg>',
          '<p class="lead">Entr&aacute; con tu correo y contrase&ntilde;a.</p>',
          '<form>',
          '<input class="email" type="email" required placeholder="tu@correo.com" ',
          'autocomplete="email" autofocus />',
          '<input class="pass" type="password" required minlength="6" ',
          'placeholder="contrase&ntilde;a" autocomplete="current-password" />',
          '<button type="submit">Entrar</button>',
          '</form>',
          '<button type="button" class="alt">Primera vez: crear cuenta</button>',
          '<div class="msg"></div>',
          '</div>'
        ].join('');

        document.body.appendChild(root);

        var form = root.querySelector('form');
        var email = root.querySelector('.email');
        var pass = root.querySelector('.pass');
        var button = form.querySelector('button');
        var alt = root.querySelector('.alt');
        var lead = root.querySelector('.lead');
        var msg = root.querySelector('.msg');

        var mode = 'in';

        alt.addEventListener('click', function () {
          mode = mode === 'in' ? 'up' : 'in';
          var creating = mode === 'up';
          lead.innerHTML = creating
            ? 'Eleg&iacute; una contrase&ntilde;a de 6 caracteres o m&aacute;s.'
            : 'Entr&aacute; con tu correo y contrase&ntilde;a.';
          button.textContent = creating ? 'Crear cuenta' : 'Entrar';
          alt.textContent = creating ? 'Ya tengo cuenta' : 'Primera vez: crear cuenta';
          pass.setAttribute('autocomplete', creating ? 'new-password' : 'current-password');
          msg.className = 'msg';
          msg.textContent = '';
        });

        form.addEventListener('submit', async function (e) {
          e.preventDefault();
          button.disabled = true;
          msg.className = 'msg';
          msg.textContent = mode === 'up' ? 'Creando…' : 'Entrando…';

          var creds = { email: email.value.trim(), password: pass.value };
          var res = mode === 'up'
            ? await sb.auth.signUp(creds)
            : await sb.auth.signInWithPassword(creds);

          if (res.error) {
            msg.className = 'msg err';
            msg.textContent = explain(res.error, mode);
            button.disabled = false;
            return;
          }

          // Con "Confirm email" encendido, signUp devuelve usuario pero sin sesion.
          if (mode === 'up' && !res.data.session) {
            msg.className = 'msg err';
            msg.textContent =
              'Cuenta creada, pero Supabase pide confirmar el correo. Apag&aacute; ' +
              '"Confirm email" en Authentication → Sign In / Providers → Email.';
            button.disabled = false;
            return;
          }
          // accept() cierra el resto via onAuthStateChange.
        });

        var done = false;
        function accept(s) {
          if (done || !s) return;
          done = true;
          root.remove();
          resolve(s);
        }

        sb.auth.onAuthStateChange(function (event, s) {
          if (event === 'SIGNED_IN' || event === 'INITIAL_SESSION') accept(s);
        });

        // Cubre la carrera en que la sesion se establece antes del listener.
        sb.auth.getSession().then(function (r) { accept(r.data.session); });
      });
    });
  }

  function explain(error, mode) {
    var m = (error && error.message) || '';
    if (/invalid login credentials/i.test(m)) {
      return 'Correo o contraseña incorrectos. Si es tu primera vez, usá ' +
        '"crear cuenta" aquí abajo.';
    }
    if (/already registered|already exists/i.test(m)) {
      return 'Esa cuenta ya existe. Volvé a "Ya tengo cuenta" y entrá.';
    }
    if (/password/i.test(m) && /short|least|6/i.test(m)) {
      return 'La contraseña necesita al menos 6 caracteres.';
    }
    if (/signups? not allowed|disabled/i.test(m)) {
      return 'El registro está deshabilitado en Supabase. Activá "Allow new users to sign up".';
    }
    return (mode === 'up' ? 'No se pudo crear la cuenta: ' : 'No se pudo entrar: ') + m;
  }

  function showFatal(err) {
    domReady().then(function () {
      var bar = document.createElement('div');
      bar.style.cssText =
        'position:fixed;left:0;right:0;bottom:0;z-index:99999;padding:12px 16px;' +
        'background:#f2a93b;color:#000;font:13px/1.4 -apple-system,sans-serif;';
      bar.textContent =
        'No hay conexion con el almacenamiento, los cambios no se van a guardar. ' +
        (err && err.message ? err.message : '');
      document.body.appendChild(bar);
    });
  }

  function domReady() {
    if (document.readyState !== 'loading') return Promise.resolve();
    return new Promise(function (r) {
      document.addEventListener('DOMContentLoaded', function () { r(); }, { once: true });
    });
  }
})();
