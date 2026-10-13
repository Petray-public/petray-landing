import { businesses } from "@/lib/site-data";
import { BrandLogo } from "@/components/site/brand-logo";
import { ProductGallery } from "@/components/site/product-gallery";
import { SoftwareGallery } from "@/components/site/software-gallery";

const gummies = [
  { image: "lazeelab-multivitamin.jpg", name: "Multivitamin", caption: "The everyday one" },
  { image: "lazeelab-omega.jpg", name: "Omega", caption: "The balanced one" },
  { image: "lazeelab-probiotics.jpg", name: "Probiotics", caption: "The gut one" },
];

function GummyShowcase() {
  return (
    <div className="brand-showcase gummy-showcase">
      <div className="showcase-heading"><p>Gummy range</p><span>Coming soon</span></div>
      <div className="gummy-grid">
        {gummies.map(gummy => (
          <figure key={gummy.name}>
            <img src={`/assets/brands/${gummy.image}`} width={1024} height={1536} loading="lazy" alt={`LazeeLab website's ${gummy.name === "Probiotics" ? "Probiotic" : gummy.name} gummy packaging visualisation.`} />
            <figcaption><strong>{gummy.name}</strong><span>{gummy.caption}</span></figcaption>
          </figure>
        ))}
      </div>
      <p className="visual-note">Packaging visualisations from the brand website.</p>
    </div>
  );
}

export function Businesses() {
  return (
    <section className="businesses" id="businesses" aria-labelledby="businesses-title">
      <header className="businesses-intro">
        <h2 id="businesses-title">Meet our businesses.</h2>
        <p>Consumer brands and software. Built by Petray.</p>
      </header>
      {businesses.map(business => (
        <article className={`brand-section brand-${business.id}`} id={business.id} aria-labelledby={`${business.id}-title`} key={business.id}>
          <div className="brand-story">
            <p className="brand-index">{business.category}</p>
            <h2 id={`${business.id}-title`} className="brand-logo-heading"><BrandLogo brand={business.id} /></h2>
            <h3>{business.headline}</h3>
            <p>{business.description}</p>
            <ul className="brand-categories" aria-label={`${business.id} categories`}>
              {business.categories.map(category => <li key={category}>{category}</li>)}
            </ul>
            {business.clients && <p className="brand-clients">{business.clients}</p>}
            {business.launchNote && <p className="launch-note">{business.launchNote}</p>}
            <a className="brand-website" href={business.website} target="_blank" rel="noopener noreferrer">Visit website <span>{business.websiteLabel}</span></a>
          </div>
          {(business.id === "fastron" || business.id === "boltz") && <ProductGallery brand={business.id} />}
          {business.id === "chili" && <SoftwareGallery />}
          {business.id === "lazeelab" && <GummyShowcase />}
        </article>
      ))}
    </section>
  );
}
