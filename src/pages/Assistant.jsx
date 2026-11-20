import { useState, useRef, useEffect } from 'react';

const Headphones = ({ c = 'h-4 w-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c}>
    <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
  </svg>
);

const Mail = ({ c = 'h-4 w-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.971 5.927a2 2 0 0 1-2.058 0L2 7" />
  </svg>
);

const Phone = ({ c = 'h-4 w-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const Clock = ({ c = 'h-4 w-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

const HelpCircle = ({ c = 'h-4 w-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c}>
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <path d="M12 17h.01" />
  </svg>
);

const BookOpen = ({ c = 'h-4 w-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c}>
    <path d="M12 7v14" />
    <path d="M3 18a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1" />
    <path d="M12 7a4 4 0 0 0-4-4H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8" />
    <path d="M12 7a4 4 0 0 1 4-4h4a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-8" />
  </svg>
);

const ClipboardList = ({ c = 'h-4 w-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c}>
    <rect width="8" height="4" x="8" y="2" rx="1" />
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <path d="M9 12h6" />
    <path d="M9 16h4" />
  </svg>
);

const Book = ({ c = 'h-4 w-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c}>
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
  </svg>
);

const Puzzle = ({ c = 'h-4 w-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c}>
    <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.471-.057-.94-.11-1.393-.11-.667 0-1.22.456-1.292 1.113-.072.637-.054 1.29-.054 1.292 0 .549-.448.994-.994.994H13.1c-.285 0-.548-.108-.753-.306-.203-.198-.307-.47-.307-.758 0-1.728-1.353-3.168-3.022-3.168H7.99c-.287 0-.552.124-.748.319-.196.195-.304.457-.304.733 0 .46.052 1.11.11 1.577a.98.98 0 0 1-.276.837L6.16 19.44c-.47.47-1.087.706-1.704.706s-1.233-.235-1.704-.706l-.86-.86c-.47-.47-.706-1.087-.706-1.704s.235-1.233.706-1.704l1.567-1.568a1.026 1.026 0 0 1 .877-.29c.47.058.932.11 1.377.11.667 0 1.22-.456 1.292-1.113.072-.637.054-1.29.054-1.292 0-.549.448-.995.994-.995h2.014c.285 0 .548.108.753.307.203.198.307.47.307.758 0 1.728 1.353 3.168 3.022 3.168h.002c.287 0 .552-.124.748-.319.196-.195.304-.457.304-.733 0-.46-.052-1.11-.11-1.577a.98.98 0 0 1 .276-.837l1.611-1.611c.47-.47 1.087-.706 1.704-.706" />
  </svg>
);

const Notebook = ({ c = 'h-4 w-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const Message = ({ c = 'h-4 w-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c}>
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
  </svg>
);

const Send = ({ c = 'h-5 w-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c}>
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </svg>
);


const FAQS = [
  'Как подготовить ребёнка к саду?',
  'Что положить в шкафчик?',
  'Сколько длится адаптация?',
  'Как общаться с воспитателем?',
];

const MATERIALS = [
  { icon: <ClipboardList c="h-4 w-4 text-pink-400" />, title: 'Чек-лист подготовки к саду' },
  { icon: <Book c="h-4 w-4 text-pink-400" />, title: 'Список книг для адаптации' },
  { icon: <Puzzle c="h-4 w-4 text-pink-400" />, title: 'Игры для знакомства с садиком' },
  { icon: <Notebook c="h-4 w-4 text-pink-400" />, title: 'Дневник адаптации' },
];

const HINTS = ['адаптация', 'чек-лист', 'регистрация', 'педагог'];

const BOT_ANSWERS = [
  'Хороший вопрос! Адаптация обычно занимает 2–4 недели. Начните с коротких прогулок у садика и постепенного увеличения времени пребывания.',
  'Мы уже отвечаем на этот вопрос в статьях раздела «О проекте». Загляните туда после чата — там подробный разбор.',
  'Совет педагогов: держите спокойный ритуал прощания и передавайте воспитателю краткую информацию о настроении ребёнка.',
  'Спасибо за вопрос! Наш специалист ответит вам здесь или на почту в течение рабочего дня.',
];

function currentTime() {
  return new Date().toLocaleTimeString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
  });
}

export default function Assistant() {
  const [messages, setMessages] = useState([
    {
      from: 'bot',
      time: currentTime(),
      text: 'Здравствуйте! Я виртуальный помощник проекта «Счастливый ребёнок». Чем могу помочь?',
    },
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef(null);

    useEffect(() => {
    if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
    }, [messages]);

  const send = (text) => {
    const value = (text ?? input).trim();
    if (!value) return;

    setMessages((prev) => [...prev, { from: 'user', time: currentTime(), text: value }]);
    setInput('');

    setTimeout(() => {
      const reply =
        BOT_ANSWERS[Math.floor(Math.random() * BOT_ANSWERS.length)];
      setMessages((prev) => [...prev, { from: 'bot', time: currentTime(), text: reply }]);
    }, 900);
  };

  return (
    <div className="min-h-screen bg-[#0b0d12] py-10">
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-center text-4xl font-bold text-transparent">
          Карманный помощник
        </h1>
        <p className="mt-2 text-center text-sm text-slate-400">
          Ваш личный консультант по адаптации к детскому саду
        </p>

        <div className="mt-8 grid gap-5 lg:grid-cols-[280px_1fr]">
          {/* Левая колонка */}
          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-[#12141c] p-5">
                <h3 className="flex items-center gap-2 text-sm font-bold text-white">
                  <Headphones /> Связь с поддержкой
                </h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li className="flex items-center gap-2"><Mail c="h-4 w-4 text-blue-400" /> kseniyakolesnina@mail.ru</li>
                <li className="flex items-center gap-2"><Phone c="h-4 w-4 text-pink-400" /> +7 (965) 339-52-47</li>
                <li className="flex items-center gap-2"><Clock c="h-4 w-4 text-purple-400" /> Ежедневно: 9:00 – 21:00</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#12141c] p-5">
              <h3 className="flex items-center gap-2 text-sm font-bold text-white">
                <HelpCircle /> Частые вопросы
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {FAQS.map((faq) => (
                  <li key={faq} className="flex items-start gap-2">
                    <span className="mt-1 text-pink-500">•</span>
                    <button
                      onClick={() => send(faq)}
                      className="text-left hover:text-white"
                    >
                      {faq}
                    </button>
                  </li>
                ))}
              </ul>
              <button className="mt-4 text-sm font-semibold text-pink-500 hover:underline">
                Все вопросы →
              </button>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#12141c] p-5">
              <h3 className="flex items-center gap-2 text-sm font-bold text-white">
                <BookOpen /> Полезные материалы
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {MATERIALS.map((m) => (
                  <li key={m.title} className="flex items-center gap-2">
                    <span>{m.icon}</span>
                    <span className="hover:text-white">{m.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Чат */}
          <div className="flex min-h-[480px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#12141c]">
            <div className="flex items-center gap-3 bg-gradient-to-r from-blue-500 to-pink-500 px-5 py-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white">
                <Message c="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-bold text-white">Чат с поддержкой</p>
                <p className="text-xs text-white/80">Отвечаем быстро • Онлайн</p>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-5">
            {messages.map((msg, i) => (
                <div key={i}>
                <p className="text-xs text-slate-500">{msg.time}</p>
                <div
                    className={
                    msg.from === 'bot'
                        ? 'mt-1 max-w-[80%] rounded-xl rounded-tl-sm border border-white/10 bg-white/5 p-3 text-sm text-white'
                        : 'ml-auto mt-1 max-w-[80%] rounded-xl rounded-tr-sm bg-gradient-to-r from-blue-500 to-pink-500 p-3 text-sm text-white'
                    }
                >
                    {msg.text}
                </div>
                </div>
            ))}
            </div>

            <div className="border-t border-white/10 p-4">
              <div className="flex items-center gap-3">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && send()}
                  placeholder="Напишите ваш вопрос..."
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-blue-500"
                />
                <button
                  onClick={() => send()}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-pink-500 text-white transition-all hover:from-blue-600 hover:to-pink-600"
                  aria-label="Отправить"
                >
                  <Send />
                </button>
              </div>
              <p className="mt-2 text-center text-xs text-slate-500">
                Напишите:{' '}
                {HINTS.map((hint) => (
                  <button
                    key={hint}
                    onClick={() => send(hint)}
                    className="text-slate-400 hover:text-white"
                  >
                    {hint}{' '}
                  </button>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
