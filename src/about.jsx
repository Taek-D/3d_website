function About() {
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();
  return (
    <section className="section" id="about" aria-labelledby="about-heading">
      <h2 id="about-heading" className="u-visually-hidden" style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}>
        About the studio
      </h2>
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
        <aside className="about-side" aria-label="Studio details">
          <dl className="about-meta">
            <div style={{ marginBottom: 24 }}>
              <dt className="k">Founded</dt>
              <dd className="v">2018 — Seoul</dd>
            </div>
            <div style={{ marginBottom: 24 }}>
              <dt className="k">Team</dt>
              <dd className="v">14 designers, strategists, technologists</dd>
            </div>
            <div style={{ marginBottom: 24 }}>
              <dt className="k">Recognition</dt>
              <dd className="v">ADC · D&amp;AD · Brand New · Awwwards SOTD ×6</dd>
            </div>
            <div>
              <dt className="k">Now booking</dt>
              <dd className="v">Q3 — Q4 / 2026</dd>
            </div>
          </dl>
          <dl className="about-stats">
            <div>
              <dd className="n">120<span style={{ fontSize: 32 }} aria-hidden="true">+</span></dd>
              <dt className="l">Projects shipped</dt>
            </div>
            <div>
              <dd className="n">08</dd>
              <dt className="l">Years of practice</dt>
            </div>
            <div>
              <dd className="n">32</dd>
              <dt className="l">Countries reached</dt>
            </div>
            <div>
              <dd className="n" aria-label="Infinite">∞</dd>
              <dt className="l">Cups of coffee</dt>
            </div>
          </dl>
        </aside>
      </div>

      <div style={{ marginTop: 160 }} className="marquee" aria-hidden="true">
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
