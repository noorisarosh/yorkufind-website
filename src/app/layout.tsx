import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "YorkUFind",
  description: "A student-made companion app for York University.",
  metadataBase: new URL("https://yorkufind-website.vercel.app"),
  icons: { icon: "/favicon.ico", apple: "/logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
