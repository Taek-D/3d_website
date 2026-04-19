function App() {
  const [tweaks, setTweaksState] = useState(window.__TWEAKS);
  const [tweaksVisible, setTweaksVisible] = useState(false);
  const [booting, setBooting] = useState(true);
  const scrollY = useScrollY();
  const mouse = useMouse();
  const reduced = useReducedMotion();

  // Apply tweaks to body data-attrs
  useEffect(() => {
    document.body.dataset.mood = tweaks.mood;
    document.body.dataset.accent = tweaks.accent;
    document.body.dataset.grain = String(tweaks.grain);
    document.body.dataset.cursor = String(tweaks.cursor);
    if (tweaks.cursor) document.body.classList.add("cursor-custom");
    else document.body.classList.remove("cursor-custom");
  }, [tweaks]);

  const setTweaks = (next) => {
    setTweaksState(next);
    window.parent?.postMessage({ type: "__edit_mode_set_keys", edits: next }, "*");
  };

  // Edit-mode wiring
  useEffect(() => {
    const onMsg = (e) => {
      if (e.data?.type === "__activate_edit_mode") setTweaksVisible(true);
      if (e.data?.type === "__deactivate_edit_mode") setTweaksVisible(false);
    };
    window.addEventListener("message", onMsg);
    window.parent?.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", onMsg);
  }, []);

  // Boot curtain (page transition in) — skipped for reduced motion users
  useEffect(() => {
    const delay = reduced ? 0 : 1400;
    const t = setTimeout(() => setBooting(false), delay);
    return () => clearTimeout(t);
  }, [reduced]);

  return (
    <>
      {tweaks.cursor && <Cursor />}
      <div className="grain" aria-hidden="true" />
      <BootCurtain visible={booting} />
      <Nav />
      <main id="main" tabIndex={-1}>
        <Hero scrollY={scrollY} mouse={mouse} shape={tweaks.shape} />
        <About />
        <Services />
        <Works />
        <Contact />
      </main>
      <Tweaks tweaks={tweaks} setTweaks={setTweaks} visible={tweaksVisible} />
    </>
  );
}

function BootCurtain({ visible }) {
  return (
    <div
      aria-hidden={!visible}
      role="status"
      aria-live="polite"
      style={{
        position: "fixed",
        inset: 0,
        background: "var(--bg)",
        zIndex: 10002,
        pointerEvents: visible ? "auto" : "none",
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 1s cubic-bezier(0.7, 0, 0.3, 1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 24,
      }}
    >
      <div style={{
        fontFamily: "var(--serif)",
        fontStyle: "italic",
        fontSize: 48,
        color: "var(--fg)",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.4s",
      }}>
        atelier—noir<span style={{ color: "var(--accent)" }} aria-hidden="true">*</span>
      </div>
      <div style={{
        fontFamily: "var(--mono)",
        fontSize: 10,
        color: "var(--fg-dim)",
        letterSpacing: "0.3em",
        textTransform: "uppercase",
      }}>
        Loading — 2026
      </div>
      <div style={{
        width: 200, height: 1,
        background: "var(--fg-fade)",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "var(--accent)",
          animation: "loadbar 1.2s cubic-bezier(0.7, 0, 0.3, 1) forwards",
        }} />
      </div>
      <style>{`@keyframes loadbar { from { transform: translateX(-100%); } to { transform: translateX(0); } }`}</style>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
