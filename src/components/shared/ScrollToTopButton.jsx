import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * ScrollToTopButton component
 *
 * Renders a button that appears when the user scrolls past 100px.
 * Scrolls back to the top of the page once clicked.
 *
 * @returns The scroll to top button with Arrow up icon or null if not visible.
 */
export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 p-3 bg-primary text-secondary border border-secondary rounded-full shadow-md hover:opacity-70 transition cursor-pointer"
    >
      <ArrowUp />
    </button>
  );
}
