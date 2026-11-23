import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#E31837",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "YorkUFind — The Student App for York University",
  description:
    "The all-in-one companion app for York University students. Search courses, generate visual weekly schedules, explore campus maps, and access critical student tools with offline-first privacy.",
  keywords: [
    "York University",
    "YorkU",
    "YorkUFind",
    "York Courses",
    "York Schedule",
    "York Timetable",
    "York Student App",
    "Lassonde",
    "Keele Campus",
  ],
  authors: [{ name: "YorkUFind Team" }],
  creator: "YorkUFind",
  publisher: "YorkUFind",
  metadataBase: new URL("https://yorkufind.app"),
  openGraph: {
    title: "YorkUFind — The All-in-One York University Student App",
    description:
      "Search courses, build interactive weekly timetables, navigate York University campus, and access essential student tools.",
    url: "https://yorkufind.app",
    siteName: "YorkUFind",
    locale: "en_CA",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen flex flex-col font-sans bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
