import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <main className="bg-white text-neutral-900">
      {/* Hero */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 md:py-20">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-neutral-500 sm:text-sm">
              Projects
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Selected work and technical projects
            </h1>

            <p className="text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8 md:text-lg">
              These projects reflect my experience in building practical
              applications, solving real-world problems, and working across
              mobile, web, and backend systems. Each project highlights my
              approach to usability, structure, and technical execution.
            </p>
          </div>
        </div>
      </section>

      {/* Intro / Framing */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-1">
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-neutral-500 sm:text-sm">
                Focus
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                Built around practical, real-world use
              </h2>
            </div>

            <div className="grid gap-4 md:col-span-2 sm:grid-cols-2">
              <div className="rounded-2xl border border-neutral-200 bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  Product Thinking
                </p>
                <p className="mt-3 text-sm leading-7 text-neutral-600">
                  I focus on projects that solve clear problems, improve usability,
                  and feel grounded in real user needs rather than just technical demos.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  Technical Range
                </p>
                <p className="mt-3 text-sm leading-7 text-neutral-600">
                  My work spans mobile apps, responsive websites, backend services,
                  and tools that connect design, functionality, and everyday use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="grid gap-5 md:grid-cols-2 md:gap-6">
            {projects.map((p) => (
              <div
                key={p.title}
                className="transition duration-200 hover:-translate-y-1"
              >
                <ProjectCard p={p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-neutral-500 sm:text-sm">
                  More
                </p>

                <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Want to see more of my work?
                </h3>

                <p className="mt-3 text-sm leading-7 text-neutral-600 sm:text-base">
                  I’m continuously building and improving projects that focus on
                  usability, performance, and solving real problems. More work is
                  always in progress.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="https://github.com/nii-here"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-black px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  View GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}