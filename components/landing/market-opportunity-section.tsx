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

const WHY_NOW_POINTS = [
  "India demand is real, but fragmented execution kills momentum.",
  "Compliance, logistics, and support must run in one operating rhythm.",
  "Long-term wins come from one accountable partner, not rotating vendors.",
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

  const panelY = useTransform(scrollYProgress, [0, 1], [16, -16]);
  const panelTilt = useTransform(scrollYProgress, [0, 1], [4, 0]);
  const glowY = useTransform(scrollYProgress, [0, 1], [16, -16]);

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
          className="pointer-events-none absolute inset-0 -z-10 opacity-35 [background-image:radial-gradient(circle_at_18%_24%,rgba(56,189,248,0.10),transparent_34%),radial-gradient(circle_at_82%_76%,rgba(14,165,233,0.10),transparent_36%)]"
        />
        <div className="space-y-6">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_22px_80px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:p-7">
            <SectionHeader
              eyebrow="Why now"
              title="India is a growth engine you can&apos;t afford to treat as an experiment."
              description="Global brands see India as a strategic market, but fragmented partners and one-off launches create inconsistent customer experiences. Petray gives you a single, accountable operating arm on the ground."
              tone="onDark"
              className="max-w-xl"
            />
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-zinc-300 sm:text-base">
              With a unified view across compliance, warehousing, distribution, and after-sales,
              you can make confident long-term bets instead of cycling through disconnected pilots
              and stop-gap partners.
            </p>

            <div className="mt-6 space-y-0">
              {WHY_NOW_POINTS.map((point, index) => (
                <div
                  key={point}
                  className="flex items-start gap-3 border-t border-white/10 py-4 first:border-t-0 first:pt-0 last:pb-0"
                >
                  <span className="mt-0.5 text-[11px] font-medium uppercase tracking-[0.16em] text-sky-300/90">
                    0{index + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-zinc-200">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          style={{ y: panelY, rotateX: panelTilt as MotionValue<number> }}
          className="relative grid gap-3 rounded-3xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_24px_90px_rgba(0,0,0,0.58)] backdrop-blur-xl sm:gap-4 sm:p-6"
        >
          <div className="mb-2 border-b border-white/10 pb-3">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-400">
              Operating signals
            </p>
          </div>
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
              className="group flex flex-col gap-2 rounded-2xl border border-white/10 bg-black/40 px-4 py-4 transition-transform duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/5"
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
