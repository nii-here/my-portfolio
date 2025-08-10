export default function ProjectCard({ p }){
  return (
    <div className="p-4 rounded-2xl border shadow-sm">
      <h3 className="font-semibold">{p.title}</h3>
      <p className="text-sm mt-1">{p.summary}</p>
      <div className="flex gap-2 flex-wrap my-2">
        {p.tech.map(t => <span key={t} className="text-xs bg-gray-100 px-2 py-1 rounded-full">{t}</span>)}
      </div>
      <div className="flex gap-3 text-sm">
        {p.links.demo && <a href={p.links.demo} className="underline" target="_blank">Live</a>}
        {p.links.code && <a href={p.links.code} className="underline" target="_blank">Code</a>}
      </div>
    </div>
  );
}
