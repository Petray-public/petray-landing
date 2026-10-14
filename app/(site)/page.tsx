import { BrandBand } from "@/components/site/brand-band";
import { Businesses } from "@/components/site/businesses";
import { DistributionPartners } from "@/components/site/distribution-partners";
import { SiteShell } from "@/components/site/site-shell";
import { OriginalHero } from "@/components/site/original-hero";
import { PageMotion } from "@/components/site/page-motion";

export default function HomePage() {
  return (
    <SiteShell>
      <main id="main">
        <PageMotion>
          <OriginalHero />
          <BrandBand />
          <Businesses />
          <DistributionPartners />
        </PageMotion>
      </main>
    </SiteShell>
  );
}