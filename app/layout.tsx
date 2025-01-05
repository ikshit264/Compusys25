/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
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
  const router = useRouter();

  // Remove 'animationComplete' on component mount
  useEffect(() => {
    localStorage.removeItem("animationComplete");
  }, []);

  // Clear 'animationComplete' on tab close or unload
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.setItem("hasVisited", "true");
      localStorage.removeItem("animationComplete");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  // Handle refresh and redirect with timer
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (pathname !== "/") {
        sessionStorage.setItem("wasRefreshed", "true");
      }
      localStorage.setItem("hasVisited", "true");
      localStorage.removeItem("animationComplete");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    const wasRefreshed = sessionStorage.getItem("wasRefreshed");
    if (wasRefreshed === "true" && pathname !== "/") {
      sessionStorage.removeItem("wasRefreshed");
      router.push("/");
      setShowContent(false); // Reset content visibility
      return; // Let the path-based useEffect handle the timer
    }

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [pathname, router]);

  // Handle content visibility, first-visit logic, and timing
  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");

    if (hasVisited === "true") {
      if (pathname === "/") {
        setShowContent(false); // Ensure content is hidden when on root path
        const timer = setTimeout(() => {
          setShowContent(true);
          localStorage.setItem("animationComplete", "true");
          localStorage.setItem("hasVisited", "false");
        }, 8000);

        return () => clearTimeout(timer);
      }
    } else {
      setShowContent(true); // Immediately show content for non-root paths
    }
  }, [pathname]);

  return (
    <html lang="en" suppressHydrationWarning>
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
