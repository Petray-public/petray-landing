"use client";

import { motion } from "framer-motion";
import { SectionShell } from "@/components/section-shell";
import { SectionHeader } from "@/components/section-header";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Activity, ShieldCheck, Truck, Headset, Building2, Sparkles } from "lucide-react";

const FEATURES = [
  {
    icon: Activity,
    title: "End-to-end execution",
    body: "From import and compliance to warehousing, last-mile, and after-sales, Petray runs the full India GTM for your brand.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & BIS",
    body: "Navigate BIS, regulatory approvals, and ongoing compliance with an experienced local operating team.",
  },
  {
    icon: Truck,
    title: "Omni-channel distribution",
    body: "Pan-India warehousing and distribution across marketplaces, retail, and D2C—built for faster deliveries.",
  },
  {
    icon: Headset,
    title: "After-sales network",
    body: "National service and support network that keeps customers happy long after the first purchase.",
  },
  {
    icon: Building2,
    title: "Pan-India infrastructure",
    body: "12+ cities, scalable nodes, and technicians on the ground where your customers are.",
  },
  {
    icon: Sparkles,
    title: "AI-powered growth engine",
    body: "Tie CAC, conversion, and retention back to real operational data to keep your growth engine compounding.",
  },
];

export function ProductShowcaseSection() {
  return (
    <SectionShell id="product" className="bg-black pb-20 pt-16 text-white md:pb-28 md:pt-20">
      <div className="flex flex-col gap-12">
        <SectionHeader
          eyebrow="Capabilities"
          title="Built for modern India, designed for global standards."
          description="Petray is your strategic partner for end-to-end India market entry and e-commerce growth—combining deep infrastructure with an AI-powered operating layer."
          align="center"
          tone="onDark"
        />

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.04,
                  ease: [0.22, 0.61, 0.36, 1],
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Card className="group relative h-full border-white/10 bg-gradient-to-b from-white/10 to-white/5 shadow-[0_18px_60px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_24px_90px_rgba(0,0,0,0.6)]">
                  <CardHeader className="flex flex-row items-start gap-4 border-b border-white/10 pb-4">
                    <div className="flex size-9 items-center justify-center rounded-xl bg-sky-500/15 text-sky-200 ring-1 ring-sky-400/30">
                      <Icon className="size-4" />
                    </div>
                    <div>
                      <CardTitle className="text-sm font-medium sm:text-base">
                        {feature.title}
                      </CardTitle>
                      <CardDescription className="mt-1 text-xs text-zinc-300 sm:text-sm">
                        {feature.body}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4 text-xs text-zinc-300 sm:text-sm">
                    <p>
                      Structured to mirror how global brands actually scale in India—from the first
                      shipment to a trusted, long-term presence in the market.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}

