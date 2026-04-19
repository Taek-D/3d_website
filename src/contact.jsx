function Contact() {
  const [ref, inView] = useInView();
  return (
    <section className="section" id="contact" style={{ paddingTop: 200, paddingBottom: 80 }}>
      <div className="contact" ref={ref}>
        <div className={`contact-eyebrow reveal ${inView ? "in" : ""}`}>04 — Let's talk ✦ Now booking Q3 / Q4 2026</div>
        <h2 className="contact-title">
          <span className={`reveal ${inView ? "in" : ""}`} style={{ transitionDelay: "0.1s", display: "inline-block" }}>Start a</span>{" "}
          <span className={`italic reveal ${inView ? "in" : ""}`} style={{ transitionDelay: "0.2s", display: "inline-block" }}>conversation.</span>
        </h2>
        <div className={`reveal ${inView ? "in" : ""}`} style={{ transitionDelay: "0.35s" }}>
          <a href="mailto:studio@atelier-noir.com" className="contact-email">
            studio@atelier-noir.com <span className="arrow">→</span>
          </a>
        </div>
        <div style={{ marginTop: 80, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40, maxWidth: 800, margin: "80px auto 0", textAlign: "left" }}>
          <div className={`reveal ${inView ? "in" : ""}`} style={{ transitionDelay: "0.4s" }}>
            <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--fg-fade)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>New Business</div>
            <div style={{ fontFamily: "var(--serif)", fontSize: 22, lineHeight: 1.3 }}>Min-ji Park<br/><span style={{ color: "var(--fg-dim)", fontSize: 14, fontFamily: "var(--mono)", letterSpacing: "0.1em" }}>hello@atelier-noir.com</span></div>
          </div>
          <div className={`reveal ${inView ? "in" : ""}`} style={{ transitionDelay: "0.5s" }}>
            <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--fg-fade)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>Press &amp; Speaking</div>
            <div style={{ fontFamily: "var(--serif)", fontSize: 22, lineHeight: 1.3 }}>Leo Bergman<br/><span style={{ color: "var(--fg-dim)", fontSize: 14, fontFamily: "var(--mono)", letterSpacing: "0.1em" }}>press@atelier-noir.com</span></div>
          </div>
          <div className={`reveal ${inView ? "in" : ""}`} style={{ transitionDelay: "0.6s" }}>
            <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--fg-fade)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>Careers</div>
            <div style={{ fontFamily: "var(--serif)", fontSize: 22, lineHeight: 1.3 }}>Open portfolios<br/><span style={{ color: "var(--fg-dim)", fontSize: 14, fontFamily: "var(--mono)", letterSpacing: "0.1em" }}>join@atelier-noir.com</span></div>
          </div>
        </div>
      </div>

      <footer className="footer" style={{ marginTop: 160, flexDirection: "column", alignItems: "stretch" }}>
        <div className="footer-big">atelier—noir<span style={{ color: "var(--accent)" }}>*</span></div>
        <div className="footer-cols">
          <div className="footer-col">
            <h4>Studio</h4>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#works">Works</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-col">
            <h4>Seoul</h4>
            <div style={{ color: "var(--fg)" }}>14F, 28 Eulji-ro<br/>Jung-gu, Seoul</div>
            <div style={{ marginTop: 8 }}>+82 02 0000 0000</div>
          </div>
          <div className="footer-col">
            <h4>New York</h4>
            <div style={{ color: "var(--fg)" }}>401 Broadway, 12F<br/>New York, NY 10013</div>
            <div style={{ marginTop: 8 }}>+1 212 000 0000</div>
          </div>
          <div className="footer-col">
            <h4>Index</h4>
            <a href="#">Instagram ↗</a>
            <a href="#">Are.na ↗</a>
            <a href="#">Vimeo ↗</a>
            <a href="#">Newsletter ↗</a>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 24 }}>
          <span>© 2018 — 2026 Atelier Noir</span>
          <span>Made in Seoul &amp; New York</span>
          <span>v 4.2.1 — updated Apr 2026</span>
        </div>
      </footer>
    </section>
  );
}
Object.assign(window, { Contact });
