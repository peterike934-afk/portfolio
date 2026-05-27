import "./Contact.css";

const contacts = [
  {
    label: "Email",
    value: "peterike934@gmail.com",
    href: "mailto:peterike934@gmail.com",
    hint: "Get in touch",
  },
  {
    label: "WhatsApp",
    value: "+234 916 838 3809",
    href: "https://wa.me/2349168383809",
    hint: "Chat directly",
  },
  {
    label: "GitHub",
    value: "peterike934-afk",
    href: "https://github.com/peterike934-afk",
    hint: "View source",
  },
  {
    label: "LinkedIn",
    value: "Coming Soon",
    href: null,
    hint: "Connect with me",
  },
];

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <div className="contact-top">
          <p className="contact-label">Contact</p>
          <h2 className="contact-heading">
            Let's build something<br />
            <em>together.</em>
          </h2>
          <p className="contact-sub">
            Available for freelance projects, full-time roles and collaborations.
          </p>
          <a href="mailto:peterike934@gmail.com" className="contact-cta">
            Send a Message
            <span className="contact-cta-arrow">→</span>
          </a>
        </div>

        <div className="contact-links">
          {contacts.map((c) => (
            <div className="contact-item" key={c.label}>
              <div className="contact-item-left">
                <span className="contact-item-label">{c.label}</span>
                <span className="contact-item-hint">{c.hint}</span>
              </div>
              {c.href ? (
                <a
                  href={c.href}
                  target={c.href.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noreferrer"
                  className="contact-item-value"
                >
                  {c.value}
                  <span className="contact-arrow">↗</span>
                </a>
              ) : (
                <span className="contact-item-value contact-item-disabled">
                  {c.value}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="contact-footer">
        <span className="footer-name">Ikechukwu Peter © 2025</span>
        <span className="footer-tag">Built with React & Vite</span>
      </div>
    </section>
  );
}
