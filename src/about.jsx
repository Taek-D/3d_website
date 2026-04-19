function About() {
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();
  return (
    <section className="section" id="about">
      <div className="about">
        <div>
          <div className={`section-label reveal ${inView ? "in" : ""}`} ref={ref}>
            <span>01 — About the studio</span>
          </div>
          <p className={`about-text reveal ${inView ? "in" : ""}`} style={{ transitionDelay: "0.15s" }}>
            <span>We are a small </span>
            <span className="italic">creative studio</span>
            <span> based between </span>
            <span className="italic">Seoul</span>
            <span> and </span>
            <span className="italic">New York</span>
            <span className="dim">, crafting identity systems, editorial experiences, and cinematic websites for cultural institutions and quiet, confident brands.</span>
          </p>
          <p className="about-text reveal" ref={ref2} style={{ marginTop: 48, transitionDelay: "0.3s", opacity: inView2 ? 1 : 0, transform: inView2 ? "translateY(0)" : "translateY(40px)" }}>
            <span className="dim">Every project begins with a single honest conversation —</span>
            <span> what should this thing </span>
            <span className="italic">become</span>
            <span className="dim">, and who is it actually for?</span>
          </p>
        </div>
        <aside className="about-side">
          <div className="about-meta">
            <div style={{ marginBottom: 24 }}>
              <span className="k">Founded</span>
              <span className="v">2018 — Seoul</span>
            </div>
            <div style={{ marginBottom: 24 }}>
              <span className="k">Team</span>
              <span className="v">14 designers, strategists, technologists</span>
            </div>
            <div style={{ marginBottom: 24 }}>
              <span className="k">Recognition</span>
              <span className="v">ADC · D&amp;AD · Brand New · Awwwards SOTD ×6</span>
            </div>
            <div>
              <span className="k">Now booking</span>
              <span className="v">Q3 — Q4 / 2026</span>
            </div>
          </div>
          <div className="about-stats">
            <div>
              <div className="n">120<span style={{ fontSize: 32 }}>+</span></div>
              <div className="l">Projects shipped</div>
            </div>
            <div>
              <div className="n">08</div>
              <div className="l">Years of practice</div>
            </div>
            <div>
              <div className="n">32</div>
              <div className="l">Countries reached</div>
            </div>
            <div>
              <div className="n">∞</div>
              <div className="l">Cups of coffee</div>
            </div>
          </div>
        </aside>
      </div>

      <div style={{ marginTop: 160 }} className="marquee">
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, i) => (
            <React.Fragment key={i}>
              <span className="marquee-item">Brand Identity</span>
              <span className="marquee-item">Editorial Design</span>
              <span className="marquee-item">Art Direction</span>
              <span className="marquee-item">Motion</span>
              <span className="marquee-item">Interactive</span>
              <span className="marquee-item">Type Design</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { About });
