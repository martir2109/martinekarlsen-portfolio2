import ContactForm from "../components/contact/ContactForm";

/**
 * Contact page
 *
 * Displays a header and a descriptive message.
 * Renders a contact form component and a direct email link.
 *
 * @returns The contact page
 */
export default function Contact() {
  return (
    <div className="min-h-screen bg-secondary text-primary px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-h2 font-bold mb-4">Contact</h1>

        <p className="text-large-text mb-10">
          Want to send me a message? I'd love to hear from you.
        </p>

        <ContactForm />

        <div className="mt-12 text-normal-text">
          <p className="flex gap-2">
            Email:
            <a
              href="mailto:martinereppesgaardkarlsen@gmail.com"
              className="hover:underline"
            >
              martinereppesgaardkarlsen@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
