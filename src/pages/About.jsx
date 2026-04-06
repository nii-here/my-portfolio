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

function FunFactsSlider({ items, interval = 4000 }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % items.length), interval);
    return () => clearInterval(id);
  }, [items.length, interval]);

  const prev = () => setI((v) => (v - 1 + items.length) % items.length);
  const next = () => setI((v) => (v + 1) % items.length);

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      <div className="flex min-h-[72px] items-center justify-center px-6 text-center">
        <p className="text-base text-neutral-700 leading-7">{items[i]}</p>
      </div>

      <div className="mt-5 flex items-center justify-center gap-3">
        <button
          onClick={prev}
          className="rounded-lg border border-neutral-300 px-3 py-1.5 text-sm transition hover:bg-neutral-50"
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
          className="rounded-lg border border-neutral-300 px-3 py-1.5 text-sm transition hover:bg-neutral-50"
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
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500">
              About
            </p>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              A little more about me
            </h1>

            <p className="text-base md:text-lg text-neutral-600 leading-7">
              I’m Clement, a Clinical Application Support Specialist with a
              Computer Science background. My experience sits across healthcare
              IT, application support, and software development, with a strong
              focus on solving technical problems and building practical,
              user-centered solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Left Intro */}
            <div className="md:col-span-1">
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500">
                Overview
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                Technical, practical, and always learning
              </h2>
            </div>

            {/* Right Content */}
            <div className="md:col-span-2 space-y-6">
              <div className="rounded-2xl border border-neutral-200 p-6">
                <h3 className="text-xl font-semibold">Who I am</h3>
                <p className="mt-3 text-neutral-600 leading-7">
                  I enjoy building software that is clean, useful, and easy to
                  interact with. I care about thoughtful design, maintainable
                  code, and technology that helps people solve real problems.
                  My background in development, combined with my current work in
                  application support, has helped me build both technical skill
                  and a strong understanding of real-world users and workflows.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-200 p-6">
                <h3 className="text-xl font-semibold">What I do</h3>
                <p className="mt-3 text-neutral-600 leading-7">
                  I like to approach work in a structured way. I break problems
                  into smaller steps, focus on clarity, test as I go, and keep
                  the user experience simple. Whether I’m troubleshooting an
                  issue, improving a workflow, or building a new feature, I try
                  to be thoughtful, practical, and consistent.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-200 p-6">
                <h3 className="text-xl font-semibold">Highlights</h3>
                <ul className="mt-3 space-y-3 text-neutral-600 leading-7">
                  <li>
                    Shipped <span className="font-medium text-neutral-900">Smart Pantry</span> on the App Store, with features such as OCR-based receipt scanning, reminders, and donation support.
                  </li>
                  <li>
                    Built a clean marketing website to present the Smart Pantry product and its feature set.
                  </li>
                  <li>
                    Developed habits around version control, organized project structure, iterative improvement, and clear technical documentation.
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-neutral-200 p-6">
                <h3 className="text-xl font-semibold">Currently focused on</h3>
                <p className="mt-3 text-neutral-600 leading-7">
                  Right now, I’m continuing to grow in healthcare IT while also
                  expanding my software and systems knowledge through personal
                  projects and ongoing learning. I’m especially interested in
                  work that combines support, systems, and development in a way
                  that creates real impact for users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500">
              Personal
            </p>
            <h2 className="text-3xl font-semibold tracking-tight">
              A few things outside of work
            </h2>
            <p className="text-neutral-600 leading-7">
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
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="rounded-3xl border border-neutral-200 bg-white p-8 md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500">
                  Resume
                </p>
                <h3 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight">
                  Want a full summary of my background?
                </h3>
                <p className="mt-3 text-neutral-600 leading-7">
                  You can view my resume for a fuller look at my technical
                  background, experience, and project work.
                </p>
              </div>

              <div>
                <a
                  href="/resume.pdf"
                  className="inline-flex items-center justify-center rounded-xl bg-black px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
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