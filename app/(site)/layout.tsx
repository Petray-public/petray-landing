import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { themeBootstrap } from "@/lib/theme";
// Styles for the public marketing site. The People portal keeps its own
// Tailwind-based `app/globals.css`; this route is fully self-contained so the
// imported design stays byte-for-byte faithful to its source.
import "../site.css";
import "../experience.css";
import "../original-hero.css";

export const metadata: Metadata = {
  title: "Petray — Good ideas. Real businesses.",
  description:
    "Petray builds consumer brands and software, and distributes home-care products in India. Explore our businesses and distribution partners.",
  robots: { index: false, follow: false },
  icons: { icon: { url: "/assets/petray-logo.png", type: "image/png" } },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fcfcfc",
};

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          id="petray-theme-init"
          dangerouslySetInnerHTML={{ __html: themeBootstrap }}
        />
        <link
          rel="preload"
          href="/assets/display-bold.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/assets/roboto-regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}