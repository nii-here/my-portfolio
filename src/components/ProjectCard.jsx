export default function ProjectCard({ p }) {
  const hasDemo = p.links?.demo && p.links.demo !== "#";
  const hasCode = p.links?.code && p.links.code !== "#";

  return (
    <article
      className={`group flex h-full flex-col justify-between rounded-3xl border bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md sm:p-6 ${
        p.featured ? "border-neutral-900" : "border-neutral-200"
      }`}
    >
      <div>
        {/* Top Meta */}
        <div className="flex flex-wrap items-center gap-2">
          {p.category && (
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
              {p.category}
            </span>
          )}

          {p.featured && (
            <span className="rounded-full bg-neutral-900 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-white">
              Featured
            </span>
          )}
        </div>

        {/* Title + Status */}
        <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <h3 className="max-w-xl text-xl font-semibold tracking-tight text-neutral-900 sm:text-2xl">
            {p.title}
          </h3>

          {p.status && (
            <span
              className={`inline-flex w-fit shrink-0 items-center rounded-full px-3 py-1 text-xs font-medium ${
                p.status === "Live"
                  ? "bg-neutral-900 text-white"
                  : "bg-neutral-100 text-neutral-700"
              }`}
            >
              {p.status}
            </span>
          )}
        </div>

        {/* Summary */}
        <p className="mt-4 text-sm leading-7 text-neutral-600 sm:text-base">
          {p.summary}
        </p>

        {/* Tech */}
        <div className="mt-5 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs font-medium text-neutral-700"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        {hasDemo && (
          <a
            href={p.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-black px-4 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
          >
            Live Demo
          </a>
        )}

        {hasCode && (
          <a
            href={p.links.code}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-neutral-300 px-4 py-2.5 text-sm font-medium text-neutral-900 transition hover:bg-neutral-50"
          >
            View Code
          </a>
        )}

        {!hasDemo && !hasCode && (
          <span className="text-sm text-neutral-500">
            More details coming soon
          </span>
        )}
      </div>
    </article>
  );
}