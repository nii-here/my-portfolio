export default function Contact() {
  return (
    <main className="bg-white text-neutral-900">
      {/* Hero */}
      <section className="border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500">
              Contact
            </p>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Let’s connect
            </h1>

            <p className="text-base md:text-lg text-neutral-600 leading-7">
              I’m always open to connecting about technology, software,
              healthcare IT, and new opportunities. If you’d like to reach out,
              feel free to contact me through any of the platforms below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Card */}
      <section>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Left */}
            <div className="md:col-span-1">
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500">
                Availability
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                Open to professional opportunities
              </h2>
              <p className="mt-4 text-neutral-600 leading-7">
                Based in the Chicago area and open to full-time opportunities in
                software, systems, application support, and healthcare IT.
              </p>
            </div>

            {/* Right */}
            <div className="md:col-span-2">
              <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
                <div className="grid gap-4">
                  <a
                    href="mailto:tettehclement9@outlook.com"
                    className="flex items-center justify-between rounded-2xl border border-neutral-200 px-5 py-4 transition hover:bg-neutral-50"
                  >
                    <div>
                      <p className="text-sm font-medium text-neutral-500">Email</p>
                      <p className="text-base font-semibold text-neutral-900">
                        tettehclement9@outlook.com
                      </p>
                    </div>
                    <span className="text-sm text-neutral-500">Open</span>
                  </a>

                  <a
                    href="https://github.com/nii-here"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-2xl border border-neutral-200 px-5 py-4 transition hover:bg-neutral-50"
                  >
                    <div>
                      <p className="text-sm font-medium text-neutral-500">GitHub</p>
                      <p className="text-base font-semibold text-neutral-900">
                        github.com/nii-here
                      </p>
                    </div>
                    <span className="text-sm text-neutral-500">Open</span>
                  </a>

                  <a
                    href="https://linkedin.com/in/clement-tetteh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-2xl border border-neutral-200 px-5 py-4 transition hover:bg-neutral-50"
                  >
                    <div>
                      <p className="text-sm font-medium text-neutral-500">LinkedIn</p>
                      <p className="text-base font-semibold text-neutral-900">
                        linkedin.com/in/clement-tetteh
                      </p>
                    </div>
                    <span className="text-sm text-neutral-500">Open</span>
                  </a>

                  <a
                    href="/resume.pdf"
                    className="flex items-center justify-between rounded-2xl border border-neutral-200 px-5 py-4 transition hover:bg-neutral-50"
                  >
                    <div>
                      <p className="text-sm font-medium text-neutral-500">Resume</p>
                      <p className="text-base font-semibold text-neutral-900">
                        View my resume
                      </p>
                    </div>
                    <span className="text-sm text-neutral-500">Open</span>
                  </a>
                </div>

                <div className="mt-8 rounded-2xl bg-neutral-50 p-6">
                  <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500">
                    Preferred Contact
                  </p>
                  <p className="mt-3 text-neutral-700 leading-7">
                    Email is the best way to reach me for opportunities,
                    networking, or project-related conversations.
                  </p>
                </div>
              </div>
            </div>
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
                  Next Step
                </p>
                <h3 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight">
                  Interested in my background?
                </h3>
                <p className="mt-3 text-neutral-600 leading-7">
                  You can also explore my projects and resume to get a better
                  sense of my technical experience and work.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
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