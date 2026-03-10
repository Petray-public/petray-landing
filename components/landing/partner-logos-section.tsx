"use client";

import Image from "next/image";
import { motion, type Variants, type MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionShell } from "@/components/section-shell";
import { SectionHeader } from "@/components/section-header";

type Logo = {
  name: string;
  src: string;
};

const LOGOS: Logo[] = [
  { name: "Northwind Labs", src: "/globe.svg" },
  { name: "Slate Systems", src: "/file.svg" },
  { name: "Linear-esque", src: "/window.svg" },
  { name: "Atlas Cloud", src: "/next.svg" },
  { name: "Signal Studio", src: "/vercel.svg" },
];

const wrap: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] } },
};

const TRUST_METRICS = [
  { label: "Markets launched", value: "12+" },
  { label: "Support availability", value: "24x7" },
  { label: "Execution model", value: "End-to-end" },
];

export function PartnerLogosSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const headerY = useTransform(scrollYProgress, [0, 1], [14, -14]);
  const gridY = useTransform(scrollYProgress, [0, 1], [26, -22]);

  return (
    <SectionShell
      id="partners"
      className="bg-black pb-16 pt-12 text-white md:pb-20 md:pt-16"
    >
      <div ref={sectionRef} className="relative flex flex-col gap-10">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-3xl">
          <Image
            src="/images/band-soft.jpg"
            alt="Soft trust background"
            fill
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80" />
        </div>

        {/* Soft marquee of blurred logos drifting in the background */}
        <div className="pointer-events-none absolute inset-x-0 top-6 -z-10 overflow-hidden opacity-30">
          <motion.div
            className="flex gap-10"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {[...LOGOS, ...LOGOS].map((logo, index) => (
              <div
                key={`bg-${logo.name}-${logo.src}-${index}`}
                className="relative h-10 w-32 rounded-2xl border border-white/5 bg-white/5/10"
              >
                <div className="absolute inset-0 blur-md">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    fill
                    className="object-contain opacity-40"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div style={{ y: headerY }}>
          <SectionHeader
            eyebrow="Teams building with Petray"
            title="Trusted by teams launching and scaling in India."
            description="Petray pairs deep on-ground infrastructure with an AI growth engine—so global brands can move faster with fewer partners to manage."
            align="center"
            tone="onDark"
            className="mx-auto max-w-4xl"
          />
        </motion.div>

        <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-3 sm:grid-cols-3">
          {TRUST_METRICS.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-center backdrop-blur"
            >
              <p className="text-lg font-semibold tracking-tight text-white">{metric.value}</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-zinc-400">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        <motion.div
          style={{ y: gridY }}
          variants={wrap}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto grid w-full max-w-5xl grid-cols-2 gap-3 opacity-90 sm:grid-cols-3 sm:gap-4 md:grid-cols-5"
        >
          {LOGOS.map((logo, index) => (
            <ParallaxLogoTile
              key={logo.name}
              logo={logo}
              index={index}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </motion.div>
      </div>
    </SectionShell>
  );
}

function ParallaxLogoTile({
  logo,
  index,
  scrollYProgress,
}: {
  logo: Logo;
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  // Stronger parallax so tiles feel more layered as you scroll
  const parallaxY = useTransform(scrollYProgress, [0, 1], [index * 10, -index * 10]);
  const parallaxRotate = useTransform(scrollYProgress, [0, 1], [-0.8 + index * 0.2, 0.8 - index * 0.2]);

  return (
    <motion.div
      style={{ y: parallaxY, rotate: parallaxRotate }}
      className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 shadow-[0_18px_70px_rgba(0,0,0,0.45)] backdrop-blur transition-transform duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.09]"
      aria-label={logo.name}
    >
      <div className="relative h-8 w-8 rounded-xl bg-white/5 ring-1 ring-white/10">
        <Image src={logo.src} alt={logo.name} fill className="object-contain p-2" />
      </div>
      <span className="text-xs font-medium text-zinc-200 sm:text-sm">{logo.name}</span>
    </motion.div>
  );
}
