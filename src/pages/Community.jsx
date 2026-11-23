import { useRef, useState } from 'react';
import { articles } from '../data/articles';

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
      audio.play().catch(() => setTimeout(() => setPlaying(false), 1000));
    } else {
      setTimeout(() => setPlaying(false), 1000);
    }
  };

  return (
    <div className="mt-4 rounded-xl border border-zinc-700 bg-zinc-800 p-4">
      <audio ref={audioRef} src={src} onEnded={() => setPlaying(false)} preload="none" />
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={toggle}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white shadow-md transition-all hover:shadow-lg"
          aria-label={playing ? 'Пауза' : 'Слушать'}
        >
          {playing ? '⏸' : '▶'}
        </button>
        <div>
          <p className="text-sm font-semibold text-white">{title}</p>
          <p className="text-xs text-slate-500">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function Community({ onOpenArticle, onNavigate }) {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6">
      <section className="pt-12 text-center">
        <h1 className="text-3xl font-extrabold sm:text-4xl">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Сообщество
          </span>
        </h1>
        <p className="mt-2 text-sm text-slate-400">Полезные статьи для родителей и педагогов</p>
      </section>

      <section className="mt-10 space-y-6">
        {articles.map((a) => (
          <article
            key={a.id}
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 transition hover:border-zinc-600 sm:p-6"
          >
            <div className="flex items-start gap-4">
              <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${a.bg} text-lg`}>
                {a.icon}
              </span>
              <div>
                <h2 className="text-lg font-bold text-white sm:text-xl">{a.title}</h2>
                <p className="mt-1 text-xs text-slate-500">{a.meta}</p>
                <p className="mt-2 text-sm text-slate-300">{a.text[0]}</p>
                <button
                  type="button"
                  onClick={() => onOpenArticle(a.id)}
                  className="mt-3 text-xs font-semibold text-pink-500 hover:text-pink-400"
                >
                  Читать статью →
                </button>
              </div>
            </div>

            <AudioPlayer title={a.audio} desc={a.audioDesc} src={a.src} />

            <div className="mt-4 border-t border-zinc-800 pt-3">
              <button type="button" className="text-xs text-slate-400 transition hover:text-pink-400">
                ♥ Нравится
              </button>
            </div>
          </article>
        ))}
      </section>

      <section className="my-12 rounded-2xl border border-zinc-800 bg-zinc-900 p-10 text-center">
        <span className="text-3xl text-pink-500">♥</span>
        <h2 className="mt-4 text-xl font-bold text-white">Больше статей скоро!</h2>
        <p className="mt-2 text-sm text-slate-400">Следите за обновлениями</p>
      </section>
    </div>
  );
}
