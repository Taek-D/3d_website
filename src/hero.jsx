function Hero({ scrollY, mouse, shape }) {
  return (
    <section className="hero" id="top" aria-label="Intro">
      <div className="hero-shape" aria-hidden="true">
        <Shape3D scrollY={scrollY} mouse={mouse} shape={shape} />
      </div>
      <div className="hero-content">
        <div className="hero-eyebrow" aria-hidden="true">
          <span className="dot" />
          <span>Independent studio — Est. 2018</span>
          <span className="dot" />
        </div>
        <h1 className="hero-title" aria-label="We design quiet things that feel loud.">
          <span className="line" aria-hidden="true"><span style={{ animationDelay: "0.1s" }}>We design</span></span>
          <span className="line" aria-hidden="true"><span style={{ animationDelay: "0.25s" }} className="italic">quiet things</span></span>
          <span className="line" aria-hidden="true"><span style={{ animationDelay: "0.4s" }}>that feel loud.</span></span>
        </h1>
        <p className="hero-sub">
          <span>Brand <span aria-hidden="true">✦</span> Identity</span>
          <span>Art Direction</span>
          <span>Motion <span aria-hidden="true">✦</span> Web</span>
        </p>
      </div>
      <div className="hero-meta left" aria-hidden="true">
        <div>Seoul — KR</div>
        <div>37.5665° N</div>
      </div>
      <div className="hero-meta right" aria-hidden="true">
        <div>New York — US</div>
        <div>40.7128° N</div>
      </div>
      <div className="hero-scroll-hint" aria-hidden="true">
        <span>Scroll</span>
        <div className="bar" />
      </div>
    </section>
  );
}
Object.assign(window, { Hero });
