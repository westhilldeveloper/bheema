"use client";

import { useState, useEffect } from "react";
import { Menu, X, Home, Building2, Users, Info, Briefcase, Phone } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "HOME", link: "#home", icon: Home },
    { name: "OUR COMPANIES", link: "#companies", icon: Building2 },
    { name: "WHY US", link: "#whyus", icon: Users },
    { name: "ABOUT US", link: "#about", icon: Info },
    { name: "INDUSTRIES", link: "#industries", icon: Briefcase },
    { name: "CONTACT US", link: "#contact", icon: Phone },
  ];

  // Scroll‑spy (same as before)
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    if (sections.length === 0) return;

    const navbar = document.querySelector("header");
    const navbarHeight = navbar?.offsetHeight || 0;

    const handleScroll = () => {
      let currentSection = "";
      const scrollPosition = window.scrollY + navbarHeight + 50;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentSection = section.id;
        }
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenu]);

  return (
    <header className="sticky top-0 z-50 bg-[#0A2342] text-white shadow-md">
      <div className="max-w-8xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/Bheema_logo.png"
            alt="Bheema Group Logo"
            width={160}
            height={160}
            className="h-26 w-auto"
            priority
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 text-[13px] font-medium">
            {navItems.map((item) => {
              const isActive = activeSection === item.link.slice(1);
              return (
                <li key={item.name}>
                  <a
                    href={item.link}
                    className={`transition-colors duration-300 ${
                      isActive ? "text-[#D9A441]" : "hover:text-[#D9A441]"
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {mobileMenu ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* -------- MOBILE BOTTOM SHEET -------- */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
          mobileMenu ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Overlay (click to close) */}
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            mobileMenu ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileMenu(false)}
        />

        {/* Bottom sheet */}
        <div
          className={`absolute bottom-0 left-0 right-0 bg-[#08264A] rounded-t-3xl shadow-2xl transition-transform duration-300 ${
            mobileMenu ? "translate-y-0" : "translate-y-full"
          }`}
          style={{ maxHeight: "80vh" }}
        >
          {/* Handle (drag indicator) */}
          <div className="flex justify-center pt-3">
            <div className="w-12 h-1.5 rounded-full bg-white/30" />
          </div>

          {/* Menu items – grid layout for better usability */}
          <nav className="p-6 pb-8">
            <ul className="grid grid-cols-2 gap-3">
              {navItems.map((item) => {
                const isActive = activeSection === item.link.slice(1);
                const Icon = item.icon;
                return (
                  <li key={item.name}>
                    <a
                      href={item.link}
                      onClick={() => setMobileMenu(false)}
                      className={`flex flex-col items-center justify-center gap-1 p-4 rounded-xl transition-all ${
                        isActive
                          ? "bg-[#D9A441] text-[#0A2342]"
                          : "bg-white/5 text-white hover:bg-white/10"
                      }`}
                    >
                      <Icon size={24} className="shrink-0" />
                      <span className="text-xs font-medium">{item.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}