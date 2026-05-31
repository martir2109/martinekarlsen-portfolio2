import { Link } from "react-router-dom";
import { useScrollNavigation } from "../../hooks/useScrollNavigation";

/**
 * Footer component
 *
 * Includes navigation links with scroll behavior using useScrollNavigation hook.
 *
 * @returns The footer component
 */
export default function Footer() {
  const { scrollToSection, scrollToTop } = useScrollNavigation();

  return (
    <footer class="bg-primary w-full text-secondary py-10 px-6">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="text-center md:text-left">
          <h3 class="text-h5 font-bold">Martine R Karlsen</h3>
          <p class="text-normal-text opacity-80 mt-1">Frontend Developer</p>
        </div>

        <div class="flex sm:flex-row flex-col gap-6 text-normal-text">
          <button
            class="hover:opacity-70 transition cursor-pointer"
            onClick={scrollToTop}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            class="hover:opacity-70 transition cursor-pointer"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("about")}
            class="hover:opacity-70 transition cursor-pointer"
          >
            About
          </button>
          <Link
            to="/contact"
            class="hover:opacity-70 transition cursor-pointer"
          >
            Contact
          </Link>
        </div>

        <div class="flex gap-4 text-normal-text">
          <a
            href="https://github.com/martir2109"
            class="hover:opacity-70 transition cursor-pointer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/martine-reppesgård-karlsen-166471229"
            class="hover:opacity-70 transition cursor-pointer"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div class="mt-14 text-center text-small-text opacity-80">
        © {new Date().getFullYear()} Martine R Karlsen All rights reserved.
      </div>
    </footer>
  );
}
