function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my;
    let raf;

    const onMove = (e) => {
      mx = e.clientX; my = e.clientY;
      if (dotRef.current) dotRef.current.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
    };
    const onOver = (e) => {
      const t = e.target;
      if (t.closest("a, button, .work, .service-row, .tweak-opt")) setHover(true);
      else setHover(false);
    };

    const loop = () => {
      rx = lerp(rx, mx, 0.15);
      ry = lerp(ry, my, 0.15);
      if (ringRef.current) ringRef.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className={`cursor-ring ${hover ? "hover" : ""}`} />
    </>
  );
}
Object.assign(window, { Cursor });
