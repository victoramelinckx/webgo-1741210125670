import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Webgo",
  description: "Hacemos website optiizadas para generar mas cventas",
  themeColor: "#000000",
  openGraph: {
    title: "Webgo",
    description: "Hacemos website optiizadas para generar mas cventas",
    url: "https://webgo-1741210125670.vercel.app",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${dmSans.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}