import { useState } from 'react';
import { login } from '../auth';

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

const Shield = ({ c = 'h-3.5 w-3.5' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c}>
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
  </svg>
);

const Heart = ({ c = 'h-5 w-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

export default function Login({ onNavigate, onAuth }) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) return setError('Введите email');
    if (!password) return setError('Введите пароль');

    const res = login(email, password);
    if (!res.ok) return setError(res.error);

    onAuth();
    onNavigate('home');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-pink-500 p-4">
      {/* Левая панель */}
      <div className="hidden w-[440px] shrink-0 rounded-2xl bg-[#12141c] p-8 lg:block">
        <div className="flex items-center gap-3">
          <img src="/Happy-child/logo.svg" alt="Счастливый ребёнок" className="h-10 w-10 rounded-lg" />
          <span className="text-lg font-bold text-white">Счастливый ребёнок</span>
        </div>

        <h1 className="mt-10 text-3xl font-bold leading-tight text-white">
          С возвращением!{' '}
          <span className="bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
            Продолжим путь.
          </span>
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-slate-300">
          Войдите, чтобы вернуться к чек-листам адаптации, своим статьям
          и сообществу родителей.
        </p>

        <div className="mt-6 flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3.5">
          <span className="text-pink-400"><Heart /></span>
          <div>
            <p className="text-sm font-semibold text-white">Мы рядом</p>
            <p className="text-xs text-slate-400">
              Чат поддержки работает ежедневно с 9:00 до 21:00
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          <span className="flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-300">
            <Shield /> Данные под защитой
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
            type="button"
            onClick={() => onNavigate('home')}
            className="text-sm text-slate-400 hover:text-white"
          >
            ← На главную
          </button>

          <h2 className="mt-6 text-2xl font-bold text-white">С возвращением</h2>
          <p className="mt-1 text-sm text-slate-400">
            Войдите в свой аккаунт.
          </p>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div className="flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-3 focus-within:border-blue-500">
              <span className="text-blue-400"><Mail /></span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
              />
            </div>

            <div className="flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-3 focus-within:border-blue-500">
              <span className="text-blue-400"><Lock /></span>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

            {error && (
              <p className="rounded-lg bg-red-500/10 px-3 py-2 text-xs text-red-400">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-pink-500 py-3 text-sm font-semibold text-white transition-all hover:from-blue-600 hover:to-pink-600"
            >
              Войти →
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-400">
            Ещё нет аккаунта?{' '}
            <button
              type="button"
              onClick={() => onNavigate('register')}
              className="font-semibold text-blue-400 hover:underline"
            >
              Зарегистрироваться
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
