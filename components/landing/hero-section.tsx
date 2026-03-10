"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionShell } from "@/components/section-shell";
import { SectionHeader } from "@/components/section-header";

export function HeroSection() {
  return (
    <SectionShell
      id="hero"
      className="relative flex min-h-[100vh] items-center overflow-hidden bg-black pb-24 pt-24 text-white sm:pt-28 md:pt-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-black" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="relative z-10 flex w-full flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.21, 0.74, 0.32, 0.97] }}
          className="max-w-3xl"
        >
          <SectionHeader
            eyebrow="Global brands. Local execution."
            title="Your India market-entry & e‑commerce growth partner."
            description="From compliance and import to marketing, warehousing, and after-sales, Petray operates as your India arm—so you can launch, scale, and support your brand end‑to‑end."
            tone="onDark"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          className="flex flex-wrap items-center gap-4"
        >
          <Button
            size="lg"
            className="rounded-full bg-white px-6 py-2.5 text-sm text-black hover:bg-white/90 md:text-base"
          >
            Launch in India
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-white/20 bg-black/30 px-6 py-2.5 text-sm text-white backdrop-blur hover:bg-white/10 md:text-base"
          >
            Download profile
          </Button>
          <p className="w-full text-xs text-zinc-300 sm:w-auto sm:text-sm">
            Built for modern India, designed for global standards.
          </p>
        </motion.div>
      </div>
    </SectionShell>
  );
}

