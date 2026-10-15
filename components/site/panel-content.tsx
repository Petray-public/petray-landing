import type { PanelId } from "@/lib/site-data";
import { BrandLogo } from "@/components/site/brand-logo";

export function PanelContent({ panel }: { panel: PanelId }) {
  if (panel === "about") return (
    <>
      <p className="panel-kicker">PETRAY PRIVATE LIMITED</p>
      <h2 id="panel-title">About Petray.</h2>
      <p>Petray builds and operates consumer brands and software from Pune, India.</p>
      <p>Our portfolio brings together home appliances, pet care, wellness and customer-support technology. The work connects products, commerce, marketing and software.</p>
      <ul className="details-list">
        <li><strong>Consumer brands</strong><span className="panel-brand-row"><BrandLogo brand="fastron" /><BrandLogo brand="boltz" /><BrandLogo brand="lazeelab" /></span></li>
        <li><strong>Software</strong><span className="panel-brand-row"><BrandLogo brand="chili" /></span></li>
        <li><strong>Distribution partners</strong><span className="panel-brand-row"><BrandLogo brand="jimmy" /><BrandLogo brand="vewior" /></span></li>
        <li><strong>Based in</strong><span>Pune, India</span></li>
      </ul>
    </>
  );
  if (panel === "careers") return (
    <>
      <p className="panel-kicker">Careers</p>
      <h2 id="panel-title">Careers at Petray.</h2>
      <p>Our work spans consumer products and software. Find your place across commerce, marketing, operations and technology.</p>
      <ul className="details-list">
        <li><strong>Commerce</strong><span>Bring products to customers through marketplaces and online stores.</span></li>
        <li><strong>Brand &amp; marketing</strong><span>Make the product story clear through campaigns, content and creative work.</span></li>
        <li><strong>Operations</strong><span>Connect sourcing, fulfilment and customer experience.</span></li>
        <li><strong>Technology</strong><span>Build software that helps commerce brands support their customers.</span></li>
      </ul>
      <p className="panel-footnote">Want to work at Petray? Connect with us at <a href="mailto:hr@petray.in">hr@petray.in</a>.</p>
    </>
  );
  if (panel === "partners") return (
    <>
      <p className="panel-kicker">Partnerships</p>
      <h2 id="panel-title">Work with Petray.</h2>
      <p>Explore manufacturing, creator and distribution partnerships across our portfolio.</p>
      <ul className="details-list">
        <li><strong>Manufacturers</strong><span>Explore product development and sourcing across our consumer brands.</span></li>
        <li><strong>Creators</strong><span>Find a brand and product that connects with your audience.</span></li>
        <li><strong>Brands</strong><span>Explore potential commerce and distribution opportunities in India.</span></li>
      </ul>
      <div className="panel-contact">
        <p>For partnership and enquiries, contact us:</p>
        <ul className="panel-contact-list">
          <li><strong>Email</strong><a href="mailto:petraypvt@gmail.com">petraypvt@gmail.com</a></li>
          <li><strong>Contact</strong><a href="tel:+919823552698">9823552698</a></li>
        </ul>
      </div>
    </>
  );
  return (
    <>
      <p className="panel-kicker">Brands and software</p>
      <h2 id="panel-title">Our businesses.</h2>
      <p>From products for the home to software for growing brands, this is what we&apos;re building at Petray.</p>
      <div className="business-list">
        <article className="business-item" id="brand-fastron"><h3 className="panel-logo"><BrandLogo brand="fastron" /></h3><p>Home appliances for everyday living.</p></article>
        <article className="business-item" id="brand-boltz"><h3 className="panel-logo"><BrandLogo brand="boltz" /></h3><p>Grooming, nutrition and care for pets.</p></article>
        <article className="business-item" id="brand-lazeelab"><h3 className="panel-logo"><BrandLogo brand="lazeelab" /></h3><p>Daily wellness, the lazee way. Gummies that make a routine easier to keep.</p><a href="https://lazeelab.com" target="_blank" rel="noopener noreferrer">Visit website</a></article>
        <article className="business-item" id="brand-chili"><h3 className="panel-logo"><BrandLogo brand="chili" /></h3><p>Customer-support software for commerce brands.</p><a href="https://apps.shopify.com/chililabs-support" target="_blank" rel="noopener noreferrer">Explore the Shopify app</a></article>
      </div>
    </>
  );
}
