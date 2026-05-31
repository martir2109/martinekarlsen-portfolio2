import { useNavigate } from "react-router-dom";

/**
 * A custom hook that provides smooth scroll navigation.
 *
 * If the user is already on the home page, it scrolls directly.
 * If not, it navigates to the home page first, then scrolls.
 *
 * @returns `scrollToSection(id)` to scroll to a section, and `scrollToTop()` to scroll to the top.
 */
export function useScrollNavigation(setOpen) {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    setOpen?.(false);
    if (window.location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const scrollToTop = () => {
    setOpen?.(false);
    if (window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
    }
  };

  return { scrollToSection, scrollToTop };
}
