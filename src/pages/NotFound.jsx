import { Link } from "react-router-dom";

/**
 * A 404 not found page.
 * Displayed when a user navigates to a page/route that does not exist.
 * Renders a centered message with a link that redirects the user to the home page.
 *
 * @returns The 404 not found page.
 */
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center  text-primary px-6">
      <div className="text-center max-w-md">
        <h1 className="text-h1 font-bold leading-none">404</h1>
        <h2 className="text-h4 font-semibold mt-4">Page Not Found</h2>
        <p className="text-normal-text mt-3 text-charcoal">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 bg-primary text-secondary rounded-md hover:opacity-90 transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
