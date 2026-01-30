"use client";

import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";

interface NavbarProps {
  onNavigate: (page: "home" | "apply") => void;
  currentPage: "home" | "apply";
}

export default function Navbar({ onNavigate, currentPage }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "What It Is", href: "#foundation" },
    { label: "Pricing", href: "#pricing" },
    { label: "Results", href: "#results" },
    { label: "About", href: "#about" },
  ];

  const handleMobileClick = (href: string) => {
    setMobileMenuOpen(false);
    onNavigate("home");
    setTimeout(() => {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      <nav
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-100 transition-all duration-300 w-[95%] md:w-auto ${
          scrolled ? "scale-95 opacity-95" : "scale-100 opacity-100"
        }`}
      >
        <div className="frosted rounded-full px-6 py-2.5 flex items-center justify-between gap-8 md:gap-12 min-w-max shadow-2xl">
          <div
            className="text-xl font-display font-bold tracking-tighter cursor-pointer"
            onClick={() => {
              onNavigate("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            IRON <span className="text-acid-lime">KADIN</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-white/70 hover:text-acid-lime transition-colors relative group"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate("home");
                  const el = document.querySelector(item.href);
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-acid-lime group-hover:w-full transition-all duration-300 shadow-glow" />
              </a>
            ))}
          </div>

          {/* CTA & Mobile Menu Trigger */}
          <div className="flex items-center gap-4">
            <a
              href="#apply"
              className="hidden md:block px-5 py-2 rounded-full bg-acid-lime text-black text-xs font-bold tracking-tight hover:shadow-glow transition-all active:scale-95"
            >
              SCHEDULE CONSULT
            </a>
            <button
              className="md:hidden text-white hover:text-acid-lime"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-110 bg-graphite-900 flex flex-col items-center justify-center animate-fade-in">
          <button
            className="absolute top-8 right-8 text-white hover:text-acid-lime"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={32} />
          </button>
          <div className="flex flex-col items-center gap-8 text-3xl font-display font-bold">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleMobileClick(item.href)}
                className="hover:text-acid-lime transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a
              href="#apply"
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate("apply");
              }}
              className="mt-4 px-8 py-4 rounded-full bg-acid-lime text-black text-xl hover:shadow-glow transition-all"
            >
              APPLY NOW
            </a>
          </div>
        </div>
      )}
    </>
  );
}
