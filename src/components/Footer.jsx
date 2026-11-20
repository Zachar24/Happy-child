const Mail = ({ c = 'h-4 w-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`shrink-0 ${c}`}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.971 5.927a2 2 0 0 1-2.058 0L2 7" />
  </svg>
);

const Phone = ({ c = 'h-4 w-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`shrink-0 ${c}`}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MapPin = ({ c = 'h-4 w-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`shrink-0 ${c}`}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const Heart = ({ c = 'h-3.5 w-3.5' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={`inline ${c}`}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

const Telegram = ({ c = 'h-4 w-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={c}>
    <path d="M21.94 3.44a1.5 1.5 0 0 0-1.53-.26L3.1 10.28c-.58.23-.96.77-.97 1.38a1.5 1.5 0 0 0 1 1.43l4.16 1.44 1.55 5.04c.17.56.66.95 1.24.98h.1c.55 0 1.05-.3 1.31-.79l1.28-2.35 3.93 2.88c.26.19.57.29.89.29.15 0 .3-.02.45-.07.46-.14.83-.49 1-0.95l3.02-14.6c.13-.62-.11-1.25-.62-1.52ZM9.36 13.9l7.9-6.53-8.4 7.62c-.14.13-.24.3-.28.48l-.19.92-.43-1.4a.74.74 0 0 1 1.4-1.09Z" />
  </svg>
);

const Message = ({ c = 'h-4 w-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c}>
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
  </svg>
);

const Chat = ({ c = 'h-4 w-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c}>
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
  </svg>
);

const nav = [
  { id: 'home', label: 'Главная' },
  { id: 'about', label: 'О проекте' },
  { id: 'community', label: 'Сообщество' },
  { id: 'contacts', label: 'Контакты' },
];

const socials = [
  { label: 'Telegram канал', bg: 'bg-blue-600', icon: <Telegram /> },
  { label: 'MAX', bg: 'bg-purple-700', icon: <Message /> },
  { label: 'Чат поддержки', bg: 'bg-pink-600', icon: <Chat /> },
];

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-gradient-to-r from-blue-700 via-fuchsia-800 to-pink-700 pt-10 pb-6 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-4">
        <div>
          <p className="flex items-center gap-2 font-bold">
            <span>
                <img src="/Happy-child/logo.svg" alt="Счастливый ребенок" className='h-14 w-14'/>
            </span>
            Счастливый ребенок
          </p>
          <p className="mt-3 text-xs text-white/80 sm:text-sm">
            Единое пространство для родителей и педагогов. Бесплатный помощник
            на этапе адаптации к детскому саду для детей и малей.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Навигация</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/85">
            {nav.map((n) => (
              <li key={n.label}>
                <button
                  className="hover:text-white hover:underline"
                  onClick={() => onNavigate(n.id === 'contacts' ? 'home' : n.id)}
                >
                  {n.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

          <div>
            <h3 className="font-semibold">Контакты</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/85">
              <li className="flex items-center gap-2">
                <Mail /> kseniyakolesnina@mail.ru
              </li>
              <li className="flex items-center gap-2">
                <Phone />
                <a href="tel:+79653393247" className="hover:text-white">+7 (965) 339-32-47</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin /> г. Москва, Измайловский бул., 19
              </li>
            </ul>
          </div>

        <div>
          <h3 className="font-semibold">Мы в соцсетях</h3>
          <div className="mt-3 space-y-2">
            {socials.map((s) => (
            <a
              key={s.label}
              href="#"
              className={`flex items-center gap-2 rounded-lg ${s.bg} px-4 py-2 text-sm font-medium shadow transition hover:brightness-110`}
            >
              {s.icon}
              {s.label}
            </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-white/20 px-4 pt-5 text-center text-xs text-white/80 sm:px-6">
        <p>© 2026 Счастливый ребенок. Все права защищены.</p>
        <p className="mt-1 flex items-center justify-center gap-1.5">Сделано с <Heart c="h-3.5 w-3.5 text-pink-200" /> для родителей и педагогов.</p>
        <p className="mt-1">Подписывайтесь на наш Telegram и MAX — Будем в числе первых!</p>
      </div>
    </footer>
  );
}
