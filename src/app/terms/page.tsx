import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use — YorkUFind",
  description: "Terms of Use for the YorkUFind app.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen px-6 py-16 max-w-2xl mx-auto">
      <Link href="/" className="text-sm text-gray-400 hover:text-red-600 transition-colors">
        ← Back
      </Link>

      <h1 className="mt-6 text-3xl font-black text-gray-900">Terms of Use</h1>
      <p className="mt-1 text-sm text-gray-400">Last updated: November 24, 2026</p>

      <div className="mt-8 space-y-6 text-sm text-gray-600 leading-relaxed">
        <section>
          <h2 className="font-bold text-gray-800 mb-1">1. Acceptance</h2>
          <p>
            By downloading or using YorkUFind, you agree to these Terms of Use. If you do not agree, please do not use the app.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-gray-800 mb-1">2. Not Affiliated with York University</h2>
          <p>
            YorkUFind is an independent, student-created application. It is not officially affiliated with, endorsed by, or operated by York University. All York University trademarks, course codes, and portal names belong to their respective owners.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-gray-800 mb-1">3. Accuracy of Information</h2>
          <p>
            YorkUFind is a convenience tool. It is not an official source of academic information. Always verify your class schedule, room assignments, deadlines, and academic standing directly through York University's official portals (such as REM and the Registrar's Office).
          </p>
        </section>

        <section>
          <h2 className="font-bold text-gray-800 mb-1">4. Permitted Use</h2>
          <p>
            YorkUFind is provided for personal, non-commercial, educational use only. You may not reverse-engineer, copy, or redistribute the app for commercial purposes.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-gray-800 mb-1">5. Disclaimer of Warranties</h2>
          <p>
            The app is provided "as is" without any warranties of any kind. We do not guarantee that the app will be error-free, uninterrupted, or completely accurate at all times.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-gray-800 mb-1">6. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, the developers of YorkUFind are not liable for any damages arising from your use of the app, including missed classes, missed deadlines, or any academic consequences.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-gray-800 mb-1">7. Changes to Terms</h2>
          <p>
            We may update these terms at any time. Continued use of the app after changes are posted means you accept the updated terms.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-gray-800 mb-1">8. Contact</h2>
          <p>
            For any questions about these terms, contact us at{" "}
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
