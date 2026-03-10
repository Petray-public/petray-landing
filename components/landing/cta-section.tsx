"use client";

import { useRef } from "react";
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

  return (
    <SectionShell
      id="cta"
      className="relative overflow-hidden bg-black pb-24 pt-16 text-white md:pb-28 md:pt-20"
    >
      <div ref={sectionRef}>
        <motion.div
          variants={wrap}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          style={{ y: contentY }}
          className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-8 text-center"
        >
          <motion.div
            initial={false}
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
        </motion.div>
      </div>
    </SectionShell>
  );
}

