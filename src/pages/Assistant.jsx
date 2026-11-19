import { useState, useRef, useEffect } from 'react';

const FAQS = [
  'Как подготовить ребёнка к саду?',
  'Что положить в шкафчик?',
  'Сколько длится адаптация?',
  'Как общаться с воспитателем?',
];

const MATERIALS = [
  { icon: '📋', title: 'Чек-лист подготовки к саду' },
  { icon: '📚', title: 'Список книг для адаптации' },
  { icon: '🧩', title: 'Игры для знакомства с садиком' },
  { icon: '📔', title: 'Дневник адаптации' },
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
                🎧 Связь с поддержкой
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">✉</span> kseniyakolesnina@mail.ru
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-pink-400">📞</span> +7 (965) 339-52-47
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">🕘</span> Ежедневно: 9:00 – 21:00
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#12141c] p-5">
              <h3 className="flex items-center gap-2 text-sm font-bold text-white">
                ❓ Частые вопросы
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
                📖 Полезные материалы
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
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
                💬
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
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-pink-500 text-lg text-white transition-all hover:from-blue-600 hover:to-pink-600"
                  aria-label="Отправить"
                >
                  ➤
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
