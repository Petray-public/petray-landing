"use client";

import { motion } from "framer-motion";
import { SectionShell } from "@/components/section-shell";
import { Button } from "@/components/ui/button";

export function CallToActionSection() {
  return (
    <SectionShell
      id="cta"
      className="relative overflow-hidden bg-black pb-24 pt-16 text-white md:pb-28 md:pt-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white/5" />

      <div className="relative z-10 flex flex-col items-center gap-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-300">
            Ready to launch or scale in India?
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Make Petray your India operating arm.
          </h2>
          <p className="mt-3 text-sm text-zinc-300 sm:text-base">
            Share a bit about your brand, channels, and ambitions, and we&apos;ll show you how to
            bring India online—from the first shipment to a trusted, long-term presence for your
            customers and teams.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.1, duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="rounded-full bg-white px-7 py-2.5 text-sm text-black hover:bg-white/90 md:text-base"
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
      </div>
    </SectionShell>
  );
}

