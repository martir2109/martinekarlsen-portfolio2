import { useState } from "react";
import emailjs from "@emailjs/browser";

/**
 * Contact form component
 *
 * Allows users to send a message via EmailJS.
 * Collects name, email, subject, and message.
 * Validates that all fields meet minimum length requirements and that the email is correctly formatted.
 * Shows an error message if validation fails, and a success or error message after submission.
 *
 * @returns The contact form.
 */
export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name.trim() || name.trim().length < 3) {
      setAlert({
        type: "error",
        text: "Full name must be at least 3 characters.",
      });
      return;
    }
    if (!emailRegex.test(email)) {
      setAlert({ type: "error", text: "Please enter a valid email." });
      return;
    }
    if (!subject.trim() || subject.trim().length < 3) {
      setAlert({
        type: "error",
        text: "Subject must be at least 3 characters.",
      });
      return;
    }
    if (!message.trim() || message.trim().length < 10) {
      setAlert({
        type: "error",
        text: "Message must be at least 10 characters.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_9d15ues",
        "template_qkufb7f",
        { name, email, subject, message },
        { publicKey: "r3c1n7YOfT9LJU1zZ" }
      );
      setAlert({ type: "success", text: "Message sent successfully!" });
      setTimeout(() => setAlert(null), 4000);
      setTimeout(() => {
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      }, 1000);
    } catch (error) {
      setAlert({
        type: "error",
        text: `Failed to send message. Please try again. ${error}`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      {alert && (
        <div
          className={`mb-6 px-4 py-3 rounded-md text-normal-text ${
            alert.type === "success"
              ? "bg-green-100 text-green-800 border border-green-800"
              : "bg-red-100 text-red-800 border border-red-800"
          }`}
        >
          {alert.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-small-text mb-2">Name</label>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-md border border-black/10 bg-white text-primary focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <div>
          <label className="block text-small-text mb-2">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-md border border-black/10 bg-white text-primary focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <div>
          <label className="block text-small-text mb-2">Subject</label>
          <input
            type="text"
            placeholder="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full px-4 py-3 rounded-md border border-black/10 bg-white text-primary focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <div>
          <label className="block text-small-text mb-2">Message</label>
          <textarea
            rows="5"
            placeholder="Write your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-3 rounded-md border border-black/10 bg-white text-primary focus:outline-none focus:ring-2 focus:ring-primary"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-3 bg-primary text-secondary rounded-md hover:opacity-90 transition disabled:opacity-50 cursor-pointer"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </>
  );
}
