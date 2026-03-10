"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const LINKS = [
  { href: "#product", label: "Services" },
  { href: "#market", label: "Infrastructure" },
  { href: "#partners", label: "Brands" },
  { href: "#careers", label: "Careers" },
];

export function SiteNavbar() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const [compact, setCompact] = useState(false);
  const prevY = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const scrollingDown = latest > prevY.current;
    prevY.current = latest;
    setCompact(latest > 42);

    const topRevealThreshold = 110;

    if (latest <= 16) {
      setVisible(true);
      return;
    }

    // Keep hidden until user is very close to top/start of hero.
    if (latest > topRevealThreshold) {
      setVisible(false);
      return;
    }

    // Near top: hide on down, show on up.
    setVisible(!scrollingDown);
  });

  const height = useTransform(scrollY, [0, 120], [74, 58]);
  const containerY = useTransform(scrollY, [0, 120], [12, 8]);
  const bgOpacity = useTransform(scrollY, [0, 120], [0.22, 0.54]);

  return (
    <motion.header
      animate={visible ? { y: 0, opacity: 1 } : { y: -96, opacity: 0 }}
      transition={{ duration: 0.28, ease: [0.22, 0.61, 0.36, 1] }}
      className={cn("fixed inset-x-0 top-0 z-50", !visible && "pointer-events-none")}
    >
      <motion.div
        style={{ y: containerY, height, backgroundColor: bgOpacity }}
        className="mx-auto flex w-[min(920px,calc(100%-24px))] items-center justify-between rounded-2xl border border-white/10 bg-black/45 px-4 shadow-[0_18px_80px_rgba(0,0,0,0.55)] backdrop-blur-md sm:px-6 md:px-8"
      >
        <Link href="/" className="flex items-center gap-3">
          <div
            className={cn(
              "relative overflow-hidden rounded-xl bg-white transition-all duration-200",
              compact ? "h-9 w-9" : "h-10 w-10",
            )}
          >
            <Image
              src="/logo/image.png"
              alt="Petray"
              fill
              priority
              className="object-contain p-2"
            />
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold tracking-tight text-white">Petray</p>
            <p className="text-[11px] text-zinc-300">India operating arm</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-zinc-300 hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <Button size="sm" className="rounded-full bg-white px-4 text-black hover:bg-white/90">
          Launch in India
        </Button>
      </motion.div>
    </motion.header>
  );
}
