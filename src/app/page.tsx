import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center">
      {/* Logo */}
      <div className="w-20 h-20 rounded-2xl overflow-hidden bg-red-600 flex items-center justify-center shadow-lg mb-6">
        <Image
          src="/logo.png"
          alt="YorkUFind Logo"
          width={80}
          height={80}
          className="object-cover"
        />
      </div>

      {/* App Name */}
      <h1 className="text-4xl font-black tracking-tight text-gray-900">
        YorkU<span className="text-red-600">Find</span>
      </h1>

      {/* Description */}
      <p className="mt-4 text-gray-500 text-base max-w-sm leading-relaxed">
        A student-made companion app for York University. Build your weekly schedule, find courses, and access campus tools — all in one place.
      </p>

      {/* Links */}
      <div className="mt-10 flex flex-col items-center gap-3 text-sm">
        <Link href="/privacy" className="text-gray-500 hover:text-red-600 transition-colors">
          Privacy Policy
        </Link>
        <Link href="/terms" className="text-gray-500 hover:text-red-600 transition-colors">
          Terms of Use
        </Link>
        <a href="mailto:yorkufind@outlook.com" className="text-gray-500 hover:text-red-600 transition-colors">
          Contact Support
        </a>
      </div>

      {/* Footer note */}
      <p className="mt-16 text-xs text-gray-300">
        Not affiliated with York University.
      </p>
    </div>
  );
}
