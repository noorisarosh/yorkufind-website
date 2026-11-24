import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support — YorkUFind",
  description: "Contact support for YorkUFind.",
};

export default function SupportPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#fff", color: "#111" }}>
      <header style={{ height: 60, borderBottom: "1px solid #f0f0f0", display: "flex", alignItems: "center", padding: "0 32px" }}>
        <Link href="/" style={{ fontWeight: 700, fontSize: 15, color: "#111", textDecoration: "none" }}>YorkUFind</Link>
      </header>

      <main style={{ maxWidth: 640, margin: "0 auto", padding: "64px 32px 80px" }}>
        <p style={{ fontSize: 12, color: "#aaa", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12 }}>Contact</p>
        <h1 style={{ fontSize: 36, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 20 }}>Support</h1>
        <p style={{ fontSize: 14, color: "#666", lineHeight: 1.75, marginBottom: 32 }}>
          Have a question, found a bug, or want to give feedback? Reach out and we'll get back to you.
        </p>
        <a
          href="mailto:yorkufind@outlook.com"
          style={{
            display: "inline-block",
            background: "#cc0000", color: "#fff",
            padding: "11px 22px", borderRadius: 10,
            textDecoration: "none", fontSize: 14, fontWeight: 600,
          }}
        >
          yorkufind@outlook.com →
        </a>
      </main>

      <footer style={{ borderTop: "1px solid #f0f0f0", padding: "24px 32px", display: "flex", justifyContent: "center", gap: 32 }}>
        {[{ label: "Privacy Policy", href: "/privacy" }, { label: "Terms of Use", href: "/terms" }, { label: "Support", href: "/support" }].map(l => (
          <Link key={l.href} href={l.href} style={{ fontSize: 13, color: "#666", textDecoration: "none" }}>{l.label}</Link>
        ))}
      </footer>
    </div>
  );
}
