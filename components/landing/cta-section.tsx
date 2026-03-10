"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, type Variants, useScroll, useTransform } from "framer-motion";
import { SectionShell } from "@/components/section-shell";
import { Button } from "@/components/ui/button";

const wrap: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 0.61, 0.36, 1] } },
};

export function CallToActionSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [18, -12]);
  const headingY = useTransform(scrollYProgress, [0, 1], [8, -14]);
  const actionsY = useTransform(scrollYProgress, [0, 1], [18, -6]);
  const glowY = useTransform(scrollYProgress, [0, 1], [36, -36]);

  return (
    <SectionShell
      id="cta"
      className="relative overflow-hidden bg-black pb-24 pt-16 text-white md:pb-28 md:pt-20"
    >
      <div ref={sectionRef}>
        <div className="pointer-events-none absolute inset-0 -z-10">
          <Image
            src="/images/band-soft.jpg"
            alt="Soft CTA background"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/75 to-black/80" />
        </div>
        <motion.div
          style={{ y: glowY }}
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_24%,rgba(56,189,248,0.14),transparent_35%),radial-gradient(circle_at_82%_78%,rgba(14,165,233,0.12),transparent_38%)]"
        />
        <motion.div
          variants={wrap}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          style={{ y: contentY }}
          className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-8 rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-10 text-center shadow-[0_28px_110px_rgba(0,0,0,0.62)] backdrop-blur-xl sm:px-8 md:py-12"
        >
          <motion.div
            initial={false}
            style={{ y: headingY }}
            className="max-w-3xl"
          >
            <p className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-200">
              Ready to launch or scale in India?
            </p>
            <h2 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Make Petray your India operating arm.
            </h2>
            <p className="mt-5 text-pretty text-sm leading-relaxed text-zinc-300 sm:text-base md:text-lg">
              Share a bit about your brand, channels, and ambitions, and we&apos;ll show you how to
              bring India online—from the first shipment to a trusted, long-term presence for your
              customers and teams.
            </p>
          </motion.div>

          <motion.div
            initial={false}
            style={{ y: actionsY }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="rounded-full bg-white px-7 py-2.5 text-sm text-black shadow-[0_18px_70px_rgba(255,255,255,0.10)] hover:bg-white/90 md:text-base"
            >
              Talk to our India team
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-white/20 bg-black px-7 py-2.5 text-sm text-white hover:bg-white/5 md:text-base"
            >
              Download capabilities profile
            </Button>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] uppercase tracking-[0.16em] text-zinc-400">
            <span className="rounded-full border border-white/10 bg-black/35 px-3 py-1">BIS + Compliance</span>
            <span className="rounded-full border border-white/10 bg-black/35 px-3 py-1">Warehousing + Distribution</span>
            <span className="rounded-full border border-white/10 bg-black/35 px-3 py-1">After-sales + Growth</span>
          </div>
        </motion.div>
      </div>
    </SectionShell>
  );
}
