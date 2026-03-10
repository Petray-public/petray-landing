"use client";

import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black/95">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-8 text-xs text-zinc-400 sm:px-6 md:px-8 md:text-sm">
        <div className="flex items-center gap-4">
          <div className="relative h-11 w-11 overflow-hidden rounded-2xl bg-white">
            <Image
              src="/logo/image.png"
              alt="Petray logo"
              fill
              className="object-contain p-2.5"
            />
          </div>
          <span className="text-base font-semibold tracking-tight text-zinc-100 sm:text-lg">
            Petray
          </span>
        </div>
        <p className="text-right text-xs leading-snug text-zinc-400 sm:text-sm">
          © 2026–2027 Petray Pvt Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
