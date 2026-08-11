import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ExternalLink } from "lucide-react";

const contactInfo = [
  {
    icon: <Mail size={20} className="text-primary" />,
    label: "Email",
    value: "muhammadsaleem.webcoder@gmail.com",
    href: "mailto:muhammadsaleem.webcoder@gmail.com",
  },
  {
    icon: <Phone size={20} className="text-primary" />,
    label: "Phone / WhatsApp",
    value: "+92 342 0663655",
    href: "tel:+923420663655",
  },
  {
    icon: <MapPin size={20} className="text-primary" />,
    label: "Location",
    value: "Shigar, Gilgit Baltistan, Pakistan",
    href: null,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = form;
    if (!name.trim() || !email.trim() || !message.trim()) {
      setFeedback({ type: "error", text: "Please fill in all fields." });
      return;
    }
    setSubmitting(true);
    setFeedback(null);

    try {
      const API_URL =
        import.meta.env.VITE_API_URL ||
        "my-portfolio-production-01e8.up.railway.app";

      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setFeedback({ type: "success", text: data.message });
        setForm({ name: "", email: "", message: "" });
      } else {
        setFeedback({
          type: "error",
          text: data.error || "Something went wrong.",
        });
      }
    } catch {
      setFeedback({ type: "error", text: "Network error. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-4">
            <span className="text-primary font-mono text-xl opacity-70">
              06.
            </span>
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-primary mb-4 rounded-full" />
          <p className="text-muted-foreground text-lg max-w-xl">
            Interested in working together or learning at Dziinr Academy? Reach
            out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {contactInfo.map((info, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-secondary border border-border flex-shrink-0">
                  {info.icon}
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold mb-1">
                    {info.label}
                  </p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-foreground font-medium hover:text-primary transition-colors flex items-center gap-1 group"
                      data-testid={`contact-link-${info.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {info.value}
                      <ExternalLink
                        size={13}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </a>
                  ) : (
                    <p className="text-foreground font-medium">{info.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div
              className="mt-8 p-6 rounded-2xl border border-primary/20 relative overflow-hidden"
              style={{ backgroundColor: "hsl(var(--card))" }}
            >
              <h3 className="font-bold text-foreground mb-2">
                Dziinr Academy Skardu
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Interested in learning Graphic Design or Web Development in
                Skardu? Muhammad's academy offers hands-on courses for students
                in Gilgit Baltistan.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
              data-testid="contact-form"
            >
              {feedback && (
                <div
                  className={`px-4 py-3 rounded-xl text-sm font-medium border ${
                    feedback.type === "success"
                      ? "bg-emerald-400/10 border-emerald-400/30 text-emerald-400"
                      : "bg-red-400/10 border-red-400/30 text-red-400"
                  }`}
                >
                  {feedback.text}
                </div>
              )}

              <div>
                <label
                  className="text-sm font-medium text-foreground mb-2 block"
                  htmlFor="name"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl text-sm font-medium text-foreground placeholder-muted-foreground border border-border focus:outline-none focus:border-primary/60 transition-colors"
                  style={{ backgroundColor: "hsl(var(--secondary))" }}
                  data-testid="input-name"
                  autoComplete="name"
                />
              </div>

              <div>
                <label
                  className="text-sm font-medium text-foreground mb-2 block"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl text-sm font-medium text-foreground placeholder-muted-foreground border border-border focus:outline-none focus:border-primary/60 transition-colors"
                  style={{ backgroundColor: "hsl(var(--secondary))" }}
                  data-testid="input-email"
                  autoComplete="email"
                />
              </div>

              <div>
                <label
                  className="text-sm font-medium text-foreground mb-2 block"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What's on your mind?"
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl text-sm font-medium text-foreground placeholder-muted-foreground border border-border focus:outline-none focus:border-primary/60 transition-colors resize-none"
                  style={{ backgroundColor: "hsl(var(--secondary))" }}
                  data-testid="input-message"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 rounded-xl text-base font-semibold shadow-[0_0_20px_rgba(59,130,246,0.25)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:opacity-90 transition-all disabled:opacity-60 disabled:cursor-not-allowed border-none cursor-pointer"
                data-testid="btn-send-message"
              >
                {submitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
