function Tweaks({ tweaks, setTweaks, visible }) {
  if (!visible) return null;
  const set = (k, v) => setTweaks({ ...tweaks, [k]: v });

  return (
    <div className="tweaks">
      <div className="tweaks-header">
        <span>Tweaks</span>
        <span style={{ color: "var(--accent)" }}>✦</span>
      </div>

      <div className="tweak-row">
        <label>Mood</label>
        <div className="tweak-opts">
          {["noir", "ivory", "bone"].map(v => (
            <button key={v} className={`tweak-opt ${tweaks.mood === v ? "active" : ""}`} onClick={() => set("mood", v)}>{v}</button>
          ))}
        </div>
      </div>

      <div className="tweak-row">
        <label>Accent</label>
        <div className="tweak-opts">
          {[
            { k: "amber", c: "oklch(0.78 0.14 70)" },
            { k: "rust", c: "oklch(0.62 0.16 40)" },
            { k: "sage", c: "oklch(0.78 0.08 145)" },
            { k: "ice", c: "oklch(0.82 0.08 230)" },
          ].map(o => (
            <button key={o.k} className={`tweak-opt ${tweaks.accent === o.k ? "active" : ""}`} onClick={() => set("accent", o.k)} style={{ padding: "6px" }}>
              <span className="tweak-swatch" style={{ background: o.c }} />
            </button>
          ))}
        </div>
      </div>

      <div className="tweak-row">
        <label>Hero shape</label>
        <div className="tweak-opts">
          {["torus", "sphere", "cube"].map(v => (
            <button key={v} className={`tweak-opt ${tweaks.shape === v ? "active" : ""}`} onClick={() => set("shape", v)}>{v}</button>
          ))}
        </div>
      </div>

      <div className="tweak-row">
        <label>Grain</label>
        <div className="tweak-opts">
          <button className={`tweak-opt ${tweaks.grain ? "active" : ""}`} onClick={() => set("grain", true)}>On</button>
          <button className={`tweak-opt ${!tweaks.grain ? "active" : ""}`} onClick={() => set("grain", false)}>Off</button>
        </div>
      </div>

      <div className="tweak-row">
        <label>Custom cursor</label>
        <div className="tweak-opts">
          <button className={`tweak-opt ${tweaks.cursor ? "active" : ""}`} onClick={() => set("cursor", true)}>On</button>
          <button className={`tweak-opt ${!tweaks.cursor ? "active" : ""}`} onClick={() => set("cursor", false)}>Off</button>
        </div>
      </div>
    </div>
  );
}
Object.assign(window, { Tweaks });
