import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — YorkUFind",
  description: "Privacy Policy for the YorkUFind app.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen px-6 py-16 max-w-2xl mx-auto">
      <Link href="/" className="text-sm text-gray-400 hover:text-red-600 transition-colors">
        ← Back
      </Link>

      <h1 className="mt-6 text-3xl font-black text-gray-900">Privacy Policy</h1>
      <p className="mt-1 text-sm text-gray-400">Last updated: November 24, 2026</p>

      <div className="mt-8 space-y-6 text-sm text-gray-600 leading-relaxed">
        <section>
          <h2 className="font-bold text-gray-800 mb-1">1. Overview</h2>
          <p>
            YorkUFind is an independent, student-made app for York University students. We are committed to protecting your privacy. This policy explains what data we handle and how.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-gray-800 mb-1">2. Data We Do Not Collect</h2>
          <p>
            We do not collect, store, or transmit any personal information. We do not ask for your name, email, Passport York credentials, student ID, or any identifying information. There are no accounts, no sign-ups, and no logins.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-gray-800 mb-1">3. On-Device Storage</h2>
          <p>
            Your schedule and any preferences are stored entirely on your device using local storage. This data never leaves your phone and is not shared with us or any third party.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-gray-800 mb-1">4. Third-Party Links</h2>
          <p>
            The app contains links to official York University portals (such as eClass, REM, and the Course Directory). These external sites are governed by their own privacy policies. We have no control over and no access to those services.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-gray-800 mb-1">5. Analytics & Tracking</h2>
          <p>
            We do not use any analytics tools, advertising trackers, or cookies.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-gray-800 mb-1">6. Children's Privacy</h2>
          <p>
            YorkUFind is intended for university students and is not directed at children under the age of 13. We do not knowingly collect any information from children.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-gray-800 mb-1">7. Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. Any changes will be reflected on this page with an updated date.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-gray-800 mb-1">8. Contact</h2>
          <p>
            If you have any questions about this privacy policy, please contact us at{" "}
            <a href="mailto:yorkufind@outlook.com" className="text-red-600 hover:underline">
              yorkufind@outlook.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
