import { Globe, BookOpen } from "lucide-react";
import { CopyToClipboard } from "../components/shared/CopyToClipboard";
import { FaGithub } from "react-icons/fa";

/**
 * JavaScript Frameworks page
 *
 * Displays a the JavaScript Frameworks including an overview, copy to clipboard button,
 * key features, technology stack and links to the repository and live website.
 *
 * @returns The JavaScript Frameworks page
 */
export default function JavaScriptFrameworks() {
  return (
    <div className="max-w-3xl mx-auto space-y-12 my-20 px-4">
      <figure>
        <img
          src="/JSFWPreview.png"
          alt="JavaScript Frameworks project"
          className="w-full h-fit object-contain rounded-lg border-[0.5px] border-gray-300"
        />
        <figcaption className="text-small-text text-center opacity-60 mt-2">
          Screenshot of the JavaScript Frameworks e-commerce web application.
        </figcaption>
      </figure>

      <div className="space-y-2">
        <p className="text-normal-text uppercase tracking-widest">
          Frontend Development
        </p>
        <h1 className="text-h2 font-bold">JavaScript Frameworks</h1>

        <CopyToClipboard />

        <p className="text-normal-text leading-relaxed">
          A fully functional e-commerce store built with React and Next.js,
          featuring product listings, search and sorting, detailed product
          pages, a shopping cart, checkout flow, a contact form, and full mobile
          responsiveness.
        </p>
      </div>

      <div className="w-full h-px bg-black/10" />

      <div className="grid md:grid-cols-3 gap-2">
        <h2 className="text-h5 font-semibold">About the project</h2>
        <p className="md:col-span-2 text-normal-text leading-relaxed">
          I was given the task to build a fully functional online shop using
          React and Next.js. The app fetches products from a REST API, displays
          them in a user-friendly layout, and includes a complete shopping cart
          and checkout flow. The site also features a validated contact form and
          is fully responsive on both desktop and mobile.
        </p>
      </div>

      <div className="w-full h-px bg-black/10" />

      <div className="grid md:grid-cols-3 gap-2">
        <h2 className="text-h5 font-semibold">Key Features</h2>
        <ul className="md:col-span-2 text-normal-text space-y-1 list-disc list-inside">
          <li>Browse a list of products fetched from a REST API</li>
          <li>View detailed information about each product</li>
          <li>Search for products from the homepage</li>
          <li>Add and remove items from a shopping cart</li>
          <li>Adjust quantities and view total cost</li>
          <li>Complete a checkout flow</li>
          <li>Send a message through a validated contact form</li>
        </ul>
      </div>

      <div className="w-full h-px bg-black/10" />

      <div className="grid md:grid-cols-3 gap-2">
        <h2 className="text-h5 font-semibold">Technology stack</h2>
        <div className="md:col-span-2 flex flex-wrap gap-2">
          <p className="px-4 py-2 bg-white rounded-full border border-black/10">
            React
          </p>
          <p className="px-4 py-2 bg-white rounded-full border border-black/10">
            TypeScript
          </p>
          <p className="px-4 py-2 bg-white rounded-full border border-black/10">
            Tailwind CSS
          </p>
          <p className="px-4 py-2 bg-white rounded-full border border-black/10">
            React Hot Toast
          </p>
          <p className="px-4 py-2 bg-white rounded-full border border-black/10">
            Flowbite
          </p>
          <p className="px-4 py-2 bg-white rounded-full border border-black/10">
            Noroff API
          </p>
        </div>
      </div>

      <div className="w-full h-px bg-black/10" />

      <div className="grid md:grid-cols-3 gap-2">
        <h2 className="text-h5 font-semibold">Improvements</h2>
        <p className="md:col-span-2 text-normal-text">
          <div className="flex flex-col gap-2 md:col-span-2 text-normal-text">
            <p className="font-semibold">
              Improvements were made on the Portfolio-2-changes branch.
            </p>
            <p>
              Redesigned the product cards with a clean card layout including
              white background, rounded corners, shadow, and hover effects with
              an image zoom. Improved the product list filters and search bar
              with consistent styling and better usability. Enhanced the home
              page banner with a dark overlay, a "Shop now" button, and smooth
              scrolling to the products section.
            </p>
          </div>
        </p>
      </div>

      <div className="w-full h-px bg-black/10" />

      <div className="flex flex-wrap gap-4">
        <a
          href="https://github.com/NoroffFEU/jsfw-2025-v1-martine-rk-js-frameworks"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 flex items-center gap-2 bg-primary text-white rounded-full text-normal-text hover:opacity-80 transition cursor-pointer"
        >
          <FaGithub size={18} />
          View Repository →
        </a>

        <a
          href="https://theselection.netlify.app/"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 flex items-center gap-2 bg-primary text-white rounded-full text-normal-text hover:opacity-80 transition cursor-pointer"
        >
          <Globe size={18} />
          View Live website →
        </a>

        <a
          href="https://github.com/NoroffFEU/jsfw-2025-v1-martine-rk-js-frameworks/blob/main/README.md"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 flex items-center gap-2 bg-primary text-white rounded-full text-normal-text hover:opacity-80 transition cursor-pointer"
        >
          <BookOpen size={18} />
          View README →
        </a>
      </div>
    </div>
  );
}
