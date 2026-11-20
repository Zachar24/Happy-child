import { useState } from 'react';

const User = ({ c = 'h-4 w-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c}>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const ClipboardList = ({ c = 'h-5 w-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c}>
    <rect width="8" height="4" x="8" y="2" rx="1" />
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <path d="M9 12h6" />
    <path d="M9 16h4" />
  </svg>
);

const GraduationCap = ({ c = 'h-5 w-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c}>
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
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

const Shield = ({ c = 'h-3.5 w-3.5' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c}>
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
  </svg>
);


export default function Register({ onNavigate }) {
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-pink-500 p-4">
      {/* Левая панель — фиксированная ширина */}
      <div className="hidden w-[440px] shrink-0 rounded-2xl bg-[#12141c] p-8 lg:block">
        <div className="flex items-center gap-3">
          <img src="/Happy-child/logo.svg" alt="Счастливый ребенок" className="h-10 w-10 rounded-lg"/>
          <span className="text-lg font-bold text-white">Счастливый ребёнок</span>
        </div>

        <h1 className="mt-10 text-3xl font-bold leading-tight text-white">
          Ваш ребёнок идёт в садик?{' '}
          <span className="bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
            Мы поможем обоим.
          </span>
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-slate-300">
          Статьи и чек-листы по адаптации, личный кабинет и сообщество
          родителей и педагогов. Бесплатно, без скрытых платежей.
        </p>

        <div className="mt-6 space-y-3">
          <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3.5">
            <span className="text-pink-400"><ClipboardList /></span>
            <div>
              <p className="text-sm font-semibold text-white">Чек-листы адаптации</p>
              <p className="text-xs text-slate-400">
                По неделям: от первого дня до спокойных утров
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3.5">
            <span className="text-pink-400"><GraduationCap /></span>
            <div>
              <p className="text-sm font-semibold text-white">Ответы педагогов и психологов</p>
              <p className="text-xs text-slate-400">
                Задайте вопрос — получите совет специалиста
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3.5">
            <span className="text-pink-400"><Users /></span>
            <div>
              <p className="text-sm font-semibold text-white">Сообщество родителей</p>
              <p className="text-xs text-slate-400">
                Обсуждения, опыт и поддержка тех, кто уже прошёл это
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          <span className="flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-300">
            <Check /> Бесплатно
          </span>
          <span className="flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-300">
            <Shield /> Данные под защитой
          </span>
        </div>

        <p className="mt-6 text-xs text-slate-500">© 2026 Счастливый ребёнок</p>
      </div>

      {/* Зазор между панелями */}
      <div className="hidden w-48 shrink-0 lg:block" />

      {/* Правая панель — форма регистрации */}
      <div className="w-full max-w-sm lg:w-[364px] lg:shrink-0">
        <div className="w-full rounded-2xl border border-white/10 bg-[#12141c] p-8">
          <button
            onClick={() => onNavigate('home')}
            className="text-sm text-slate-400 hover:text-white"
          >
            ← На главную
          </button>

          <p className="mt-6 text-xs font-semibold text-blue-400">Шаг 1 из 1</p>
          <h2 className="mt-1 text-2xl font-bold text-white">Создайте аккаунт</h2>
          <p className="mt-1 text-sm text-slate-400">
            Сначала аккаунт — потом доступ ко всем материалам.
          </p>

          <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <p className="mb-1.5 text-xs text-slate-400">О вас</p>
              <div className="flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-3 focus-within:border-blue-500">
                <span className="text-blue-400"><User /></span>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
                />
              </div>
            </div>

            <div>
              <p className="mb-1.5 text-xs text-slate-400">Данные для входа</p>
              <div className="mb-3 flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-3 focus-within:border-blue-500">
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
                  placeholder="Придумайте пароль"
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
              <p className="mt-2 flex items-center gap-1.5 text-xs text-slate-500">
                <Check c="h-3 w-3" /> 8+ символов
                <Check c="h-3 w-3" /> буквы
                <Check c="h-3 w-3" /> цифры
              </p>
            </div>

            <label className="flex items-start gap-2 text-xs text-slate-300">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-0.5 accent-pink-500"
              />
              <span>
                Принимаю{' '}
                <span className="text-blue-400 underline">Пользовательское соглашение</span> и
                даю согласие на обработку персональных данных на условиях{' '}
                <span className="text-blue-400 underline">Политики</span>
              </span>
            </label>

            <button
              disabled={!agreed}
              className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-pink-500 py-3 text-sm font-semibold text-white transition-all hover:from-blue-600 hover:to-pink-600 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Создать аккаунт →
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-400">
            Уже с нами?{' '}
            <button
              onClick={() => onNavigate('login')}
              className="font-semibold text-blue-400 hover:underline"
            >
              Войти
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
