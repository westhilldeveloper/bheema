"use client";

import { useRef, useState } from "react";
import ReactCountryFlag from "react-country-flag";

export default function Contact() {
  const captchaRef = useRef(null);
  const [captchaChecked, setCaptchaChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    email: "",
    countryCode: "+91",
    phone: "",
  });

  const countryMap = {
    "+91": "IN",
    "+1": "US",
    "+44": "GB",
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaChecked) {
      alert("Please confirm you are not a robot");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        alert("Message sent successfully");
        setForm({
          firstName: "",
          email: "",
          countryCode: "+91",
          phone: "",
        });
        setCaptchaChecked(false);
        captchaRef.current?.reset();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-[#f5f5f5] py-12 md:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-start lg:items-center">
        {/* Left – Improved responsiveness */}
        <div className="text-center lg:text-left">
          <h2 className="text-[#08264A] text-2xl sm:text-3xl md:text-4xl font-bold mb-4 break-words">
            CONTACT US
          </h2>

          <div className="space-y-4">
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed break-words">
              Whether you're looking for reliable workforce solutions, security
              services, toll management expertise, facility management support,
              or strategic business partnerships, the Bheema Group team is here
              to assist you. We are committed to understanding your requirements
              and delivering customized solutions that help your organization
              operate efficiently and achieve its goals.
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed break-words">
              Get in touch with us to learn more about our group companies,
              services, and business opportunities. Our team will be happy to
              answer your questions, discuss your requirements, and provide the
              support you need. We look forward to building a successful and
              long-lasting partnership with you.
            </p>
          </div>
        </div>

        {/* Right – Form Card */}
        <div className="bg-[#F4F6F8] rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 shadow-sm w-full">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            {/* First Name */}
            <input
              type="text"
              name="firstName"
              placeholder="First Name *"
              value={form.firstName}
              onChange={handleChange}
              className="w-full h-12 sm:h-14 px-4 rounded-lg bg-white border border-slate-400 outline-none focus:border-[#2C3F5B] transition"
              required
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email *"
              value={form.email}
              onChange={handleChange}
              className="w-full h-12 sm:h-14 px-4 rounded-lg bg-white border border-slate-400 outline-none focus:border-[#2D446A] transition"
              required
            />

            {/* Phone with Country Code */}
            <div className="flex overflow-hidden rounded-lg border border-slate-400 bg-white focus-within:border-[#2D446A]">
              <div className="flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-3 border-r border-slate-300 flex-shrink-0">
                <ReactCountryFlag
                  countryCode={countryMap[form.countryCode] || "IN"}
                  svg
                  style={{
                    width: "20px",
                    height: "16px",
                  }}
                  className="sm:w-[22px] sm:h-[18px]"
                />
                <select
                  name="countryCode"
                  value={form.countryCode}
                  onChange={handleChange}
                  className="bg-transparent text-xs sm:text-sm outline-none cursor-pointer py-2"
                >
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                </select>
              </div>

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                value={form.phone}
                onChange={handleChange}
                className="w-full h-12 sm:h-14 px-3 sm:px-4 outline-none bg-white text-sm sm:text-base"
                required
              />
            </div>

            {/* reCAPTCHA Mock – improved layout */}
            <div className="border border-gray-300 bg-white p-3 sm:p-4 rounded-md flex flex-col sm:flex-row items-center justify-between gap-3 w-full">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={captchaChecked}
                  onChange={(e) => setCaptchaChecked(e.target.checked)}
                  className="w-5 h-5 accent-[#2D446A]"
                />
                <span className="text-sm text-gray-700">I'm not a robot</span>
              </label>

              <div className="flex items-center gap-2">
                <img
                  src="/images/captcha.png"
                  alt="reCAPTCHA"
                  className="h-5 w-auto"
                />
                <div className="flex flex-col">
                  <span className="text-xs font-regular text-gray-400">
                    reCAPTCHA
                  </span>
                  <span className="text-[8px] text-gray-400">
                    Privacy - Terms
                  </span>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!captchaChecked || loading}
              className="w-full bg-[#2D446A] text-white h-12 sm:h-14 md:h-16 rounded-full font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#1f3352] transition"
            >
              {loading ? "Submitting..." : "SUBMIT"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}