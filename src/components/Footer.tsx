"use client";

import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, FileText, HelpCircle, Heart, Mail, ExternalLink } from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Column 1: Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group w-fit">
              <div className="w-8 h-8 rounded-xl overflow-hidden bg-red-600 flex items-center justify-center text-white font-black text-base shadow-sm">
                Y
              </div>
              <span className="font-extrabold text-foreground text-xl tracking-tight">
                YorkU<span className="text-red-600">Find</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              The modern, privacy-focused student companion for York University. Search courses, build seamless weekly visual schedules, access essential student portals, and navigate campus with ease.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground pt-1">
              <span>Made with</span>
              <Heart className="w-3.5 h-3.5 text-red-600 fill-red-600 inline" />
              <span>by York University students for York University students.</span>
            </div>
          </div>

          {/* Column 2: Legal & Trust (HIGHLIGHTED FOR APP STORE) */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Legal & Compliance
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-red-600 transition-colors flex items-center gap-1.5 font-medium"
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-muted-foreground hover:text-red-600 transition-colors flex items-center gap-1.5 font-medium"
                >
                  <FileText className="w-4 h-4 text-blue-600" />
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-muted-foreground hover:text-red-600 transition-colors flex items-center gap-1.5 font-medium"
                >
                  <HelpCircle className="w-4 h-4 text-amber-600" />
                  Support & Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: App Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              App Features
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/#schedule" className="text-muted-foreground hover:text-foreground transition-colors">
                  Weekly Schedule Builder
                </Link>
              </li>
              <li>
                <Link href="/#features" className="text-muted-foreground hover:text-foreground transition-colors">
                  Course Directory Search
                </Link>
              </li>
              <li>
                <Link href="/#features" className="text-muted-foreground hover:text-foreground transition-colors">
                  Campus Navigation & Map
                </Link>
              </li>
              <li>
                <Link href="/#features" className="text-muted-foreground hover:text-foreground transition-colors">
                  Important Academic Dates
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Copyright Banner */}
        <div className="pt-8 border-t border-border/70 space-y-3 text-xs text-muted-foreground leading-relaxed">
          <p>
            <strong>Disclaimer:</strong> YorkUFind is an independent, student-developed utility app designed to assist university students. YorkUFind is not affiliated with, endorsed by, sponsored by, or officially associated with York University. All official York University marks, course names, and campus locations remain the property of York University.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2">
            <p>© {currentYear} YorkUFind. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="hover:underline">
                Privacy
              </Link>
              <span>•</span>
              <Link href="/terms" className="hover:underline">
                Terms
              </Link>
              <span>•</span>
              <Link href="/support" className="hover:underline">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
