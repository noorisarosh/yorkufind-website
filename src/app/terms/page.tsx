import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ShieldAlert, BookOpen, AlertTriangle, Scale, HelpCircle, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service — YorkUFind",
  description:
    "Read the Terms of Service for YorkUFind, the independent student companion app for York University. Understand your rights, obligations, and limitations of liability.",
};

export default function TermsPage() {
  const lastUpdated = "November 23, 2026";

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12 border-b border-border pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-700 dark:text-blue-300 text-xs font-bold mb-4">
          <FileText className="w-3.5 h-3.5" />
          <span>User Agreement & EULA</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Terms of Service
        </h1>
        <p className="text-sm text-muted-foreground mt-2">
          Effective Date: {lastUpdated}
        </p>
      </div>

      {/* Summary Box */}
      <div className="bg-blue-500/5 border border-blue-500/20 rounded-2xl p-6 mb-10 space-y-3">
        <h2 className="text-base font-bold text-foreground flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-blue-600" />
          Summary for Students
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">✓</span>
            <span><strong>Independent Project:</strong> YorkUFind is built by students, not officially endorsed by York University.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">✓</span>
            <span><strong>Unofficial Assistant:</strong> Always verify official dates, tuition, and rooms with the Registrar.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">✓</span>
            <span><strong>Free & Respectful:</strong> Provided for personal, non-commercial educational use.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">✓</span>
            <span><strong>On-Device:</strong> Your schedule data belongs to you and stays on your personal device.</span>
          </li>
        </ul>
      </div>

      {/* Detailed Content */}
      <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-sm sm:text-base leading-relaxed text-muted-foreground">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            <Scale className="w-5 h-5 text-red-600" />
            1. Agreement to Terms
          </h2>
          <p>
            By downloading, installing, accessing, or using <strong>YorkUFind</strong> (the &ldquo;Application&rdquo;, &ldquo;App&rdquo;) or this website, you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree to these Terms, please do not download, install, or use the Application.
          </p>
          <p>
            These Terms constitute a legal agreement between you (the user) and the developers of YorkUFind (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-red-600" />
            2. Independent Student Project & Disclaimer of University Affiliation
          </h2>
          <p>
            <strong>YorkUFind is an independent, open-source/student-created application.</strong>
          </p>
          <div className="bg-amber-500/10 border-l-4 border-amber-500 p-4 rounded-r-xl text-xs sm:text-sm text-foreground">
            <p className="font-semibold mb-1 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-600 inline shrink-0" />
              Important Non-Affiliation Statement:
            </p>
            YorkUFind is NOT affiliated with, sponsored by, endorsed by, or operated by <strong>York University</strong>. All trademarks, service marks, logos, course codes, building names, and university portal names referenced within the Application belong to their respective owners. YorkUFind provides shortcuts, timetable visualizations, and directory assistance for student convenience only.
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-red-600" />
            3. Accuracy of Academic & Campus Information
          </h2>
          <p>
            YorkUFind enables you to paste your course schedule (from REM or Plot My Timetable), view class timings, and check academic dates or campus locations. While we strive to ensure that the timetable parser and public data remain accurate and functional:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-muted-foreground">
            <li>
              <strong>Official Registrar Record:</strong> The Application is an unofficial planning tool. In any event of discrepancy between the App and official York University systems (such as the Registration and Enrolment Module (REM), official Course Timetables, or Student Financial Services), the official York University records govern.
            </li>
            <li>
              <strong>Classrooms & Room Changes:</strong> Instructors and departments frequently update classroom assignments, lab sections, and tutorial locations at the start of each semester. You are responsible for verifying your physical classroom location on your official student portal.
            </li>
            <li>
              <strong>Drop & Withdrawal Deadlines:</strong> Important academic deadlines provided in the App are gathered from publicly posted university schedules. You must consult your faculty advising office or the Registrar&apos;s Office to confirm financial and academic drop dates.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            <Scale className="w-5 h-5 text-red-600" />
            4. Permitted Use & User Responsibilities
          </h2>
          <p>
            You are granted a non-exclusive, non-transferable, revocable license to use YorkUFind on your personal mobile device for personal, non-commercial educational purposes.
          </p>
          <p>You agree that you will NOT:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-muted-foreground">
            <li>Attempt to reverse-engineer, decompile, or tamper with the Application for malicious purposes.</li>
            <li>Use the Application to violate any local, provincial, federal, or academic regulations.</li>
            <li>Interfere with or disrupt any third-party university web portals accessed via external web links.</li>
            <li>Impersonate any student, faculty member, or university administrator.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            5. Disclaimer of Warranties
          </h2>
          <p className="text-xs sm:text-sm uppercase tracking-wide font-medium">
            THE APPLICATION AND ALL ASSOCIATED SERVICES ARE PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY, TIMELINESS, OR NON-INFRINGEMENT.
          </p>
          <p>
            We do not warrant that the Application will be uninterrupted, error-free, completely bug-free, or that defects will be immediately corrected.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-red-600" />
            6. Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted under applicable law, in no event shall the developers, contributors, or maintainers of YorkUFind be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation: missed classes, missed exams, course registration deadlines, grade penalties, academic standing consequences, or loss of data resulting from the use or inability to use the Application.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-red-600" />
            7. Third-Party Links & Services
          </h2>
          <p>
            YorkUFind provides convenient external links to York University online services (such as eClass, REM, Course Finder, Library, YU-card portal, and Campus Maps). These external websites are governed by their own terms and privacy practices. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            <Scale className="w-5 h-5 text-red-600" />
            8. Modifications to Terms
          </h2>
          <p>
            We reserve the right to revise or update these Terms at any time. When changes occur, we will update the &ldquo;Effective Date&rdquo; at the top of this document. Continued use of YorkUFind following any changes signifies your acceptance of the updated terms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-red-600" />
            9. Contact & Inquiries
          </h2>
          <p>
            If you have questions, feedback, or concerns regarding these Terms of Service, please reach out to us:
          </p>
          <div className="bg-muted p-4 rounded-xl space-y-1 text-sm font-medium">
            <p><strong>App:</strong> YorkUFind (iOS & Web Companion)</p>
            <p><strong>Email:</strong> <a href="mailto:support@yorkufind.app" className="text-red-600 hover:underline">support@yorkufind.app</a></p>
            <p><strong>Support Page:</strong> <Link href="/support" className="text-red-600 hover:underline">yorkufind.app/support</Link></p>
          </div>
        </section>
      </div>
    </div>
  );
}
