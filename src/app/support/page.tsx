import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support — YorkUFind",
  description: "Contact support for YorkUFind.",
};

export default function SupportPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a", color: "#fff" }}>
      <header style={{ padding: "32px 48px", borderBottom: "1px solid #1f1f1f" }}>
        <Link
          href="/"
          style={{ fontSize: 11, color: "#555", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase" }}
        >
          ← YorkUFind
        </Link>
      </header>

      <main
        style={{
          maxWidth: 640,
          margin: "0 auto",
          padding: "72px 32px",
        }}
      >
        <p style={{ fontSize: 11, color: "#555", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>
          Contact
        </p>
        <h1
          style={{
            fontSize: "clamp(28px, 5vw, 48px)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            marginBottom: 24,
            lineHeight: 1.1,
          }}
        >
          Support
        </h1>
        <p style={{ fontSize: 14, color: "#999", lineHeight: 1.75, marginBottom: 32 }}>
          Have a question, found a bug, or want to give feedback? Reach out and we'll get back to you.
        </p>
        <a
          href="mailto:yorkufind@outlook.com"
          style={{
            display: "inline-block",
            fontSize: 13,
            color: "#cc0000",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          yorkufind@outlook.com →
        </a>
      </main>

      <footer style={{ borderTop: "1px solid #1f1f1f", padding: "24px 48px" }}>
        <span style={{ fontSize: 11, color: "#444", letterSpacing: "0.04em", textTransform: "uppercase" }}>
          © 2026 — YorkUFind
        </span>
      </footer>
    </div>
  );
}
