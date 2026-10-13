"use client";

import { useEffect, useRef, useState } from "react";
import { businesses, distributionPartners, type BrandId } from "@/lib/site-data";
import { BrandLogo } from "@/components/site/brand-logo";

const brands: BrandId[] = [...businesses.map(brand => brand.id), ...distributionPartners.map(partner => partner.id)];

function LogoGroup({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul className="brand-band-group" data-duplicate={duplicate} aria-hidden={duplicate ? true : undefined}>
      {brands.map(brand => (
        <li key={brand}>
          <a className="brand-band-link" href={`#${brand}`} tabIndex={duplicate ? -1 : undefined}>
            <BrandLogo brand={brand} />
          </a>
        </li>
      ))}
    </ul>
  );
}

export function BrandBand() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(true);
  const [pageVisible, setPageVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting));
    if (sectionRef.current) observer.observe(sectionRef.current);
    const updateVisibility = () => setPageVisible(!document.hidden);
    updateVisibility();
    document.addEventListener("visibilitychange", updateVisibility);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="brand-band"
      aria-label="Our brands and distribution partners"
      data-motion-state={!inView || !pageVisible ? "paused" : "playing"}
    >
      <div className="brand-band-heading">
        <p>Our brands and distribution partners</p>
      </div>
      <div className="brand-band-window">
        <div id="brand-band-track" className="brand-band-track">
          <LogoGroup />
          <LogoGroup duplicate />
        </div>
      </div>
    </section>
  );
}
