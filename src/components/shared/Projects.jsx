import projects from "../../data/projects";
import ProjectCard from "../projects/ProjectCard";
import FadeUp from "./FadeUp";

/**
 * Projects component
 *
 * Renders a grid of project cards from the projects data.
 *
 * @returns The projects section
 */
export default function Projects() {
  return (
    <div className="min-h-screen text-primary px-4 md:px-6 py-16 flex items-center">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-h2 font-bold mb-4">Projects</h1>

        <p className="text-large-text opacity-80 mb-12 max-w-2xl">
          A selection of my frontend school projects.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <FadeUp>
              <ProjectCard key={project.id} project={project} />
            </FadeUp>
          ))}
        </div>
      </div>
    </div>
  );
}
