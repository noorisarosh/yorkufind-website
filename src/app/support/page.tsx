import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support — YorkUFind",
  description: "Contact support for YorkUFind.",
};

export default function SupportPage() {
  return (
    <div className="min-h-screen px-6 py-16 max-w-2xl mx-auto">
      <Link href="/" className="text-sm text-gray-400 hover:text-red-600 transition-colors">
        ← Back
      </Link>

      <h1 className="mt-6 text-3xl font-black text-gray-900">Contact Support</h1>
      <p className="mt-4 text-sm text-gray-600 leading-relaxed">
        Have a question, found a bug, or want to give feedback? We'd love to hear from you.
      </p>

      <a
        href="mailto:yorkufind@outlook.com"
        className="mt-6 inline-block text-red-600 font-semibold hover:underline"
      >
        yorkufind@outlook.com
      </a>
    </div>
  );
}
