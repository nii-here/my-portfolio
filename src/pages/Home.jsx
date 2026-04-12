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
    items: ["SwiftUI", "React Native CLI", "iOS Development"],
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

const highlights = [
  {
    label: "Current Role",
    title: "Clinical Application Support Specialist",
    body: "Supporting clinical applications, troubleshooting technical issues, and helping improve day-to-day workflows in a healthcare environment.",
  },
  {
    label: "Background",
    title: "Computer Science Graduate",
    body: "Built a strong technical foundation in software development, problem-solving, and user-focused application design across web and mobile.",
  },
  {
    label: "Focus",
    title: "Systems, support, and real-world software",
    body: "Interested in opportunities that combine application support, software, systems thinking, and practical impact for users.",
  },
];

export default function Home() {
  return (
    <main className="bg-white text-neutral-900">
      {/* Hero */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 md:py-24">
          <div className="grid items-center gap-10 md:grid-cols-[1.15fr_0.85fr] md:gap-12">
            <div className="order-2 space-y-6 md:order-1">
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-neutral-500 sm:text-sm">
                Portfolio
              </p>

              <div className="space-y-4">
                <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                  Clement Tetteh
                </h1>

                <h2 className="max-w-2xl text-xl font-semibold leading-snug text-neutral-800 sm:text-2xl md:text-3xl">
                  Healthcare IT professional building software that solves real-world problems
                </h2>

                <p className="max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8 md:text-lg">
                  I work across healthcare IT, application support, and software development.
                  I enjoy solving technical problems, improving workflows, and building practical
                  products that make systems easier to use.
                </p>
              </div>

              <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap">
                <Link
                  to="/projects"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-black px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  View Projects
                </Link>

                <a
                  href="/resume.pdf"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-50"
                >
                  View Resume
                </a>
              </div>
            </div>

            <div className="order-1 flex justify-center md:order-2 md:justify-end">
              <div className="w-full max-w-[280px] rounded-3xl border border-neutral-200 bg-neutral-50 p-3 shadow-sm sm:max-w-[320px] md:max-w-[360px] md:p-4">
                <img
                  src={me}
                  alt="Portrait of Clement Tetteh"
                  loading="eager"
                  className="aspect-[4/5] w-full rounded-2xl object-cover object-[50%_10%]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-1">
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-neutral-500 sm:text-sm">
                Overview
              </p>
              <h3 className="mt-3 max-w-md text-2xl font-semibold tracking-tight sm:text-3xl">
                A foundation in support, systems, and development
              </h3>
              <p className="mt-4 max-w-md text-sm leading-7 text-neutral-600 sm:text-base">
                My background blends technical troubleshooting, application support,
                and hands-on software development in ways that translate well to
                real business and user needs.
              </p>
            </div>

            <div className="grid gap-4 md:col-span-2 sm:grid-cols-2">
              {highlights.slice(0, 2).map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-neutral-200 bg-white p-6"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                    {item.label}
                  </p>
                  <h4 className="mt-3 text-lg font-semibold leading-snug">
                    {item.title}
                  </h4>
                  <p className="mt-3 text-sm leading-7 text-neutral-600">
                    {item.body}
                  </p>
                </div>
              ))}

              <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  {highlights[2].label}
                </p>
                <h4 className="mt-3 text-lg font-semibold leading-snug">
                  {highlights[2].title}
                </h4>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-neutral-600">
                  {highlights[2].body}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project Callout */}
      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8 md:p-10">
            <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-neutral-500 sm:text-sm">
                  Featured Work
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Smart Pantry
                </h3>
                <p className="mt-4 text-sm leading-7 text-neutral-600 sm:text-base">
                  My strongest project is Smart Pantry, a product built to help users
                  manage pantry inventory, reduce food waste, and simplify grocery
                  planning through practical mobile features.
                </p>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl bg-neutral-50 p-5">
                  <p className="text-sm leading-7 text-neutral-700">
                    Built with SwiftUI and Firebase, the app includes features such as
                    OCR-based receipt scanning, household pantry sharing, reminders,
                    and inventory organization designed around real everyday use.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    to="/projects"
                    className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-black px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
                  >
                    Explore Projects
                  </Link>
                  <a
                    href="https://apps.apple.com/us/app/smart-pantry/id6749603910"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-50"
                  >
                    View App
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-neutral-500 sm:text-sm">
              Skills
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Technologies and tools I work with
            </h3>
            <p className="mt-4 text-sm leading-7 text-neutral-600 sm:text-base">
              A focused snapshot of the languages, frameworks, platforms, and tools
              I use across software and support work.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-6"
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
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-neutral-500 sm:text-sm">
                  Next
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Explore my work and experience
                </h3>
                <p className="mt-3 text-sm leading-7 text-neutral-600 sm:text-base">
                  Take a look at the projects I’ve built and the technical
                  experience I’m continuing to grow through my work.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  to="/projects"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-black px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Projects
                </Link>

                <a
                  href="/resume.pdf"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-50"
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