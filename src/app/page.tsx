import Image from "next/image";
import Link from "next/link";

/* ─── shared styles ─── */
const NAV_H = 60;

export default function Home() {
  return (
    <div style={{ fontFamily: "inherit" }}>

      {/* ── NAVBAR ── */}
      <header style={{
        position: "sticky", top: 0, zIndex: 50,
        height: NAV_H,
        background: "#fff",
        borderBottom: "1px solid #f0f0f0",
        display: "flex", alignItems: "center",
        padding: "0 32px",
        justifyContent: "space-between",
      }}>
        {/* Logo + name */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 28, height: 28, borderRadius: 7, overflow: "hidden", background: "#cc0000", flexShrink: 0 }}>
            <Image src="/logo.png" alt="YorkUFind" width={28} height={28} style={{ objectFit: "cover" }} />
          </div>
          <span style={{ fontWeight: 700, fontSize: 16, letterSpacing: "-0.3px", color: "#111" }}>
            YorkUFind
          </span>
        </div>

        {/* CTA */}
        <a
          href="mailto:yorkufind@outlook.com?subject=YorkUFind%20Access"
          style={{
            background: "#cc0000", color: "#fff",
            fontSize: 13, fontWeight: 600,
            padding: "7px 18px", borderRadius: 999,
            textDecoration: "none",
          }}
        >
          Get the App
        </a>
      </header>

      {/* ── HERO ── */}
      <section style={{
        maxWidth: 960, margin: "0 auto",
        padding: "80px 32px 60px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 48,
        alignItems: "center",
      }}>
        {/* Left */}
        <div>
          <h1 style={{
            fontSize: "clamp(32px, 5vw, 50px)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "#111",
            marginBottom: 16,
          }}>
            Your York University<br />
            <span style={{ color: "#cc0000" }}>campus companion.</span>
          </h1>
          <p style={{ fontSize: 16, color: "#666", lineHeight: 1.65, maxWidth: 380, marginBottom: 28 }}>
            Build your weekly schedule by pasting from REM, find courses, and access everything you need as a York student — all in one place.
          </p>
          <a
            href="mailto:yorkufind@outlook.com?subject=YorkUFind%20Beta%20Access"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#000", color: "#fff",
              padding: "11px 22px", borderRadius: 10,
              textDecoration: "none", fontSize: 14, fontWeight: 600,
            }}
          >
            {/* App Store badge SVG */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Download on the App Store
          </a>
          <p style={{ fontSize: 12, color: "#aaa", marginTop: 10 }}>
            Free to download · iPhone
          </p>
        </div>

        {/* Right — App icon in a phone-ish frame */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{
            width: 220,
            background: "#f5f5f5",
            borderRadius: 36,
            padding: 20,
            boxShadow: "0 24px 64px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.06)",
            display: "flex", flexDirection: "column", gap: 12,
          }}>
            {/* Phone top bar */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ width: 60, height: 6, background: "#ddd", borderRadius: 999 }} />
            </div>
            {/* App icon centered */}
            <div style={{
              display: "flex", justifyContent: "center", alignItems: "center",
              height: 160,
            }}>
              <div style={{ width: 100, height: 100, borderRadius: 24, overflow: "hidden", background: "#cc0000", boxShadow: "0 8px 24px rgba(204,0,0,0.3)" }}>
                <Image src="/logo.png" alt="YorkUFind App" width={100} height={100} style={{ objectFit: "cover" }} />
              </div>
            </div>
            {/* Fake schedule rows */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { label: "NATS 1516 • 8:30 AM", room: "VH C", color: "#cc0000" },
                { label: "SOSC 3042 • 11:30 AM", room: "Online", color: "#555" },
                { label: "HUMA 3835 • 2:30 PM", room: "MC 112", color: "#cc0000" },
              ].map((c, i) => (
                <div key={i} style={{
                  background: "#fff", borderRadius: 10, padding: "8px 10px",
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                }}>
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 700, color: "#111" }}>{c.label}</div>
                    <div style={{ fontSize: 9, color: "#999" }}>{c.room}</div>
                  </div>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: c.color }} />
                </div>
              ))}
            </div>
            {/* Fake tab bar */}
            <div style={{ display: "flex", justifyContent: "space-around", paddingTop: 8, borderTop: "1px solid #e5e5e5" }}>
              {["Home", "Schedule", "Links"].map((t, i) => (
                <span key={t} style={{ fontSize: 9, color: i === 0 ? "#cc0000" : "#aaa", fontWeight: i === 0 ? 700 : 400 }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section style={{ background: "#fafafa", borderTop: "1px solid #f0f0f0", padding: "72px 32px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 10 }}>
            Everything a York student needs
          </h2>
          <p style={{ fontSize: 15, color: "#777", marginBottom: 48 }}>
            No login required. No data collected. Just useful tools, offline.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, textAlign: "left" }}>
            {[
              {
                icon: "📅",
                title: "Smart Schedule Builder",
                desc: "Paste your timetable from REM or Plot My Timetable. We parse it instantly into a clean weekly grid.",
              },
              {
                icon: "🔍",
                title: "Course Finder",
                desc: "Search York's official course directory directly — one tap to check prerequisites, sections, and times.",
              },
              {
                icon: "🏫",
                title: "Campus Navigation",
                desc: "Building codes decoded. VH, MC, VC, ACW — find your room without guessing.",
              },
              {
                icon: "🔒",
                title: "100% Private",
                desc: "Your schedule stays on your device. No account, no Passport York login, no data sent anywhere.",
              },
            ].map((f) => (
              <div key={f.title} style={{
                background: "#fff",
                border: "1px solid #ebebeb",
                borderRadius: 14,
                padding: "20px 20px",
                display: "flex", gap: 14, alignItems: "flex-start",
              }}>
                <span style={{ fontSize: 22, flexShrink: 0 }}>{f.icon}</span>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 4, color: "#111" }}>{f.title}</div>
                  <div style={{ fontSize: 13, color: "#888", lineHeight: 1.55 }}>{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RED CTA ── */}
      <section style={{
        background: "#cc0000",
        padding: "64px 32px",
        textAlign: "center",
      }}>
        <h2 style={{ fontSize: 26, fontWeight: 800, color: "#fff", marginBottom: 10, letterSpacing: "-0.02em" }}>
          Get YorkUFind today
        </h2>
        <p style={{ fontSize: 14, color: "rgba(255,255,255,0.75)", marginBottom: 28, maxWidth: 360, margin: "0 auto 28px" }}>
          Built by York students, for York students. Free, private, and always offline-ready.
        </p>
        <a
          href="mailto:yorkufind@outlook.com?subject=YorkUFind%20Beta%20Access"
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "#000", color: "#fff",
            padding: "11px 22px", borderRadius: 10,
            textDecoration: "none", fontSize: 14, fontWeight: 600,
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          Download on the App Store
        </a>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        borderTop: "1px solid #f0f0f0",
        padding: "24px 32px",
        display: "flex",
        justifyContent: "center",
        gap: 32,
        flexWrap: "wrap",
      }}>
        {[
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Terms of Use", href: "/terms" },
          { label: "Support", href: "/support" },
        ].map((l) => (
          <Link key={l.href} href={l.href} style={{ fontSize: 13, color: "#666", textDecoration: "none" }}>
            {l.label}
          </Link>
        ))}
      </footer>

    </div>
  );
}
