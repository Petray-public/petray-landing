"use client";

import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="bg-black">
      <div className="mx-auto my-4 flex w-[min(1120px,calc(100%-32px))] flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/95 px-5 py-5 text-center text-xs text-zinc-400 sm:px-6 md:flex-row md:text-left md:text-sm">
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
        <p className="text-xs leading-snug text-zinc-400 sm:text-sm md:text-right">
          © 2026–2027 Petray Pvt Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
