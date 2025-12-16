import type { Metadata } from "next";
import { Commissioner } from "next/font/google";
import "./globals.css";

const commissioner = Commissioner({
  variable: "--font-commissioner",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Crowdfunding Product Page",
  description:
    "A modern crowdfunding product page with progress tracking and pledge options for Mastercraft Bamboo Monitor Riser",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={commissioner.variable}>
      <body
        suppressHydrationWarning
        className={`${commissioner.variable} bg-[#FAFAFA] max-w-[1440px] mx-auto antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
