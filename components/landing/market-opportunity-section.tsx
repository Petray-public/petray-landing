"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { SectionShell } from "@/components/section-shell";
import { SectionHeader } from "@/components/section-header";

type Stat = {
  label: string;
  value: number;
  suffix?: string;
  description: string;
};

const STATS: Stat[] = [
  {
    label: "Cities with warehousing & service",
    value: 12,
    suffix: "+",
    description: "Pan-India infrastructure that brings you closer to customers across key metros and growth markets.",
  },
  {
    label: "Support coverage",
    value: 24,
    suffix: "x7",
    description:
      "Round-the-clock service and technician network so your promise to customers is backed by real support.",
  },
  {
    label: "Faster deliveries",
    value: 30,
    suffix: "%",
    description: "Optimised inventory and routing that cut delivery times compared to typical cross-border setups.",
  },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    stiffness: 110,
    damping: 20,
  });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      setDisplay(Math.round(latest));
    });
    return () => {
      unsubscribe();
    };
  }, [spring]);

  const inView = useInView(ref, { once: true, margin: "-120px" });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, motionValue, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

export function MarketOpportunitySection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Keep heading stable; only subtle depth on supporting layers.
  const panelY = useTransform(scrollYProgress, [0, 1], [24, -24]);
  const panelTilt = useTransform(scrollYProgress, [0, 1], [6, 0]);
  const glowY = useTransform(scrollYProgress, [0, 1], [22, -22]);

  return (
    <SectionShell
      id="market"
      className="bg-black pb-20 pt-16 text-white md:pb-28 md:pt-24"
    >
      <div
        ref={sectionRef}
        className="relative grid gap-12 overflow-hidden md:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] md:items-start"
      >
        <motion.div
          style={{ y: glowY }}
          className="pointer-events-none absolute inset-0 -z-10 opacity-45 [background-image:radial-gradient(circle_at_16%_30%,rgba(56,189,248,0.12),transparent_34%),radial-gradient(circle_at_86%_68%,rgba(14,165,233,0.12),transparent_35%)]"
        />
        <div className="space-y-6">
          <SectionHeader
            eyebrow="Why now"
            title="India is a growth engine you can&apos;t afford to treat as an experiment."
            description="Global brands see India as a strategic market, but fragmented partners and one-off launches create inconsistent customer experiences. Petray gives you a single, accountable operating arm on the ground."
            tone="onDark"
            className="max-w-xl"
          />
          <p className="max-w-xl text-sm text-zinc-300 sm:text-base">
            With a unified view across compliance, warehousing, distribution, and after-sales, you
            can make confident long-term bets instead of cycling through disconnected pilots and
            stop-gap partners.
          </p>
        </div>

        <motion.div
          style={{ y: panelY, rotateX: panelTilt as MotionValue<number> }}
          className="relative grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_24px_90px_rgba(0,0,0,0.55)] backdrop-blur sm:gap-5 sm:p-6"
        >
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_60%)]" />
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
                ease: [0.22, 0.61, 0.36, 1],
              }}
              className="group flex flex-col gap-2 rounded-2xl border border-white/10 bg-black/40 px-4 py-4 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/5"
            >
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-400">
                {stat.label}
              </p>
              <p className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-xs leading-relaxed text-zinc-300 sm:text-sm">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionShell>
  );
}
