import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
export default function Projects(){
  return (
    <main className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map(p => <ProjectCard key={p.title} p={p} />)}
      </div>
    </main>
  );
}
