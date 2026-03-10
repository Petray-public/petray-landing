import {
  HeroSection,
  ScrollStorySection,
  IndiaGrowthSection,
  ProductShowcaseSection,
  MarketOpportunitySection,
  PartnerLogosSection,
  CallToActionSection,
  CareersSection,
} from "@/components/landing";
import { SiteNavbar } from "@/components/site-navbar";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <SiteNavbar />
      <HeroSection />
      <ScrollStorySection />
      <IndiaGrowthSection />
      <ProductShowcaseSection />
      <MarketOpportunitySection />
      <PartnerLogosSection />
      <CallToActionSection />
      <CareersSection />
      <SiteFooter />
    </main>
  );
}
