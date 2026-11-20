import logo from '../assets/logo.svg'

const nav = [
  { id: 'home', label: 'Главная' },
  { id: 'about', label: 'О проекте' },
  { id: 'community', label: 'Сообщество' },
  { id: 'contacts', label: 'Контакты' },
];

const socials = [
  { label: 'Telegram канал', bg: 'bg-blue-600' },
  { label: 'MAX', bg: 'bg-purple-700' },
  { label: 'Чат поддержки', bg: 'bg-pink-600' },
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
            <li>✉ kamayakolesnina@mail.ru</li>
            <li>
              <a href="tel:+79653393247" className="hover:text-white">📞 +7 (965) 339-32-47</a>
            </li>
            <li>📍 г. Москва, Измайловский бул., 19</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Мы в соцсетях</h3>
          <div className="mt-3 space-y-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href="#"
                className={`block rounded-lg ${s.bg} px-4 py-2 text-sm font-medium shadow hover:brightness-110 transition`}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-white/20 px-4 pt-5 text-center text-xs text-white/80 sm:px-6">
        <p>© 2026 Счастливый ребенок. Все права защищены.</p>
        <p className="mt-1">Сделано с <span className="text-pink-200">♥</span> для родителей и педагогов.</p>
        <p className="mt-1">Подписывайтесь на наш Telegram и MAX — Будем в числе первых!</p>
      </div>
    </footer>
  );
}
