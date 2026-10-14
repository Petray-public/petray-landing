import { brandLogos, distributionPartners, type PartnerProduct } from "@/lib/site-data";

function PartnerProductCard({ product, featured, brandName }: { product: PartnerProduct; featured: boolean; brandName: string }) {
  return (
    <article className={`partner-product${featured ? " partner-product-feature" : ""}`} aria-labelledby={product.id}>
      <a className="partner-product-image" href={product.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${brandName} ${product.name} product details`}>
        <img src={product.image} alt={product.imageAlt} width={product.width} height={product.height} loading="lazy" />
      </a>
      <div className="partner-product-info">
        <h4 id={product.id}>{product.name}</h4>
        <p>{product.description}</p>
        <ul className="partner-features">{product.features.map(feature => <li key={feature}>{feature}</li>)}</ul>
        <a className="partner-details" href={product.url} target="_blank" rel="noopener noreferrer">{product.detailsLabel} <span aria-hidden="true">↗</span></a>
      </div>
    </article>
  );
}

export function DistributionPartners() {
  return (
    <section className="distribution-partners" id="distribution-partners" aria-labelledby="distribution-title">
      <header className="distribution-intro">
        <h2 id="distribution-title">Distribution partners.</h2>
        <p>Alongside our own brands, we work with international home-care brands to bring their products to customers in India.</p>
      </header>
      {distributionPartners.map(partner => {
        const logo = brandLogos[partner.id];
        return (
          <article className={`distribution-partner partner-${partner.id}`} id={partner.id} aria-labelledby={`${partner.id}-title`} key={partner.id}>
            <div className="partner-story">
              <p className="partner-category">{partner.category}</p>
              <h3 className="partner-logo" id={`${partner.id}-title`}><img src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} loading="lazy" /></h3>
              <h4>{partner.headline}</h4>
              <p>{partner.description}</p>
              <p className="partner-role">Petray distribution partner</p>
              <a className="partner-website" href={partner.website} target="_blank" rel="noopener noreferrer">Visit India website <span aria-hidden="true">↗</span></a>
            </div>
            <div className="partner-showcase">
              <p className="partner-range-label">{partner.rangeLabel}</p>
              {partner.products.length > 1 ? (
                <div className="partner-product-grid">{partner.products.map(product => <PartnerProductCard product={product} featured={false} brandName={logo.alt} key={product.id} />)}</div>
              ) : <PartnerProductCard product={partner.products[0]} featured brandName={logo.alt} />}
            </div>
          </article>
        );
      })}
    </section>
  );
}
