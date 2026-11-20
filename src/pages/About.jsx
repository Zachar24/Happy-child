const BookOpen = ({ c = 'h-5 w-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c}>
    <path d="M12 7v14" />
    <path d="M3 18a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1" />
    <path d="M12 7a4 4 0 0 0-4-4H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8" />
    <path d="M12 7a4 4 0 0 1 4-4h4a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-8" />
  </svg>
);

const Users = ({ c = 'h-5 w-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const Message = ({ c = 'h-5 w-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c}>
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
  </svg>
);

const Lightbulb = ({ c = 'h-4 w-4 text-yellow-300' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`inline ${c}`}>
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
    <path d="M9 18h6" />
    <path d="M10 22h4" />
  </svg>
);

const Heart = ({ c = 'h-4 w-4 text-red-400' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={`inline ${c}`}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

const Briefcase = ({ c = 'h-5 w-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c}>
    <rect width="20" height="14" x="2" y="7" rx="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const GraduationCap = ({ c = 'h-5 w-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c}>
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

const Book = ({ c = 'h-5 w-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c}>
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
  </svg>
);

const Puzzle = ({ c = 'h-5 w-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c}>
    <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.471-.057-.94-.11-1.393-.11-.667 0-1.22.456-1.292 1.113-.072.637-.054 1.29-.054 1.292 0 .549-.448.994-.994.994H13.1c-.285 0-.548-.108-.753-.306-.203-.198-.307-.47-.307-.758 0-1.728-1.353-3.168-3.022-3.168H7.99c-.287 0-.552.124-.748.319-.196.195-.304.457-.304.733 0 .46.052 1.11.11 1.577a.98.98 0 0 1-.276.837L6.16 19.44c-.47.47-1.087.706-1.704.706s-1.233-.235-1.704-.706l-.86-.86c-.47-.47-.706-1.087-.706-1.704s.235-1.233.706-1.704l1.567-1.568a1.026 1.026 0 0 1 .877-.29c.47.058.932.11 1.377.11.667 0 1.22-.456 1.292-1.113.072-.637.054-1.29.054-1.292 0-.549.448-.995.994-.995h2.014c.285 0 .548.108.753.307.203.198.307.47.307.758 0 1.728 1.353 3.168 3.022 3.168h.002c.287 0 .552-.124.748-.319.196-.195.304-.457.304-.733 0-.46-.052-1.11-.11-1.577a.98.98 0 0 1 .276-.837l1.611-1.611c.47-.47 1.087-.706 1.704-.706" />
  </svg>
);

const Leaf = ({ c = 'h-4 w-4 text-green-400' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`inline ${c}`}>
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
);

const ThumbsUp = ({ c = 'h-4 w-4 text-white' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`inline ${c}`}>
    <path d="M7 10v12" />
    <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
  </svg>
);

const Sparkles = ({ c = 'h-4 w-4 text-white' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`inline ${c}`}>
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
  </svg>
);


const reasons = [
  { icon: <BookOpen />, emoji: <Lightbulb />, title: 'Советы экспертов', text: 'Слушайте практические подсказки от узких специалистов: детских психологов и врачей.' },
  { icon: <Users />, emoji: <Heart />, title: 'Опыт живых людей', text: 'Мы собрали лайфхаки от родителей, которые уже прошли этот путь. Никакой теории — только то, что работает на практике.' },
  { icon: <Message />, emoji: <Heart c="h-4 w-4 text-yellow-300" />, title: 'Культура общения', text: 'Рассуждения, как выстроить доверительное общение воспитателя с семьёй в интересах вашего ребенка.' },
];

const doing = [
  {
    icon: <BookOpen />,
    color: 'bg-blue-500',
    emoji: <Briefcase />,
    title: 'Консультируем со знанием дела',
    text: 'Здесь вы найдете проверенные советы психологов и педагогов о том, как подготовить ребенка к саду и поддержать его в первые недели.',
  },
  {
    icon: <Users />,
    color: 'bg-pink-500',
    emoji: <Users c="h-4 w-4 text-pink-400" />,
    title: 'Делимся опытом',
    text: 'Вместе с опытными родителями мы собираем реальные лайфхаки: от выбора самого удобного рюкзака до ритуалов, которые помогут легче расставаться по утрам.',
  },
  {
    icon: <Message />,
    color: 'bg-purple-500',
    emoji: <GraduationCap c="h-4 w-4 text-purple-400" />,
    title: 'Учим общаться с воспитателями',
    text: 'Мы расскажем, как выстроить доверительный диалог с персоналом сада, чтобы вы всегда были спокойны за своего ребенка.',
  },
  {
    icon: <Puzzle />,
    color: 'bg-violet-500',
    emoji: <Book c="h-4 w-4 text-purple-400" />,
    title: 'Создаем полезный контент',
    text: 'У нас вы не просто читаете статьи, а становитесь частью процесса: участвуете в обсуждениях, задаете вопросы и получаете поддержку от тех, кто уже это прошел.',
  },
];


export default function About({ onNavigate }) {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6">
      {/* Градиентный герой */}
      <section className="mt-8 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-fuchsia-600 p-8 text-center sm:p-12">
        <h1 className="text-2xl font-extrabold text-white sm:text-4xl">
          Проект «Уютный переход:<br />в садик с любовью»
        </h1>
        <p className="mt-4 text-sm text-white/90 sm:text-base">
          Современные подходы к адаптации, чтобы первый шаг в сад был мягким и радостным!
        </p>
        <p className="mt-4 text-lg tracking-widest text-white/80">♡ ♡ ♡</p>
      </section>

      {/* Садик без слёз */}
      <section className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-6 sm:p-10">
        <h2 className="text-xl font-bold text-blue-400 sm:text-2xl">
          Садик без слёз? Это возможно! 🌿
        </h2>
        <p className="mt-4 text-sm text-slate-300 sm:text-base">
          Первый поход в детский сад — важный шаг не только для малыша, но и для всей семьи.
          Как часто этот праздник омрачается тревогой, страхом разлуки и утренними капризами...
          Мы уверены, так быть не должно!
        </p>
        <blockquote className="mt-6 rounded-xl border-l-4 border-pink-500 bg-zinc-800 p-5 text-sm text-slate-200 sm:text-base">
          «Уютный переход в садик с любовью» — это проект, созданный студентами
          педагогического колледжа специально для вас. Мы объединили свежие знания
          современной педагогики, мудрость опытных наставников и реальные лайфхаки от
          родителей, чтобы превратить адаптацию в бережное и радостное приключение.
        </blockquote>
        <p className="mt-6 text-sm text-slate-300 sm:text-base">
          Здесь вы не найдете сухих лекций. Только живое общение, проверенные рекомендации и
          поддержка тех, кто действительно понимает, что проходят мамы и папы первосадовцев...
          то есть, первосадовцы! 😊
        </p>
        <p className="mt-4 text-sm font-medium text-pink-400 sm:text-base">
          🌿 Присоединяйтесь к нашему уютному сообществу. Вместе мы сделаем первый шаг в
          большой мир мягким!
        </p>
      </section>

      {/* Почему стоит быть с нами */}
      <section className="mt-8 rounded-2xl bg-gradient-to-r from-blue-600 to-pink-600 p-6 sm:p-10">
        <h2 className="text-center text-xl font-bold text-white sm:text-2xl">
          Почему вам стоит быть с нами?
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.title} className="rounded-2xl bg-black/25 p-6 text-center">
              <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-lg">
                {r.icon}
              </span>
              <h3 className="mt-4 font-semibold text-white">
                {r.emoji} {r.title}
              </h3>
              <p className="mt-2 text-xs text-white/85 sm:text-sm">{r.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-white sm:text-base">
          Заходите к нам на огонек! Давайте растить счастливых детей без лишнего стресса 👉
        </p>
      </section>

      {/* Что мы делаем */}
      <section className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-6 sm:p-10">
        <h2 className="text-center text-xl font-bold text-purple-400 sm:text-2xl">
          Что мы делаем?
        </h2>
        <div className="mt-8 space-y-6">
          {doing.map((d) => (
            <div key={d.title} className="flex gap-4">
              <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${d.color} text-lg`}>
                {d.icon}
              </span>
              <div>
                <h3 className="font-semibold text-white">
                  {d.emoji} {d.title}
                </h3>
                <p className="mt-1 text-sm text-slate-400">{d.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Кто мы */}
      <section className="mt-8 rounded-2xl bg-zinc-800/60 p-6 text-center sm:p-10">
        <h2 className="text-xl font-bold text-purple-400 sm:text-2xl">Кто мы</h2>
        <span className="mx-auto mt-6 flex h-14 w-14 items-center justify-center rounded-full bg-pink-500/20 text-2xl text-pink-500">
          ♥
        </span>
        <p className="mx-auto mt-6 max-w-2xl text-sm text-slate-300 sm:text-base">
          Мы — команда инициативных студентов, которые горят своим делом и хотят внедрять
          современные подходы в дошкольное образование. Рядом с нами — мудрые наставники
          и родители-практики, готовые делиться секретами своего материнства и отцовства.
        </p>
        <div className="mx-auto mt-6 max-w-2xl rounded-xl bg-black/60 p-5">
          <p className="text-sm text-slate-200 sm:text-base">
            Присоединяйтесь к нашему уютному сообществу. Здесь каждый найдет поддержку,
            понимание и полезные знания.
          </p>
          <p className="mt-2 text-xs font-medium text-pink-400 sm:text-sm">
            Вместе мы сделаем переход в садик временем радостных открытий! 🎉
          </p>
        </div>
        <button
          onClick={() => onNavigate('community')}
          className="mt-8 px-3 py-2 text-sm sm:px-4 sm:text-base bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-xl hover:from-blue-600 hover:to-pink-600 shadow-md hover:shadow-lg transition-all"
        >
          Присоединиться к сообществу
        </button>
      </section>
    </div>
  );
}
