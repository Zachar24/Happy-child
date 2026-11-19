const navItems = [
  { id: 'home', label: 'Главная', icon: '🏠' },
  { id: 'about', label: 'О проекте', icon: '📖' },
  { id: 'community', label: 'Сообщество', icon: '👥' },
];

export default function Header({ active, onNavigate }) {
  return (
    <header className="sticky top-0 z-10 bg-[#1a1a1f] shadow-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('home');
          }}
          className="flex items-center gap-2"
        >
          <img
            src="/logo.svg"
            alt="Счастливый ребенок"
            className="h-12 w-12 rounded-lg"
          />
          <span className="text-sm font-bold text-white sm:text-base">
            Счастливый{' '}
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              ребенок
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 sm:flex sm:gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={
                active === item.id
                  ? 'flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-blue-500 to-pink-500 px-2.5 py-1.5 text-xs font-medium text-white sm:px-3 sm:text-sm'
                  : 'flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs text-slate-300 hover:bg-zinc-800 sm:px-3 sm:text-sm'
              }
            >
              <span>{item.icon}</span>
              <span className="hidden sm:inline">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onNavigate('login')}
            className="rounded-xl px-2 py-1.5 text-xs font-medium text-white hover:text-pink-400 sm:px-3 sm:text-sm"
          >
            Войти
          </button>
          <button
            onClick={() => onNavigate('register')}
            className="rounded-xl bg-gradient-to-r from-blue-500 to-pink-500 px-3 py-1.5 text-xs text-white shadow-md transition-all hover:from-blue-600 hover:to-pink-600 hover:shadow-lg sm:px-4 sm:text-sm"
          >
            Регистрация
          </button>
        </div>
      </div>
    </header>
  );
}
