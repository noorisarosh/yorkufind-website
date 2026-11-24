import Image from "next/image";
import Link from "next/link";
import {
  StickyHeader,
  Reveal,
  MagneticButton,
  InteractivePhoneFrame,
} from "@/components/MotionEffects";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#111]">
      {/* ── #075 STICKY HEADER ── */}
      <StickyHeader>
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <div className="w-7 h-7 rounded-[7px] overflow-hidden bg-[#cc0000] shrink-0 shadow-xs">
            <Image
              src="/logo.png"
              alt="YorkUFind"
              width={28}
              height={28}
              className="object-cover"
            />
          </div>
          <span className="font-bold text-[16px] tracking-[-0.3px] text-[#111]">
            YorkUFind
          </span>
        </Link>

        {/* #084 Magnetic CTA */}
        <MagneticButton
          href="mailto:yorkufind@outlook.com?subject=YorkUFind%20Access"
          className="inline-flex items-center justify-center bg-[#cc0000] text-white text-[13px] font-semibold px-[18px] py-[7px] rounded-full no-underline shadow-sm hover:shadow-md"
        >
          Get the App
        </MagneticButton>
      </StickyHeader>

      {/* ── HERO ── */}
      <section className="w-full max-w-[960px] mx-auto px-6 sm:px-8 pt-14 pb-12 sm:pt-20 sm:pb-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div className="text-center md:text-left">
          <Reveal delayMs={0}>
            <h1
              className="font-extrabold text-[#111] mb-4"
              style={{
                fontSize: "clamp(34px, 5vw, 50px)",
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
              }}
            >
              Your York University
              <br />
              <span style={{ color: "#cc0000" }}>campus companion.</span>
            </h1>
          </Reveal>

          <Reveal delayMs={90}>
            <p className="text-[16px] text-[#666] leading-[1.65] max-w-[390px] mx-auto md:mx-0 mb-7">
              Build your weekly schedule by pasting from REM, find courses, and
              access everything you need as a York student — all in one place.
            </p>
          </Reveal>

          <Reveal delayMs={180}>
            <div className="flex flex-col items-center md:items-start">
              <MagneticButton
                href="mailto:yorkufind@outlook.com?subject=YorkUFind%20Beta%20Access"
                className="inline-flex items-center gap-2.5 bg-black text-white px-[22px] py-[12px] rounded-[11px] no-underline text-[14px] font-semibold shadow-md hover:shadow-lg"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="white">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Download on the App Store
              </MagneticButton>
              <p className="text-[12px] text-[#999] mt-2.5">
                Free to download · iPhone
              </p>
            </div>
          </Reveal>
        </div>

        {/* Right Column — #096 Floating + #153 3D Tilt Phone Frame */}
        <Reveal delayMs={120} className="flex justify-center">
          <div className="relative">
            {/* Floating badge top-left (#096 harmonic chip) */}
            <div
              className="animate-float-chip-a hidden sm:flex items-center gap-1.5 absolute -left-10 top-10 z-20 bg-white px-3 py-1.5 rounded-full text-[11px] font-bold text-[#111] border border-black/5"
              style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
            >
              <span className="w-2 h-2 rounded-full bg-[#cc0000]" />
              Fall Term Ready
            </div>

            {/* Floating badge bottom-right (#096 harmonic chip) */}
            <div
              className="animate-float-chip-b hidden sm:flex items-center gap-1.5 absolute -right-10 bottom-20 z-20 bg-white px-3 py-1.5 rounded-full text-[11px] font-bold text-[#cc0000] border border-black/5"
              style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
            >
              100% Offline
            </div>

            <InteractivePhoneFrame>
              <div
                className="w-[232px] bg-[#f6f6f6] rounded-[38px] p-[18px] flex flex-col gap-3"
                style={{
                  boxShadow:
                    "0 24px 60px rgba(0,0,0,0.13), 0 0 0 1px rgba(0,0,0,0.06)",
                }}
              >
                {/* Top Speaker Pill */}
                <div className="flex justify-center">
                  <div className="w-14 h-1.5 bg-[#dcdcdc] rounded-full" />
                </div>

                {/* App Icon Centered */}
                <div className="flex justify-center items-center h-[136px]">
                  <div
                    className="w-[92px] h-[92px] rounded-[22px] overflow-hidden bg-[#cc0000]"
                    style={{ boxShadow: "0 10px 26px rgba(204,0,0,0.28)" }}
                  >
                    <Image
                      src="/logo.png"
                      alt="YorkUFind App"
                      width={92}
                      height={92}
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Today's Classes Preview */}
                <div className="flex flex-col gap-2">
                  {[
                    { label: "NATS 1516 • 8:30 AM", room: "VH C", color: "#cc0000" },
                    { label: "SOSC 3042 • 11:30 AM", room: "Online", color: "#555" },
                    { label: "HUMA 3835 • 2:30 PM", room: "MC 112", color: "#cc0000" },
                  ].map((c, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-[11px] px-2.5 py-2 flex justify-between items-center"
                      style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}
                    >
                      <div>
                        <div className="text-[10px] font-bold text-[#111]">
                          {c.label}
                        </div>
                        <div className="text-[9px] text-[#999]">{c.room}</div>
                      </div>
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ background: c.color }}
                      />
                    </div>
                  ))}
                </div>

                {/* Tab Bar */}
                <div className="flex justify-around pt-2 border-t border-[#e6e6e6]">
                  {["Home", "Schedule", "Links"].map((t, i) => (
                    <span
                      key={t}
                      className="text-[9px]"
                      style={{
                        color: i === 0 ? "#cc0000" : "#aaa",
                        fontWeight: i === 0 ? 700 : 400,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </InteractivePhoneFrame>
          </div>
        </Reveal>
      </section>

      {/* ── FEATURES (#074 Scroll Reveal + #081 Hover Lift) ── */}
      <section className="bg-[#fafafa] border-t border-[#f0f0f0] py-[72px] px-6 sm:px-8">
        <div className="max-w-[780px] mx-auto text-center">
          <Reveal>
            <h2 className="text-[28px] font-extrabold tracking-[-0.02em] text-[#111] mb-2.5">
              Everything a York student needs
            </h2>
            <p className="text-[15px] text-[#777] mb-12">
              No login required. No data collected. Just useful tools, offline.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
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
            ].map((f, idx) => (
              <Reveal key={f.title} delayMs={idx * 80}>
                <div className="hover-lift bg-white border border-[#ebebeb] rounded-[14px] p-5 flex gap-3.5 items-start h-full">
                  <span className="text-[22px] shrink-0">{f.icon}</span>
                  <div>
                    <div className="text-[14px] font-bold mb-1 text-[#111]">
                      {f.title}
                    </div>
                    <div className="text-[13px] text-[#777] leading-[1.55]">
                      {f.desc}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── RED CTA ── */}
      <section className="bg-[#cc0000] py-16 px-6 sm:px-8 text-center">
        <Reveal>
          <h2 className="text-[28px] font-extrabold text-white mb-2.5 tracking-[-0.02em]">
            Get YorkUFind today
          </h2>
          <p className="text-[14px] text-white/80 max-w-[360px] mx-auto mb-7">
            Built by York students, for York students. Free, private, and always
            offline-ready.
          </p>
          <MagneticButton
            href="mailto:yorkufind@outlook.com?subject=YorkUFind%20Beta%20Access"
            className="inline-flex items-center gap-2 bg-black text-white px-[22px] py-[12px] rounded-[11px] no-underline text-[14px] font-semibold shadow-lg"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download on the App Store
          </MagneticButton>
        </Reveal>
      </section>

      {/* ── FOOTER (#086 Underline Animation) ── */}
      <footer className="border-t border-[#f0f0f0] py-6 px-6 sm:px-8 flex justify-center gap-8 flex-wrap">
        {[
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Terms of Use", href: "/terms" },
          { label: "Support", href: "/support" },
        ].map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="link-underline text-[13px] text-[#666] hover:text-[#111] transition-colors"
          >
            {l.label}
          </Link>
        ))}
      </footer>
    </div>
  );
}
