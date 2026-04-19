function Nav() {
  const scrollY = useScrollY();
  return (
    <nav className="nav" style={{ padding: scrollY > 100 ? "16px 40px" : "24px 40px", transition: "padding 0.4s" }}>
      <a href="#top" className="nav-logo">Atelier Noir<span style={{ color: "var(--accent)" }}>*</span></a>
      <div className="nav-links">
        <a href="#about" className="nav-link"><span className="num">01</span>About</a>
        <a href="#services" className="nav-link"><span className="num">02</span>Services</a>
        <a href="#works" className="nav-link"><span className="num">03</span>Works</a>
        <a href="#contact" className="nav-link"><span className="num">04</span>Contact</a>
      </div>
      <a href="#contact" className="nav-cta">Start a project ↗</a>
    </nav>
  );
}
Object.assign(window, { Nav });
