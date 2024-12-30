"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Hook to get the current path
import { Geist, Geist_Mono, Kalam } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ReduxProvider } from "@/hooks/IsPhone";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/footer/Footer";

// Google fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const kalam = Kalam({
  variable: "--font-kalam",
  subsets: ["devanagari", "latin"],
  weight: ["400", "700"],
});

// Local fonts
const nibpro = localFont({
  src: "./fonts/nibpro.ttf",
  variable: "--font-nibpro",
});

const nibprobold = localFont({
  src: "./fonts/nibproBold.ttf",
  variable: "--font-nibproBold",
});

const stickers = localFont({
  src: "./fonts/stickers.otf",
  variable: "--font-stickers",
});

const rango = localFont({
  src: "./fonts/rango.otf",
  variable: "--font-rango",
});

// Combine all font variables
const combinedFontClassName = `
  ${geistSans.variable} 
  ${geistMono.variable} 
  ${nibpro.variable} 
  ${nibprobold.variable} 
  ${stickers.variable} 
  ${rango.variable} 
  ${kalam.variable}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showContent, setShowContent] = useState(false);
  const pathname = usePathname();

  // Remove 'animationComplete' on component mount
  useEffect(() => {
    localStorage.removeItem("animationComplete");
  }, []);

  // Clear 'animationComplete' on tab close or unload
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem("animationComplete");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  // Handle content visibility and first-visit logic
  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
      localStorage.setItem("hasVisited", "false"); // First visit
    } else {
      localStorage.setItem("hasVisited", "true"); // Subsequent visits
    }

    if (pathname === "/") {
      const timer = setTimeout(() => {
        setShowContent(true);
        localStorage.setItem("animationComplete", "true");
      }, 8000);

      return () => clearTimeout(timer); // Cleanup timer on unmount
    } else {
      setShowContent(true); // Immediately show content for non-root paths
    }
  }, [pathname]);

  return (
    <html lang="en">
      <body className={`${combinedFontClassName} antialiased`}>
        <ReduxProvider>
          {showContent && <Navbar />}
          <main className="flex-grow">{children}</main>
          {showContent && <Footer />}
        </ReduxProvider>
      </body>
    </html>
  );
}
