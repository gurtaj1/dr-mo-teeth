import { Suspense } from "react";
import { ReactLenis } from "lenis/dist/lenis-react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { AnimatePresence } from "framer-motion";

import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import Loading from "./loading";

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Dr Mo",
  description: "Brought to you by Dr Mo",
};

const navBarHeight = 72;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-dental-deepBlue`}
      >
        <ReactLenis root>
          <Navigation />
          <main
            className="flex-grow flex flex-col"
            style={{ paddingTop: navBarHeight }}
          >
            <Suspense fallback={<Loading />}>
              <AnimatePresence mode="wait">{children}</AnimatePresence>
            </Suspense>
          </main>
          <Footer />
        </ReactLenis>
      </body>
    </html>
  );
}
