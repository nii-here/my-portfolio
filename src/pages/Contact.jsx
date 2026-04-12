export default function Contact() {
  const contactItems = [
    {
      label: "Email",
      value: "tettehclement9@outlook.com",
      href: "mailto:tettehclement9@outlook.com",
      action: "Send",
    },
    {
      label: "GitHub",
      value: "github.com/nii-here",
      href: "https://github.com/nii-here",
      action: "Visit",
      external: true,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/clement-tetteh",
      href: "https://linkedin.com/in/clement-tetteh",
      action: "Visit",
      external: true,
    },
    {
      label: "Resume",
      value: "View my resume",
      href: "/resume.pdf",
      action: "Open",
    },
  ];

  return (
    <main className="bg-white text-neutral-900">
      {/* Hero */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 md:py-20">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-neutral-500 sm:text-sm">
              Contact
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Let’s connect
            </h1>

            <p className="text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8 md:text-lg">
              I’m open to conversations about healthcare IT, software,
              application support, and new opportunities. If you’d like to reach
              out, you can contact me through any of the options below.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-1">
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-neutral-500 sm:text-sm">
                Availability
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                Open to professional opportunities
              </h2>
              <p className="mt-4 text-sm leading-7 text-neutral-600 sm:text-base">
                Based in the Chicago area and open to full-time roles in
                healthcare IT, application support, systems-focused work, and
                software-related positions.
              </p>

              <div className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                  Preferred Contact
                </p>
                <p className="mt-3 text-sm leading-7 text-neutral-700">
                  Email is the best way to reach me for opportunities,
                  networking, or project-related conversations.
                </p>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-6 md:p-8">
                <div className="grid gap-4">
                  {contactItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="group rounded-2xl border border-neutral-200 px-4 py-4 transition hover:bg-neutral-50 sm:px-5"
                    >
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-neutral-500">
                            {item.label}
                          </p>
                          <p className="mt-1 break-words text-base font-semibold text-neutral-900">
                            {item.value}
                          </p>
                        </div>

                        <span className="inline-flex w-fit items-center justify-center rounded-full border border-neutral-200 px-3 py-1 text-xs font-medium text-neutral-600 transition group-hover:bg-white">
                          {item.action}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary CTA */}
      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-neutral-500 sm:text-sm">
                  Next Step
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Want a better sense of my background?
                </h3>
                <p className="mt-3 text-sm leading-7 text-neutral-600 sm:text-base">
                  You can also explore my projects and resume to get a clearer
                  picture of my technical experience, work, and direction.
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