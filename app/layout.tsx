import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/lenis-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "petray – Hybrid intelligence for product teams",
  description:
    "Build, ship, and learn faster with petray: AI-native workflows for modern product and engineering teams.",
  icons: {
    icon: [
      { url: "/logo/image.png", type: "image/png", sizes: "192x192" },
      { url: "/logo/image.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/logo/image.png",
    apple: "/logo/image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
