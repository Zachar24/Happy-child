const trust = [
  {
    icon: '♥', color: 'bg-blue-500',
    title: 'Компетентно',
    text: 'Материалы созданы при участии практикующих специалистов: педагогов, психологов и воспитателей ДОО.',
  },
  {
    icon: '✓', color: 'bg-pink-500',
    title: 'Актуально',
    text: 'Информация соответствует принципам ФГОС ДО и учитывает реальные запросы современных родителей.',
  },
  {
    icon: '👥', color: 'bg-purple-500',
    title: 'Доступно',
    text: 'Простой язык без сложных терминов. Бесплатный доступ 24/7 — с телефона или компьютера.',
  },
];

const tools = [
  { icon: '✅', bg: 'bg-blue-500', title: 'Чек-лист', text: '«Я иду в детский сад!»' },
  { icon: '📋', bg: 'bg-pink-500', title: 'Памятка', text: '«Моя полная в шкафчик»' },
  { icon: '🧩', bg: 'bg-purple-500', title: 'Список', text: '«Какие игрушки положить»' },
  { icon: '📅', bg: 'bg-violet-500', title: 'Дневник', text: '«Адаптация ребенка»' },
];

const bannerItems = [
  { icon: '👥', title: 'Для родителей', text: 'Уходит тревожность, появляется уверенность и понимание потребностей ребенка' },
  { icon: '♥', title: 'Для ребенка', text: 'Адаптация проходит мягко и быстро, ребенок чувствует себя защищенным' },
  { icon: '📖', title: 'Для детского сада', text: 'Растет доверие к педагогам, снижается количество конфликтов' },
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
