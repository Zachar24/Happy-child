import { useEffect, useRef, useState } from 'react';

/* Аватар-заглушка: первые буквы имени на градиенте */
function Avatar({ name = '?' }) {
  const initials = name
    .trim()
    .split(/\s+/)
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-sm font-bold text-white">
      {initials || '?'}
    </span>
  );
}

export default function UserMenu({ user, onNavigate, onLogout }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  /* закрытие по клику мимо меню */
  useEffect(() => {
    if (!open) return;
    const onClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false);
    };
    const onEsc = (e) => e.key === 'Escape' && setOpen(false);

    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onEsc);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onEsc);
    };
  }, [open]);

    const name =
    user?.name || user?.username || user?.login || user?.email?.split('@')[0] || 'Гость';
    const email = user?.email || user?.mail || 'почта не указана';

  return (
    <div ref={menuRef} className="relative">
      {/* Кнопка с пользователем */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 rounded-full border border-white/10 py-1 pl-1 pr-3 transition hover:border-white/30"
      >
        <Avatar name={name} />
        <span className="hidden max-w-[120px] truncate text-sm font-semibold text-white sm:block">
          {name}
        </span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className={`h-3.5 w-3.5 text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {/* Выпадающий блок */}
      {open && (
        <div className="absolute right-0 z-50 mt-2 w-64 overflow-hidden rounded-2xl border border-white/10 bg-[#14161f] shadow-2xl shadow-black/50">
          {/* Шапка блока: кто вошёл */}
          <div className="bg-gradient-to-r from-blue-600/40 to-pink-600/40 p-4">
            <div className="flex items-center gap-3">
              <span className="scale-110">
                <Avatar name={name} />
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-white">{name}</p>
                <p className="truncate text-xs text-slate-300">{email}</p>
              </div>
            </div>
          </div>

          {/* Пункты меню */}
          <nav className="p-2">
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                onNavigate('profile');
              }}
              className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm text-slate-200 transition hover:bg-white/5"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-4 w-4 text-pink-400">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              Профиль и настройки
            </button>

            <button
              type="button"
              onClick={() => {
                setOpen(false);
                onNavigate('community');
              }}
              className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm text-slate-200 transition hover:bg-white/5"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-blue-400">
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
              </svg>
              Сообщество
            </button>

            <button
              type="button"
              onClick={() => {
                setOpen(false);
                onNavigate('assistant');
              }}
              className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm text-slate-200 transition hover:bg-white/5"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-purple-400">
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
              </svg>
              Карманный помощник
            </button>
          </nav>

          {/* Выход */}
          <div className="border-t border-white/10 p-2">
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                onLogout();
              }}
              className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm text-red-400 transition hover:bg-red-500/10"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <path d="m16 17 5-5-5-5" />
                <path d="M21 12H9" />
              </svg>
              Выйти из аккаунта
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
