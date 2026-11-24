import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use — YorkUFind",
  description: "Terms of Use for the YorkUFind app.",
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section style={{ marginBottom: 36 }}>
    <h2 style={{ fontSize: 15, fontWeight: 700, color: "#111", marginBottom: 8 }}>{title}</h2>
    <p style={{ fontSize: 14, color: "#666", lineHeight: 1.75 }}>{children}</p>
  </section>
);

export default function TermsPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#fff", color: "#111" }}>
      <header style={{ height: 60, borderBottom: "1px solid #f0f0f0", display: "flex", alignItems: "center", padding: "0 32px" }}>
        <Link href="/" style={{ fontWeight: 700, fontSize: 15, color: "#111", textDecoration: "none" }}>YorkUFind</Link>
      </header>

      <main style={{ maxWidth: 640, margin: "0 auto", padding: "64px 32px 80px" }}>
        <p style={{ fontSize: 12, color: "#aaa", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12 }}>Last updated — November 24, 2026</p>
        <h1 style={{ fontSize: 36, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 48 }}>Terms of Use</h1>

        <Section title="1. Acceptance">
          By downloading or using YorkUFind, you agree to these Terms of Use. If you do not agree, please do not use the app.
        </Section>
        <Section title="2. Not Affiliated with York University">
          YorkUFind is an independent, student-created application. It is not officially affiliated with, endorsed by, or operated by York University. All York University trademarks, course codes, and portal names belong to their respective owners.
        </Section>
        <Section title="3. Accuracy of Information">
          YorkUFind is a convenience tool, not an official source of academic information. Always verify your class schedule, room assignments, deadlines, and academic standing directly through York University's official portals (such as REM and the Registrar's Office).
        </Section>
        <Section title="4. Permitted Use">
          YorkUFind is provided for personal, non-commercial, educational use only. You may not reverse-engineer, copy, or redistribute the app for commercial purposes.
        </Section>
        <Section title="5. Disclaimer of Warranties">
          The app is provided "as is" without any warranties of any kind. We do not guarantee that the app will be error-free, uninterrupted, or completely accurate at all times.
        </Section>
        <Section title="6. Limitation of Liability">
          To the maximum extent permitted by law, the developers of YorkUFind are not liable for any damages arising from your use of the app, including missed classes, missed deadlines, or any academic consequences.
        </Section>
        <Section title="7. Changes to Terms">
          We may update these terms at any time. Continued use of the app after changes are posted means you accept the updated terms.
        </Section>
        <Section title="8. Contact">
          For any questions, contact us at{" "}
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
