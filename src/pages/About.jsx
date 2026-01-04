import { useEffect, useState } from "react";

const funFacts = [
  "I live in the Chicago area 🌆",
  "I can talk basketball for hours. Favorite team: Warriors 🏀",
  "I like to play sports (mainly soccer and basketball) & action video games (Fortnite) 🎮",
  "I enjoy riding my motorcycle on weekends🏍️. I ride a Yamaha R3(2015) and Ducati Panigale V2(2024).",
  "I dont like rollercoasters but im forced to by my significant other.",
  "I love to travel and explore new places ✈️",
  "I have a pyre-doodle name Coco 🐶. She is the best",
  "I am a huge marvel fan. I love the MCU and all things marvel. My favorite character is Black Panther 🖤",
  "I am a foodie. I love trying new restaurants and cuisines 🍣...food got to be good tho",
];

function FunFactsSlider({ items, interval = 4000 }) {
  const [i, setI] = useState(0);
  useEffect(() => {``
    const id = setInterval(() => setI(v => (v + 1) % items.length), interval);
    return () => clearInterval(id);
  }, [items.length, interval]);
  const prev = () => setI(v => (v - 1 + items.length) % items.length);
  const next = () => setI(v => (v + 1) % items.length);

  return (
    <div className="p-4 rounded-2xl border bg-white/70 shadow-sm">
      <div className="min-h-[60px] flex items-center justify-center text-center px-8">
        <p className="text-base">{items[i]}</p>
      </div>
      <div className="flex items-center justify-center gap-3 mt-3">
        <button onClick={prev} className="px-3 py-1 rounded-lg border hover:bg-gray-50" aria-label="Previous">‹</button>
        <div className="flex items-center gap-1">
          {items.map((_, idx) => (
            <span key={idx} className={`h-2 w-2 rounded-full ${idx === i ? "bg-black" : "bg-gray-300"}`} />
          ))}
        </div>
        <button onClick={next} className="px-3 py-1 rounded-lg border hover:bg-gray-50" aria-label="Next">›</button>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <main className="max-w-6xl mx-auto p-4">
      <section className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold">About me</h2>

        <p className="text-lg">
          I’m Clement. I’m a Software Developer. I like to build Web and Mobile applications.
          I care about clear UI, clean code, and fast load times.
          I ship small updates often and learn from feedback.
</p>

        <div>
          <h3 className="text-xl font-semibold mb-2">Fun facts</h3>
          <FunFactsSlider items={funFacts} />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">What I do</h3>
          <p>
            I build from scratch when needed. I start small and break work into steps.
            I test as I go, keep the UI simple, and keep the code clean.
            I ship often and learn from feedback.
</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Highlights</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>Shipped <span className="font-medium">Smart Pantry</span> on the App Store (OCR, donation map, reminders).</li>
            <li>Built and deployed a clean marketing site for Smart Pantry.</li>
            <li>Team habits: Git branches + PRs, code reviews, clear docs.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Now</h3>
          <p>I’m working on a few personal projects, learning new tech, and looking for my next role. Open to full-time software dev.</p>
        </div>

        <div className="pt-2">
          <a href="/resume.pdf" className="inline-block px-4 py-2 rounded-xl bg-black text-white">Download résumé</a>
        </div>
      </section>
    </main>
  );
}
