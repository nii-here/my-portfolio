import { Link } from "react-router-dom";
import me from "../assets/clement.jpeg";

const skillGroups = [
  {
    title: "Languages",
    items: ["Swift", "JavaScript", "Python", "C++", "Java", "SQL", "HTML/CSS"],
  },
  {
    title: "Frontend",
    items: ["React.js", "Tailwind CSS", "Vite", "Responsive UI Design"],
  },
  {
    title: "Mobile",
    items: ["SwiftUI", "React Native CLI", "iOS App Development"],
  },
  {
    title: "Backend & Database",
    items: ["Node.js", "Express", "Firebase", "Firestore", "Firebase Auth"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "IntelliJ", "Xcode"],
  },
];

export default function Home() {
  return (
    <main className="bg-white text-neutral-900">
      {/* Hero Section */}
      <section className="border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="grid items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500">
                Portfolio
              </p>

              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                  Clement
                </h1>

                <h2 className="text-xl md:text-2xl font-semibold text-neutral-700 leading-snug">
                  Clinical Application Support Specialist with a Computer Science background
                </h2>

                <p className="max-w-2xl text-base md:text-lg text-neutral-600 leading-8">
                  I work at the intersection of healthcare IT, application support,
                  and software development. I enjoy solving technical problems,
                  improving user workflows, and building practical products that make
                  everyday systems easier to use.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center rounded-xl bg-black px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  View Projects
                </Link>

                <a
                  href="/resume.pdf"
                  className="inline-flex items-center justify-center rounded-xl border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-50"
                >
                  View Resume
                </a>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-4 shadow-sm">
                <img
                  src={me}
                  alt="Clement portrait"
                  loading="eager"
                  className="h-72 w-72 md:h-80 md:w-80 rounded-2xl object-cover object-[50%_10%]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-1">
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500">
                Overview
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                A professional foundation in support, systems, and development
              </h3>
            </div>

            <div className="md:col-span-2">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-neutral-200 p-6">
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
                    Current Role
                  </h4>
                  <p className="mt-3 text-lg font-semibold">
                    Clinical Application Support Specialist @ Tapestry 360 Health
                  </p>
                  <p className="mt-2 text-sm leading-7 text-neutral-600">
                    Supporting clinical applications, troubleshooting user issues,
                    and helping improve day-to-day technology workflows in a
                    healthcare environment.
                  </p>
                </div>

                <div className="rounded-2xl border border-neutral-200 p-6">
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
                    Background
                  </h4>
                  <p className="mt-3 text-lg font-semibold">
                    Computer Science Graduate
                  </p>
                  <p className="mt-2 text-sm leading-7 text-neutral-600">
                    Strong foundation in software development, problem-solving,
                    and building user-focused applications across web and mobile
                    platforms.
                  </p>
                </div>

                <div className="rounded-2xl border border-neutral-200 p-6 sm:col-span-2">
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
                    Career Direction
                  </h4>
                  <p className="mt-3 text-sm leading-7 text-neutral-600">
                    I am especially interested in roles that combine software,
                    systems, support, and real-world user impact. My goal is to
                    continue growing in technology-focused positions where I can
                    apply both technical skill and practical problem-solving.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="max-w-2xl">
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500">
              Skills
            </p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight">
              Technologies and tools I work with
            </h3>
            <p className="mt-4 text-neutral-600 leading-7">
              A focused snapshot of the languages, frameworks, platforms, and
              tools I use across software and support work.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
              >
                <h4 className="text-lg font-semibold">{group.title}</h4>

                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-sm text-neutral-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="rounded-3xl border border-neutral-200 bg-white p-8 md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500">
                  Next
                </p>
                <h3 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight">
                  Explore my work and experience
                </h3>
                <p className="mt-3 text-neutral-600 leading-7">
                  Take a look at the projects I’ve built and the practical
                  technical experience I’m continuing to grow through my work.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center rounded-xl bg-black px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Projects
                </Link>

                <a
                  href="/resume.pdf"
                  className="inline-flex items-center justify-center rounded-xl border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-50"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}