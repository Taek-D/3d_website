// Hooks & utilities
const { useState, useEffect, useRef, useLayoutEffect, useMemo, useCallback } = React;

function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setY(window.scrollY));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);
  return y;
}

function useInView(opts) {
  const threshold = opts?.threshold ?? 0.1;
  const rootMargin = opts?.rootMargin ?? "0px 0px -5% 0px";
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // If element is already on-screen at mount, mark immediately
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) { setInView(true); io.disconnect(); return; }
      }
    }, { threshold, rootMargin });
    io.observe(el);
    // Safety fallback: trigger after 3s regardless
    const fallback = setTimeout(() => setInView(true), 3000);
    return () => { io.disconnect(); clearTimeout(fallback); };
  }, []);
  return [ref, inView];
}

function useMouse() {
  const [m, setM] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e) => setM({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return m;
}

// Respects the OS-level `prefers-reduced-motion` setting.
// Components use this to short-circuit parallax, infinite loops, and heavy 3D.
function useReducedMotion() {
  const [reduced, setReduced] = useState(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });
  useEffect(() => {
    if (!window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e) => setReduced(e.matches);
    mq.addEventListener ? mq.addEventListener("change", onChange) : mq.addListener(onChange);
    return () => {
      mq.removeEventListener ? mq.removeEventListener("change", onChange) : mq.removeListener(onChange);
    };
  }, []);
  return reduced;
}

function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
function lerp(a, b, t) { return a + (b - a) * t; }
function map(v, a, b, c, d) { return c + ((v - a) / (b - a)) * (d - c); }

Object.assign(window, { useState, useEffect, useRef, useLayoutEffect, useMemo, useCallback, useScrollY, useInView, useMouse, useReducedMotion, clamp, lerp, map });
