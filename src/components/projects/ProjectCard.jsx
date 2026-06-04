/**
 * ProjectCard component
 *
 * Displays a project with an image, title, tag, description, and a link.
 *
 * @param props.project The project data
 * @returns A clickable project card
 */
export default function ProjectCard({ project }) {
  return (
    <a
      href={`/${project.path}`}
      className="h-full bg-white border border-black/10 rounded-lg overflow-hidden hover:shadow-md transition flex flex-col"
    >
      <div className="h-48 w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover hover:scale-105 transition duration-300"
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <span className="text-normal-text opacity-80">{project.tag}</span>
        <h2 className="text-h5 font-semibold mt-2">{project.title}</h2>
        <p className="text-small-text opacity-80 mt-3 flex-1">
          {project.description}
        </p>
        <p className="text-normal-text font-medium hover:underline mt-4">
          View project →
        </p>
      </div>
    </a>
  );
}
