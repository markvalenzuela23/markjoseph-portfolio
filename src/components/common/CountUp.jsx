import { useEffect, useRef, useState } from "react";

// Splits "$1,860" into "$" + 1860 + "", "7+" into "" + 7 + "+", and so on.
// Returns null when the value should not be counted: no digits at all
// ("Zero", "EN / FIL"), or digits outside the main number ("24/7"), where a
// count-up would read as a glitch rather than an effect.
function parse(value) {
  const match = String(value).match(/^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/);
  if (!match) return null;

  const [, prefix, digits, suffix] = match;
  if (/\d/.test(prefix) || /\d/.test(suffix)) return null;

  const target = Number(digits.replace(/,/g, ""));
  if (!Number.isFinite(target)) return null;

  return { prefix, target, suffix, grouped: digits.includes(",") };
}

// Fast at first, easing out — a linear count looks mechanical.
const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

const DURATION = 1100;

function CountUp({ value, className = "" }) {
  const parsed = parse(value);
  const [display, setDisplay] = useState(() =>
    parsed ? `${parsed.prefix}0${parsed.suffix}` : value
  );
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!parsed || !node) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const settle = () => {
      const shown = parsed.grouped
        ? parsed.target.toLocaleString("en-US")
        : String(parsed.target);
      setDisplay(`${parsed.prefix}${shown}${parsed.suffix}`);
    };

    if (reducedMotion || !("IntersectionObserver" in window)) {
      settle();
      return;
    }

    let frame = 0;

    const run = () => {
      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / DURATION, 1);
        const current = Math.round(easeOutExpo(progress) * parsed.target);
        const shown = parsed.grouped
          ? current.toLocaleString("en-US")
          : String(current);

        setDisplay(`${parsed.prefix}${shown}${parsed.suffix}`);

        if (progress < 1) frame = requestAnimationFrame(tick);
      };

      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          observer.unobserve(entry.target);
          run();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
    // `value` is the only real input; `parsed` is derived from it.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

export default CountUp;
