 "use client";

import React, { useRef, useState } from "react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  Activity,
  ShieldCheck,
  Truck,
  Headset,
  Building2,
  Sparkles,
} from "lucide-react";
// @ts-expect-error – untyped JS export
import india from "@svg-maps/india";

type IndiaLocation = {
  id: string;
  name: string;
  path: string;
};

type IndiaMap = {
  viewBox: string;
  locations: IndiaLocation[];
};

const INDIA_MAP = india as IndiaMap;

const STATE_SEQUENCE = ["Delhi", "Maharashtra", "Karnataka", "Tamil Nadu", "Telangana", "Gujarat"];
// Scroll segments for each step (more distance between steps for stronger “resistance”)
const SEGMENTS = [0, 0.14, 0.29, 0.44, 0.59, 0.74, 0.89];

const FEATURE_STEPS = [
  {
    title: "End‑to‑end India execution.",
    description:
      "From import and compliance to warehousing and last‑mile, Petray operates as your local India arm.",
    icon: Activity,
  },
  {
    title: "Compliance & BIS you can trust.",
    description:
      "Navigate BIS, certifications, and ongoing regulatory changes with a partner who handles it daily.",
    icon: ShieldCheck,
  },
  {
    title: "Pan‑India warehousing & distribution.",
    description:
      "Reach customers faster across marketplaces, retail, and D2C with optimised nodes across India.",
    icon: Truck,
  },
  {
    title: "After‑sales that matches your brand.",
    description:
      "National service and support network that keeps experiences consistent long after the first order.",
    icon: Headset,
  },
  {
    title: "Infrastructure built to scale brands.",
    description:
      "12+ cities, port access, technician networks, and deep logistics partners tuned for global brands.",
    icon: Building2,
  },
  {
    title: "AI‑powered growth engine on top.",
    description:
      "Layer an AI growth engine on top of your India operations so CAC, conversion, and retention compound together.",
    icon: Sparkles,
  },
];

export function IndiaGrowthSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    // Resolve to a valid step all the way to the end of scroll.
    const clamped = Math.min(Math.max(v, 0), 1);
    let index = FEATURE_STEPS.length - 1;
    for (let i = 0; i < SEGMENTS.length - 1; i += 1) {
      if (clamped >= SEGMENTS[i] && clamped < SEGMENTS[i + 1]) {
        index = i;
        break;
      }
    }
    setActiveIndex(Math.max(0, Math.min(FEATURE_STEPS.length - 1, index)));
  });

  const scaleRange = isMobile ? [0.88, 0.96] : [1.02, 1];

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleRange);

  return (
    <section
      ref={containerRef}
      className="relative h-[270vh] bg-black text-foreground"
      aria-label="Petray India coverage story"
    >
      <div className="sticky top-0 flex h-screen items-center justify-center px-3 py-4 md:px-8 md:py-8 lg:px-12">
        <div
          className="relative w-full max-w-[96rem]"
          style={{
            perspective: "1000px",
          }}
        >
          <Card rotate={rotate} scale={scale}>
            <MapWithStory activeIndex={activeIndex} />
          </Card>
        </div>
      </div>
    </section>
  );
}

function Card({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #00000070, 0 12px 28px #00000066, 0 48px 54px #00000055, 0 110px 70px #0000003a, 0 180px 90px #0000001a, 0 260px 110px #00000008",
      }}
      className="mx-auto h-[38rem] w-full rounded-[28px] bg-black p-0 shadow-none sm:h-[42rem] md:h-[46rem] xl:h-[50rem]"
    >
      <div className="flex h-full w-full flex-col gap-4 overflow-hidden rounded-[24px] bg-black/75 p-3 sm:p-4 md:flex-row md:gap-8 md:p-6 lg:p-8">
        {children}
      </div>
    </motion.div>
  );
}

function MapWithStory({ activeIndex }: { activeIndex: number }) {
  const activeStep = FEATURE_STEPS[activeIndex];
  const StepIcon = activeStep.icon;

  return (
    <div className="flex h-full w-full min-w-0 flex-col gap-4 md:flex-row md:items-center">
      <div className="relative flex min-w-0 flex-1 items-center justify-center">
        <div className="relative h-[clamp(320px,66vh,760px)] w-[clamp(260px,34vw,560px)]">
          <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08),transparent_65%)] blur-2xl" />
          <div className="pointer-events-none absolute -inset-3 rounded-[40px] border border-white/5" />
          <svg
            viewBox={INDIA_MAP.viewBox}
            className="relative h-full w-full"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="india-highlight"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#4f46e5" />
                <stop offset="50%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#22d3ee" />
              </linearGradient>
            </defs>
            {INDIA_MAP.locations.map((loc: IndiaLocation) => {
              const stepIndex = STATE_SEQUENCE.findIndex((state) =>
                loc.name.toLowerCase().includes(state.toLowerCase()),
              );
              const isActive = stepIndex === activeIndex;
              return (
                <motion.path
                  key={loc.id}
                  d={loc.path}
                  className="cursor-default stroke-slate-600/70 stroke-[0.6] transition-colors duration-500 ease-out"
                  fill={
                    isActive ? "url(#india-highlight)" : "rgba(15,23,42,0.9)"
                  }
                  style={{
                    filter: isActive
                      ? "drop-shadow(0 0 18px rgba(94,234,212,0.55))"
                      : "none",
                  }}
                />
              );
            })}
          </svg>
        </div>
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-center gap-4 md:max-w-2xl md:gap-6">
        <div>
          <p className="mb-3 inline-flex items-center rounded-full bg-sky-500/12 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-sky-200">
            Pan-India reach
          </p>
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl lg:text-[2.65rem]">
            India coverage that straightens into focus as you scroll.
          </h2>
          <p className="mt-3 max-w-xl text-sm text-slate-300 sm:text-base">
            Watch the India map settle while Petray&apos;s role across the country unfolds. Each step
            highlights one part of the operating stack that helps global brands scale in India.
          </p>
        </div>

        <div className="relative min-h-[160px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: [0.22, 0.61, 0.36, 1] }}
              className="rounded-2xl bg-slate-900/55 p-4 text-left text-sm text-slate-100 shadow-[0_20px_60px_rgba(15,23,42,0.45)] backdrop-blur md:p-5"
            >
              <div className="mb-2 flex items-center gap-2">
                <div className="relative flex h-9 w-9 items-center justify-center">
                  <svg
                    className="pointer-events-none absolute inset-0 -rotate-90"
                    viewBox="0 0 36 36"
                    aria-hidden="true"
                  >
                    <circle
                      cx="18"
                      cy="18"
                      r="15.5"
                      fill="none"
                      stroke="rgba(148,163,184,0.25)"
                      strokeWidth="2"
                    />
                    <motion.circle
                      key={`icon-loader-${activeIndex}`}
                      cx="18"
                      cy="18"
                      r="15.5"
                      fill="none"
                      stroke="url(#icon-loader-gradient)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      initial={{ pathLength: 0.08, opacity: 0.8 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
                    />
                    <defs>
                      <linearGradient id="icon-loader-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#7dd3fc" />
                        <stop offset="100%" stopColor="#22d3ee" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-sky-500/15 text-sky-300">
                    <StepIcon className="h-4 w-4" />
                  </div>
                </div>
              </div>
              <p className="text-sm font-semibold text-slate-50">
                {activeIndex + 1} - {activeStep.title}
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-200 sm:text-sm">
                {activeStep.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
