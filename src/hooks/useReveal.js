import { useEffect, useLayoutEffect, useRef } from "react";

// Reveals an element when it scrolls into view.
//
// The hidden state is applied from JS, never from the stylesheet, so if this
// hook never runs — script blocked, an error earlier in the tree, an old
// browser — the content is simply visible. A reveal that hides content by
// default and depends on JS to bring it back is a blank page waiting to
// happen, and this one is in front of recruiters.
//
// `stagger` switches to the attribute whose CSS walks the element's children
// with increasing delays, so a card grid arrives in sequence from one ref.
export default function useReveal({ stagger = false, threshold = 0.12 } = {}) {
  const ref = useRef(null);
  const attribute = stagger ? "data-reveal-stagger" : "data-reveal";

  // Set "hidden" before paint so nothing flashes in and then out again.
  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!reducedMotion) node.setAttribute(attribute, "hidden");
  }, [attribute]);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Nothing to animate: make sure it is not left hidden.
    if (!("IntersectionObserver" in window)) {
      node.setAttribute(attribute, "shown");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute(attribute, "shown");
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [attribute, threshold]);

  return ref;
}
