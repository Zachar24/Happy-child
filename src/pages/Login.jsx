import { useState } from 'react';

const Mail = ({ c = 'h-4 w-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.971 5.927a2 2 0 0 1-2.058 0L2 7" />
  </svg>
);

const Lock = ({ c = 'h-4 w-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c}>
    <rect width="18" height="11" x="3" y="11" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const Message = ({ c = 'h-4 w-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c}>
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
  </svg>
);

const Zap = ({ c = 'h-3.5 w-3.5' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c}>
    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const Puzzle = ({ c = 'h-3.5 w-3.5' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c}>
    <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.471-.057-.94-.11-1.393-.11-.667 0-1.22.456-1.292 1.113-.072.637-.054 1.29-.054 1.292 0 .549-.448.994-.994.994H13.1c-.285 0-.548-.108-.753-.306-.203-.198-.307-.47-.307-.758 0-1.728-1.353-3.168-3.022-3.168H7.99c-.287 0-.552.124-.748.319-.196.195-.304.457-.304.733 0 .46.052 1.11.11 1.577a.98.98 0 0 1-.276.837L6.16 19.44c-.47.47-1.087.706-1.704.706s-1.233-.235-1.704-.706l-.86-.86c-.47-.47-.706-1.087-.706-1.704s.235-1.233.706-1.704l1.567-1.568a1.026 1.026 0 0 1 .877-.29c.47.058.932.11 1.377.11.667 0 1.22-.456 1.292-1.113.072-.637.054-1.29.054-1.292 0-.549.448-.995.994-.995h2.014c.285 0 .548.108.753.307.203.198.307.47.307.758 0 1.728 1.353 3.168 3.022 3.168h.002c.287 0 .552-.124.748-.319.196-.195.304-.457.304-.733 0-.46-.052-1.11-.11-1.577a.98.98 0 0 1 .276-.837l1.611-1.611c.47-.47 1.087-.706 1.704-.706" />
  </svg>
);

const Check = ({ c = 'h-3.5 w-3.5' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const HeartMini = ({ c = 'h-3.5 w-3.5 text-pink-400' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={`inline ${c}`}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);


export default function Login({ onNavigate }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-pink-500 p-4">
      {/* Левая панель — фиксированная ширина */}
      <div className="hidden w-[440px] shrink-0 rounded-2xl bg-[#12141c] p-8 lg:block">
        <div className="flex items-center gap-3">
          <img src="/Happy-child/logo.svg" alt="Счастливый ребенок" className="h-10 w-10 rounded-lg"/>
          <span className="text-lg font-bold text-white">Счастливый ребёнок</span>
        </div>

        <h1 className="mt-10 text-3xl font-bold leading-tight text-white">
          Единое пространство для родителей{' '}
          <span className="bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
            и педагогов.
          </span>
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-slate-300">
          Бесплатный помощник в адаптации ребёнка к детскому саду. Советы
          психологов, статьи и живое сообщество — ответы на сложные вопросы
          в один клик.
        </p>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="flex items-center gap-2 text-sm font-semibold text-white">
            <Message /> Вопросы родителей
            </span>
            <span className="text-xs text-emerald-400">● Педагог на связи</span>
          </div>
          <div className="space-y-2.5">
            <div className="rounded-xl bg-white/10 p-3 text-sm text-white">
              Маша плачет каждое утро перед садиком. Что делать?
            </div>
            <div className="ml-4 rounded-xl bg-gradient-to-r from-blue-500 to-pink-500 p-3 text-sm text-white">
              Нормально в первые недели. Возьмите с собой «частичку дома» —
              игрушку. Отвечаем за 1–2 мин
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          <span className="flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-300">
            <Zap /> Ответ за 1–2 минуты
          </span>
          <span className="flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-300">
            <Puzzle /> Советы психологов
          </span>
          <span className="flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-300">
            <Check /> Бесплатно
          </span>
        </div>

        <p className="mt-6 text-xs text-slate-500">© 2026 Счастливый ребёнок</p>
      </div>

      {/* Зазор между панелями */}
      <div className="hidden w-48 shrink-0 lg:block" />

      {/* Правая панель — форма входа */}
      <div className="w-full max-w-sm lg:w-[364px] lg:shrink-0">
        <div className="w-full rounded-2xl border border-white/10 bg-[#12141c] p-8">
          <button
            onClick={() => onNavigate('home')}
            className="text-sm text-slate-400 hover:text-white"
          >
            ← На главную
          </button>

          <p className="mt-6 text-xs font-semibold text-blue-400">С возвращением</p>
          <h2 className="mt-1 text-2xl font-bold text-white">Войдите в аккаунт</h2>
          <p className="mt-1 text-sm text-slate-400">
            Укажите email — дальше подскажем, что делать.
          </p>

          <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-3 focus-within:border-blue-500">
              <span className="text-blue-400"><Mail /></span>
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
              />
            </div>

            <div className="flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-3 focus-within:border-blue-500">
              <span className="text-blue-400"><Lock /></span>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Пароль"
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-zinc-400 hover:text-white"
                aria-label={showPassword ? 'Скрыть пароль' : 'Показать пароль'}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </button>
            </div>

            <button className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-pink-500 py-3 text-sm font-semibold text-white transition-all hover:from-blue-600 hover:to-pink-600">
              Продолжить →
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-400">
            Ещё нет аккаунта?{' '}
            <button
              onClick={() => onNavigate('register')}
              className="font-semibold text-blue-400 hover:underline"
            >
              Создать аккаунт
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
