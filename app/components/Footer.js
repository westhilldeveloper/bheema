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

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
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

  <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">

    {/* Main Footer */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 items-center">

      {/* Left */}
      <div className="text-center xl:text-left">
        <h2 className="text-3xl md:text-[32px] xl:text-[32px] font-bold mb-4">
          BHEEMA GROUP
        </h2>

        <p className="text-[#D9A441] text-base md:text-lg">
          Excellence · Integrity · Growth
        </p>
      </div>

      {/* Contact */}
      <div className="text-center md:pl-20 pl-0 xl:text-left">
        <h3 className="text-[#D9A441] text-xl md:text-[20px] font-bold uppercase mb-6">
          Contact Us
        </h3>

        <div className="space-y-4 text-[14px]">

          <div className="flex items-center justify-center xl:justify-start gap-3">
            <Phone
              size={18}
              className="text-[#D9A441]"
            />
            <span>+91 12345 67890</span>
          </div>

          <div className="flex items-center justify-center xl:justify-start gap-3">
            <Mail
              size={18}
              className="text-[#D9A441]"
            />
            <span>info@bheemagroup.com</span>
          </div>

          <div className="flex items-center justify-center xl:justify-start gap-3">
            <Globe
              size={18}
              className="text-[#D9A441]"
            />
            <span>www.bheemagroup.com</span>
          </div>

          <div className="flex items-center justify-center xl:justify-start gap-3">
            <MapPin
              size={18}
              className="text-[#D9A441]"
            />
            <span>India</span>
          </div>

        </div>
      </div>

      {/* Logo */}
      <div className="flex justify-center xl:justify-end">
        <img
          src="/images/Bheema_logo.png"
          alt="Bheema Group"
          className="w-40 md:w-62 xl:w-74 object-contain"
        />
      </div>

    </div>
</div>
    {/* Bottom */}
    <div className="mt-12 bg-[#2C3F5B] py-4 border-t border-white flex flex-col md:flex-row items-center justify-between gap-0">

      <p className="text-xs md:text-sm  text-center">
         © {currentYear} BHEEMA GROUP. All Rights Reserved.
      </p>

      <div className="flex text-white items-center gap-5 text-lg">
        <FaFacebookF className="cursor-pointer hover:text-[#D9A441] transition" />
        <FaLinkedinIn className="cursor-pointer hover:text-[#D9A441] transition" />
        <FaInstagram className="cursor-pointer hover:text-[#D9A441] transition" />
        <FaYoutube className="cursor-pointer hover:text-[#D9A441] transition" />
      </div>

    </div>

  
</footer>
  );
}