import { PanelButton } from "@/components/site/site-shell";

/** Hero layout restored from the first saved Site version, 1 October 2026. */
export function OriginalHero() {
  return (
    <section className="og-hero" aria-labelledby="hero-title">
      <div className="og-hero-copy">
        <div className="og-eyebrow"><span>PETRAY PRIVATE LIMITED</span><i aria-hidden="true" /></div>
        <h1 id="hero-title"><span>GOOD</span><span>IDEAS.</span><span className="og-blue">REAL</span><span className="og-business-line">BUSINESSES.</span></h1>
        <p className="og-intro">We build consumer brands and software.<br />Come build with us.</p>
        <div className="og-hero-actions">
          <PanelButton className="og-primary" panel="businesses">Explore our businesses</PanelButton>
          <PanelButton className="og-outline" panel="careers">Join the team</PanelButton>
        </div>
      </div>
      <div className="og-hero-art">
        <img src="/assets/hero-branded-collage.webp" srcSet="/assets/hero-branded-collage-600.webp 600w, /assets/hero-branded-collage.webp 946w" sizes="(max-width:760px) 100vw, 60vw" alt="The Petray brand world: Boltz's dog, a FASTRON air purifier, LazeeLab gummies and the Chili Labs website." width={946} height={864} fetchPriority="high" />
      </div>
    </section>
  );
}
