import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#0a0a0a",
        color: "#fff",
      }}
    >
      {/* Header */}
      <header
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "32px 24px",
          borderBottom: "1px solid #1f1f1f",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              overflow: "hidden",
              background: "#cc0000",
              flexShrink: 0,
            }}
          >
            <Image src="/logo.png" alt="YorkUFind" width={36} height={36} style={{ objectFit: "cover" }} />
          </div>
          <span
            style={{
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#fff",
            }}
          >
            YORKUFIND
          </span>
        </div>
      </header>

      {/* Hero */}
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "80px 24px",
        }}
      >
        <div
          style={{
            width: 96,
            height: 96,
            borderRadius: 22,
            overflow: "hidden",
            background: "#cc0000",
            marginBottom: 32,
            boxShadow: "0 8px 32px rgba(204,0,0,0.3)",
          }}
        >
          <Image src="/logo.png" alt="YorkUFind" width={96} height={96} style={{ objectFit: "cover" }} />
        </div>

        <h1
          style={{
            fontSize: "clamp(36px, 8vw, 72px)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            lineHeight: 1,
            marginBottom: 20,
          }}
        >
          YorkU<span style={{ color: "#cc0000" }}>Find</span>
        </h1>

        <p
          style={{
            fontSize: 15,
            color: "#888",
            maxWidth: 320,
            lineHeight: 1.6,
            marginBottom: 48,
          }}
        >
          A student-made companion app for York University. Build your schedule, find courses, and access campus tools.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "center" }}>
          <Link
            href="/privacy"
            style={{ color: "#aaa", fontSize: 13, textDecoration: "none", letterSpacing: "0.06em", textTransform: "uppercase" }}
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            style={{ color: "#aaa", fontSize: 13, textDecoration: "none", letterSpacing: "0.06em", textTransform: "uppercase" }}
          >
            Terms of Use
          </Link>
          <a
            href="mailto:yorkufind@outlook.com"
            style={{ color: "#aaa", fontSize: 13, textDecoration: "none", letterSpacing: "0.06em", textTransform: "uppercase" }}
          >
            Contact Support
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid #1f1f1f",
          padding: "24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <span style={{ fontSize: 11, color: "#444", letterSpacing: "0.04em", textTransform: "uppercase" }}>
          © 2026 — YorkUFind
        </span>
        <span style={{ fontSize: 11, color: "#444", letterSpacing: "0.04em", textTransform: "uppercase" }}>
          Not affiliated with York University
        </span>
      </footer>
    </div>
  );
}
