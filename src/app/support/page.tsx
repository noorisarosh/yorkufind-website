import type { Metadata } from "next";
import Link from "next/link";
import { HelpCircle, Mail, MessageSquare, AlertCircle, Copy, CheckCircle2, ChevronRight, ExternalLink, Calendar, MapPin, ShieldCheck, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Support & Help Center — YorkUFind",
  description:
    "Get help with YorkUFind: how to import your York University schedule, troubleshoot timetable parsing, report bugs, and contact our team.",
};

const FAQS = [
  {
    question: "How do I import my class schedule into YorkUFind?",
    answer:
      "Go to the 'Schedule' tab in YorkUFind, tap 'Build My Schedule', and paste your schedule text directly from either the York University Registration and Enrolment Module (REM) or 'Plot My Timetable'. Our intelligent parser automatically detects course codes (e.g., SC/NATS 1516 3.00), section letters, class type (LECT, TUTR, LAB), meeting days, times, and room locations.",
  },
  {
    question: "Does YorkUFind store or see my Passport York login password?",
    answer:
      "No. YorkUFind NEVER asks for, intercepts, transmits, or stores your Passport York credentials. All student links (like eClass or the official Course Timetable) open directly in your secure system browser. Your schedule data is stored purely on your personal device using local storage.",
  },
  {
    question: "Why did my schedule show Winter classes during the Fall semester?",
    answer:
      "YorkU courses run across multiple terms: Fall (F), Winter (W), and Year-round (Y). In YorkUFind, the Home Dashboard and Schedule tabs automatically filter your today's classes to match the active academic term so you only see what's relevant today, and you can switch between Fall and Winter anytime.",
  },
  {
    question: "Can I use YorkUFind without an internet connection?",
    answer:
      "Yes! Your parsed timetable, daily schedule, and favorite academic dates are saved locally on your device. You can view your classes, check room numbers (e.g., VH C, VC 103, Ross South), and browse your schedule even when campus Wi-Fi or cellular service is spotty.",
  },
  {
    question: "Is YorkUFind an official York University application?",
    answer:
      "YorkUFind is an independent, student-created companion application designed to improve student life at York University. It is not officially endorsed, sponsored, or affiliated with York University. Official academic records must always be checked on York's official Registrar portals.",
  },
  {
    question: "What should I do if a course or room doesn't parse correctly?",
    answer:
      "Make sure you copy the entire row from REM or Plot My Timetable, including the course code, term letter (F/W/Y), dates, day of the week, and time. If a specific course code fails, tap 'Edit Schedule' to manually adjust or send us an email at support@yorkufind.app with the text snippet and we will update the parser within 24 hours.",
  },
];

export default function SupportPage() {
  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12 border-b border-border pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300 text-xs font-bold mb-4">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Support & Knowledge Base</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          How can we help?
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground mt-2 max-w-2xl leading-relaxed">
          Need help importing your timetable, reporting a bug, or have a suggestion to make YorkUFind better? We are here to support you.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
        <div className="p-6 rounded-2xl border border-border bg-card shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-600 flex items-center justify-center">
            <Mail className="w-5 h-5" />
          </div>
          <h2 className="text-lg font-bold text-foreground">Email Support</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Have a question or need assistance with your schedule import? Our student developer team typically responds within 24 hours.
          </p>
          <a
            href="mailto:support@yorkufind.app"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-red-600 hover:text-red-700 hover:underline pt-2"
          >
            support@yorkufind.app
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        <div className="p-6 rounded-2xl border border-border bg-card shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center">
            <MessageSquare className="w-5 h-5" />
          </div>
          <h2 className="text-lg font-bold text-foreground">Feature Requests & Bugs</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Want a new campus navigation shortcut, dining hall hours, or widget support? Let us know what you want to see in the next update.
          </p>
          <a
            href="mailto:support@yorkufind.app?subject=YorkUFind%20Feature%20Request%20or%20Bug%20Report"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 hover:underline pt-2"
          >
            Submit Feedback
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Copy-Paste Schedule Guide */}
      <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6 sm:p-8 mb-12 space-y-4">
        <div className="flex items-center gap-2 text-red-600 font-bold text-base">
          <Copy className="w-5 h-5" />
          <span>Quick Guide: How to Copy & Paste Your York Timetable</span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          YorkUFind supports both <strong>REM (Registration and Enrolment Module)</strong> and <strong>Plot My Timetable</strong> outputs. You can select all text from your course list and paste it directly.
        </p>

        <div className="bg-background rounded-xl p-4 border border-border font-mono text-xs text-foreground overflow-x-auto">
          <div className="text-muted-foreground mb-1 select-none font-sans font-semibold text-[11px] uppercase tracking-wider">
            Sample Valid Input:
          </div>
          <div className="space-y-1">
            <p>SC/NATS 1 516 3.00   F   Sep 9, 2026 – Dec 8, 2026   A   LECT 01   T   8:30    170   VH C</p>
            <p>SC/NATS 1 505 3.00   F   Sep 9, 2026 – Dec 8, 2026   A   LECT 01   T   11:30   170   VH A</p>
            <p>AP/SOSC 3 042 3.00   F   Sep 9, 2026 – Dec 8, 2026   A   TUTR 01   W   11:30   50    </p>
            <p>AP/SOSC 3 042 3.00   F   Sep 9, 2026 – Dec 8, 2026   A   ONLN 01   W   9:30    110   </p>
            <p>AP/HUMA 3 835 6.00   Y   Sep 9, 2026 – Apr 5, 2027   A   SEMR 01   T   14:30   170   MC 112</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground pt-1">
          <span className="flex items-center gap-1.5 font-medium text-foreground">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Understands 4-digit codes with spaces (e.g. 1 516)
          </span>
          <span className="flex items-center gap-1.5 font-medium text-foreground">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Detects Online & Empty Room Rows
          </span>
          <span className="flex items-center gap-1.5 font-medium text-foreground">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Handles En-dashes and Hyphen Dates
          </span>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="space-y-6 mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className="p-5 rounded-xl border border-border bg-card space-y-2 hover:border-red-500/30 transition-colors"
            >
              <h3 className="font-semibold text-foreground text-base">
                {faq.question}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Legal & App Store Quick Links */}
      <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <span>Looking for legal policies required by the App Store?</span>
        <div className="flex items-center gap-4">
          <Link href="/privacy" className="text-red-600 hover:underline flex items-center gap-1 font-medium">
            <ShieldCheck className="w-4 h-4" />
            Privacy Policy
          </Link>
          <span className="text-border">•</span>
          <Link href="/terms" className="text-red-600 hover:underline flex items-center gap-1 font-medium">
            <FileText className="w-4 h-4" />
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  );
}
