import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Lock, EyeOff, Smartphone, Trash2, Mail, ExternalLink, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — YorkUFind",
  description:
    "Learn how YorkUFind protects your privacy with our offline-first, on-device architecture. We do not collect or sell your personal student data.",
};

export default function PrivacyPage() {
  const lastUpdated = "November 23, 2026";

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12 border-b border-border pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-xs font-bold mb-4">
          <Shield className="w-3.5 h-3.5" />
          <span>Privacy First & On-Device Storage</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted-foreground mt-2">
          Effective Date: {lastUpdated}
        </p>
      </div>

      {/* Summary Box */}
      <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-6 mb-10 space-y-3">
        <h2 className="text-base font-bold text-foreground flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
          Key Highlights at a Glance
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-emerald-600 font-bold">✓</span>
            <span><strong>No account required:</strong> You do not need to sign up or log in.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-600 font-bold">✓</span>
            <span><strong>On-device storage:</strong> Your schedule is saved locally on your phone.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-600 font-bold">✓</span>
            <span><strong>No credentials harvested:</strong> We never see or store your Passport York password.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-600 font-bold">✓</span>
            <span><strong>Zero data selling:</strong> We do not track you across apps or sell student data.</span>
          </li>
        </ul>
      </div>

      {/* Detailed Content */}
      <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-sm sm:text-base leading-relaxed text-muted-foreground">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            <Lock className="w-5 h-5 text-red-600" />
            1. Introduction & Our Commitment
          </h2>
          <p>
            YorkUFind (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;the app&rdquo;) was built by university students with a privacy-by-design philosophy. We understand how sensitive student schedules and academic details are. This Privacy Policy outlines what information the app interacts with, how it is handled, and your rights as a user.
          </p>
          <p>
            By using YorkUFind, you agree to the minimal, privacy-centric practices outlined in this policy.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            <Smartphone className="w-5 h-5 text-red-600" />
            2. Information We Handle
          </h2>
          <p>
            Unlike many commercial apps, YorkUFind operates primarily as an <strong>offline-first, client-side utility</strong>:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Course & Schedule Data:</strong> When you paste your timetable text or manually enter course entries into the Schedule builder, that data is processed directly inside your device&apos;s sandbox and stored in local device storage (<code className="text-xs bg-muted px-1.5 py-0.5 rounded">localStorage</code>). It is <strong>never transmitted</strong> to our private servers or any third-party database.
            </li>
            <li>
              <strong>Favorites & Saved Links:</strong> Any shortcuts or links you favorite within the app are saved exclusively on your local device.
            </li>
            <li>
              <strong>University Credentials:</strong> YorkUFind does <strong>NOT</strong> ask for, capture, or store your Passport York username, password, or student financial details. When you open official York links (such as eClass, York REM, or the Registrar portal), they launch directly in standard system browsers (e.g. Safari / InAppBrowser) governed by York University&apos;s authentication systems.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            <EyeOff className="w-5 h-5 text-red-600" />
            3. Analytics, Tracking & Third Parties
          </h2>
          <p>
            YorkUFind does <strong>NOT</strong> use invasive advertising SDKs, tracking pixels, or data brokers.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Apple Diagnostics:</strong> If you have opted in to share crash reports with developers through your Apple iOS settings, Apple provides developers with anonymized, aggregate crash logs to help identify and fix software bugs.
            </li>
            <li>
              <strong>External Links:</strong> The app provides helpful shortcuts to official York University resources, external campus websites, transit maps, and professor rating directories. Once you navigate away to an external webpage, that external website&apos;s privacy policy applies.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            <Trash2 className="w-5 h-5 text-red-600" />
            4. Data Retention & Deletion
          </h2>
          <p>
            Because your schedule and preferences reside entirely on your physical device:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>You can remove individual classes or clear your entire timetable at any time via the schedule settings in the app.</li>
            <li>Uninstalling the application from your iOS device immediately and permanently deletes all locally stored data.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground">
            5. Children&apos;s Privacy
          </h2>
          <p>
            YorkUFind is intended for post-secondary university students, staff, and faculty. We do not knowingly collect personal information from children under the age of 13.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground">
            6. Changes to This Privacy Policy
          </h2>
          <p>
            We may occasionally update this Privacy Policy to reflect app enhancements or legal requirements. Any modifications will be posted to this page with an updated &ldquo;Effective Date.&rdquo; Continued use of the app constitutes acceptance of any revised terms.
          </p>
        </section>

        <section className="space-y-3 pt-4 border-t border-border">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            <Mail className="w-5 h-5 text-red-600" />
            7. Contact Us
          </h2>
          <p>
            If you have any questions or feedback regarding this Privacy Policy or the security of YorkUFind, please feel free to reach out:
          </p>
          <div className="p-4 rounded-xl bg-card border border-border space-y-1">
            <p className="font-semibold text-foreground">YorkUFind Developer Team</p>
            <p className="text-sm">
              Email: <a href="mailto:support@yorkufind.app" className="text-red-600 font-medium hover:underline">support@yorkufind.app</a>
            </p>
            <p className="text-xs text-muted-foreground">
              Support Center: <Link href="/support" className="text-red-600 hover:underline">yorkufind.app/support</Link>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
