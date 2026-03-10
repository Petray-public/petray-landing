"use client";

import { motion, type Variants, type MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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

const grid: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] },
  },
};

const header: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] } },
};

type Feature = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
};

const FEATURES: Feature[] = [
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
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <SectionShell id="product" className="bg-black pb-20 pt-16 text-white md:pb-28 md:pt-20">
      <div ref={sectionRef} className="flex flex-col gap-12">
        <motion.div
          variants={header}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="relative"
        >
          <SectionHeader
            eyebrow="Capabilities"
            title="Built for modern India, designed for global standards."
            description="Petray is your strategic partner for end-to-end India market entry and e-commerce growth—combining deep infrastructure with an AI-powered operating layer."
            align="center"
            tone="onDark"
            className="mx-auto max-w-4xl"
          />
        </motion.div>

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {FEATURES.map((feature, index) => (
            <ParallaxCapabilityCard
              key={feature.title}
              feature={feature}
              index={index}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </motion.div>
      </div>
    </SectionShell>
  );
}

function ParallaxCapabilityCard({
  feature,
  index,
  scrollYProgress,
}: {
  feature: Feature;
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const Icon = feature.icon;
  // Stronger, more noticeable parallax range
  const parallaxY = useTransform(scrollYProgress, [0, 1], [index * 22, -index * 22]);

  return (
    <motion.div variants={card} style={{ y: parallaxY }}>
      <Card className="group relative h-full overflow-hidden border-white/10 bg-gradient-to-b from-white/10 to-white/5 shadow-[0_18px_70px_rgba(0,0,0,0.55)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_28px_120px_rgba(0,0,0,0.72)]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/35 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.10),transparent_55%)]" />
        <CardHeader className="flex flex-row items-start gap-4 border-b border-white/10 pb-5">
          <motion.div
            initial={false}
            whileHover={{ y: -1 }}
            transition={{ duration: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
            className="flex size-10 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-200 ring-1 ring-sky-400/30"
          >
            <Icon className="size-4" />
          </motion.div>
          <div>
            <CardTitle className="text-base font-semibold tracking-tight text-white">
              {feature.title}
            </CardTitle>
            <CardDescription className="mt-1 text-sm leading-relaxed text-zinc-300">
              {feature.body}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="pt-5 text-sm leading-relaxed text-zinc-300">
          <p>
            Structured to mirror how global brands actually scale in India—from the first shipment
            to a trusted, long-term presence in the market.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

