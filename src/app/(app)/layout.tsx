import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./../globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { Toaster } from 'sonner';
import HomeHeroSectionCarousal from "@/components/Carousels/HomeHeroSectionCarousal";
import Newsletter from "@/components/Newsletter";
import MobileCarousel from "@/components/Carousels/MobileCarousel";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cestoball Uttarakhand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`relative ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <div className="fixed w-full z-10">
        <Navbar/>
      </div >

      <div className="flex w-full h-[15rem] sm:h-[calc(100vh-(13rem))] mb-0">
        <div className="w-full sm:w-2/3">
          <HomeHeroSectionCarousal />
        </div>
        <div className="hidden sm:flex sm:w-1/3">

        </div>
      </div>

        {children}
        <div className="h-[20rem]">

        <MobileCarousel/>
        </div>
        <div>

        <Newsletter/>
        </div>

        <Footer/>
        <Toaster/>

      </body>
    </html>
  );
}
