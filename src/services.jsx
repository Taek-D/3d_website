const SERVICES = [
  {
    num: "01",
    title: "Brand Identity",
    desc: "Visual systems that outlast trends. Logotype, wordmark, and a complete design language — built from a singular strategic idea.",
    tags: ["Strategy", "Logotype", "Systems", "Guidelines"],
  },
  {
    num: "02",
    title: "Editorial & Print",
    desc: "Books, magazines, and catalogues for cultural institutions. We typeset with the same care a novelist rewrites a sentence.",
    tags: ["Books", "Magazines", "Catalogues", "Typography"],
  },
  {
    num: "03",
    title: "Art Direction",
    desc: "Campaign concept, photography, and film direction. We help brands speak in whole sentences instead of slogans.",
    tags: ["Campaigns", "Photography", "Film", "Styling"],
  },
  {
    num: "04",
    title: "Interactive & Web",
    desc: "Cinematic, scroll-driven websites and prototypes. Not a template — an experience that reads like the brand sounds.",
    tags: ["Websites", "Prototype", "3D", "Motion"],
  },
  {
    num: "05",
    title: "Motion & Film",
    desc: "Brand films, title sequences, and broadcast design. Frame by frame, cut like a short story.",
    tags: ["Brand Film", "Titles", "Broadcast", "Sound"],
  },
];

function Services() {
  const [ref, inView] = useInView();
  return (
    <section className="section" id="services" aria-labelledby="services-heading" style={{ background: "var(--bg-2)" }}>
      <div className="services">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 80, gap: 40, flexWrap: "wrap" }}>
          <div>
            <div className={`section-label reveal ${inView ? "in" : ""}`} ref={ref}>
              <span>02 — What we do</span>
            </div>
            <h2 id="services-heading" className={`works-title reveal ${inView ? "in" : ""}`} style={{ transitionDelay: "0.1s" }}>
              Five disciplines,<br/>
              <span className="italic">one studio.</span>
            </h2>
          </div>
          <p style={{ maxWidth: 360, color: "var(--fg-dim)", fontFamily: "var(--sans)", fontSize: 14, lineHeight: 1.6 }}>
            We take on roughly eight projects a year so each one receives the attention it deserves. Engagements typically run 8–16 weeks.
          </p>
        </div>

        <ol className="services-grid" role="list">
          {SERVICES.map((s) => (
            <li key={s.num} className="service-row" tabIndex={0}>
              <div className="service-num" aria-hidden="true">{s.num} /</div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <ul className="service-tags" aria-label={`${s.title} capabilities`}>
                {s.tags.map((t) => <li key={t}>— {t}</li>)}
              </ul>
              <div className="service-arrow" aria-hidden="true">→</div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
Object.assign(window, { Services });
