import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <main className="bg-white text-neutral-900">
      
      {/* Hero Section */}
      <section className="border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500">
              Projects
            </p>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Selected work and technical projects
            </h1>

            <p className="text-base md:text-lg text-neutral-600 leading-7">
              These projects reflect my experience in building practical applications,
              solving real-world problems, and working across mobile, web, and backend systems.
              Each project highlights my approach to clean design, usability, and technical execution.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <div
                key={p.title}
                className="transition duration-200 hover:translate-y-[-4px]"
              >
                <ProjectCard p={p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="rounded-3xl border border-neutral-200 bg-white p-8 md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              
              <div className="max-w-2xl">
                <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500">
                  More
                </p>

                <h3 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight">
                  Want to see more of my work?
                </h3>

                <p className="mt-3 text-neutral-600 leading-7">
                  I’m continuously building and improving projects that focus on usability,
                  performance, and solving real problems. More work is always in progress.
                </p>
              </div>

              <div className="flex gap-3">
                <a
                  href="https://github.com/nii-here"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-black px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  GitHub
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
}