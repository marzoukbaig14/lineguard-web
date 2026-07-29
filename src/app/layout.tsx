import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ACTIVE_THEME } from "@/lib/theme";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { InstrumentFrame } from "@/components/layout/InstrumentFrame";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

// Display: precise, engineered, a little idiosyncratic — used big and sparingly.
const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Body: neutral and disciplined; lets the display face and mono labels carry personality.
const sans = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Utility: eyebrows, coordinates, tolerances, timestamps — the vision-system readout.
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LineGuard — automatic IN/OUT line-calling for padel",
  description:
    "LineGuard settles the “was it in?” argument on any padel court. Two cameras and one small box call the bounce IN or OUT in under a second — impartial, entirely on-court, priced for club courts.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-theme={ACTIVE_THEME}
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body className="min-h-dvh bg-bg text-fg antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-accent-ink"
        >
          Skip to content
        </a>
        <SmoothScrollProvider>
          <InstrumentFrame />
          <Nav />
          <main id="main">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
