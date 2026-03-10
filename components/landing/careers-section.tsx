"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, type Variants, useScroll, useTransform } from "framer-motion";
import { Briefcase, MapPin, Clock3, ArrowUpRight } from "lucide-react";
import { SectionShell } from "@/components/section-shell";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";

type Highlight = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  body: string;
};

const highlights: Highlight[] = [
  {
    icon: Briefcase,
    label: "Operator-first roles",
    body: "Work on the real problems behind India market entry—from warehousing and service networks to on-ground brand experience.",
  },
  {
    icon: MapPin,
    label: "Hybrid India footprint",
    body: "Roles across key metros with flexible, remote-friendly collaboration for global teams working with Petray.",
  },
  {
    icon: Clock3,
    label: "Long-term compounding growth",
    body: "Join an India operating arm built for the next decade—not just the next launch—so your career can compound with it.",
  },
];

const grid: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 0.61, 0.36, 1] },
  },
};

export function CareersSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const leftY = useTransform(scrollYProgress, [0, 1], [16, -8]);
  const rightY = useTransform(scrollYProgress, [0, 1], [24, -16]);

  return (
    <SectionShell
      id="careers"
      className="relative overflow-hidden bg-black pb-20 pt-16 text-white md:pb-28 md:pt-20"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/images/band-soft.jpg"
          alt="Careers soft backdrop"
          fill
          className="object-cover opacity-18"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/85" />
      </div>

      <div
        ref={sectionRef}
        className="relative z-10 grid gap-10 rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_28px_100px_rgba(0,0,0,0.6)] backdrop-blur-xl md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] md:items-center md:p-8"
      >
        <motion.div style={{ y: leftY }} className="space-y-6">
          <SectionHeader
            eyebrow="Careers"
            title="Build your India career with Petray."
            description="We&apos;re assembling a small, focused team across operations, partnerships, and customer experience to help global brands treat India as a core market—not an experiment."
            tone="onDark"
            className="max-w-xl"
          />
          <p className="max-w-xl text-sm text-zinc-300 sm:text-base">
            If you care about doing careful work for ambitious brands, and you like operating at the
            intersection of logistics, customer experience, and technology, Petray could be a strong
            fit.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-zinc-300">
              Operations
            </span>
            <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-zinc-300">
              Partnerships
            </span>
            <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-zinc-300">
              Service
            </span>
          </div>
          <Button
            size="lg"
            className="mt-2 rounded-full bg-white px-7 py-2.5 text-sm text-black shadow-[0_18px_70px_rgba(255,255,255,0.10)] hover:bg-white/90 md:text-base"
          >
            View open roles
          </Button>
        </motion.div>

        <motion.div
          style={{ y: rightY }}
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="grid gap-4 sm:grid-cols-2 sm:gap-5"
        >
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                variants={card}
                className="group flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-black/40 p-4 text-sm text-zinc-200 shadow-[0_18px_70px_rgba(0,0,0,0.55)] backdrop-blur transition-transform duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/8 sm:p-5"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-sky-300/90" />
                    <p className="text-sm font-semibold tracking-tight text-white">{item.label}</p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-zinc-500 transition-colors duration-300 group-hover:text-sky-300" />
                </div>
                <p className="text-xs leading-relaxed text-zinc-300 sm:text-sm">{item.body}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </SectionShell>
  );
}
