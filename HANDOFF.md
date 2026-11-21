# Handoff — Teoría de la Firma

## Estado actual

- **Unidad 05 completa:** competencias y recursos, teoría evolucionista y teoría de la regulación.
- **Unidad 06 completa:** cadenas globales de valor, innovación en países emergentes y revoluciones tecnológicas.
- **Progreso por usuario:** secciones estudiadas, conceptos dominados, mejores resultados de autoevaluación, plan de repaso, respuestas de práctica y prioridades de la Unidad 06.
- **Comentarios:** botón flotante en el aula y bandeja privada en `feedback.html`.
- **Login compartido:** reutiliza el modal y el cliente de Supabase de Fukuro (`storage.js`).
- **PDFs:** no se publican. Los botones «PDF local» avisan cuando el sitio corre en Vercel.
- **App live:** https://teoria-firma-estudio.vercel.app
- **Hub Fukuro:** https://fukuro-sable.vercel.app (tile «Teoría de la Firma»)
- **Repo público:** https://github.com/Cecchi96/teoria-firma-estudio

## Arquitectura

- Sitio estático: HTML + CSS + JavaScript, sin framework ni build.
- `storage.js` reutiliza el login y el cliente Supabase del proyecto Fukuro.
- `assets/app.js` renderiza el aula, guarda el progreso en `localStorage` y lo sincroniza con Supabase.
- `assets/data.js` contiene todo el contenido de las unidades 05 y 06.
- `assets/feedback.js` agrega el botón flotante y el formulario de comentarios.
- `assets/feedback-admin.js` es la bandeja privada del administrador.
- `feedback.html` es la página de la bandeja.
- `supabase/tf_feedback.sql` documenta la tabla dedicada de comentarios y sus políticas RLS.

## Supabase

- Proyecto: `guknbhqonmpjtcbjsbni` (`fukuro`).
- **Progreso:** tabla `kv`, con `app = 'teoria-firma'` y `key = 'tf-aula-v1'`.
  - El valor se guarda como JSON serializado (la columna `value` es de tipo texto).
  - RLS: cada usuario solo lee y escribe sus propias filas.
  - No requiere SQL adicional.
- **Comentarios (modo compatible):** mientras no exista `tf_feedback`, se usa `eco_feedback` con `page_class = 'tf:...'`.
  - La bandeja de Teoría de la Firma filtra solo `tf:%`.
  - La bandeja de Econometría I excluye `tf:%`.
  - La cuenta administradora es la misma (`eco_admins`).
- **Comentarios (tabla dedicada, opcional):** ejecutar `supabase/tf_feedback.sql` y agregar la cuenta a `tf_admins`.
  - La app detecta la tabla nueva y cambia el destino de los comentarios nuevos.
  - Los comentarios ya guardados en `eco_feedback` no se migran automáticamente.
- La publishable key está en `storage.js`; es pública por diseño.
- **Nunca** subir la `service_role key` ni tokens personales al repositorio.

## Decisiones tomadas

- El login es obligatorio: toda la app queda detrás del modal de Fukuro.
- El progreso se sincroniza por usuario en `kv`; el tema claro/oscuro se conserva local por dispositivo.
- Si Supabase no está disponible, la app sigue funcionando y guarda en `localStorage`; el indicador muestra «Solo este dispositivo».
- Los PDFs de la cátedra no se publican por derechos de autor. La bibliografía queda como referencia.
- El aula es un repo público separado para no exponer el hub personal de Fukuro.
- Vercel sirve el sitio como estático, sin build.

## Pendientes

1. Ejecutar `supabase/tf_feedback.sql` en el SQL Editor del proyecto `fukuro` y registrar la cuenta administradora:
   ```sql
   insert into public.tf_admins (user_id)
   select id from auth.users where lower(email) = lower('tu-correo@gmail.com')
   on conflict (user_id) do nothing;
   ```
   Es opcional: los comentarios ya funcionan con el modo compatible.
2. Probar con una cuenta de compañero:
   - que el progreso no se mezcle con el de otra cuenta;
   - que pueda marcar secciones, resolver un quiz y recargar sin perder datos;
   - que pueda enviar un comentario y que no pueda abrir la bandeja.
3. Evaluar si se incorpora el sistema de anotaciones de Econometría I (subrayados y comentarios sobre el texto). No está implementado en esta versión.
4. Completar las unidades 01 a 04 si se decide ampliar el aula.

## Deploy

```bash
cd C:\Users\sdcec\OneDrive\Documentos\Consultoria\teoria-firma-estudio
vercel --prod
```

El proyecto de Vercel está conectado al repo de GitHub: los push a `main` pueden disparar un deploy automático.
