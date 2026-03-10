import {
  HeroSection,
  ScrollStorySection,
  IndiaGrowthSection,
  ProductShowcaseSection,
  MarketOpportunitySection,
  PartnerLogosSection,
  CallToActionSection,
} from "@/components/landing";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <HeroSection />
      <ScrollStorySection />
      <IndiaGrowthSection />
      <ProductShowcaseSection />
      <MarketOpportunitySection />
      <PartnerLogosSection />
      <CallToActionSection />
    </main>
  );
}
