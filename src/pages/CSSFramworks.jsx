import { Globe, BookOpen } from "lucide-react";
import { CopyToClipboard } from "../components/shared/CopyToClipboard";
import { FaGithub } from "react-icons/fa";

/**
 * CSS Frameworks page
 *
 * Displays a the CSS Frameworks including an overview, copy to clipboard button,
 * key features, technology stack and links to the repository and live website.
 *
 * @returns The CSS Frameworks page
 */
export default function CSSFrameworks() {
  return (
    <div className="max-w-3xl mx-auto space-y-12 my-20 px-4">
      <figure>
        <img
          src="/JS2Preview.png"
          alt="CSS Frameworks project"
          className="w-full h-fit object-contain rounded-lg border-[0.5px] border-gray-300"
        />
        <figcaption className="text-small-text text-center opacity-60 mt-2">
          Screenshot of the CSS Frameworks social media application.
        </figcaption>
      </figure>

      <div className="space-y-2">
        <p className="text-normal-text uppercase tracking-widest">
          Frontend Development
        </p>
        <h1 className="text-h2 font-bold">CSS Frameworks</h1>

        <CopyToClipboard />

        <p className="text-normal-text leading-relaxed">
          A full-featured social media application where users can create, edit,
          and delete posts, follow and unfollow others, leave comments, and
          react to content.
        </p>
      </div>

      <div className="w-full h-px bg-black/10" />

      <div className="grid md:grid-cols-3 gap-2">
        <h2 className="text-h5 font-semibold">About the project</h2>
        <p className="md:col-span-2 text-normal-text leading-relaxed">
          I was given the task to create a social media application where users
          can perform full CRUD operations on their posts (Create, Read, Update
          and Delete). In addition, users can follow and unfollow each other,
          comment on posts, and react with an emoji.
        </p>
      </div>

      <div className="w-full h-px bg-black/10" />

      <div className="grid md:grid-cols-3 gap-2">
        <h2 className="text-h5 font-semibold">Key Features</h2>
        <ul className="md:col-span-2 text-normal-text  space-y-1 list-disc list-inside">
          <li>Register and log in as a user</li>
          <li>View all posts in a feed</li>
          <li>View a single post</li>
          <li>Create, edit and delete your own posts</li>
          <li>View posts from a specific user</li>
          <li>Follow and unfollow other users</li>
          <li>Search through posts using a search bar</li>
          <li>View your own profile</li>
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
            CSS
          </p>
          <p className="px-4 py-2 bg-white rounded-full border border-black/10">
            JavaScript Vanilla
          </p>
          <p className="px-4 py-2 bg-white rounded-full border border-black/10">
            Fetch API
          </p>
          <p className="px-4 py-2 bg-white rounded-full border border-black/10">
            Netlify
          </p>
          <p className="px-4 py-2 bg-white rounded-full border border-black/10">
            Vite
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
              Redesigned the logged-out landing page with a cleaner layout and
              rounder buttons. Added a user initials avatar to each post card
              and fixed the post image sizing. Improved overall spacing and
              hover effects throughout the page.
            </p>
          </div>
        </p>
      </div>

      <div className="w-full h-px bg-black/10" />

      <div className="flex flex-wrap gap-4">
        <a
          href="https://github.com/martir2109/FED2-JS2-CA-martir2109"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 flex items-center gap-2 bg-primary text-white rounded-full text-normal-text hover:opacity-80 transition cursor-pointer"
        >
          <FaGithub size={18} />
          View Repository →
        </a>

        <a
          href="https://posty-martir2109.netlify.app/"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 flex items-center gap-2 bg-primary text-white rounded-full text-normal-text hover:opacity-80 transition cursor-pointer"
        >
          <Globe size={18} />
          View Live website →
        </a>

        <a
          href="https://github.com/martir2109/FED2-JS2-CA-martir2109/blob/main/README.md"
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
