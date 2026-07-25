"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "ABOUT US", link: "#about" },
    { name: "LEADERSHIP", link: "#leadership" },
    { name: "OUR ACHIEVEMENTS", link: "#achievements" },
    { name: "OUR SERVICES", link: "#services" },
    { name: "PROJECTS", link: "#projects" },
    { name: "CLIENTS", link: "#clients" },
    { name: "GALLERY", link: "#gallery" },
  ];

  useEffect(() => {
  const sections = document.querySelectorAll("section[id]");
  if (sections.length === 0) return;

  const navbar = document.querySelector("header");
  const navbarHeight = navbar?.offsetHeight || 0;

  const handleScroll = () => {
    let currentSection = "";
    const scrollPosition = window.scrollY + navbarHeight + 50; // 50px offset

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
  handleScroll(); // initial check

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <header className="sticky top-0 z-50 bg-[#0A2342] text-white shadow-md">
      <div className="max-w-8xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex bg-white p-1 items-center rounded-sm border-2 border-blue-900">
          <Image
            src="/images/asset/logos/trolling.png"
            alt="Bheema Group Logo"
            width={90}
            height={80}
            className="h-16 w-auto"
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