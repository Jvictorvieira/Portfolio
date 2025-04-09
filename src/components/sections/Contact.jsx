import { Section } from "../Section";
import emailjs from "emailjs-com";
import { useState } from "react";
export const Contact = ({handleToast}) => {
  const [form, setForm] = useState({
    from_name: "",
    email: "",
    message: "",
    to_name: "João Victor",
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_API_KEY).then(
      (result) => {
        console.log(result.text);
        handleToast(true);
        setForm({
          from_name: "",
          email: "",
          message: "",
        });
      },
      (error) => {
        handleToast(false);
        console.log(error.text);
      }
    );
  };
  return (
    <Section title={"Get in touch"} id="contact" textSize={false} size="">
    <div className="md:w-150 w-full">

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="text"
            name="from_name"
            id="from_name"
            value={form.from_name}
            onChange={(e) => setForm({ ...form, from_name: e.target.value })}
            placeholder="Name..."
            className="w-full border border-border rounded-xl py-3 px-4 text-copy-primary focus:outline-none focus:border-highlight focus:bg-highlight/50 transition-all duration-200"
            required
          />
        </div>
        <div className="relative">
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="exemple@email.com"
            className="w-full border border-border rounded-xl py-3 px-4 text-copy-primary focus:outline-none focus:border-highlight focus:bg-highlight/50 transition-all duration-200"
            required
          />
        </div>
        <div className="relative">
          <textarea
            name="message"
            id="message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            rows={5}
            placeholder="Your message..."
            className="w-full border border-border rounded-xl py-3 px-4 text-copy-primary focus:outline-none focus:border-highlight focus:bg-highlight/50 transition-all duration-200"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-cta hover:bg-cta-active text-copy-secondary py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5"
        >
          Send Message
        </button>
      </form>
    </div>
    </Section>
  );
};
