import { useEffect, useRef, useState } from 'react';

/* Заготовленные ответы — добавьте свои по образцу */
const REPLIES = [
  'Совет педагогов: держите спокойный ритуал прощания и передавайте воспитателю краткую информацию о настроении ребенка.',
  'Спасибо за вопрос! Наш специалист ответит вам здесь или на почту в течение рабочего дня.',
  'Хороший вопрос! Адаптация обычно занимает 2-4 недели. Начните с коротких прогулок у садика и постепенного увеличения времени пребывания.',
  'Соберите два комплекта сменной одежды, пижаму, любимую «сонную» игрушку и запасные варежки — подробности в статье «Что положить в шкафчик».',
];

const QUICK_QUESTIONS = [
  'Как общаться с воспитателем?',
  'Сколько длится адаптация?',
  'Что положить в шкафчик?',
  'Как подготовить ребенка к саду?',
];

const nowTime = () =>
  new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });

export default function Assistant() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      from: 'bot',
      time: nowTime(),
      text: 'Здравствуйте! Я виртуальный помощник проекта «Счастливый ребенок». Чем могу помочь?',
    },
  ]);
  const [input, setInput] = useState('');

  /* Ключ мессенджера: область прокручивается сама, а не вся страница */
  const listRef = useRef(null);

  /* После каждого нового сообщения прокручиваем список в самый низ —
     старые сообщения уходят вверх за пределы окна */
  useEffect(() => {
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages]);

  const send = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMsg = { id: Date.now(), from: 'user', time: nowTime(), text: trimmed };
    const botMsg = {
      id: Date.now() + 1,
      from: 'bot',
      time: nowTime(),
      text: REPLIES[Math.floor(Math.random() * REPLIES.length)],
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput('');
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <div className="flex h-[75vh] flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
        {/* Шапка чата */}
        <div className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-pink-600 p-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-lg">
            💬
          </span>
          <div>
            <p className="font-bold text-white">Чат с поддержкой</p>
            <p className="text-xs text-white/80">Отвечаем быстро • Онлайн</p>
          </div>
        </div>

        {/* Область сообщений: прокручивается сама */}
        <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto p-4">
          {messages.map((m) => (
            <div key={m.id}>
              <p className={`mb-1 text-[11px] text-slate-500 ${m.from === 'user' ? 'text-right' : ''}`}>
                {m.time}
              </p>
              <div className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={
                    m.from === 'user'
                      ? 'max-w-[80%] rounded-2xl rounded-br-sm bg-gradient-to-r from-blue-500 to-pink-500 px-4 py-2.5 text-sm text-white'
                      : 'max-w-[80%] rounded-2xl rounded-bl-sm border border-zinc-800 bg-zinc-800 px-4 py-2.5 text-sm text-slate-200'
                  }
                >
                  {m.text}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Быстрые вопросы */}
        <div className="flex gap-2 overflow-x-auto border-t border-zinc-800 px-4 py-2">
          {QUICK_QUESTIONS.map((q) => (
            <button
              key={q}
              type="button"
              onClick={() => send(q)}
              className="shrink-0 rounded-full border border-zinc-700 px-3 py-1 text-xs text-slate-300 transition hover:border-pink-500 hover:text-pink-400"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Поле ввода */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
          className="flex items-center gap-2 border-t border-zinc-800 p-3"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Напишите ваш вопрос..."
            className="flex-1 rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none focus:border-pink-500"
          />
          <button
            type="submit"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-pink-500 text-white transition hover:opacity-90"
            aria-label="Отправить"
          >
            ➤
          </button>
        </form>
      </div>
    </div>
  );
}
