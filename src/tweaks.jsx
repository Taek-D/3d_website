function Tweaks({ tweaks, setTweaks, visible }) {
  if (!visible) return null;
  const set = (k, v) => setTweaks({ ...tweaks, [k]: v });

  return (
    <div className="tweaks" role="region" aria-label="Visual tweaks">
      <div className="tweaks-header">
        <span>Tweaks</span>
        <span style={{ color: "var(--accent)" }} aria-hidden="true">✦</span>
      </div>

      <div className="tweak-row" role="group" aria-labelledby="tweak-mood-label">
        <label id="tweak-mood-label">Mood</label>
        <div className="tweak-opts">
          {["noir", "ivory", "bone"].map(v => (
            <button
              key={v}
              type="button"
              className="tweak-opt"
              aria-pressed={tweaks.mood === v}
              onClick={() => set("mood", v)}
            >{v}</button>
          ))}
        </div>
      </div>

      <div className="tweak-row" role="group" aria-labelledby="tweak-accent-label">
        <label id="tweak-accent-label">Accent</label>
        <div className="tweak-opts">
          {[
            { k: "amber", c: "oklch(0.78 0.14 70)" },
            { k: "rust", c: "oklch(0.62 0.16 40)" },
            { k: "sage", c: "oklch(0.78 0.08 145)" },
            { k: "ice", c: "oklch(0.82 0.08 230)" },
          ].map(o => (
            <button
              key={o.k}
              type="button"
              className="tweak-opt"
              aria-pressed={tweaks.accent === o.k}
              aria-label={`Accent ${o.k}`}
              onClick={() => set("accent", o.k)}
              style={{ padding: "6px" }}
            >
              <span className="tweak-swatch" style={{ background: o.c }} aria-hidden="true" />
            </button>
          ))}
        </div>
      </div>

      <div className="tweak-row" role="group" aria-labelledby="tweak-shape-label">
        <label id="tweak-shape-label">Hero shape</label>
        <div className="tweak-opts">
          {["torus", "sphere", "cube"].map(v => (
            <button
              key={v}
              type="button"
              className="tweak-opt"
              aria-pressed={tweaks.shape === v}
              onClick={() => set("shape", v)}
            >{v}</button>
          ))}
        </div>
      </div>

      <div className="tweak-row" role="group" aria-labelledby="tweak-grain-label">
        <label id="tweak-grain-label">Grain</label>
        <div className="tweak-opts">
          <button type="button" className="tweak-opt" aria-pressed={tweaks.grain} onClick={() => set("grain", true)}>On</button>
          <button type="button" className="tweak-opt" aria-pressed={!tweaks.grain} onClick={() => set("grain", false)}>Off</button>
        </div>
      </div>

      <div className="tweak-row" role="group" aria-labelledby="tweak-cursor-label">
        <label id="tweak-cursor-label">Custom cursor</label>
        <div className="tweak-opts">
          <button type="button" className="tweak-opt" aria-pressed={tweaks.cursor} onClick={() => set("cursor", true)}>On</button>
          <button type="button" className="tweak-opt" aria-pressed={!tweaks.cursor} onClick={() => set("cursor", false)}>Off</button>
        </div>
      </div>
    </div>
  );
}
Object.assign(window, { Tweaks });
