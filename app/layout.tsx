import type { Metadata } from "next";
import {Poppins} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Header from "@/components/header";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sebastián Reina",
  description: "Sebastián Reina Portfolio",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <Navbar />
        <Header />
        {children}
      </body>
    </html>
  );
}
