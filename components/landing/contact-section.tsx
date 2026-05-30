"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ContactLinks } from "@/components/contact-links";
import { SectionShell } from "@/components/section-shell";
import { SectionHeader } from "@/components/section-header";

const wrap: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 0.61, 0.36, 1] } },
};

export function ContactSection() {
  return (
    <SectionShell
      id="contact"
      className="relative overflow-hidden bg-black pb-20 pt-16 text-white md:pb-24 md:pt-20"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/images/band-soft.jpg"
          alt=""
          fill
          className="object-cover opacity-18"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/85" />
      </div>

      <motion.div
        variants={wrap}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        className="relative z-10 rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_28px_100px_rgba(0,0,0,0.6)] backdrop-blur-xl md:p-8"
      >
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-center md:gap-12">
          <SectionHeader
            eyebrow="Contact us"
            title="Get in touch with our India team."
            description="Whether you are exploring market entry or scaling an existing brand, we are happy to walk through how Petray can support your India operations."
            tone="onDark"
            className="max-w-xl"
          />

          <ContactLinks />
        </div>
      </motion.div>
    </SectionShell>
  );
}
