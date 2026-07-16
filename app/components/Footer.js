import {
  Phone,
  Mail,
  Globe,
  MapPin,
} from "lucide-react";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer
        className="relative text-white"
        style={{
          backgroundImage: "url('/images/hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#08264A]/90"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-8 md:py-12 lg:py-16">
          {/* Main Footer */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 items-center">

            {/* Left - Company Name */}
            <div className="text-center md:text-left order-1">
              <h2 className="text-2xl sm:text-3xl md:text-[28px] lg:text-[32px] font-bold mb-2 md:mb-4">
                BHEEMA GROUP
              </h2>
              <p className="text-[#D9A441] text-sm sm:text-base md:text-lg">
                Excellence · Integrity · Growth
              </p>
            </div>

            {/* Center - Contact Us */}
            <div className="text-center md:text-left order-3 md:order-2 lg:pl-8 xl:pl-12">
              <h3 className="text-[#D9A441] text-lg sm:text-xl md:text-[20px] font-bold uppercase mb-4 md:mb-6">
                Contact Us
              </h3>

              <div className="space-y-3 md:space-y-4 text-[13px] sm:text-[14px]">

                <div className="flex items-center justify-center md:justify-start gap-3">
                  <Phone size={18} className="text-[#D9A441] flex-shrink-0" />
                  <span>+91 12345 67890</span>
                </div>

                <div className="flex items-center justify-center md:justify-start gap-3">
                  <Mail size={18} className="text-[#D9A441] flex-shrink-0" />
                  <span>info@bheemagroup.com</span>
                </div>

                <div className="flex items-center justify-center md:justify-start gap-3">
                  <Globe size={18} className="text-[#D9A441] flex-shrink-0" />
                  <span>www.bheemagroup.com</span>
                </div>

                <div className="flex items-center justify-center md:justify-start gap-3">
                  <MapPin size={18} className="text-[#D9A441] flex-shrink-0" />
                  <span>India</span>
                </div>

              </div>
            </div>

            {/* Right - Logo */}
            <div className="flex justify-center md:justify-end order-2 md:order-3">
              <img
                src="/images/Bheema_logo.png"
                alt="Bheema Group"
                className="w-28 sm:w-32 md:w-40 lg:w-48 xl:w-56 object-contain"
              />
            </div>

          </div>
        </div>
      </footer>

      {/* Bottom Bar */}
      <div className="bg-[#2C3F5B] px-4 sm:px-6 md:px-8 pt-3 pb-2 border-t border-white/20 text-white flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
        <p className="text-[11px] sm:text-xs md:text-sm text-center">
          © {currentYear} BHEEMA GROUP. All Rights Reserved.
        </p>

        <div className="flex items-center gap-4 md:gap-5 text-base sm:text-lg">
          <FaFacebookF className="cursor-pointer hover:text-[#D9A441] transition-colors" />
          <FaLinkedinIn className="cursor-pointer hover:text-[#D9A441] transition-colors" />
          <FaInstagram className="cursor-pointer hover:text-[#D9A441] transition-colors" />
          <FaYoutube className="cursor-pointer hover:text-[#D9A441] transition-colors" />
        </div>
      </div>

      {/* Terms & Privacy */}
      <div className="bg-[#2C3F5B] px-4 sm:px-6 md:px-8 py-2 text-[11px] sm:text-xs text-yellow-600 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3 sm:gap-6 md:gap-8">
        <Link href="/terms" className="hover:text-yellow-400 transition-colors">
          Terms & Conditions
        </Link>
        <Link href="/privacy" className="hover:text-yellow-400 transition-colors">
          Privacy Policy
        </Link>
      </div>
    </>
  );
}