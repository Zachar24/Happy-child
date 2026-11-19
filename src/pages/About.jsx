const reasons = [
  {
    icon: '📖', emoji: '💡', title: 'Советы экспертов',
    text: 'Слушайте практические подсказки от узких специалистов: детских психологов и врачей.',
  },
  {
    icon: '👥', emoji: '❤️', title: 'Опыт живых людей',
    text: 'Мы собрали лайфхаки от родителей, которые уже прошли этот путь. Никакой теории — только то, что работает на практике.',
  },
  {
    icon: '💬', emoji: '💛', title: 'Культура общения',
    text: 'Рассуждения, как выстроить доверительное общение воспитателя с семьёй в интересах вашего ребенка.',
  },
];

const doing = [
  {
    icon: '📖', color: 'bg-blue-500', emoji: '💼', title: 'Консультируем со знанием дела',
    text: 'Здесь вы найдете проверенные советы психологов и педагогов о том, как подготовить ребенка к саду и пережить его первые недели.',
  },
  {
    icon: '👥', color: 'bg-pink-500', emoji: '🤝', title: 'Делимся опытом',
    text: 'Вместе с опытными родителями мы собираем реальные лайфхаки — от выбора самого удобного рюкзака до того, которые помогут легче расставаться по утрам.',
  },
  {
    icon: '💬', color: 'bg-purple-500', emoji: '🎓', title: 'Учим общаться с воспитателями',
    text: 'Мы расскажем, как выстроить доверительный диалог с персоналом сада, чтобы вы всегда были в курсе событий.',
  },
  {
    icon: '🧩', color: 'bg-violet-500', emoji: '📚', title: 'Создаем полезный контент',
    text: 'У нас есть полезные материалы, с которыми можно смело готовиться к садику: сохраняйте, задавайте вопросы и получайте поддержку от тех, кто уже это прошёл.',
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
