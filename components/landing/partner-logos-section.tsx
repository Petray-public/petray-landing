"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionShell } from "@/components/section-shell";
import { SectionHeader } from "@/components/section-header";

const LOGOS = [
  { name: "Northwind Labs", src: "/globe.svg" },
  { name: "Slate Systems", src: "/file.svg" },
  { name: "Linear-esque", src: "/window.svg" },
  { name: "Atlas Cloud", src: "/next.svg" },
  { name: "Signal Studio", src: "/vercel.svg" },
];

export function PartnerLogosSection() {
  return (
    <SectionShell
      id="partners"
      className="bg-black pb-16 pt-12 text-white md:pb-20 md:pt-16"
    >
      <div className="flex flex-col gap-10">
        <SectionHeader
          eyebrow="Teams building with Petray"
          title="Designed for modern product & engineering orgs."
          description="From early-stage product teams to multi-squad platforms, Petray gives you a single narrative for the bets that matter."
          align="center"
          tone="onDark"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
          className="mx-auto flex w-full max-w-4xl flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-80"
        >
          {LOGOS.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center gap-3"
              aria-label={logo.name}
            >
              <div className="relative h-7 w-7 rounded-lg bg-white/5 ring-1 ring-white/10">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain p-1.5"
                />
              </div>
              <span className="text-xs font-medium text-zinc-300 sm:text-sm">
                {logo.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </SectionShell>
  );
}

