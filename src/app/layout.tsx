import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import ThemeSync from "@/app/components/ThemeSync";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer";
import ColourPallet from "@/app/components/ColourPallet";
import BackgroundCharm from "@/app/components/BackgroundCharm";
import FloatingContact from "@/app/components/FloatingContact";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amandi Nimasha",
  description: "Portfolio of Amandi Nimasha — Software Engineer & Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col font-mono">
            <ThemeSync />
            <Navbar />
            <main className="flex flex-1 flex-col pt-14">{children}</main>
            <Footer />
            <ColourPallet />
            <FloatingContact />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
