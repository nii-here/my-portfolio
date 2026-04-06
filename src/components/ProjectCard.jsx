export default function ProjectCard({ p }) {
  const hasDemo = p.links?.demo && p.links.demo !== "#";
  const hasCode = p.links?.code && p.links.code !== "#";

  return (
    <div className="group h-full rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="flex h-full flex-col justify-between">
        
        {/* Top */}
        <div>
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl font-semibold tracking-tight text-neutral-900">
              {p.title}
            </h3>

            {p.status && (
              <span
                className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ${
                  p.status === "Live"
                    ? "bg-neutral-900 text-white"
                    : "bg-neutral-100 text-neutral-700"
                }`}
              >
                {p.status}
              </span>
            )}
          </div>

          <p className="mt-4 text-sm leading-7 text-neutral-600">
            {p.summary}
          </p>

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

        {/* Bottom */}
        <div className="mt-8 flex items-center gap-3">
          {hasDemo && (
            <a
              href={p.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-black px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
            >
              Live Demo
            </a>
          )}

          {hasCode && (
            <a
              href={p.links.code}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-900 transition hover:bg-neutral-50"
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
      </div>
    </div>
  );
}