function Hero({ scrollY, mouse, shape }) {
  return (
    <section className="hero" id="top">
      <div className="hero-shape">
        <Shape3D scrollY={scrollY} mouse={mouse} shape={shape} />
      </div>
      <div className="hero-content">
        <div className="hero-eyebrow">
          <span className="dot" />
          <span>Independent studio — Est. 2018</span>
          <span className="dot" />
        </div>
        <h1 className="hero-title">
          <span className="line"><span style={{ animationDelay: "0.1s" }}>We design</span></span>
          <span className="line"><span style={{ animationDelay: "0.25s" }} className="italic">quiet things</span></span>
          <span className="line"><span style={{ animationDelay: "0.4s" }}>that feel loud.</span></span>
        </h1>
        <div className="hero-sub">
          <span>Brand ✦ Identity</span>
          <span>Art Direction</span>
          <span>Motion ✦ Web</span>
        </div>
      </div>
      <div className="hero-meta left">
        <div>Seoul — KR</div>
        <div>37.5665° N</div>
      </div>
      <div className="hero-meta right">
        <div>New York — US</div>
        <div>40.7128° N</div>
      </div>
      <div className="hero-scroll-hint">
        <span>Scroll</span>
        <div className="bar" />
      </div>
    </section>
  );
}
Object.assign(window, { Hero });
