import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Toaster } from 'sonner';
import ContactUsForm from "@/components/Forms/ContactUsForm";
import Navbar from "@/components/Navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
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
        <Navbar />
        <div className='block justify-items-center py-0 my-0 sm:flex sm:h-[calc(100vh-(8.75rem))]'>

            <div className='sm:flex block w-full sm:w-1/2 text-center sm:py-0 text-3xl h-full sm:mb-0 mb-2'>
                <ContactUsForm />
            </div>

            <div  className='block sm:block sm:w-1/2 justify-items-center mb-2 mt-10 sm:my-20'>
                {children}
            </div>

        </div>
        <Toaster/>
      </body>
    </html>
  );
}
