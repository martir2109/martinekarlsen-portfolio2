const skills = [
  "React",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "Figma",
  "HTML",
  "CSS",
  "Visual Studio Code",
  "Git",
  "GitHub",
  "Nextjs",
];

/**
 * ToolsAndTechnologies component
 *
 * Lists tools and technologies as styled tags.
 *
 * @returns The tools and technoogies section
 */
export default function ToolsAndTechnologies() {
  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-h3 font-semibold mb-8">Tools and Technologies</h2>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-white rounded-full border border-black/10"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
