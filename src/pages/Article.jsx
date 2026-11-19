import { useRef, useState } from 'react';

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

export default function Article({ article, onBack }) {
  if (!article) return null;

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
      >
        ← Назад к статьям
      </button>

      <article className="mt-6 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
        {/* Градиентная шапка */}
        <div className="bg-gradient-to-r from-blue-600 to-pink-600 p-8">
          <span className="text-3xl">{article.icon}</span>
          <h1 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
            {article.title}
          </h1>
          <p className="mt-2 text-xs text-white/85">📅 {article.meta}</p>
        </div>

        {/* Текст статьи */}
        <div className="space-y-3 p-6 sm:p-8">
          {article.text.map((p, i) => (
            <p key={i} className="text-sm leading-relaxed text-slate-300 sm:text-base">
              {p}
            </p>
          ))}

          <AudioPlayer title={article.audio} desc={article.audioDesc} src={article.src} />

          <div className="flex items-center justify-between border-t border-zinc-800 pt-4">
            <button className="rounded-full border border-zinc-700 px-4 py-1.5 text-xs text-slate-300 transition hover:border-pink-500 hover:text-pink-400">
              ♥ 0
            </button>
            <span className="text-xs text-slate-500">👁 {article.views} просмотров</span>
          </div>
        </div>
      </article>
    </div>
  );
}
