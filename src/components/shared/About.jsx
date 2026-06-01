import { Cat } from "lucide-react";
import ToolsAndTechnologies from "./ToolsAndTechonologies";

/**
 * About component
 *
 * Displays a introduction, background, and a tools and technologies section.
 *
 * @returns The about section
 */
export default function About() {
  return (
    <div className="min-h-screen text-charcoal mt-10">
      <div className="max-w-6xl mx-auto space-y-20">
        <section className="flex flex-col md:flex-row items-center gap-12 pt-10">
          <img
            src="/imageofme.jpg"
            alt="Image of me, Martine"
            className="w-52 h-52 object-cover rounded-full shrink-0"
          />
          <div className="space-y-4">
            <p className="text-normal-text uppercase tracking-widest">
              Frontend Developer
            </p>
            <h1 className="text-h1 font-bold leading-tight">
              Hi, I'm Martine.
            </h1>
            <p className="text-normal-text leading-relaxed max-w-xl">
              Frontend developer from Oslo, combining a background in design and
              computer technology to build clean, accessible interfaces.
            </p>
          </div>
        </section>

        <div className="w-full h-px bg-black/10" />

        <section className="grid md:grid-cols-3 gap-2">
          <h2 className="text-h5 font-semibold">My Journey</h2>
          <p className="md:col-span-2 text-normal-text leading-relaxed">
            I'm a 24-year-old from Oslo, currently in my final semester of
            Frontend Development at Noroff. I previously studied UX Design at
            Noroff and hold a bachelor's degree in Applied Computer Technology
            from OsloMet. My background in both design and computer technology
            is what drew me to frontend, where code and user experience meet.
          </p>
        </section>

        <div className="w-full h-px bg-black/10" />

        <section className="grid md:grid-cols-3 gap-2">
          <h2 className="text-h5 font-semibold">What I Care About</h2>
          <p className="md:col-span-2 text-normal-text leading-relaxed">
            Building interfaces that are intuitive and accessible to everyone. I
            try to keep code maintainable and easy to build on, keep up with new
            tools, and care about the details that make an experience feel
            right.
          </p>
        </section>

        <div className="w-full h-px bg-black/10" />

        <section className="grid md:grid-cols-3 gap-2">
          <h2 className="text-h5 font-semibold">Outside of school or work</h2>
          <p className="md:col-span-2 text-normal-text leading-relaxed">
            I spend my free time pursuing all my different hobbies such as
            gaming on my PlayStation, sewing, building LEGO, going on walks,
            attending concerts, crocheting, and knitting.
            <br />
            <br />
            <p className="text-normal-text leading-relaxed flex items-center gap-2">
              And also spending time with my cat <Cat />
            </p>
          </p>
        </section>

        <section className="pt-10">
          <ToolsAndTechnologies />
        </section>
      </div>
    </div>
  );
}
