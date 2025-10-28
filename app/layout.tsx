import type { Metadata } from "next";
import {Poppins} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Header from "@/components/header";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Script from "next/script";

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
      {/* Google Tag Manager */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MZN2QQ7S');
        `}
      </Script>
      {/* End Google Tag Manager */}
      <body 
        className={`${poppins.className} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <Script id="google-tag-manager-noscript" strategy="afterInteractive">
          {`
            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MZN2QQ7S"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
          `}
        </Script>
        {/* End Google Tag Manager (noscript) */}
        <Navbar />
        <Header />
        {children}
        
        {/* Google Analytics */}
        <Script 
          async 
          src="https://www.googletagmanager.com/gtag/js?id=G-422V2PY0V0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-422V2PY0V0');
          `}
        </Script>
      </body>
    </html>
  );
}
