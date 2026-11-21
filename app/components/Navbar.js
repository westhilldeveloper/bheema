
"use client";

import { useState, useEffect } from "react";
import { Home, Building2, Users, Info, Briefcase, Phone } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "HOME", link: "#home", icon: Home },
    { name: "OUR COMPANIES", link: "#companies", icon: Building2 },
    { name: "WHY US", link: "#whyus", icon: Users },
    { name: "ABOUT US", link: "#about", icon: Info },
    { name: "INDUSTRIES", link: "#industries", icon: Briefcase },
    { name: "CONTACT US", link: "#contact", icon: Phone },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    if (!sections.length) return;

    const navbar = document.querySelector("header");
    const navbarHeight = navbar?.offsetHeight || 0;

    const handleScroll = () => {
      let currentSection = "";
      const scrollPosition = window.scrollY + navbarHeight + 50;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionBottom
        ) {
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

  return (
    <>
      {/* Desktop Header */}
      <header className="sticky top-0 z-50 bg-[#0A2342] text-white shadow-md">
        <div className="max-w-8xl mx-auto px-6 h-20 flex items-center justify-between">
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

          <nav className="hidden md:block">
            <ul className="flex items-center gap-8 text-[13px] font-medium">
              {navItems.map((item) => {
                const isActive = activeSection === item.link.slice(1);

                return (
                  <li key={item.name}>
                    <a
                      href={item.link}
                      className={`transition-colors duration-300 ${
                        isActive
                          ? "text-[#D9A441]"
                          : "hover:text-[#D9A441]"
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

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0A2342] border-t border-white/10 shadow-lg">
        <ul className="flex items-center justify-around h-16 px-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.link.slice(1);
            const Icon = item.icon;

            return (
              <li key={item.name} className="flex-1">
                <a
                  href={item.link}
                  className={`flex flex-col items-center justify-center gap-0.5 py-1 transition-colors ${
                    isActive
                      ? "text-[#D9A441]"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  <Icon size={22} className="shrink-0" />

                  <span className="text-[10px] font-medium leading-tight">
                    {item.name === "OUR COMPANIES"
                      ? "Companies"
                      : item.name === "CONTACT US"
                      ? "Contact"
                      : item.name}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
