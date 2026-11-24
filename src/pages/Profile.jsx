import { useState } from 'react';

/* Читаем/пишем пользователя в том же хранилище, что и auth.js */
function loadProfile() {
  try {
    return JSON.parse(localStorage.getItem('user') || '{}');
  } catch {
    return {};
  }
}

export default function Profile({ user, onLogout, onNavigate }) {
  const [form, setForm] = useState(() => {
    const u = user || loadProfile();
    return {
      name: u.name || '',
      email: u.email || '',
      childName: u.childName || '',
      childAge: u.childAge || '',
      kindergarten: u.kindergarten || '',
    };
  });
  const [saved, setSaved] = useState(false);

  const set = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setSaved(false);
  };

  const save = (e) => {
    e.preventDefault();
    const merged = { ...(user || loadProfile()), ...form };
    localStorage.setItem('user', JSON.stringify(merged));
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const field = (label, key, type = 'text', placeholder = '') => (
    <label className="block">
      <span className="mb-1 block text-xs font-semibold text-slate-400">{label}</span>
      <input
        type={type}
        value={form[key]}
        onChange={set(key)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-pink-500"
      />
    </label>
  );

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <h1 className="bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-center text-3xl font-extrabold text-transparent">
        Профиль и настройки
      </h1>

      {/* Блок с информацией о пользователе */}
      <section className="mt-8 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
        <div className="flex items-center gap-4 bg-gradient-to-r from-blue-600/30 to-pink-600/30 p-6">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-xl font-bold text-white">
            {(form.name || '?').trim().slice(0, 1).toUpperCase()}
          </span>
          <div>
            <p className="text-lg font-bold text-white">{form.name || 'Гость'}</p>
            <p className="text-sm text-slate-400">{form.email || 'почта не указана'}</p>
          </div>
        </div>

        <form onSubmit={save} className="space-y-4 p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            {field('Ваше имя', 'name', 'text', 'Анна Иванова')}
            {field('Электронная почта', 'email', 'email', 'anna@mail.ru')}
          </div>

          <div className="border-t border-zinc-800 pt-4">
            <h2 className="mb-3 text-sm font-bold text-white">Информация о ребенке</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {field('Имя ребенка', 'childName', 'text', 'Миша')}
              {field('Возраст', 'childAge', 'text', '3 года')}
            </div>
            <div className="mt-4">
              {field('Детский сад / группа', 'kindergarten', 'text', 'Сад №12, группа «Ромашки»')}
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              onClick={onLogout}
              className="text-sm text-red-400 transition hover:text-red-300"
            >
              Выйти из аккаунта
            </button>
            <button
              type="submit"
              className="rounded-xl bg-gradient-to-r from-blue-500 to-pink-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Сохранить
            </button>
          </div>

          {saved && (
            <p className="text-center text-sm text-emerald-400">✓ Изменения сохранены</p>
          )}
        </form>
      </section>

      <p className="mt-4 text-center text-sm text-slate-500">
        <button onClick={() => onNavigate('home')} className="hover:text-slate-300">
          ← На главную
        </button>
      </p>
    </div>
  );
}
