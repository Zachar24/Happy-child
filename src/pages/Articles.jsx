import { articles } from '../data/articles';

const ArrowRight = ({ c = 'h-4 w-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const IconEye = ({ c = 'h-4 w-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c}>
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export default function Articles({ onOpenArticle }) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-extrabold sm:text-4xl">
        Статьи для родителей
      </h1>
      <p className="mt-2 text-slate-300">
        Практические материалы про детский сад: адаптация, сборы и поддержка ребенка.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => {
          const preview = Array.isArray(article.text)
            ? article.text[0]
            : article.text || '';
          const views = article.views ?? 0;

          return (
            <article
              key={article.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#12141c] transition hover:border-white/25"
            >
              <div className={`flex h-32 items-center justify-center text-white ${article.bg || 'bg-gradient-to-br from-blue-500 to-pink-600'}`}>
                {article.icon}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h2 className="text-lg font-bold leading-snug text-white">
                  {article.title}
                </h2>
                <p className="mt-1 text-xs text-slate-400">{article.meta}</p>

                {preview && (
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-300">
                    {String(preview).slice(0, 120)}…
                  </p>
                )}

                <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="flex items-center gap-1.5 text-xs text-slate-500">
                    <IconEye /> {views} просмотров
                  </span>
                  <button
                    type="button"
                    onClick={() => onOpenArticle(article.id)}
                    className="flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300"
                  >
                    Читать <ArrowRight />
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

