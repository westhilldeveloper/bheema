"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "COMPANIES", link: "#companies" },
    { name: "INDUSTRIES", link: "#industries" },
    { name: "CONTACT US", link: "#contact" },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4, // adjust as needed
        rootMargin: "0px 0px -10% 0px", // helps avoid switching too early/late
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="md:hidden"
        >
          {mobileMenu ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileMenu ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="bg-[#08264A] border-t border-white/10">
          <ul className="flex flex-col py-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.link.slice(1);
              return (
                <li key={item.name}>
                  <a
                    href={item.link}
                    onClick={() => setMobileMenu(false)}
                    className={`block px-6 py-3 transition ${
                      isActive
                        ? "text-[#D9A441] bg-white/10"
                        : "hover:bg-white/10 hover:text-[#D9A441]"
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}