import UserMenu from './UserMenu';

const User = ({ c = 'h-4 w-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c}>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const icons = {
  home: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 sm:h-5 sm:w-5">
      <path d="M3 10a2 2 0 0 1 .709-1.528l6-6a2 2 0 0 1 2.582 0l6 6A2 2 0 0 1 19 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
    </svg>
  ),
  about: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 sm:h-5 sm:w-5">
      <path d="M12 7v14" />
      <path d="M3 18a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1" />
      <path d="M12 7a4 4 0 0 0-4-4H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8" />
      <path d="M12 7a4 4 0 0 1 4-4h4a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-8" />
    </svg>
  ),
  community: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 sm:h-5 sm:w-5">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
};

const navItems = [
  { id: 'home', label: 'Главная', icon: icons.home },
  { id: 'about', label: 'О проекте', icon: icons.about },
  { id: 'community', label: 'Сообщество', icon: icons.community },
];

export default function Header({ page, onNavigate, user, onLogout }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#12141c]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <button
          type="button"
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2.5"
        >
          <img src="/Happy-child/logo.svg" alt="Счастливый ребёнок" className="h-9 w-9 rounded-lg" />
          <span className="text-base font-bold text-white sm:text-lg">
            Счастливый ребёнок
          </span>
        </button>

        <nav className="hidden items-center gap-1 sm:flex sm:gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
              className={
                page === item.id
                  ? 'flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-blue-500 to-pink-500 px-2.5 py-1.5 text-xs font-medium text-white shadow-md sm:px-3 sm:text-sm'
                  : 'flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs text-slate-300 hover:bg-zinc-800 sm:px-3 sm:text-sm'
              }
            >
              {item.icon}
              <span className="hidden sm:inline">{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          {user ? (
            <UserMenu user={user} onNavigate={onNavigate} onLogout={onLogout} />
          ) : (
            <>
              <button
                type="button"
                onClick={() => onNavigate('login')}
                className="rounded-lg px-3 py-1.5 text-sm text-slate-300 transition hover:text-white"
              >
                Войти
              </button>
              <button
                type="button"
                onClick={() => onNavigate('register')}
                className="rounded-lg bg-gradient-to-r from-blue-500 to-pink-500 px-3 py-1.5 text-sm font-semibold text-white transition hover:from-blue-600 hover:to-pink-600"
              >
                Регистрация
              </button>
            </>
          )}
        </div>
      </div>

      {/* Мобильная навигация */}
      <nav className="flex gap-1 overflow-x-auto border-t border-white/10 px-4 py-2 md:hidden">
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onNavigate(item.id)}
            className={`whitespace-nowrap rounded-lg px-3 py-1.5 text-xs transition ${
              page === item.id
                ? 'bg-white/10 font-semibold text-white'
                : 'text-slate-300 hover:bg-white/5'
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
}
