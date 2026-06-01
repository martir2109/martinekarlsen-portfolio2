import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useScrollNavigation } from "../../hooks/useScrollNavigation";

/**
 * A responsive fixed navigation bar at the top of the page.
 *
 * Renders a desktop navigation and a hamburger-toggled mobile menu,
 * with smooth scroll navigation using useScrollNavigation hook.
 *
 * @returns The navigation bar.
 */
export default function NavigationBar() {
  const [open, setOpen] = useState(false);
  const { scrollToSection, scrollToTop } = useScrollNavigation(setOpen);

  return (
    <header className="bg-white w-full fixed text-primary border-b border-black/10 z-9999">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          to="/"
          className="text-h5 font-semibold cursor-pointer"
          onClick={scrollToTop}
        >
          Martine R Karlsen
        </button>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-normal-text">
          <button
            onClick={scrollToTop}
            className="hover:opacity-60 transition cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="hover:opacity-60 transition cursor-pointer"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="hover:opacity-60 transition cursor-pointer"
          >
            About
          </button>
          <Link
            to="/contact"
            className="hover:opacity-60 transition cursor-pointer"
          >
            Contact
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          aria-label="Toggle menu"
        >
          <Menu />
        </button>
      </div>

      {/* Mobile */}
      <div
        className={`md:hidden px-6 pb-6 flex flex-col gap-4 text-medium-text transition-all duration-300 ${open ? "block" : "hidden"}`}
      >
        <Link
          onClick={() => setOpen(false)}
          to="/"
          className="hover:opacity-60 cursor-pointer"
        >
          Home
        </Link>
        <button
          onClick={() => scrollToSection("projects")}
          className="hover:opacity-60 text-left cursor-pointer"
        >
          Projects
        </button>
        <button
          onClick={() => scrollToSection("about")}
          className="hover:opacity-60 text-left cursor-pointer"
        >
          About
        </button>
        <Link
          onClick={() => setOpen(false)}
          to="/contact"
          className="hover:opacity-60 cursor-pointer"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
