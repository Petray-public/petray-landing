 "use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Activity,
  ShieldCheck,
  Truck,
  Headset,
  Building2,
  Sparkles,
} from "lucide-react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
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
    // Use explicit scroll segments for smooth, predictable steps
    const clamped = Math.min(Math.max(v, 0), 0.999);
    const index =
      SEGMENTS.findIndex((start, i) => i < SEGMENTS.length - 1 && clamped >= start && clamped < SEGMENTS[i + 1]) ??
      0;
    setActiveIndex(Math.max(0, Math.min(FEATURE_STEPS.length - 1, index)));
  });

  const scaleRange = isMobile ? [0.85, 0.95] : [1.05, 1];

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleRange);
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section
      ref={containerRef}
      className="relative h-[320vh] bg-black text-foreground"
      aria-label="Petray India coverage story"
    >
      <div className="sticky top-0 flex h-screen items-center justify-center px-3 py-10 md:px-16 md:py-20">
        <div
          className="relative w-full"
          style={{
            perspective: "1000px",
          }}
        >
          <Header translate={translate}>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
              India coverage that straightens into focus as you scroll.
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-slate-300 sm:mx-auto sm:text-base">
              Watch the India map tilt into view and settle as Petray&apos;s role across the country
              unfolds—showing how global brands plug into a single, accountable operating arm.
            </p>
          </Header>
          <Card rotate={rotate} scale={scale}>
            <MapWithStory activeIndex={activeIndex} />
          </Card>
        </div>
      </div>
    </section>
  );
}

function Header({
  translate,
  children,
}: {
  translate: MotionValue<number>;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      style={{ translateY: translate }}
      className="mx-auto mb-10 max-w-5xl text-center"
    >
      <p className="mb-3 inline-flex items-center justify-center rounded-full border border-sky-400/40 bg-sky-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-sky-200">
        Pan‑India reach
      </p>
      {children}
    </motion.div>
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
      className="mx-auto -mt-16 h-[34rem] w-full max-w-6xl rounded-[32px] bg-black p-0 shadow-none md:h-[46rem]"
    >
      <div className="flex h-full w-full flex-col gap-4 rounded-[26px] bg-black md:flex-row md:p-4">
        {children}
      </div>
    </motion.div>
  );
}

function MapWithStory({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center md:flex-row">
      {/* Centered, larger map */}
      <div className="relative flex flex-1 items-center justify-center">
        <div className="relative h-[460px] w-[360px] md:h-[620px] md:w-[500px] lg:h-[700px] lg:w-[560px]">
          <div className="pointer-events-none absolute inset-x-10 top-2 h-14 rounded-full bg-gradient-to-b from-white/12 to-transparent blur-xl" />
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

          {/* Overlay comment bubble near the map (desktop) */}
          <div className="pointer-events-none absolute inset-0 hidden md:block">
            {FEATURE_STEPS.map((step, index) => {
              const StepIcon = step.icon;
              const isActive = index === activeIndex;

              // Positions around the map, slightly outside its bounds,
              // so comments feel like they originate from each region without covering it.
              const positions = [
                "top-8 left-full ml-6",
                "top-8 right-full mr-6",
                "top-1/2 left-full ml-6 -translate-y-1/2",
                "top-1/2 right-full mr-6 -translate-y-1/2",
                "bottom-10 left-full ml-6",
                "bottom-10 right-full mr-6",
              ];

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    y: isActive ? 0 : 8,
                  }}
                  transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
                  className={cn(
                    "absolute w-[26rem] max-w-[90vw] rounded-2xl border border-white/20 bg-slate-900 p-5 text-left text-sm text-slate-100 shadow-[0_24px_90px_rgba(15,23,42,0.8)]",
                    positions[index],
                    !isActive && "pointer-events-none opacity-0",
                  )}
                >
                  <div className="mb-1 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-sky-500/15 text-sky-300 ring-1 ring-sky-400/40">
                      <StepIcon className="h-4 w-4" />
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-slate-50">
                    {step.title}
                  </p>
                  <p className="mt-1 text-xs text-slate-200">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

    </div>
  );
}

