import About from "../components/shared/About";
import Projects from "../components/shared/Projects";
import ScrollToTopButton from "../components/shared/ScrollToTopButton";

/**
 * Home page
 *
 * Renders the About and Projects sections.
 *
 * @returns The home page
 */
export default function Home() {
  return (
    <div className="min-h-screen h-fit px-4">
      <ScrollToTopButton />
      <section id="about" className="scroll-mt-24">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>
    </div>
  );
}
