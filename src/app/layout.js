import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import "./index.scss";
import ScrollToTopWrapper from "@/hooks/usePageScroll";
import Footer from "@/components/footer/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata = {
  title: "Gabify Foundation Nigeria | Empowering Para-Athletes & Communities",
  description:
    "Gabify Foundation Nigeria empowers para-athletes and supports inclusive sports programs, education, and community development across Nigeria.",
  keywords: [
    "Gabify Foundation",
    "NGO Nigeria",
    "Para-athletes",
    "Inclusive Sports",
    "Community Development",
    "Empowerment",
    "Nonprofit",
  ],
  authors: [{ name: "Gabify Foundation", url: "https://gabifyfoundation.com" }],
  openGraph: {
    title: "Gabify Foundation Nigeria",
    description:
      "Join us in empowering para-athletes, promoting inclusive sports, and creating opportunities for all in Nigeria.",
    url: "https://gabifyfoundation.com",
    siteName: "Gabify Foundation Nigeria",
    images: [
      {
        url: "/og-image.png", // place this in /public
        width: 1200,
        height: 630,
        alt: "Gabify Foundation Nigeria - Empowering Para-Athletes",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabify Foundation Nigeria",
    description:
      "Empowering para-athletes and building inclusive communities through sports, education, and empowerment.",
    images: ["/og-image.png"],
    creator: "@gabifyfoundation",
  },
  icons: {
    icon: "/favicon.png", // your site icon
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ScrollToTopWrapper />
        {children}
        <Footer />
      </body>
    </html>
  );
}
