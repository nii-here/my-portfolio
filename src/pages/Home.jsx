import { Link } from "react-router-dom";
import me from "../assets/clement.jpeg";

const languages = [
  // Languages
  { name: "Swift", level: 80, icon: "🍎" },
  { name: "JavaScript", level: 80, icon: "⚡" },
  { name: "Python", level: 70, icon: "🐍" },
  { name: "C++", level: 85, icon: "🧰" },
  { name: "Java", level: 75, icon: "☕" },
  { name: "SQL", level: 75, icon: "🗃️" },
  { name: "HTML/CSS", level: 70, icon: "🎨" },
];

const tools = [
  // Frameworks / platforms / tools
  { name: "Frontend (React.js, Tailwind CSS, Vite)", level: 85, icon: "💻" },
  { name: "Mobile (React Native CLI, SwiftUI)", level: 80, icon: "📱" },
  { name: "Backend (Node.js, Express, Firebase)", level: 70, icon: "🧠" },
  { name: "Cloud & Database (Firebase Auth, Firestore)", level: 85, icon: "☁️" },
  { name: "Tools (Git, GitHub, VS Code, IntelliJ, Xcode)", level: 90, icon: "🔧" },
];

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto p-4">
      {/* Center block */}
      <section className="min-h-[70vh] grid place-items-center text-center">
        <div className="space-y-4 max-w-2xl">
            <img
            src={me}
            alt="Clement portrait"
            className="w-40 h-40 rounded-full object-cover object-[50%_10%] mx-auto"
            loading="eager"
          />
          <h1 className="text-5xl font-extrabold">Hi, I’m Clement.</h1>
          <p className="text-lg">
            Full-Stack Developer Building Scalable Apps & Creative Problem Solver.
          </p>
          <p className="text-gray-600">
            I specialize in building fast, responsive, and user-friendly web and applications using modern technologies.
            With a passion for clean code and intuitive design, I turn ideas into impactful digital experiences.
          </p>
          <div className="flex gap-3 justify-center">
            <Link to="/projects" className="px-4 py-2 rounded-xl bg-black text-white">
              See Projects
            </Link>
            <a href="/resume.pdf" className="px-4 py-2 rounded-xl border">
              Resume
            </a>
          </div>
        </div>
      </section>

      {/* Skills / Expertise Highlights */}
      <section className="max-w-5xl mx-auto p-4">
        <h2 className="text-2xl font-semibold text-center">Skills / Expertise</h2>
        <p className="text-sm text-gray-600 text-center mb-6">Quick snapshot of what I use.</p>

        <h3 className="text-lg font-semibold mb-3">Languages</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {languages.map(s => (
            <div key={s.name} className="p-4 rounded-2xl border">
                <div className="flex items-center gap-2">
                <span className="text-2xl">{s.icon}</span>
                <span className="font-medium">{s.name}</span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-gray-100">
                <div className="h-full rounded-full bg-black" style={{ width: `${s.level}%` }} />
                </div>
                <div className="mt-1 text-xs text-gray-500">{s.level}%</div>
            </div>
            ))}
        </div>

        <h3 className="text-lg font-semibold mb-3">Frameworks & Tools</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {tools.map(s => (
            <div key={s.name} className="p-4 rounded-2xl border">
                <div className="flex items-center gap-2">
                <span className="text-2xl">{s.icon}</span>
                <span className="font-medium">{s.name}</span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-gray-100">
                <div className="h-full rounded-full bg-black" style={{ width: `${s.level}%` }} />
                </div>
                <div className="mt-1 text-xs text-gray-500">{s.level}%</div>
            </div>
            ))}
        </div>
        </section>
    </main>
  );
}
