"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function PageMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sections = [...element.querySelectorAll<HTMLElement>(".brand-section,.distribution-partner,.businesses-intro,.distribution-intro")];
    let frame: number | null = null;
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) { (entry.target as HTMLElement).dataset.revealed = "true"; observer.unobserve(entry.target); }
    }, { threshold: .08, rootMargin: "0px 0px -24px 0px" });
    const enable = () => {
      element.dataset.motion = preference.matches ? "reduced" : "ready";
      sections.forEach(section => {
        if (preference.matches) section.dataset.revealed = "true";
        else observer.observe(section);
      });
    };
    const updateScroll = () => {
      if (frame !== null || preference.matches) return;
      frame = requestAnimationFrame(() => {
        frame = null;
        const hero = element.querySelector<HTMLElement>(".hero-experience");
        if (!hero || hero.dataset.motionPaused === "true") return;
        const bounds = hero.getBoundingClientRect();
        if (bounds.bottom < 0 || bounds.top > window.innerHeight) return;
        const progress = Math.max(0, Math.min(1, -bounds.top / bounds.height));
        hero.style.setProperty("--hero-departure", String(progress));
      });
    };
    enable();
    preference.addEventListener("change", enable);
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", enable);
      window.removeEventListener("scroll", updateScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);
  return <div className="page-motion" ref={root}>{children}</div>;
}
