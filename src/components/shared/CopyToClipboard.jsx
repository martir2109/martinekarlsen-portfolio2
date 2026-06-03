import { useState } from "react";
import { Link } from "lucide-react";

/**
 * Button that copies the current page URL to the clipboard.
 * Shows "Copied!" for 2 seconds after clicking and then resets.
 *
 * @returns Copy to clipboard button.
 */
export function CopyToClipboard() {
  const [copied, setCopied] = useState(false);

  function copyLink() {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      onClick={copyLink}
      className="flex mt-3 mb-6 cursor-pointer items-center gap-2 px-4 py-2 rounded-full border border-black/30 text-normal-text hover:bg-black/10 transition"
    >
      <Link size={18} />
      {copied ? "Copied!" : "Copy link"}
    </button>
  );
}
