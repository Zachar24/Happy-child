import { useState } from 'react';

export default function Login({ onNavigate }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-pink-500 p-4">
      {/* Левая панель — фиксированная ширина */}
      <div className="hidden w-[440px] shrink-0 rounded-2xl bg-[#12141c] p-8 lg:block">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="Счастливый ребёнок" className="h-10 w-10 rounded-lg" />
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
              💬 Вопросы родителей
            </span>
            <span className="text-xs text-emerald-400">● Педагог на связи</span>
          </div>
          <div className="space-y-2.5">
            <div className="rounded-xl bg-white/10 p-3 text-sm text-white">
              Маша плачет каждое утро перед садиком. Что делать?
            </div>
            <div className="ml-4 rounded-xl bg-gradient-to-r from-blue-500 to-pink-500 p-3 text-sm text-white">
              Нормально в первые недели. Возьмите с собой «частичку дома» —
              игрушку. Отвечаем за 1–2 мин 💙
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-300">
            ⚡ Ответ за 1–2 минуты
          </span>
          <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-300">
            🧩 Советы психологов
          </span>
          <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-300">
            ✓ Бесплатно
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
              <span className="text-blue-400">✉</span>
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
              />
            </div>

            <div className="flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-3 focus-within:border-blue-500">
              <span className="text-blue-400">🔒</span>
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
