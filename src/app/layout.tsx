import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "KaziGo | Connecting People with Local Services",
    template: "%s | KaziGo",
  },
  description:
    "Discover local service providers, request services, manage bookings, and connect with people through KaziGo.",
  applicationName: "KaziGo",
  appleWebApp: {
    capable: true,
    title: "KaziGo",
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
