import { useEffect, useRef, useState } from 'react';
import { articles } from '../data/articles';

const IconEye = ({ c = 'h-4 w-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c}>
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

/* Плеер встроен прямо сюда — отдельный файл ArticlePlayer больше не нужен */
function AudioPlayer({ title, desc, src }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const audio = audioRef.current;
    if (playing) {
      audio?.pause();
      setPlaying(false);
      return;
    }
    setPlaying(true);
    if (audio && src) {
      audio.currentTime = 0;
      audio.play().catch(() => simulate());
    } else {
      simulate();
    }
  };

  /* если файла нет — секундная пауза, чтобы кнопка не «висела» */
  const simulate = () => {
    setTimeout(() => setPlaying(false), 1000);
  };

  const handleEnd = () => setPlaying(false);

  return (
    <div className="mt-6 rounded-xl border border-zinc-700 bg-zinc-800 p-4">
      <audio ref={audioRef} src={src} onEnded={handleEnd} preload="none" />
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggle}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white shadow-md hover:shadow-lg transition-all"
            aria-label={playing ? 'Пауза' : 'Слушать'}
          >
            {playing ? '⏸' : '▶'}
          </button>
          <div>
            <p className="text-sm font-semibold text-white">{title}</p>
            <p className="text-xs text-slate-500">{desc}</p>
          </div>
        </div>
        <span className="text-xs text-slate-500">0:01</span>
      </div>
    </div>
  );
}

export default function Article({ articleId, onNavigate }) {
  const article = articles.find((a) => a.id === articleId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [articleId]);

  if (!article) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <p className="text-slate-300">Статья не найдена.</p>
        <button
          type="button"
          onClick={() => onNavigate('articles')}
          className="mt-4 rounded-lg bg-gradient-to-r from-blue-500 to-pink-500 px-4 py-2 text-sm font-semibold text-white"
        >
          ← Ко всем статьям
        </button>
      </div>
    );
  }

  /* текст статьи может лежать в поле text (строка или массив) — обрабатываем оба варианта */
  const paragraphs = Array.isArray(article.text)
    ? article.text
    : article.text
      ? [article.text]
      : [];

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <button
        type="button"
        onClick={() => onNavigate('community')}
        className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
      >
        ← Назад к сообществу
      </button>

      <article className="mt-6 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
        {/* Градиентная шапка */}
        <div className="bg-gradient-to-r from-blue-600 to-pink-600 p-8">
          <span className="text-3xl">{article.icon}</span>
          <h1 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
            {article.title}
          </h1>
          <p className="mt-2 flex items-center gap-1.5 text-xs text-white/85">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
              <path d="M8 2v4" /><path d="M16 2v4" />
              <rect width="18" height="18" x="3" y="4" rx="2" />
              <path d="M3 10h18" />
            </svg>
            {article.meta}
          </p>
        </div>

        {/* Текст статьи */}
        <div className="space-y-3 p-6 sm:p-8">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-sm leading-relaxed text-slate-300 sm:text-base">
              {p}
            </p>
          ))}

          <AudioPlayer title={article.audio} desc={article.audioDesc} src={article.src} />

          <div className="flex items-center justify-between border-t border-zinc-800 pt-4">
            <button
              type="button"
              className="rounded-full border border-zinc-700 px-4 py-1.5 text-xs text-slate-300 transition hover:border-pink-500 hover:text-pink-400"
            >
              ♥ 0
            </button>
            <span className="flex items-center gap-1.5 text-xs text-slate-500">
              <IconEye /> {article.views ?? 0} просмотров
            </span>
          </div>
        </div>
      </article>
    </div>
  );
}
