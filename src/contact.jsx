function Contact() {
  const [ref, inView] = useInView();
  return (
    <section className="section" id="contact" aria-labelledby="contact-heading" style={{ paddingTop: 200, paddingBottom: 80 }}>
      <div className="contact" ref={ref}>
        <div className={`contact-eyebrow reveal ${inView ? "in" : ""}`}>
          04 — Let's talk <span aria-hidden="true">✦</span> Now booking Q3 / Q4 2026
        </div>
        <h2 id="contact-heading" className="contact-title">
          <span className={`reveal ${inView ? "in" : ""}`} style={{ transitionDelay: "0.1s", display: "inline-block" }}>Start a</span>{" "}
          <span className={`italic reveal ${inView ? "in" : ""}`} style={{ transitionDelay: "0.2s", display: "inline-block" }}>conversation.</span>
        </h2>
        <div className={`reveal ${inView ? "in" : ""}`} style={{ transitionDelay: "0.35s" }}>
          <a href="mailto:studio@atelier-noir.com" className="contact-email" aria-label="Email the studio at studio@atelier-noir.com">
            studio@atelier-noir.com <span className="arrow" aria-hidden="true">→</span>
          </a>
        </div>
        <div className="contact-cards">
          <div className={`reveal ${inView ? "in" : ""}`} style={{ transitionDelay: "0.4s" }}>
            <div className="contact-card-label">New Business</div>
            <div className="contact-card-name">
              Min-ji Park
              <a href="mailto:hello@atelier-noir.com" className="contact-card-mail">hello@atelier-noir.com</a>
            </div>
          </div>
          <div className={`reveal ${inView ? "in" : ""}`} style={{ transitionDelay: "0.5s" }}>
            <div className="contact-card-label">Press &amp; Speaking</div>
            <div className="contact-card-name">
              Leo Bergman
              <a href="mailto:press@atelier-noir.com" className="contact-card-mail">press@atelier-noir.com</a>
            </div>
          </div>
          <div className={`reveal ${inView ? "in" : ""}`} style={{ transitionDelay: "0.6s" }}>
            <div className="contact-card-label">Careers</div>
            <div className="contact-card-name">
              Open portfolios
              <a href="mailto:join@atelier-noir.com" className="contact-card-mail">join@atelier-noir.com</a>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer" style={{ marginTop: 160 }}>
        <div className="footer-big" aria-hidden="true">
          atelier—noir<span style={{ color: "var(--accent)" }}>*</span>
        </div>
        <div className="footer-cols">
          <nav className="footer-col" aria-label="Studio sections">
            <h4>Studio</h4>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#works">Works</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="footer-col">
            <h4>Seoul</h4>
            <address style={{ fontStyle: "normal" }}>
              <span>14F, 28 Eulji-ro</span>
              <span>Jung-gu, Seoul</span>
              <a href="tel:+8220000000" style={{ marginTop: 8, color: "var(--fg)" }}>+82 02 0000 0000</a>
            </address>
          </div>
          <div className="footer-col">
            <h4>New York</h4>
            <address style={{ fontStyle: "normal" }}>
              <span>401 Broadway, 12F</span>
              <span>New York, NY 10013</span>
              <a href="tel:+12120000000" style={{ marginTop: 8, color: "var(--fg)" }}>+1 212 000 0000</a>
            </address>
          </div>
          <div className="footer-col">
            <h4>Index</h4>
            {/* External profiles are placeholders — rendered as non-interactive until real URLs are wired. */}
            <a href="#" aria-disabled="true" tabIndex={-1} onClick={(e) => e.preventDefault()}>Instagram <span aria-hidden="true">↗</span></a>
            <a href="#" aria-disabled="true" tabIndex={-1} onClick={(e) => e.preventDefault()}>Are.na <span aria-hidden="true">↗</span></a>
            <a href="#" aria-disabled="true" tabIndex={-1} onClick={(e) => e.preventDefault()}>Vimeo <span aria-hidden="true">↗</span></a>
            <a href="#" aria-disabled="true" tabIndex={-1} onClick={(e) => e.preventDefault()}>Newsletter <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="footer-legal">
          <span>© 2018 — 2026 Atelier Noir</span>
          <span>Made in Seoul &amp; New York</span>
          <span>v 4.2.1 — updated Apr 2026</span>
        </div>
      </footer>
    </section>
  );
}
Object.assign(window, { Contact });
