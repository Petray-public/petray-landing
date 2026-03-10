"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionShell } from "@/components/section-shell";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      // cubic-bezier, premium “ease out”
      ease: [0.22, 0.61, 0.36, 1],
    },
  },
};

export function HeroSection() {
  const { scrollY } = useScroll();
  const cardRef = useRef<HTMLDivElement | null>(null);

  // Make the hero background motion clearly noticeable.
  const bgScale = useTransform(scrollY, [0, 650], [1.02, 1.12]);
  const bgX = useTransform(scrollY, [0, 650], [0, -40]);
  const bgY = useTransform(scrollY, [0, 650], [0, 100]);
  const meshY = useTransform(scrollY, [0, 650], [0, -50]);
  const contentY = useTransform(scrollY, [0, 650], [0, -22]);
  const contentOpacity = useTransform(scrollY, [0, 650], [1, 0.92]);
  const cardParallaxX = useTransform(scrollY, [0, 650], [0, 24]);
  const cardParallaxY = useTransform(scrollY, [0, 650], [0, 58]);
  const cardParallaxScale = useTransform(scrollY, [0, 650], [1.03, 0.98]);
  const cardX = useSpring(cardParallaxX, { stiffness: 120, damping: 24, mass: 0.6 });
  const cardY = useSpring(cardParallaxY, { stiffness: 120, damping: 24, mass: 0.6 });
  const cardScale = useSpring(cardParallaxScale, { stiffness: 120, damping: 24, mass: 0.6 });

  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const rotateX = useSpring(tiltX, { stiffness: 160, damping: 22, mass: 0.5 });
  const rotateY = useSpring(tiltY, { stiffness: 160, damping: 22, mass: 0.5 });

  const handleCardMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const element = cardRef.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    tiltY.set((px - 0.5) * 10);
    tiltX.set((0.5 - py) * 10);
  };

  const resetTilt = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  return (
    <SectionShell
      id="hero"
      className="relative flex min-h-[100vh] items-center overflow-hidden bg-black pb-32 pt-32 text-white sm:pt-36 md:pt-40"
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          style={{ scale: bgScale, x: bgX, y: bgY }}
          className="absolute inset-0 [mask-image:radial-gradient(circle_at_center,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_40%,rgba(0,0,0,0)_75%)] [-webkit-mask-image:radial-gradient(circle_at_center,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_40%,rgba(0,0,0,0)_75%)]"
        >
          <Image
            src="/images/hero-core.jpg"
            alt="Petray India operations backdrop"
            fill
            priority
            className="object-cover object-center opacity-80"
          />
          <motion.div
            // Slow cinematic drift, independent of scroll.
            animate={{ x: [0, 16, -10, 0], y: [0, -10, 6, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_28%_40%,rgba(56,189,248,0.16),transparent_38%),radial-gradient(circle_at_74%_58%,rgba(59,130,246,0.18),transparent_45%)]"
          >

          </motion.div>
        </motion.div>
        <motion.div
          style={{ y: meshY }}
          className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_20%_30%,rgba(56,189,248,0.16),transparent_34%),radial-gradient(circle_at_78%_42%,rgba(59,130,246,0.2),transparent_40%),linear-gradient(115deg,rgba(14,165,233,0.08)_0%,rgba(0,0,0,0)_45%)]"
        />
        <motion.div
          style={{ y: meshY }}
          className="absolute inset-0 opacity-25 [background-image:repeating-radial-gradient(circle_at_center,rgba(148,163,184,0.14)_0_1px,transparent_1px_18px)]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/80 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.22),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(14,165,233,0.16),_transparent_60%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black via-black/90 to-transparent" />
      </div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 grid w-full items-center gap-12 lg:grid-cols-[1fr_1fr]"
      >
        <div className="flex max-w-2xl flex-col gap-6">
          <motion.div variants={item}>
            <div className="inline-flex items-center gap-3">
              <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-200">
                Global brands. Local execution.
              </span>
              <span className="hidden h-px w-20 bg-gradient-to-r from-sky-400/60 to-transparent sm:block" />
            </div>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl"
          >
            Your India market-entry <span className="text-zinc-200">&amp;</span> e‑commerce{" "}
            <span className="text-zinc-200">growth partner.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-pretty text-sm leading-relaxed text-zinc-300 sm:text-base md:text-lg"
          >
            From compliance and import to marketing, warehousing, and after-sales, Petray operates
            as your India arm—so you can launch, scale, and support your brand end‑to‑end.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-4">
            <Button
              size="lg"
              className="rounded-full bg-white px-6 py-2.5 text-sm text-black shadow-[0_18px_70px_rgba(255,255,255,0.10)] hover:bg-white/90 md:text-base"
            >
              Launch in India
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-white/20 bg-black/40 px-6 py-2.5 text-sm text-white hover:bg-white/10 md:text-base"
            >
              Download profile
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="flex flex-wrap items-center gap-3 text-xs text-zinc-300 sm:text-sm"
          >
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1">
              Built for modern India
            </span>
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1">
              Designed for global standards
            </span>
          </motion.div>
        </div>

        <motion.div variants={item} className="relative hidden lg:block">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />
          <div className="relative mx-auto w-full max-w-lg" style={{ perspective: 1000 }}>
            <motion.div
              style={{ x: cardX, y: cardY, scale: cardScale }}
              className="relative transform-gpu"
            >
              <motion.div
              ref={cardRef}
              onMouseMove={handleCardMove}
              onMouseLeave={resetTilt}
              style={{ rotateX, rotateY }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
              >
                <div className="pointer-events-none absolute -inset-10 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.2),transparent_65%)] blur-2xl" />

                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_40px_140px_rgba(0,0,0,0.75)] backdrop-blur">
                  <motion.div
                    animate={{ x: ["0%", "240%", "300%"], opacity: [0, 0.95, 0] }}
                    transition={{ duration: 5.4, repeat: Infinity, ease: "linear", repeatDelay: 1.9 }}
                    className="pointer-events-none absolute inset-y-0 -left-[42%] w-[42%] bg-gradient-to-r from-transparent via-white/14 to-transparent blur-md"
                  />

                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 overflow-hidden rounded-2xl bg-white">
                      <Image
                        src="/logo/image.png"
                        alt="Petray"
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">India operating dashboard</p>
                      <p className="text-xs text-zinc-300">One view across execution, risk, and growth.</p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3">
                    <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-400">
                          Coverage status
                        </p>
                        <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-200 ring-1 ring-emerald-400/20">
                          Live
                        </span>
                      </div>
                      <div className="mt-3 grid grid-cols-3 gap-2">
                        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                          <p className="text-[11px] text-zinc-400">Cities</p>
                          <p className="mt-1 text-lg font-semibold text-white">12+</p>
                        </div>
                        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                          <p className="text-[11px] text-zinc-400">Support</p>
                          <p className="mt-1 text-lg font-semibold text-white">24×7</p>
                        </div>
                        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                          <p className="text-[11px] text-zinc-400">SLA</p>
                          <p className="mt-1 text-lg font-semibold text-white">98%</p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                      <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-400">
                        Today&apos;s focus
                      </p>
                      <div className="mt-3 space-y-2">
                        {[
                          { label: "BIS & compliance readiness", value: 0.78 },
                          { label: "Warehouse activation", value: 0.62 },
                          { label: "After-sales coverage", value: 0.86 },
                        ].map((row) => (
                          <div key={row.label} className="space-y-1">
                            <div className="flex items-center justify-between text-[12px] text-zinc-300">
                              <span>{row.label}</span>
                              <span className="text-zinc-400">{Math.round(row.value * 100)}%</span>
                            </div>
                            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                              <div
                                className="h-full rounded-full bg-gradient-to-r from-sky-400/70 to-cyan-300/60"
                                style={{ width: `${row.value * 100}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </SectionShell>
  );
}
