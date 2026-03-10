"use client";

import { motion, type Variants, type MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionShell } from "@/components/section-shell";
import { SectionHeader } from "@/components/section-header";
import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Activity, ShieldCheck, Truck, Headset, Building2, Sparkles, ArrowUpRight } from "lucide-react";

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
  meta: string;
};

const FEATURES: Feature[] = [
  {
    icon: Activity,
    title: "End-to-end execution",
    body: "From import and compliance to warehousing, last-mile, and after-sales, Petray runs the full India GTM for your brand.",
    meta: "Single accountable partner from launch to scale.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & BIS",
    body: "Navigate BIS, regulatory approvals, and ongoing compliance with an experienced local operating team.",
    meta: "Local experts who live inside the regulations.",
  },
  {
    icon: Truck,
    title: "Omni-channel distribution",
    body: "Pan-India warehousing and distribution across marketplaces, retail, and D2C—built for faster deliveries.",
    meta: "One inventory spine powering every channel.",
  },
  {
    icon: Headset,
    title: "After-sales network",
    body: "National service and support network that keeps customers happy long after the first purchase.",
    meta: "Service quality that protects your brand promise.",
  },
  {
    icon: Building2,
    title: "Pan-India infrastructure",
    body: "12+ cities, scalable nodes, and technicians on the ground where your customers are.",
    meta: "Coverage tuned to where demand actually lives.",
  },
  {
    icon: Sparkles,
    title: "AI-powered growth engine",
    body: "Tie CAC, conversion, and retention back to real operational data to keep your growth engine compounding.",
    meta: "Signals from supply, support, and spend in one loop.",
  },
];

export function ProductShowcaseSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const headerY = useTransform(scrollYProgress, [0, 1], [16, -16]);

  return (
    <SectionShell id="product" className="bg-black pb-20 pt-16 text-white md:pb-28 md:pt-20">
      <div ref={sectionRef} className="relative flex flex-col gap-12 overflow-hidden">
        <motion.div
          style={{ y: bgY }}
          className="pointer-events-none absolute inset-0 -z-10 opacity-45 [background-image:radial-gradient(circle_at_12%_18%,rgba(56,189,248,0.14),transparent_34%),radial-gradient(circle_at_84%_72%,rgba(59,130,246,0.16),transparent_38%)]"
        />
        <motion.div
          style={{ y: headerY }}
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
          className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-12"
        >
          {FEATURES.map((feature, index) => (
            <ParallaxCapabilityCard
              key={feature.title}
              feature={feature}
              index={index}
              scrollYProgress={scrollYProgress}
              className={index === 0 || index === 5 ? "lg:col-span-6" : "lg:col-span-3"}
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
  className,
}: {
  feature: Feature;
  index: number;
  scrollYProgress: MotionValue<number>;
  className?: string;
}) {
  const Icon = feature.icon;
  // Stronger, more noticeable parallax range
  const parallaxY = useTransform(scrollYProgress, [0, 1], [index * 22, -index * 22]);
  const parallaxScale = useTransform(scrollYProgress, [0, 1], [1.01, 0.99]);

  return (
    <motion.div variants={card} style={{ y: parallaxY, scale: parallaxScale }} className={className}>
      <Card className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-black/40 shadow-[0_24px_90px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-black/35">
        <CardHeader className="relative border-b border-white/10 pb-5">
          <div className="mb-3 flex items-center justify-between gap-3">
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500">
              0{index + 1}
            </span>
            <Icon className="size-4 text-sky-300/90" />
          </div>
          <h3 className="text-balance text-base font-semibold tracking-tight text-white md:text-lg">
            {feature.title}
          </h3>
          <CardDescription className="mt-2 text-sm leading-relaxed text-zinc-300">
            {feature.body}
          </CardDescription>
        </CardHeader>
        <CardContent className="relative border-t border-white/10 bg-black/50 px-4 py-3">
          <div className="flex items-start justify-between gap-4">
            <p className="text-sm leading-relaxed text-zinc-300">{feature.meta}</p>
            <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-zinc-500 transition-colors duration-300 group-hover:text-sky-300" />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
