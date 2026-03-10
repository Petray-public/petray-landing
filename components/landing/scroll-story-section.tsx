"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionShell } from "@/components/section-shell";

const STORY_STEPS = [
  {
    title: "Reduced customer acquisition cost.",
    body: "Use Petray&apos;s data layer across marketplaces, D2C, and performance channels to direct budget into the signals that matter most.",
  },
  {
    title: "Hyper-targeted India playbooks.",
    body: "Blend AI insights with on-ground operations data to tailor launches, promotions, and assortments for Indian customers.",
  },
  {
    title: "Higher conversion and retention.",
    body: "Tie every experiment, campaign, and service promise back to real outcomes—so you can double down on what keeps brands growing.",
  },
];

export function ScrollStorySection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.4], [0.5, 0.95]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 70]);

  const headlineOpacity = useTransform(scrollYProgress, [0.1, 0.25], [0, 1]);
  const headlineY = useTransform(scrollYProgress, [0.1, 0.25], [24, 0]);

  const step1Opacity = useTransform(scrollYProgress, [0.2, 0.3, 0.5], [0, 1, 0.2]);
  const step2Opacity = useTransform(scrollYProgress, [0.38, 0.48, 0.68], [0, 1, 0.2]);
  const step3Opacity = useTransform(scrollYProgress, [0.56, 0.66, 0.86], [0, 1, 0.2]);

  const step1Y = useTransform(scrollYProgress, [0.2, 0.3], [36, 0]);
  const step2Y = useTransform(scrollYProgress, [0.38, 0.48], [36, 0]);
  const step3Y = useTransform(scrollYProgress, [0.56, 0.66], [36, 0]);
  const step1Bar = useTransform(scrollYProgress, [0.2, 0.34], [0, 1]);
  const step2Bar = useTransform(scrollYProgress, [0.38, 0.52], [0, 1]);
  const step3Bar = useTransform(scrollYProgress, [0.56, 0.72], [0, 1]);

  const sunY = useTransform(scrollYProgress, [0, 1], [220, -260]);
  const sunScale = useTransform(scrollYProgress, [0, 1], [0.85, 1.08]);
  const sunOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8], [0.5, 0.78, 0.62]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[260vh] bg-black text-white"
      aria-label="AI-powered growth engine for Petray brands"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          style={{ scale: backgroundScale, opacity: backgroundOpacity }}
          className="pointer-events-none absolute inset-0"
        >
          <motion.div style={{ y: imageY }} className="absolute inset-0">
            <Image
              src="/images/story-core.jpg"
              alt="AI growth network background"
              fill
              className="object-cover object-center opacity-55"
              priority={false}
            />
          </motion.div>
          <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black via-black/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_70%,rgba(14,165,233,0.13),transparent_36%),radial-gradient(circle_at_80%_82%,rgba(56,189,248,0.12),transparent_40%)]" />
          <motion.div
            style={{ y: sunY, scale: sunScale, opacity: sunOpacity }}
            className="absolute -bottom-[54%] left-1/2 h-[150vh] w-[150vh] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.8),_rgba(0,0,0,0)_70%)] blur-3xl"
          />
        </motion.div>

        <SectionShell className="relative flex h-full flex-col justify-center text-white">
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />

          <div className="relative z-10 flex flex-col gap-12">
            <motion.div
              style={{ opacity: headlineOpacity, y: headlineY }}
              className="max-w-3xl"
            >
              <p className="inline-flex items-center rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-300 backdrop-blur">
                AI-powered growth engine
              </p>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                <span className="bg-gradient-to-r from-white via-sky-200 to-sky-400 bg-clip-text text-transparent">
                  Turn India market signals
                </span>
                <br className="hidden sm:block" />
                <span className="text-zinc-200">into compounding growth.</span>
              </h2>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-start">
              <motion.p
                className="max-w-xl text-sm leading-relaxed text-zinc-300 sm:text-base md:text-lg"
                style={{ opacity: headlineOpacity }}
              >
                Petray layers an AI growth engine on top of your India operations—reading demand,
                pricing, and fulfillment patterns so every decision from launch to retention is
                tuned to the market in real time.
              </motion.p>

              <div className="flex flex-col gap-4 md:gap-6">
                <motion.div
                  style={{ opacity: step1Opacity, y: step1Y }}
                  className="relative rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-sm text-zinc-100 shadow-[0_18px_60px_rgba(0,0,0,0.55)] backdrop-blur md:p-5 md:text-base"
                >
                  <div className="mb-3 h-[2px] w-full overflow-hidden rounded bg-white/10">
                    <motion.div
                      style={{ scaleX: step1Bar }}
                      className="h-full origin-left bg-gradient-to-r from-sky-300 to-cyan-400"
                    />
                  </div>
                  <h3 className="text-sm font-medium tracking-tight sm:text-base">
                    {STORY_STEPS[0].title}
                  </h3>
                  <p className="mt-2 text-xs text-zinc-300 sm:text-sm">{STORY_STEPS[0].body}</p>
                </motion.div>
                <motion.div
                  style={{ opacity: step2Opacity, y: step2Y }}
                  className="relative rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-sm text-zinc-100 shadow-[0_18px_60px_rgba(0,0,0,0.55)] backdrop-blur md:p-5 md:text-base"
                >
                  <div className="mb-3 h-[2px] w-full overflow-hidden rounded bg-white/10">
                    <motion.div
                      style={{ scaleX: step2Bar }}
                      className="h-full origin-left bg-gradient-to-r from-sky-300 to-cyan-400"
                    />
                  </div>
                  <h3 className="text-sm font-medium tracking-tight sm:text-base">
                    {STORY_STEPS[1].title}
                  </h3>
                  <p className="mt-2 text-xs text-zinc-300 sm:text-sm">{STORY_STEPS[1].body}</p>
                </motion.div>
                <motion.div
                  style={{ opacity: step3Opacity, y: step3Y }}
                  className="relative rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-sm text-zinc-100 shadow-[0_18px_60px_rgba(0,0,0,0.55)] backdrop-blur md:p-5 md:text-base"
                >
                  <div className="mb-3 h-[2px] w-full overflow-hidden rounded bg-white/10">
                    <motion.div
                      style={{ scaleX: step3Bar }}
                      className="h-full origin-left bg-gradient-to-r from-sky-300 to-cyan-400"
                    />
                  </div>
                  <h3 className="text-sm font-medium tracking-tight sm:text-base">
                    {STORY_STEPS[2].title}
                  </h3>
                  <p className="mt-2 text-xs text-zinc-300 sm:text-sm">{STORY_STEPS[2].body}</p>
                </motion.div>
              </div>
            </div>
          </div>
        </SectionShell>
      </div>
    </section>
  );
}
