import { BookOpen, Globe } from "lucide-react";
import { CopyToClipboard } from "../components/shared/CopyToClipboard";
import { FaGithub } from "react-icons/fa";

/**
 * Semester Project 2 page
 *
 * Displays a the semester project 2 including an overview, copy to clipboard button,
 * key features, technology stack and links to the repository and live website.
 *
 * @returns The semester prject 2 page
 */
export default function SemesterProject2() {
  return (
    <div className="max-w-3xl mx-auto space-y-12 my-20 px-4">
      <figure>
        <img
          src="/SP2Preview.png"
          alt="Semester Project 2"
          className="w-full h-fit object-contain rounded-lg border-[0.5px] border-gray-300"
        />
        <figcaption className="text-small-text text-center opacity-60 mt-2">
          Screenshot of the Semester Project 2 auction web application.
        </figcaption>
      </figure>

      <div className="space-y-2">
        <p className="text-normal-text uppercase tracking-widest">
          Frontend Development
        </p>
        <h1 className="text-h2 font-bold">Semester Project 2</h1>

        <CopyToClipboard />

        <p className="text-normal-text leading-relaxed">
          An auction web application where registered users can manage profiles,
          create and bid on listings, and track bid history, while guests can
          browse and search without an account. Built with a mobile-first,
          responsive design using full CRUD functionality.
        </p>
      </div>

      <div className="w-full h-px bg-black/10" />

      <div className="grid md:grid-cols-3 gap-2">
        <h2 className="text-h5 font-semibold">About the project</h2>
        <p className="md:col-span-2 text-normal-text leading-relaxed">
          For this semester project I was given the task to create a web
          application using Noroff's Auction House API. The application allows
          users with a @stud.noroff.no email address to register, log in and
          interact with auction listings. Unregistered users can still browse,
          search and view listings without logging in. The application follows a
          mobile-first approach and features a clean, responsive interface
          across all devices.
        </p>
      </div>

      <div className="w-full h-px bg-black/10" />

      <div className="grid md:grid-cols-3 gap-2">
        <h2 className="text-h5 font-semibold">Key Features</h2>
        <ul className="md:col-span-2 text-normal-text space-y-1 list-disc list-inside">
          <li>User registration and login (@stud.noroff.no email only)</li>
          <li>Create, update and delete auction listings</li>
          <li>Place bids on other users' listings</li>
          <li>View bid history for full transparency</li>
          <li>Profile management — banner, avatar and bio</li>
          <li>View available credits</li>
          <li>Browse and search listings as a guest</li>
        </ul>
      </div>

      <div className="w-full h-px bg-black/10" />

      <div className="grid md:grid-cols-3 gap-2">
        <h2 className="text-h5 font-semibold">Technology stack</h2>
        <div className="md:col-span-2 flex flex-wrap gap-2">
          <p className="px-4 py-2 bg-white rounded-full border border-black/10">
            HTML
          </p>
          <p className="px-4 py-2 bg-white rounded-full border border-black/10">
            Tailwind CSS
          </p>
          <p className="px-4 py-2 bg-white rounded-full border border-black/10">
            CSS
          </p>
          <p className="px-4 py-2 bg-white rounded-full border border-black/10">
            TypeScript
          </p>
          <p className="px-4 py-2 bg-white rounded-full border border-black/10">
            Fetch API
          </p>
          <p className="px-4 py-2 bg-white rounded-full border border-black/10">
            Vite
          </p>
          <p className="px-4 py-2 bg-white rounded-full border border-black/10">
            Netlify
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
              Redesigned the logged-out landing page with an updated headline,
              description, and a decorative label above it. Improved the buttons
              with better sizing and hover effects, and cleaned up the overall
              layout and spacing.
            </p>
          </div>
        </p>
      </div>

      <div className="w-full h-px bg-black/10" />

      <div className="flex flex-wrap gap-4">
        <a
          href="https://github.com/martir2109/FED2-SP2-martir2109"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 flex items-center gap-2 bg-primary text-white rounded-full text-normal-text hover:opacity-80 transition cursor-pointer"
        >
          <FaGithub size={18} />
          View Repository →
        </a>

        <a
          href="https://fed2-sp2-martir2109.netlify.app/"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 flex items-center gap-2 bg-primary text-white rounded-full text-normal-text hover:opacity-80 transition cursor-pointer"
        >
          <Globe size={18} />
          View Live website →
        </a>

        <a
          href="https://github.com/martir2109/FED2-SP2-martir2109/blob/main/README.md"
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
