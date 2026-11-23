"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ArrowUpRight, ShieldCheck, FileText, HelpCircle, Download } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative w-9 h-9 rounded-xl overflow-hidden shadow-sm border border-red-500/20 bg-red-600 flex items-center justify-center text-white font-black text-lg transition-transform group-hover:scale-105">
            <Image
              src="/yorkufind-logo.png"
              alt="YorkUFind Logo"
              width={36}
              height={36}
              className="object-cover"
              onError={(e) => {
                // Fallback to text logo if image fails
                (e.target as HTMLElement).style.display = "none";
              }}
            />
            <span className="absolute inset-0 flex items-center justify-center font-black text-white text-sm">
              Y
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-foreground text-lg tracking-tight leading-none group-hover:text-red-600 transition-colors">
              YorkU<span className="text-red-600">Find</span>
            </span>
            <span className="text-[10px] text-muted-foreground font-semibold tracking-wider uppercase">
              Student Companion
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1">
          <Link
            href="/#features"
            className="px-3.5 py-1.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            Features
          </Link>
          <Link
            href="/#schedule"
            className="px-3.5 py-1.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            Schedule Builder
          </Link>
          <Link
            href="/privacy"
            className="px-3.5 py-1.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors flex items-center gap-1.5"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="px-3.5 py-1.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors flex items-center gap-1.5"
          >
            <FileText className="w-4 h-4 text-blue-600" />
            Terms of Service
          </Link>
          <Link
            href="/support"
            className="px-3.5 py-1.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors flex items-center gap-1.5"
          >
            <HelpCircle className="w-4 h-4 text-amber-600" />
            Support
          </Link>
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/#download"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-white bg-red-600 hover:bg-red-700 shadow-sm shadow-red-500/20 active:scale-95 transition-all"
          >
            <Download className="w-4 h-4" />
            Get the App
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-background px-4 pt-2 pb-6 space-y-2 shadow-lg">
          <Link
            href="/#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-base font-medium text-foreground hover:bg-muted"
          >
            Features
          </Link>
          <Link
            href="/#schedule"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-base font-medium text-foreground hover:bg-muted"
          >
            Schedule Builder
          </Link>
          <Link
            href="/privacy"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-base font-medium text-foreground hover:bg-muted"
          >
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-base font-medium text-foreground hover:bg-muted"
          >
            <FileText className="w-5 h-5 text-blue-600" />
            Terms of Service
          </Link>
          <Link
            href="/support"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-base font-medium text-foreground hover:bg-muted"
          >
            <HelpCircle className="w-5 h-5 text-amber-600" />
            Support & FAQ
          </Link>
          <div className="pt-2">
            <Link
              href="/#download"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold text-white bg-red-600 hover:bg-red-700 shadow-sm"
            >
              <Download className="w-4 h-4" />
              Download YorkUFind
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
