import type { Metadata } from "next";
import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";

import Menu from "@/components/Menu";

export const metadata: Metadata = {
  title: "In-sight-analytics",
  description: "In-sight-analytics",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", sizes: "180x180", url: "/apple-touch-icon.png" },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    { rel: "manifest", url: "/site.webmanifest" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <Menu />
        <main>{children}</main>
      </body>
    </html>
  );
}
