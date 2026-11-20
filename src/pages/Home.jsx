/* Иконки в стиле Lucide */
const Heart = ({ c = 'h-6 w-6' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={c}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

const Check = ({ c = 'h-6 w-6' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const Users = ({ c = 'h-6 w-6' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const BookOpen = ({ c = 'h-6 w-6' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c}>
    <path d="M12 7v14" />
    <path d="M3 18a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1" />
    <path d="M12 7a4 4 0 0 0-4-4H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8" />
    <path d="M12 7a4 4 0 0 1 4-4h4a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-8" />
  </svg>
);

const ClipboardCheck = ({ c = 'h-5 w-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c}>
    <rect width="8" height="4" x="8" y="2" rx="1" />
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <path d="m9 14 2 2 4-4" />
  </svg>
);

const Clipboard = ({ c = 'h-5 w-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c}>
    <rect width="8" height="4" x="8" y="2" rx="1" />
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
  </svg>
);

const Puzzle = ({ c = 'h-5 w-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c}>
    <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.471-.057-.94-.11-1.393-.11-.667 0-1.22.456-1.292 1.113-.072.637-.054 1.29-.054 1.292 0 .549-.448.994-.994.994H13.1c-.285 0-.548-.108-.753-.306-.203-.198-.307-.47-.307-.758 0-1.728-1.353-3.168-3.022-3.168H7.99c-.287 0-.552.124-.748.319-.196.195-.304.457-.304.733 0 .46.052 1.11.11 1.577a.98.98 0 0 1-.276.837L6.16 19.44c-.47.47-1.087.706-1.704.706s-1.233-.235-1.704-.706l-.86-.86c-.47-.47-.706-1.087-.706-1.704s.235-1.233.706-1.704l1.567-1.568a1.026 1.026 0 0 1 .877-.29c.47.058.932.11 1.377.11.667 0 1.22-.456 1.292-1.113.072-.637.054-1.29.054-1.292 0-.549.448-.995.994-.995h2.014c.285 0 .548.108.753.307.203.198.307.47.307.758 0 1.728 1.353 3.168 3.022 3.168h.002c.287 0 .552-.124.748-.319.196-.195.304-.457.304-.733 0-.46-.052-1.11-.11-1.577a.98.98 0 0 1 .276-.837l1.611-1.611c.47-.47 1.087-.706 1.704-.706" />
  </svg>
);

const Calendar = ({ c = 'h-5 w-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c}>
    <path d="M8 2v4" />
    <path d="M16 2v4" />
    <rect width="18" height="18" x="3" y="4" rx="2" />
    <path d="M3 10h18" />
  </svg>
);

const trust = [
  { icon: <Heart />, color: 'bg-blue-500', title: 'Компетентно', text: 'Материалы созданы при участии практикующих специалистов: педагогов, психологов и воспитателей ДОО.' },
  { icon: <Check />, color: 'bg-pink-500', title: 'Актуально', text: 'Информация соответствует принципам ФГОС ДО и учитывает реальные запросы современных родителей.' },
  { icon: <Users />, color: 'bg-purple-500', title: 'Доступно', text: 'Простой язык без сложных терминов. Бесплатный доступ 24/7 — с телефона или компьютера.' },
];

const tools = [
  { icon: <ClipboardCheck />, bg: 'bg-blue-500', title: 'Чек-лист', text: '«Я иду в детский сад!»' },
  { icon: <Clipboard />, bg: 'bg-pink-500', title: 'Памятка', text: '«Моя полная в шкафчик»' },
  { icon: <Puzzle />, bg: 'bg-purple-500', title: 'Список', text: '«Какие игрушки положить»' },
  { icon: <Calendar />, bg: 'bg-violet-500', title: 'Дневник', text: '«Адаптация ребенка»' },
];

const bannerItems = [
  { icon: <Users c="h-5 w-5" />, title: 'Для родителей', text: 'Уходит тревожность, появляется уверенность и понимание потребностей ребенка' },
  { icon: <Heart c="h-5 w-5" />, title: 'Для ребенка', text: 'Адаптация проходит мягко и быстро, ребенок чувствует себя защищенным' },
  { icon: <BookOpen c="h-5 w-5" />, title: 'Для детского сада', text: 'Растет доверие к педагогам, снижается количество конфликтов' },
];

const steps = [
  { num: '1', title: 'Зарегистрируйтесь', text: 'Создайте бесплатный аккаунт — это займёт меньше минуты.' },
  { num: '2', title: 'Выберите материалы', text: 'Скачайте чек-листы и памятки, которые нужны именно вашей семье.' },
  { num: '3', title: 'Слушайте голосовые', text: 'Короткие аудиосоветы от психологов и педагогов — прямо на странице статьи.' },
  { num: '4', title: 'Общайтесь', text: 'Задавайте вопросы сообществу и делитесь своим опытом.' },
];

const stats = [
  { num: '10+', label: 'полезных материалов' },
  { num: '3', label: 'статьи от специалистов' },
  { num: '24/7', label: 'бесплатный доступ' },
  { num: '100%', label: 'бесплатный проект' },
];

const faq = [
  {
    q: 'Сколько стоит пользование сайтом?',
    a: 'Ничего. Проект создан студентами педагогического колледжа и полностью бесплатен для родителей и педагогов.',
  },
  {
    q: 'С какого возраста материалы актуальны?',
    a: 'В первую очередь для детей 2–4 лет, которые идут в детский сад впервые. Часть советов пригодится и при переходе в старшие группы.',
  },
  {
    q: 'Кто пишет статьи и советы?',
    a: 'Студенты-педагоги под руководством наставников, а также практикующие психологи, воспитатели и родители-эксперты.',
  },
  {
    q: 'Можно ли распечатать чек-листы?',
    a: 'Да, все материалы в формате PDF — скачайте и распечатайте или сохраните в телефон.',
  },
];

export default function Home({ onNavigate }) {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      {/* Первый экран */}
      <section className="pt-14 text-center sm:pt-20">
        <h1 className="text-3xl font-extrabold sm:text-5xl">
          <span className="bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent">
            Счастливый ребенок
          </span>{' '}
          — в руках семьи и сада
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm text-slate-400 sm:text-base">
          Единое пространство для родителей и педагогов. Бесплатный помощник
          на этапе адаптации к детскому саду.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            onClick={() => onNavigate('assistant')}
            className="w-full max-w-xs px-4 py-2.5 text-sm bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-xl hover:from-blue-600 hover:to-pink-600 shadow-md hover:shadow-lg transition-all sm:w-auto sm:text-base"
          >
            Перейти к «Карманной помощи»
          </button>
        </div>
      </section>

      {/* О проекте */}
      <section className="mt-14 rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-center sm:p-10">
        <p className="mx-auto max-w-3xl text-sm text-slate-300 sm:text-base">
          Мы объединили родителей и педагогов, чтобы поступление в детский сад
          было радостным, а не тревожным событием. Здесь вы найдёте не просто
          теорию, а готовые инструменты: чек-листы, памятки и советы
          специалистов, написанные простым языком. Все материалы бесплатные
          и доступны 24/7.
        </p>
      </section>

      {/* Цифры проекта */}
      <section className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-center">
            <p className="bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-3xl font-extrabold text-transparent">
              {s.num}
            </p>
            <p className="mt-2 text-xs text-slate-400 sm:text-sm">{s.label}</p>
          </div>
        ))}
      </section>

      {/* Почему нам можно доверять */}
      <section className="mt-16">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">
          <span className="bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent">
            Почему нам можно доверять?
          </span>
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {trust.map((t) => (
            <div key={t.title} className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-center transition hover:border-zinc-600">
              <span className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full ${t.color} text-xl text-white`}>
                {t.icon}
              </span>
              <h3 className="mt-4 font-semibold text-white">{t.title}</h3>
              <p className="mt-2 text-xs text-slate-400 sm:text-sm">{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Как это работает */}
      <section className="mt-16">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Как это работает?
          </span>
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.num} className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-pink-500 font-bold text-white">
                {s.num}
              </span>
              <h3 className="mt-4 font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-xs text-slate-400 sm:text-sm">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Библиотека инструментов */}
      <section className="mt-16">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Библиотека инструментов для родителей
          </span>
        </h2>
        <p className="mt-2 text-center text-xs text-slate-400 sm:text-sm">
          Всегда актуальные материалы для скачивания, которые помогут вам и вашему ребенку
        </p>
        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {tools.map((t) => (
            <div key={t.title} className="flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900 p-5 transition hover:border-zinc-600">
              <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${t.bg} text-lg`}>
                {t.icon}
              </span>
              <h3 className="mt-4 font-semibold text-white">{t.title}</h3>
              <p className="mt-1 flex-1 text-xs text-slate-400 sm:text-sm">{t.text}</p>
              <button className="mt-4 self-start text-xs font-semibold text-pink-500 hover:text-pink-400">
                Скачать
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Градиентный баннер */}
      <section className="mt-16 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-6 sm:p-10">
        <h2 className="text-center text-xl font-bold text-white sm:text-2xl">
          Когда семья и сад действуют сообща, выигрывает ребенок
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {bannerItems.map((b) => (
            <div key={b.title} className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur">
              <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-lg">
                {b.icon}
              </span>
              <h3 className="mt-3 font-semibold text-white">{b.title}</h3>
              <p className="mt-2 text-xs text-white/80 sm:text-sm">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Вопросы и ответы */}
      <section className="mt-16">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Частые вопросы
          </span>
        </h2>
        <div className="mx-auto mt-8 max-w-3xl space-y-3">
          {faq.map((f) => (
            <details key={f.q} className="group rounded-2xl border border-zinc-800 bg-zinc-900 p-5 transition hover:border-zinc-600">
              <summary className="cursor-pointer list-none font-medium text-white">
                <span className="mr-2 text-pink-500 group-open:hidden">+</span>
                <span className="mr-2 hidden text-pink-500 group-open:inline">−</span>
                {f.q}
              </summary>
              <p className="mt-3 pl-5 text-sm text-slate-400">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Готовы начать */}
      <section className="py-16 text-center">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">Готовы начать?</h2>
        <p className="mt-2 text-xs text-slate-400 sm:text-sm">
          Присоединяйтесь к сообществу родителей и педагогов
        </p>
        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <button
            onClick={() => onNavigate('register')}
            className="w-full max-w-xs px-4 py-2.5 text-sm bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-xl hover:from-blue-600 hover:to-pink-600 shadow-md hover:shadow-lg transition-all sm:w-auto sm:text-base"
          >
            Зарегистрироваться
          </button>
          <button
            onClick={() => onNavigate('about')}
            className="w-full max-w-xs rounded-xl border border-pink-500 px-4 py-2.5 text-sm text-pink-500 transition hover:bg-pink-500/10 sm:w-auto sm:text-base"
          >
            Узнать больше
          </button>
        </div>
      </section>
    </div>
  );
}
