const Mail = ({ c = 'h-5 w-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`shrink-0 ${c}`}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.971 5.927a2 2 0 0 1-2.058 0L2 7" />
  </svg>
);

const Phone = ({ c = 'h-5 w-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`shrink-0 ${c}`}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MapPin = ({ c = 'h-5 w-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`shrink-0 ${c}`}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const Clock = ({ c = 'h-5 w-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`shrink-0 ${c}`}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

const Telegram = ({ c = 'h-5 w-5' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={c}>
    <path d="M21.94 3.44a1.5 1.5 0 0 0-1.53-.26L3.1 10.28c-.58.23-.96.77-.97 1.38a1.5 1.5 0 0 0 1 1.43l4.16 1.44 1.55 5.04c.17.56.66.95 1.24.98h.1c.55 0 1.05-.3 1.31-.79l1.28-2.35 3.93 2.88c.26.19.57.29.89.29.15 0 .3-.02.45-.07.46-.14.83-.49 1-.95l3.02-14.6c.13-.62-.11-1.25-.62-1.52ZM9.36 13.9l7.9-6.53-8.4 7.62c-.14.13-.24.3-.28.48l-.19.92-.43-1.4a.74.74 0 0 1 1.4-1.09Z" />
  </svg>
);

const Message = ({ c = 'h-5 w-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c}>
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
  </svg>
);

export default function Contacts() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <h1 className="text-center text-3xl font-extrabold">Контакты</h1>
      <p className="mt-2 text-center text-sm text-white/85">
        Мы всегда рады вашим вопросам, предложениям и отзывам о проекте
      </p>

      {/* Способы связи */}
      <section className="mt-10 grid gap-4 sm:grid-cols-2">
        <a
          href="mailto:kseniyakolesnina@mail.ru"
          className="flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-5 transition hover:border-zinc-600"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500 text-white">
            <Mail />
          </span>
          <div>
            <p className="text-sm font-semibold text-white">Электронная почта</p>
            <p className="mt-0.5 text-sm text-slate-400">kseniyakolesnina@mail.ru</p>
          </div>
        </a>

        <a
          href="tel:+79653393247"
          className="flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-5 transition hover:border-zinc-600"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-pink-500 text-white">
            <Phone />
          </span>
          <div>
            <p className="text-sm font-semibold text-white">Телефон</p>
            <p className="mt-0.5 text-sm text-slate-400">+7 (965) 339-32-47</p>
          </div>
        </a>

        <div className="flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-500 text-white">
            <MapPin />
          </span>
          <div>
            <p className="text-sm font-semibold text-white">Адрес</p>
            <p className="mt-0.5 text-sm text-slate-400">г. Москва, Измайловский бул., 19</p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500 text-white">
            <Clock />
          </span>
          <div>
            <p className="text-sm font-semibold text-white">Часы работы</p>
            <p className="mt-0.5 text-sm text-slate-400">Ежедневно: 9:00 – 21:00</p>
          </div>
        </div>
      </section>

      {/* Соцсети */}
      <section className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900 p-6 sm:p-8">
        <h2 className="text-center text-xl font-bold text-white sm:text-2xl">
          Мы в соцсетях
        </h2>
        <p className="mt-2 text-center text-sm text-slate-400">
          Подписывайтесь — будем в числе первых!
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <a
            href="https://t.me/tokindergartenwithlove"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-medium text-white shadow transition hover:brightness-110"
          >
            <Telegram /> Telegram канал
          </a>
          <a
            href="#"
            className="flex items-center justify-center gap-2 rounded-xl bg-purple-700 px-4 py-3 text-sm font-medium text-white shadow transition hover:brightness-110"
          >
            <Message /> MAX
          </a>
          <a
            href="#"
            className="flex items-center justify-center gap-2 rounded-xl bg-pink-600 px-4 py-3 text-sm font-medium text-white shadow transition hover:brightness-110"
          >
            <Message /> Чат поддержки
          </a>
        </div>
      </section>

      {/* О проекте */}
      <section className="mt-10 rounded-2xl bg-gradient-to-r from-blue-600 to-pink-600 p-6 text-center shadow-lg sm:p-8">
        <h2 className="text-xl font-bold text-white">Есть вопрос или предложение?</h2>
        <p className="mt-2 text-sm text-white/90">
          Напишите нам на почту или позвоните — ответим в течение рабочего дня.
          Проект создан студентами педагогического колледжа и полностью бесплатен.
        </p>
      </section>
    </div>
  );
}
