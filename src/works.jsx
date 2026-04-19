const WORKS = [
  {
    slug: "maison-hiver",
    title: "Maison Hiver",
    italic: "brand identity",
    year: "2025",
    type: "Identity · Packaging",
    cat: "brand",
    placeholder: "MAISON HIVER — FULL CAMPAIGN FILM",
    hue: 30,
  },
  {
    slug: "folio-kx",
    title: "Folio KX",
    italic: "editorial",
    year: "2025",
    type: "Book · 240pp",
    cat: "editorial",
    placeholder: "FOLIO KX — COVER + SPREADS",
    hue: 200,
  },
  {
    slug: "northline",
    title: "Northline",
    italic: "type",
    year: "2024",
    type: "Custom Typeface",
    cat: "brand",
    placeholder: "NORTHLINE — SPECIMEN",
    hue: 60,
  },
  {
    slug: "arc-museum",
    title: "Arc Museum",
    italic: "digital",
    year: "2024",
    type: "Website · 3D",
    cat: "digital",
    placeholder: "ARC — INTERACTIVE GALLERY",
    hue: 20,
  },
];

function Works() {
  const [ref, inView] = useInView();
  const [filter, setFilter] = useState("all");
  const shown = useMemo(() => filter === "all" ? WORKS : WORKS.filter(w => w.cat === filter), [filter]);
  const classes = ["work-large", "work-tall", "work-square", "work-wide"];
  const mediaCls = ["tall", "tall", "square", "wide"];

  return (
    <section className="section" id="works">
      <div className="works">
        <div className="works-header">
          <div>
            <div className={`section-label reveal ${inView ? "in" : ""}`} ref={ref}>
              <span>03 — Selected works</span>
            </div>
            <h2 className={`works-title reveal ${inView ? "in" : ""}`} style={{ transitionDelay: "0.1s" }}>
              A small<br />
              <span className="italic">archive.</span>
            </h2>
          </div>
          <div className="works-filter">
            <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>All</button>
            <button className={filter === "brand" ? "active" : ""} onClick={() => setFilter("brand")}>Brand</button>
            <button className={filter === "editorial" ? "active" : ""} onClick={() => setFilter("editorial")}>Editorial</button>
            <button className={filter === "digital" ? "active" : ""} onClick={() => setFilter("digital")}>Digital</button>
          </div>
        </div>

        <div className="works-grid">
          {shown.map((w, i) => (
            <Work key={w.slug} work={w} cls={classes[i] || ""} mediaCls={mediaCls[i] || "square"} />
          ))}
        </div>

        <div style={{ marginTop: 120, textAlign: "center" }}>
          <a href="#" className="contact-email" style={{ fontSize: 12 }}>
            View full archive <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Work({ work, cls, mediaCls }) {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const mouseRef = useRef(null);
  const [m, setM] = useState({ x: 0, y: 0, active: false });
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setM({ x: ((e.clientX - r.left) / r.width - 0.5) * 20, y: ((e.clientY - r.top) / r.height - 0.5) * 20, active: true });
  };
  const onLeave = () => setM({ x: 0, y: 0, active: false });

  return (
    <article
      ref={ref}
      className={`work ${cls} reveal-clip ${inView ? "in" : ""}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className={`work-media ${mediaCls}`} style={{ transform: `perspective(1000px) rotateX(${-m.y * 0.3}deg) rotateY(${m.x * 0.3}deg)`, transition: m.active ? "transform 0.1s linear" : "transform 0.6s cubic-bezier(0.2,0.8,0.2,1)" }}>
        <div className="work-placeholder" style={{
          background: `
            repeating-linear-gradient(135deg, transparent 0 12px, rgba(255,255,255,0.04) 12px 13px),
            radial-gradient(ellipse at ${50 + m.x * 2}% ${50 + m.y * 2}%, oklch(0.3 0.08 ${work.hue}) 0%, oklch(0.12 0.04 ${work.hue}) 60%, var(--bg-2) 100%)
          `
        }}>
          {work.placeholder}
        </div>
        <div className="work-overlay">
          <div className="work-play">▶ PLAY</div>
        </div>
      </div>
      <div className="work-info">
        <div>
          <div className="work-title">
            {work.title} <span className="italic">— {work.italic}</span>
          </div>
          <div style={{ marginTop: 8, fontFamily: "var(--mono)", fontSize: 10, color: "var(--fg-fade)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
            {work.type}
          </div>
        </div>
        <div className="work-meta">
          <div>/ {work.year}</div>
          <div style={{ color: "var(--fg-fade)" }}>{String(WORKS.indexOf(work) + 1).padStart(2, "0")}</div>
        </div>
      </div>
    </article>
  );
}
Object.assign(window, { Works });
