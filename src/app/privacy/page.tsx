import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — YorkUFind",
  description: "Privacy Policy for the YorkUFind app.",
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section style={{ marginBottom: 36 }}>
    <h2 style={{ fontSize: 15, fontWeight: 700, color: "#111", marginBottom: 8 }}>{title}</h2>
    <p style={{ fontSize: 14, color: "#666", lineHeight: 1.75 }}>{children}</p>
  </section>
);

export default function PrivacyPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#fff", color: "#111" }}>
      <header style={{ height: 60, borderBottom: "1px solid #f0f0f0", display: "flex", alignItems: "center", padding: "0 32px", justifyContent: "space-between" }}>
        <Link href="/" style={{ fontWeight: 700, fontSize: 15, color: "#111", textDecoration: "none" }}>YorkUFind</Link>
      </header>

      <main style={{ maxWidth: 640, margin: "0 auto", padding: "64px 32px 80px" }}>
        <p style={{ fontSize: 12, color: "#aaa", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12 }}>Last updated — November 24, 2026</p>
        <h1 style={{ fontSize: 36, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 48 }}>Privacy Policy</h1>

        <Section title="1. Overview">
          YorkUFind is an independent, student-made app for York University students. We are committed to protecting your privacy. This policy explains what data we handle and how.
        </Section>
        <Section title="2. Data We Do Not Collect">
          We do not collect, store, or transmit any personal information. We do not ask for your name, email, Passport York credentials, student ID, or any identifying information. There are no accounts, no sign-ups, and no logins.
        </Section>
        <Section title="3. On-Device Storage">
          Your schedule and any preferences are stored entirely on your device using local storage. This data never leaves your phone and is not shared with us or any third party.
        </Section>
        <Section title="4. Third-Party Links">
          The app contains links to official York University portals (such as eClass, REM, and the Course Directory). These external sites are governed by their own privacy policies. We have no control over and no access to those services.
        </Section>
        <Section title="5. Analytics & Tracking">
          We do not use any analytics tools, advertising trackers, or cookies.
        </Section>
        <Section title="6. Children's Privacy">
          YorkUFind is intended for university students and is not directed at children under the age of 13. We do not knowingly collect any information from children.
        </Section>
        <Section title="7. Changes to This Policy">
          We may update this policy from time to time. Any changes will be reflected on this page with an updated date.
        </Section>
        <Section title="8. Contact">
          If you have any questions, contact us at{" "}
          <a href="mailto:yorkufind@outlook.com" style={{ color: "#cc0000", textDecoration: "none" }}>yorkufind@outlook.com</a>.
        </Section>
      </main>

      <footer style={{ borderTop: "1px solid #f0f0f0", padding: "24px 32px", display: "flex", justifyContent: "center", gap: 32 }}>
        {[{ label: "Privacy Policy", href: "/privacy" }, { label: "Terms of Use", href: "/terms" }, { label: "Support", href: "/support" }].map(l => (
          <Link key={l.href} href={l.href} style={{ fontSize: 13, color: "#666", textDecoration: "none" }}>{l.label}</Link>
        ))}
      </footer>
    </div>
  );
}
