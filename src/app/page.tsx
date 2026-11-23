import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  Clock,
  MapPin,
  ShieldCheck,
  Sparkles,
  ExternalLink,
  BookOpen,
  Compass,
  ArrowRight,
  CheckCircle2,
  Download,
  Copy,
  Layers,
  Smartphone,
  Lock,
  FileText,
  HelpCircle,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-32 bg-gradient-to-b from-red-500/5 via-background to-background border-b border-border">
        {/* Background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-red-600 to-rose-400 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Pitch */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/10 border border-red-500/20 text-red-600 font-semibold text-xs sm:text-sm">
                <Sparkles className="w-3.5 h-3.5 fill-red-600" />
                <span>The Modern Companion for York University Students</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground leading-[1.1]">
                Master your York schedule with{" "}
                <span className="text-red-600 underline decoration-red-500/30 decoration-wavy underline-offset-8">
                  YorkUFind
                </span>
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Paste your schedule directly from <strong>REM</strong> or <strong>Plot My Timetable</strong>. Get a clean, beautiful weekly grid, today&apos;s classes widget, campus room directions, and instant access to official portals — with <strong>100% on-device privacy</strong>.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <a
                  href="#download"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-bold text-base shadow-lg shadow-red-500/25 hover:shadow-red-500/35 active:scale-95 transition-all"
                >
                  <Download className="w-5 h-5" />
                  <span>Download for iOS</span>
                </a>
                <Link
                  href="/#schedule"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-card border border-border hover:bg-muted font-semibold text-foreground text-base hover:border-red-500/40 transition-all"
                >
                  <Copy className="w-4 h-4 text-red-600" />
                  <span>See How It Works</span>
                </Link>
              </div>

              {/* Privacy Highlights */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5 font-medium text-foreground">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  No login or Passport York required
                </span>
                <span className="flex items-center gap-1.5 font-medium text-foreground">
                  <Lock className="w-4 h-4 text-blue-600" />
                  100% On-Device Local Storage
                </span>
                <span className="flex items-center gap-1.5 font-medium text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-red-600" />
                  Free & Open Student Project
                </span>
              </div>
            </div>

            {/* Right Column: Interactive App Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[340px] sm:max-w-[360px] rounded-[2.5rem] bg-zinc-900 p-3 shadow-2xl ring-1 ring-zinc-800">
                {/* iPhone Frame Speaker / Camera Notch */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-zinc-900 mr-2" />
                  <div className="w-2 h-2 rounded-full bg-blue-950/60" />
                </div>

                {/* Inner Screen */}
                <div className="relative rounded-[2rem] bg-background border border-border overflow-hidden pt-8 pb-4 px-4 flex flex-col gap-4 text-left shadow-inner">
                  {/* Top App Header */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-red-600 flex items-center justify-center text-white font-black text-xs shadow-sm">
                        Y
                      </div>
                      <span className="font-extrabold text-foreground text-sm tracking-tight">
                        YorkU<span className="text-red-600">Find</span>
                      </span>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-500/10 text-red-600">
                      Fall Term (F)
                    </span>
                  </div>

                  {/* Today's Classes Card */}
                  <div className="rounded-xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-transparent p-3.5 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-red-600" />
                        Today&apos;s Classes
                      </span>
                      <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                        2 Classes Today
                      </span>
                    </div>

                    {/* Class 1 */}
                    <div className="bg-card p-2.5 rounded-lg border border-border shadow-xs flex items-center justify-between">
                      <div>
                        <div className="font-bold text-xs text-foreground">
                          NATS 1516 • LECT 01
                        </div>
                        <div className="text-[11px] text-muted-foreground flex items-center gap-1 mt-0.5">
                          <MapPin className="w-3 h-3 text-red-600 inline" />
                          Vari Hall (VH C)
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-bold text-red-600 bg-red-500/10 px-2 py-1 rounded-md">
                          8:30 AM
                        </span>
                      </div>
                    </div>

                    {/* Class 2 */}
                    <div className="bg-card p-2.5 rounded-lg border border-border shadow-xs flex items-center justify-between">
                      <div>
                        <div className="font-bold text-xs text-foreground">
                          NATS 1505 • LECT 01
                        </div>
                        <div className="text-[11px] text-muted-foreground flex items-center gap-1 mt-0.5">
                          <MapPin className="w-3 h-3 text-red-600 inline" />
                          Vari Hall (VH A)
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-bold text-red-600 bg-red-500/10 px-2 py-1 rounded-md">
                          11:30 AM
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Quick Action Badges */}
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2 rounded-lg border border-border bg-card flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-red-600 shrink-0" />
                      <div>
                        <p className="font-bold text-[11px] leading-tight">Weekly Grid</p>
                        <p className="text-[9px] text-muted-foreground">Mon - Fri layout</p>
                      </div>
                    </div>
                    <div className="p-2 rounded-lg border border-border bg-card flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-blue-600 shrink-0" />
                      <div>
                        <p className="font-bold text-[11px] leading-tight">Course CDM</p>
                        <p className="text-[9px] text-muted-foreground">Official Search</p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Tab Bar Mockup */}
                  <div className="pt-2 border-t border-border flex items-center justify-around text-[10px] text-muted-foreground font-medium">
                    <span className="text-red-600 font-bold flex flex-col items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600 mb-0.5" />
                      Home
                    </span>
                    <span>Schedule</span>
                    <span>Courses</span>
                    <span>Links</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE FEATURES SECTION */}
      <section id="features" className="py-20 sm:py-28 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-red-600">
            Engineered for York Students
          </h2>
          <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
            Everything you need for a smooth academic semester
          </h3>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Tired of struggling with cumbersome web portals on mobile? YorkUFind compiles your schedules, courses, buildings, and academic deadlines into one snappy iOS app.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Feature 1 */}
          <div className="p-6 sm:p-7 rounded-2xl border border-border bg-card hover:border-red-500/40 transition-all hover:shadow-lg hover:shadow-red-500/5 group">
            <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Calendar className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-foreground mb-2">
              Smart Timetable Builder
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Copy your courses from the Registration Enrolment Module (REM) or Plot My Timetable. Our engine instantly maps them onto a weekly Mon–Fri visual timetable.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 sm:p-7 rounded-2xl border border-border bg-card hover:border-red-500/40 transition-all hover:shadow-lg hover:shadow-red-500/5 group">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Clock className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-foreground mb-2">
              Clean Fall &amp; Winter Separation
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Never get confused by Winter term classes during Fall. Today&apos;s Classes dashboard strictly displays sessions matching the current semester in chronological order.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 sm:p-7 rounded-2xl border border-border bg-card hover:border-red-500/40 transition-all hover:shadow-lg hover:shadow-red-500/5 group">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-foreground mb-2">
              Zero Credentials Harvested
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We respect your security. You never enter your Passport York username or password into the app. All official student tools open in your native browser.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="p-6 sm:p-7 rounded-2xl border border-border bg-card hover:border-red-500/40 transition-all hover:shadow-lg hover:shadow-red-500/5 group">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <BookOpen className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-foreground mb-2">
              Direct York Course Directory
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Access the official York SIS Course Timetable search directly with one tap to check prerequisites, syllabi, section options, and instructor info.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="p-6 sm:p-7 rounded-2xl border border-border bg-card hover:border-red-500/40 transition-all hover:shadow-lg hover:shadow-red-500/5 group">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Compass className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-foreground mb-2">
              Campus Building Decoders
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Unsure where VH, ACW, MC, or VC are? Building abbreviations are decoded right on your schedule cards with campus map coordinates.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="p-6 sm:p-7 rounded-2xl border border-border bg-card hover:border-red-500/40 transition-all hover:shadow-lg hover:shadow-red-500/5 group">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Smartphone className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-foreground mb-2">
              Offline-First Architecture
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Cell service in basement lecture halls and Vari Hall can be weak. Your schedule is stored locally on device so you never miss a room number.
            </p>
          </div>
        </div>
      </section>

      {/* SCHEDULE BUILDER SHOWCASE SECTION */}
      <section id="schedule" className="py-20 bg-muted/40 border-y border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Explanation */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-red-600">
                <Copy className="w-4 h-4" />
                <span>Zero Manual Entry</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                Copy from REM or Plot My Timetable. We do the rest.
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                York University students usually have to juggle messy portal tables or take low-resolution screenshots. YorkUFind allows you to simply copy the raw text from your enrolment confirmation.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-600/10 text-red-600 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                    1
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Log in to REM or Plot My Timetable</strong> and highlight your enrolled courses table.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-600/10 text-red-600 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                    2
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Paste it into YorkUFind:</strong> Our parser recognizes four-digit numbers with spaces, en-dashes, empty room codes, tutorials, and online sections.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-600/10 text-red-600 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                    3
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Done!</strong> Enjoy an organized weekly schedule grid and daily notification cards.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/support"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-700 hover:underline"
                >
                  <span>Read the Timetable Import FAQ</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right: Code & Preview Snippet */}
            <div className="lg:col-span-6 space-y-4">
              <div className="rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <span className="text-xs font-mono text-muted-foreground uppercase font-bold tracking-wider">
                    Raw Student Input Example
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                    Auto-Detected
                  </span>
                </div>

                <div className="bg-muted rounded-xl p-3.5 font-mono text-xs text-foreground/90 overflow-x-auto space-y-1.5 leading-relaxed">
                  <p className="text-red-600 font-semibold">// Raw text copied straight from York portal:</p>
                  <p>SC/NATS 1 516 3.00  F  Sep 9, 2026 – Dec 8, 2026  A  LECT 01  T  8:30  170  VH C</p>
                  <p>SC/NATS 1 505 3.00  F  Sep 9, 2026 – Dec 8, 2026  A  LECT 01  T  11:30 170  VH A</p>
                  <p>AP/SOSC 3 042 3.00  F  Sep 9, 2026 – Dec 8, 2026  A  TUTR 01  W  11:30 50   Ross S</p>
                  <p>AP/HUMA 3 835 6.00  Y  Sep 9, 2026 – Apr 5, 2027  A  SEMR 01  T  14:30 170  MC 112</p>
                </div>

                <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <p className="text-xs text-muted-foreground">
                    <strong className="text-foreground">Parsed Instantly:</strong> Courses are sorted by term (Fall &amp; Winter), mapped into days of week, and sorted numerically by start time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRIVACY & COMPLIANCE SECTION */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="rounded-3xl border border-red-500/20 bg-gradient-to-br from-red-500/5 via-card to-card p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-xs font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>App Store Privacy &amp; Security Standard</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                Your Privacy is Non-Negotiable
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                YorkUFind was created by students who care about digital rights. We do not run third-party advertising trackers, sell analytics data, or collect your student identity. Everything you parse stays safely in your phone&apos;s isolated application sandbox.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/privacy"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-red-600 hover:text-red-700 hover:underline"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Read Full Privacy Policy</span>
                </Link>
                <span className="text-border">•</span>
                <Link
                  href="/terms"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-foreground hover:text-red-600 hover:underline"
                >
                  <FileText className="w-4 h-4" />
                  <span>Terms of Service</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <div className="p-4 rounded-xl border border-border bg-background shadow-xs space-y-1">
                <div className="text-xs font-bold text-foreground">Zero Account Signups</div>
                <div className="text-xs text-muted-foreground">Open the app and use it right away.</div>
              </div>
              <div className="p-4 rounded-xl border border-border bg-background shadow-xs space-y-1">
                <div className="text-xs font-bold text-foreground">No Remote Database Tracking</div>
                <div className="text-xs text-muted-foreground">Your classes are stored locally on your device.</div>
              </div>
              <div className="p-4 rounded-xl border border-border bg-background shadow-xs space-y-1">
                <div className="text-xs font-bold text-foreground">Official Direct Links</div>
                <div className="text-xs text-muted-foreground">York SIS CDM, eClass, and Library open in Safari.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOWNLOAD / CTA SECTION */}
      <section id="download" className="py-20 bg-muted/30 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-red-600 text-white font-black text-2xl flex items-center justify-center mx-auto shadow-lg shadow-red-500/20">
            Y
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Ready to simplify your semester at York?
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Download YorkUFind today and enjoy seamless schedule management, classroom directions, and quick access to campus resources.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
            <a
              href="mailto:support@yorkufind.app?subject=YorkUFind%20TestFlight%20Beta%20Access"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-bold text-base shadow-lg shadow-red-500/20 active:scale-95 transition-all"
            >
              <Download className="w-5 h-5" />
              <span>Get TestFlight Beta Access</span>
            </a>
            <Link
              href="/support"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-card border border-border hover:bg-muted font-semibold text-foreground text-base transition-all"
            >
              <HelpCircle className="w-4 h-4 text-amber-600" />
              <span>Visit Support Center</span>
            </Link>
          </div>

          <p className="text-xs text-muted-foreground pt-4">
            Requires iOS 15.0 or later. Compatible with iPhone, iPad, and Apple Silicon Mac.
          </p>
        </div>
      </section>
    </div>
  );
}
