"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionShell } from "@/components/section-shell";

const STORY_STEPS = [
  {
    title: "Reduced customer acquisition cost.",
    body: "Use Petray&apos;s data layer across marketplaces, D2C, and performance channels to focus spend where it actually converts.",
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
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.4], [0.6, 1]);

  const headlineOpacity = useTransform(scrollYProgress, [0.1, 0.25], [0, 1]);
  const headlineY = useTransform(scrollYProgress, [0.1, 0.25], [24, 0]);

  const stepOpacities = STORY_STEPS.map((_, index) =>
    useTransform(
      scrollYProgress,
      [0.2 + index * 0.18, 0.3 + index * 0.18, 0.5 + index * 0.18],
      [0, 1, 0.2],
    ),
  );

  const stepYs = STORY_STEPS.map((_, index) =>
    useTransform(scrollYProgress, [0.2 + index * 0.18, 0.3 + index * 0.18], [36, 0]),
  );

  const sunY = useTransform(scrollYProgress, [0, 1], [220, -260]);
  const sunScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const sunOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8], [0.9, 1, 0.85]);

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
          <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />
          <motion.div
            style={{ y: sunY, scale: sunScale, opacity: sunOpacity }}
            className="absolute -bottom-[40%] left-1/2 h-[160vh] w-[160vh] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_#f97316,_rgba(0,0,0,0)_65%)] blur-3xl"
          />
        </motion.div>

        <SectionShell className="relative flex h-full flex-col justify-center text-white">
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />

          <div className="relative z-10 flex flex-col gap-12">
            <motion.div
              style={{ opacity: headlineOpacity, y: headlineY }}
              className="max-w-3xl"
            >
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-400">
                AI-powered growth engine
              </p>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                Turn India market signals into compounding growth.
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
                {STORY_STEPS.map((step, index) => (
                  <motion.div
                    key={step.title}
                    style={{ opacity: stepOpacities[index], y: stepYs[index] }}
                    className="rounded-xl border border-white/5 bg-white/5 p-4 backdrop-blur md:p-5"
                  >
                    <h3 className="text-sm font-medium sm:text-base">{step.title}</h3>
                    <p className="mt-2 text-xs text-zinc-300 sm:text-sm">{step.body}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </SectionShell>
      </div>
    </section>
  );
}

