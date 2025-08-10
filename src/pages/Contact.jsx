export default function Contact() {
  return (
    <main className="max-w-6xl mx-auto p-4">
      <section className="max-w-xl mx-auto p-6 rounded-2xl border shadow-sm">
        <h2 className="text-3xl font-bold text-center">Contact</h2>
        <p className="text-sm text-gray-600 text-center mt-1">
          Chicago, IL · Open to full-time roles
        </p>

        <div className="grid gap-3 mt-6">
          <a
            href="mailto:tettehclement9@outlook.com"
            className="px-4 py-2 rounded-xl bg-black text-white text-center"
          >
            ✉️ Email me
          </a>

          <a
            href="https://github.com/nii-here"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl border text-center hover:bg-gray-50"
          >
            🐙 GitHub
          </a>

          <a
            href="https://linkedin.com/in/clement-tetteh"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl border text-center hover:bg-gray-50"
          >
            🔗 LinkedIn
          </a>

          <a
            href="/resume.pdf"
            className="px-4 py-2 rounded-xl border text-center hover:bg-gray-50"
          >
            📄 Résumé
          </a>
        </div>
      </section>
    </main>
  );
}
