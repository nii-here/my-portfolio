import { useEffect, useState } from "react";

const funFacts = [
  "Based in the Chicago area.",
  "I can talk basketball for hours.",
  "I enjoy sports, especially basketball and soccer.",
  "I like action video games and competitive games like Fortnite.",
  "I enjoy weekend motorcycle rides.",
  "I love traveling and exploring new places.",
  "I have a Pyredoodle named Coco.",
  "I’m a big Marvel fan, and Black Panther is one of my favorite characters.",
  "I enjoy trying new restaurants and different cuisines.",
];

const corePoints = [
  {
    label: "Who I am",
    title: "Technical, practical, and user-focused",
    body: "I enjoy building software that is clean, useful, and easy to interact with. I care about thoughtful design, maintainable code, and technology that helps people solve real problems.",
  },
  {
    label: "How I work",
    title: "Structured and consistent",
    body: "I like to break problems into smaller steps, focus on clarity, test as I go, and keep the user experience simple. Whether I’m troubleshooting an issue or building a feature, I try to work with intention and consistency.",
  },
  {
    label: "What stands out",
    title: "A mix of support and development",
    body: "My background in software development, combined with my current work in application support, has helped me build both technical skill and a strong understanding of real-world workflows and end users.",
  },
];

const highlights = [
  "Shipped Smart Pantry on the App Store with OCR-based receipt scanning, reminders, and donation support.",
  "Built a clean marketing website to present the Smart Pantry product and its feature set.",
  "Developed strong habits around version control, project organization, iterative improvement, and technical documentation.",
];

function FunFactsSlider({ items, interval = 4000 }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % items.length), interval);
    return () => clearInterval(id);
  }, [items.length, interval]);

  const prev = () => setI((v) => (v - 1 + items.length) % items.length);
  const next = () => setI((v) => (v + 1) % items.length);

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="flex min-h-[84px] items-center justify-center px-4 text-center sm:px-6">
        <p className="text-sm leading-7 text-neutral-700 sm:text-base">
          {items[i]}
        </p>
      </div>

      <div className="mt-5 flex items-center justify-center gap-3">
        <button
          onClick={prev}
          className="inline-flex min-h-[40px] min-w-[40px] items-center justify-center rounded-lg border border-neutral-300 px-3 py-1.5 text-sm transition hover:bg-neutral-50"
          aria-label="Previous"
        >
          ‹
        </button>

        <div className="flex items-center gap-1.5">
          {items.map((_, idx) => (
            <span
              key={idx}
              className={`h-2 w-2 rounded-full ${
                idx === i ? "bg-black" : "bg-neutral-300"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="inline-flex min-h-[40px] min-w-[40px] items-center justify-center rounded-lg border border-neutral-300 px-3 py-1.5 text-sm transition hover:bg-neutral-50"
          aria-label="Next"
        >
          ›
        </button>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <main className="bg-white text-neutral-900">
      {/* Hero */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 md:py-20">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-neutral-500 sm:text-sm">
              About
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              A little more about me
            </h1>

            <p className="text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8 md:text-lg">
              I’m Clement, a Clinical Application Support Specialist with a
              Computer Science background. My experience sits across healthcare
              IT, application support, and software development, with a strong
              focus on solving technical problems and building practical,
              user-centered solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Core Overview */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-1">
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-neutral-500 sm:text-sm">
                Overview
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                Technical, practical, and always learning
              </h2>
              <p className="mt-4 max-w-md text-sm leading-7 text-neutral-600 sm:text-base">
                I care about building useful things, improving systems, and
                continuing to grow in work that combines technology with real
                user impact.
              </p>
            </div>

            <div className="grid gap-4 md:col-span-2">
              {corePoints.map((point) => (
                <div
                  key={point.label}
                  className="rounded-2xl border border-neutral-200 bg-white p-6"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                    {point.label}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold leading-snug">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-neutral-600 sm:text-base">
                    {point.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Highlights + Current Focus */}
      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-neutral-500 sm:text-sm">
                Highlights
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                A few things I’m proud of
              </h2>

              <ul className="mt-6 space-y-4">
                {highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-black" />
                    <p className="text-sm leading-7 text-neutral-600 sm:text-base">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-neutral-500 sm:text-sm">
                Currently Focused On
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                Growing in healthcare IT and software
              </h2>
              <p className="mt-4 text-sm leading-7 text-neutral-600 sm:text-base">
                Right now, I’m continuing to grow in healthcare IT while also
                expanding my software and systems knowledge through personal
                projects and ongoing learning. I’m especially interested in work
                that combines support, systems, and development in a way that
                creates real impact for users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal */}
      <section className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-neutral-500 sm:text-sm">
              Personal
            </p>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              A few things outside of work
            </h2>
            <p className="text-sm leading-7 text-neutral-600 sm:text-base">
              Beyond technology, I enjoy sports, travel, motorcycles, and time
              with the people and hobbies that keep life balanced.
            </p>
          </div>

          <div className="mt-8 max-w-3xl">
            <FunFactsSlider items={funFacts} />
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
                  Resume
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Want a fuller summary of my background?
                </h3>
                <p className="mt-3 text-sm leading-7 text-neutral-600 sm:text-base">
                  You can view my resume for a broader look at my technical
                  background, experience, and project work.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="/resume.pdf"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-black px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  View Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}