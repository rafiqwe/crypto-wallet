"use client";

import Image from "next/image";
import logo from "@/public/images/logotemplate_4x@4x.png";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);

  const menuItems = [
    { title: "Guide", href: "/guide" },
    { title: "Support", href: "/support" },
    { title: "Remix for free", href: "https://remix.run" },
  ];

  useGSAP(
    () => {
      // Initialize timeline
      timeline.current = gsap
        .timeline({ paused: true })
        .to(containerRef.current, {
          height: "auto",
          duration: 0.6,
          ease: "power3.inOut",
        })
        .from(
          ".mobile-nav-item",
          {
            y: 20,
            opacity: 0,
            duration: 0.4,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.2"
        );
    },
    { scope: containerRef }
  );

  useGSAP(() => {
    if (timeline.current) {
      if (isMenuOpen) {
        timeline.current.play();
      } else {
        timeline.current.reverse();
      }
    }
  }, [isMenuOpen]);

  return (
    <nav className="fixed w-full top-6 left-0 right-0 z-30 flex justify-center px-4">
      <div
        ref={containerRef}
        className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-black/80 backdrop-blur-xl transition-all duration-300"
        style={{ height: "72px" }}
      >
        <div className="flex h-[72px] items-center justify-between px-6 md:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="relative h-8 w-24 shrink-0 transition-opacity hover:opacity-80"
          >
            <Image
              src={logo}
              alt="Logo"
              fill
              className="object-contain object-left"
              sizes="(max-width: 768px) 100px, 120px"
            />
          </Link>

          {/* Desktop Menu */}
          <DesktopMenu menuItems={menuItems} />

          {/* Desktop Action / Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button className="hidden rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition-transform  cursor-pointer hover:scale-105 active:scale-95 md:block">
              Connect Wallet
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="group relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:hidden"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Content */}
        <MobileMenu menuItems={menuItems} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
