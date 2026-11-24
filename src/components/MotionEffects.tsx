"use client";

import React, { useEffect, useRef, useState } from "react";

/* Motion Prompt #075: Sticky header with soft shadow once scrolled */
export function StickyHeader({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 h-[62px] flex items-center justify-between px-6 sm:px-8 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255, 255, 255, 0.88)" : "#ffffff",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "1px solid #f2f2f2",
        boxShadow: scrolled ? "0 4px 20px rgba(0, 0, 0, 0.04)" : "none",
      }}
    >
      {children}
    </header>
  );
}

/* Motion Prompt #074: Fade-in on scroll (up 24px over 0.6s with stagger support) */
export function Reveal({
  children,
  delayMs = 0,
  className = "",
}: {
  children: React.ReactNode;
  delayMs?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal-item ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
}

/* Motion Prompt #084: Magnetic button (pulls toward cursor, springs back on leave) */
export function MagneticButton({
  href,
  children,
  style,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setOffset({
      x: (e.clientX - cx) * 0.22,
      y: (e.clientY - cy) * 0.22,
    });
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setOffset({ x: 0, y: 0 });
  };

  return (
    <a
      ref={ref}
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        ...style,
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0) scale(${hovered ? 1.02 : 1})`,
        transition: hovered
          ? "transform 0.12s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.25s ease"
          : "transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s ease",
      }}
    >
      {children}
    </a>
  );
}

/* Motion Prompt #096 + #153: Floating phone with 3D tilt & moving glare on hover */
export function InteractivePhoneFrame({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, gx: 50, gy: 50, active: false });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setTilt({
      rx: (0.5 - py) * 14,
      ry: (px - 0.5) * 16,
      gx: px * 100,
      gy: py * 100,
      active: true,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ rx: 0, ry: 0, gx: 50, gy: 50, active: false });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col items-center justify-center py-4"
      style={{ perspective: "900px" }}
    >
      <div
        className="animate-float-phone relative"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <div
          style={{
            transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
            transition: tilt.active
              ? "transform 0.1s ease-out"
              : "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
            position: "relative",
          }}
        >
          {children}
          {/* Subtle moving glare on hover */}
          <div
            aria-hidden="true"
            style={{
              pointerEvents: "none",
              position: "absolute",
              inset: 0,
              borderRadius: 38,
              opacity: tilt.active ? 0.25 : 0,
              transition: "opacity 0.3s ease",
              background: `radial-gradient(circle at ${tilt.gx}% ${tilt.gy}%, rgba(255,255,255,0.85), transparent 60%)`,
            }}
          />
        </div>
      </div>

      {/* Motion Prompt #096: Dynamic shadow ellipse synced with phone float */}
      <div
        className="animate-float-shadow mt-5 rounded-full"
        style={{
          width: 150,
          height: 14,
          background: "radial-gradient(ellipse at center, rgba(0,0,0,0.28), transparent 72%)",
          filter: "blur(3px)",
        }}
      />
    </div>
  );
}
