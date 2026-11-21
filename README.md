# Teoría de la Firma · Aula de estudio

Sitio de estudio para **Teoría de la Firma y la Organización Industrial**, desarrollado como aplicación estática con login compartido de Fukuro, progreso privado por usuario en Supabase y deploy en Vercel.

**App:** https://teoria-firma-estudio.vercel.app  
**Hub:** https://fukuro-sable.vercel.app  
**Repositorio:** https://github.com/Cecchi96/teoria-firma-estudio

## Estado

- **Unidad 05 completa:** 3 subunidades (competencias y recursos, teoría evolucionista, teoría de la regulación).
- **Unidad 06 completa:** 3 subunidades (cadenas globales de valor, innovación en países emergentes, revoluciones tecnológicas).
- **Unidades 01 a 04:** pantalla de «en preparación».
- Cada subunidad incluye teoría extensa, fichas de conceptos, práctica, autoevaluación, kit de repaso y fuentes.
- **Progreso por usuario:** secciones estudiadas, conceptos dominados, mejores resultados de autoevaluación, plan de repaso, respuestas de práctica y prioridades de la Unidad 06.
- **Comentarios:** botón flotante para enviar sugerencias y una bandeja privada para el administrador.
- **Modo claro/oscuro**, buscador global con `Ctrl/Cmd + K` y diseño responsive.

## Stack

- HTML, CSS y JavaScript sin framework.
- Supabase Auth + Postgres + Row Level Security.
- Vercel para el deploy estático.
- `storage.js` reutiliza el login y el cliente de Supabase del proyecto Fukuro.

## Estructura

```text
index.html              shell de la aplicación
feedback.html           bandeja privada de comentarios
storage.js              login y cliente de Supabase
assets/
  styles.css            design system, modo noche y estado de sincronización
  feedback.css          estilos del botón flotante y de la bandeja
  data.js               contenido de las unidades y subunidades
  app.js                router, render, progreso, quiz, búsqueda y sincronización
  feedback.js           botón flotante y formulario de comentarios
  feedback-admin.js     bandeja de comentarios del administrador
  favicon.svg
supabase/
  tf_feedback.sql       comentarios y tabla privada de administradores
```

## Contenido

Cada unidad tiene subunidades y cada subunidad repite la misma estructura:

```text
Unidad 05 — Competencias, evolución y regulación
├── 5.1 Competencias y recursos
├── 5.2 Teoría evolucionista
└── 5.3 Teoría de la regulación

Unidad 06 — Cadenas globales, innovación y cambio tecnológico
├── 6.1 Cadenas globales de valor
├── 6.2 Innovación en países emergentes
└── 6.3 Revoluciones tecnológicas
```

Cada subunidad incluye:

- **Teoría:** secciones con idea clave, diagrama, cuadro comparativo, error típico y explicación desde cero.
- **Conceptos clave:** fichas con definición simple, conexiones, fuentes, error típico y ejemplo.
- **Práctica:** caso aplicado, pasos con pista y respuesta orientativa.
- **Autoevaluación:** preguntas multiple choice con explicación y preguntas abiertas.
- **Repaso:** resumen de una página, errores típicos, flashcards, plan de 7 días y sesión de 90 minutos.
- **Fuentes:** autor, año, título, cita, tipo, prioridad, qué aporta, usos y ruta al PDF local.

La navegación queda en la URL:

- `#/u5/5a/teoria`, `#/u5/5c/repaso`
- `#/u6` → mapa de la Unidad 06
- `#/u6/6a/teoria`, `#/u6/6b/conceptos`, `#/u6/6c/practica`

## Desarrollo local

Desde esta carpeta:

```bash
python -m http.server 8000
```

Abrir `http://localhost:8000/`.

`storage.js` va a pedir correo y contraseña. Para probar el progreso y los comentarios hace falta una cuenta del proyecto Supabase de Fukuro.

## Supabase

La app usa el proyecto `fukuro` (`guknbhqonmpjtcbjsbni`):

- URL y publishable key en `storage.js`. La publishable key es pública por diseño.
- **Progreso:** se guarda en la tabla `kv` con `app = 'teoria-firma'` y `key = 'tf-aula-v1'`. RLS: cada usuario solo lee y escribe sus propias filas. No requiere SQL adicional.
- **Comentarios:** la tabla `tf_feedback` y la tabla privada `tf_admins` se crean con `supabase/tf_feedback.sql`. Cualquier usuario autenticado puede enviar comentarios; solo las cuentas listadas en `tf_admins` pueden leerlos.
- **Modo compatible:** mientras `tf_feedback` no exista, el sitio guarda los comentarios en `eco_feedback` con el prefijo `tf:` en `page_class` y usa la administración de Econometría I. La bandeja de Teoría de la Firma filtra solo esos registros. Al ejecutar `tf_feedback.sql`, la app detecta la tabla nueva y migra el destino automáticamente, sin cambiar el código.
- Para habilitar la bandeja, después de ejecutar el SQL agregá tu cuenta:

```sql
insert into public.tf_admins (user_id)
select id from auth.users where lower(email) = lower('tu-correo@gmail.com')
on conflict (user_id) do nothing;
```

- **Nunca** subir la `service_role key` ni tokens personales al repositorio.

## Material bibliográfico

Los PDFs de clase, el libro y las soluciones de parciales **no** se publican: quedan como referencias y cada estudiante debe usar su propia copia. Los botones «Abrir PDF» funcionan cuando el sitio se abre desde la carpeta local del curso; en la versión publicada muestran un aviso.

## Deploy

El proyecto es estático: Vercel puede servirlo sin build.

```bash
vercel --prod
```

## Licencia

A definir por el autor.
