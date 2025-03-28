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
        }, 6000);

        return () => clearTimeout(timer);
      }
    } else {
      setShowContent(true); // Immediately show content for non-root paths
    }
  }, [pathname]);

  return (
<html lang="en">
  <head>
    <title>Polaris | CompuSys CSE</title>
    <meta 
      name="description" 
      content="Join Polaris, Central India's biggest tech event organized by CompuSys (CSE Department). Explore innovation, networking, and competitions across all college chapters." 
    />
    <meta 
      name="keywords" 
      content="Polaris, CompuSys, CSE event, Central India tech fest, college tech event, hackathon, coding competition, innovation, technology, networking, student chapters" 
    />
    <meta name="author" content="CompuSys - CSE Department" />

    <meta property="og:title" content="Polaris - Central India's Biggest Tech Event | CompuSys CSE" />
    <meta 
      property="og:description" 
      content="Join Polaris, Central India's biggest tech event organized by CompuSys (CSE Department). Experience innovation, networking, and exciting competitions." 
    />
    <meta property="og:image" content="/polaris-og-image.png" />
    <meta property="og:url" content="https://polaris-event.com" />
    <meta property="og:type" content="website" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Polaris - Central India's Biggest Tech Event | CompuSys CSE" />
    <meta 
      name="twitter:description" 
      content="Polaris, hosted by CompuSys (CSE Dept), is the largest tech event in Central India, bringing together college chapters for innovation & competitions." 
    />
    <meta name="twitter:image" content="/polaris-og-image.png" />

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="/favicon.ico" />
  </head>
  <body className={`${combinedFontClassName} antialiased overflow-x-hidden`}>
    <ReduxProvider>
      {showContent && <Navbar />}
      <main className="flex-grow">{children}</main>
      {showContent && <Footer />}
    </ReduxProvider>
  </body>
</html>

  );
}
