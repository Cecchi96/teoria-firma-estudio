-- Teoría de la Firma · comentarios de usuarios (feedback)
-- Proyecto Supabase: guknbhqonmpjtcbjsbni (fukuro)
-- Ejecutar en el SQL Editor del proyecto o con:
--   supabase db query --project-ref guknbhqonmpjtcbjsbni --file supabase/tf_feedback.sql
--
-- Cualquier usuario autenticado puede enviar un comentario.
-- Solo las cuentas de tf_admins pueden leerlos y administrarlos.
--
-- Después de ejecutar este archivo, marcá tu cuenta como administradora
-- (reemplazá el correo y ejecutalo una sola vez en el SQL Editor):
--
--   insert into public.tf_admins (user_id)
--   select id from auth.users where lower(email) = lower('tu-correo@gmail.com')
--   on conflict (user_id) do nothing;

create table if not exists public.tf_admins (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

alter table public.tf_admins enable row level security;
revoke all on public.tf_admins from anon, authenticated;

create table if not exists public.tf_feedback (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  user_email text not null default lower(coalesce(auth.jwt() ->> 'email', '')),
  message text not null check (char_length(btrim(message)) between 1 and 2000),
  page_class text not null default '',
  page_tab text not null default '',
  page_url text not null default '',
  user_agent text not null default '',
  status text not null default 'open' check (status in ('open', 'resolved')),
  created_at timestamptz not null default now(),
  resolved_at timestamptz
);

create index if not exists tf_feedback_created_idx
  on public.tf_feedback (created_at desc);

create index if not exists tf_feedback_status_idx
  on public.tf_feedback (status, created_at desc);

alter table public.tf_feedback enable row level security;
revoke all on public.tf_feedback from anon;
grant select, insert, update, delete on public.tf_feedback to authenticated;

-- Identifica a los administradores sin exponer correos en el código del sitio.
create or replace function public.tf_is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.tf_admins where user_id = auth.uid()
  );
$$;

revoke all on function public.tf_is_admin() from public, anon;
grant execute on function public.tf_is_admin() to authenticated;

-- El comentario siempre queda asociado al usuario autenticado y arranca pendiente.
create or replace function public.tf_feedback_prepare()
returns trigger
language plpgsql
as $$
begin
  new.user_id := auth.uid();
  new.user_email := lower(coalesce(auth.jwt() ->> 'email', ''));
  new.status := 'open';
  new.resolved_at := null;
  new.created_at := now();
  new.page_class := left(coalesce(new.page_class, ''), 80);
  new.page_tab := left(coalesce(new.page_tab, ''), 80);
  new.page_url := left(coalesce(new.page_url, ''), 400);
  new.user_agent := left(coalesce(new.user_agent, ''), 400);
  return new;
end;
$$;

drop trigger if exists tf_feedback_prepare on public.tf_feedback;
create trigger tf_feedback_prepare
  before insert on public.tf_feedback
  for each row execute function public.tf_feedback_prepare();

drop policy if exists "tf_feedback_insert_own" on public.tf_feedback;
create policy "tf_feedback_insert_own"
  on public.tf_feedback for insert
  to authenticated
  with check (auth.uid() = user_id);

drop policy if exists "tf_feedback_select_admin" on public.tf_feedback;
create policy "tf_feedback_select_admin"
  on public.tf_feedback for select
  to authenticated
  using (public.tf_is_admin());

drop policy if exists "tf_feedback_update_admin" on public.tf_feedback;
create policy "tf_feedback_update_admin"
  on public.tf_feedback for update
  to authenticated
  using (public.tf_is_admin())
  with check (public.tf_is_admin());

drop policy if exists "tf_feedback_delete_admin" on public.tf_feedback;
create policy "tf_feedback_delete_admin"
  on public.tf_feedback for delete
  to authenticated
  using (public.tf_is_admin());
