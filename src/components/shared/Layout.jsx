import { Outlet } from "react-router-dom";
import NavigationBar from "./Navigationbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

/**
 * Main layout wrapper for all pages.
 * Shows the navigation bar at the top, the current page in the middle,
 * and the footer at the bottom.
 *
 * @returns The page layout
 */
export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-nunito">
      <ScrollToTop />
      <NavigationBar />

      <main className="w-full min-h-screen mx-auto pt-14 bg-secondary text-charcoal overflow-hidden">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
