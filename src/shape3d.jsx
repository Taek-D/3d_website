// 3D rotating/distorting shape — pure CSS 3D + SVG
function Shape3D({ scrollY, mouse, shape = "torus" }) {
  const ref = useRef(null);
  const rotY = (scrollY * 0.15) + (mouse.x - window.innerWidth / 2) * 0.02;
  const rotX = (scrollY * 0.08) + (mouse.y - window.innerHeight / 2) * 0.02;
  const scale = 1 - Math.min(scrollY / 2000, 0.5);

  // Build ring structure for "torus", sphere for "sphere", cube for "cube"
  if (shape === "sphere") return <SphereShape rotX={rotX} rotY={rotY} scale={scale} />;
  if (shape === "cube") return <CubeShape rotX={rotX} rotY={rotY} scale={scale} />;
  return <TorusShape rotX={rotX} rotY={rotY} scale={scale} />;
}

function TorusShape({ rotX, rotY, scale }) {
  // Stacked rings forming a torus-like 3D structure
  const rings = 40;
  const size = 520;
  return (
    <div style={{
      position: "relative",
      width: size, height: size,
      transformStyle: "preserve-3d",
      transform: `rotateX(${rotX}deg) rotateY(${rotY}deg) scale(${scale})`,
      transition: "transform 0.1s linear",
    }}>
      {Array.from({ length: rings }).map((_, i) => {
        const t = i / (rings - 1);
        const angle = t * Math.PI * 2;
        const radius = size / 2;
        const z = Math.sin(angle) * 80;
        const ringRadius = radius - Math.abs(Math.cos(angle)) * 60;
        const opacity = 0.2 + Math.abs(Math.sin(angle)) * 0.6;
        return (
          <div key={i} style={{
            position: "absolute",
            top: "50%", left: "50%",
            width: ringRadius * 2,
            height: ringRadius * 2,
            marginLeft: -ringRadius,
            marginTop: -ringRadius,
            border: `1px solid rgba(236, 232, 225, ${opacity})`,
            borderRadius: "50%",
            transform: `translateZ(${z}px) rotateX(${t * 360}deg)`,
            transformStyle: "preserve-3d",
          }} />
        );
      })}
      {/* Accent ring */}
      <div style={{
        position: "absolute",
        top: "50%", left: "50%",
        width: size * 0.95,
        height: size * 0.95,
        marginLeft: -size * 0.475,
        marginTop: -size * 0.475,
        border: "1px solid var(--accent)",
        borderRadius: "50%",
        opacity: 0.4,
      }} />
    </div>
  );
}

function SphereShape({ rotX, rotY, scale }) {
  const lats = 20;
  const lngs = 24;
  const size = 480;
  const r = size / 2;
  const points = [];
  for (let i = 0; i <= lats; i++) {
    const lat = (i / lats) * Math.PI - Math.PI / 2;
    for (let j = 0; j < lngs; j++) {
      const lng = (j / lngs) * Math.PI * 2;
      const x = Math.cos(lat) * Math.cos(lng) * r;
      const y = Math.sin(lat) * r;
      const z = Math.cos(lat) * Math.sin(lng) * r;
      points.push({ x, y, z });
    }
  }
  return (
    <div style={{
      position: "relative", width: size, height: size,
      transformStyle: "preserve-3d",
      transform: `rotateX(${rotX}deg) rotateY(${rotY}deg) scale(${scale})`,
    }}>
      {points.map((p, i) => (
        <div key={i} style={{
          position: "absolute",
          top: "50%", left: "50%",
          width: 2, height: 2,
          background: "var(--fg)",
          borderRadius: "50%",
          transform: `translate3d(${p.x}px, ${p.y}px, ${p.z}px)`,
          opacity: 0.8,
        }} />
      ))}
    </div>
  );
}

function CubeShape({ rotX, rotY, scale }) {
  const size = 320;
  const faces = [
    { tf: `translateZ(${size/2}px)` },
    { tf: `rotateY(180deg) translateZ(${size/2}px)` },
    { tf: `rotateY(90deg) translateZ(${size/2}px)` },
    { tf: `rotateY(-90deg) translateZ(${size/2}px)` },
    { tf: `rotateX(90deg) translateZ(${size/2}px)` },
    { tf: `rotateX(-90deg) translateZ(${size/2}px)` },
  ];
  return (
    <div style={{
      position: "relative", width: size, height: size,
      transformStyle: "preserve-3d",
      transform: `rotateX(${rotX}deg) rotateY(${rotY}deg) scale(${scale})`,
    }}>
      {faces.map((f, i) => (
        <div key={i} style={{
          position: "absolute",
          inset: 0,
          border: "1px solid var(--fg)",
          background: `repeating-linear-gradient(45deg, transparent 0 10px, rgba(236,232,225,0.04) 10px 11px)`,
          transform: f.tf,
        }} />
      ))}
    </div>
  );
}

Object.assign(window, { Shape3D });
