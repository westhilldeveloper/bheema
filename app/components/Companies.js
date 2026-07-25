"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Companies() {
  const router = useRouter();
  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const companiess = [
    {
      title: "BHEEMA TOLLING & TRAFFIC",
      image: "/images/cmpn_3.png",
      logo: "/images/asset/logos/trolling.png",
      description:
        "Bheema Tolling & Traffic Solution Pvt. Ltd. (BTTS) is a leading provider of integrated toll management, traffic control, security, and operational support services for highway and infrastructure projects across India. With over a decade of industry experience, BTTS has evolved from a toll operations company into a comprehensive solutions provider delivering toll management, lane operations, traffic control, security services, housekeeping, ambulance services, crane operations, and incident management support. ",
      url: "#",
      knowMore: "/Tolling",
    },
    {
      title: "BHIM SECURITY PVT. LTD.",
      image: "/images/cmpn_2.png",
      logo: "/images/asset/logos/Bhim.png",
      description:
        "Bhim Secure Solutions is a trusted workforce and facility management company committed to delivering dependable manpower and support services to businesses across diverse industries. Since its establishment in 2009, the company has built a reputation for professionalism, reliability, and service excellence by helping organizations streamline their day-to-day operations through customized workforce solutions.",
      url: "https://www.bhimsecuresolutions.com/",
    },
    {
      title: "SHAGUN FARM",
      image: "/images/cmpn_1.png",
      logo: "/images/asset/logos/Shagun_farm.png",
      description:
        "Shagun Farm is a premium event and hospitality destination designed to host unforgettable weddings, social celebrations, corporate events, and special occasions. Combining elegant venues, modern amenities, beautifully landscaped spaces, and exceptional hospitality, Shagun Farm provides the perfect setting for memorable experiences tailored to every celebration.",
      url: "#",
    },
    {
      title: "BS CAFÉ",
      image: "/images/cmpn_4.png",
      logo: "/images/asset/logos/bs_cafe.png",
      description:
        "BS Café is a modern café and dining destination committed to serving high-quality food, refreshing beverages, and an exceptional customer experience. With a thoughtfully curated menu, inviting ambiance, and focus on freshness, the café creates the perfect space for casual dining, business meetings, family gatherings, and everyday moments. ",
      url: "#",
    },
  ];

  const truncateText = (text, maxLength = 500) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + "…";
  };

  const handleVisit = (url) => {
    if (url.startsWith("http") || url.startsWith("//")) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      router.push(url);
    }
  };

  const hasValidUrl = (url) => {
    return url && url !== "#" && url !== "javascript:void(0)" && url.trim() !== "";
  };

  // Scroll handling
  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth = container.querySelector(":first-child")?.offsetWidth || 300;
    const gap = 16;
    const scrollAmount = direction === "left" ? -(cardWidth + gap) : cardWidth + gap;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const updateButtons = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const { scrollLeft, scrollWidth, clientWidth } = container;
    setShowLeft(scrollLeft > 20);
    setShowRight(scrollLeft < scrollWidth - clientWidth - 20);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const timer = setTimeout(updateButtons, 100);
    container.addEventListener("scroll", updateButtons);
    window.addEventListener("resize", updateButtons);
    return () => {
      clearTimeout(timer);
      container.removeEventListener("scroll", updateButtons);
      window.removeEventListener("resize", updateButtons);
    };
  }, []);

  return (
    <section id="companies" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-10 md:mb-14">
          <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-2">
            <div className="w-6 sm:w-8 md:w-12 h-[2px] bg-[#D9A441]" />
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A2342]">
              OUR GROUP COMPANIES
            </h2>
            <div className="w-6 sm:w-8 md:w-12 h-[2px] bg-[#D9A441]" />
          </div>
          <p className="text-gray-500 text-xs sm:text-sm">
            Strong businesses. One trusted name.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {showLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-[#0A2342] rounded-full p-2 shadow-lg backdrop-blur-sm transition border border-gray-200 ml-1"
              aria-label="Scroll left"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}

          {showRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-[#0A2342] rounded-full p-2 shadow-lg backdrop-blur-sm transition border border-gray-200 mr-1"
              aria-label="Scroll right"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}

          <div
            ref={scrollRef}
            className="flex flex-nowrap gap-4 overflow-x-auto scroll-smooth pb-4 pt-2 px-1 [&::-webkit-scrollbar]:hidden"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {companiess.map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[340px] lg:w-[360px]"
              >
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                  {/* Image */}
                  <div className="w-full h-48 sm:h-56 overflow-hidden flex-shrink-0">
                    <Image
                      src={company.image}
                      alt={company.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-1">
                    <div className="h-16 sm:h-14 md:h-16 flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
                      <Image
                        src={company.logo}
                        alt={company.title}
                        width={161}
                        height={126}
                        className="w-auto h-full max-h-12 sm:max-h-14 md:max-h-16 object-contain"
                      />
                    </div>

                    <p className="text-gray-500 text-xs sm:text-sm md:text-[14px] leading-5 sm:leading-6 flex-1 min-h-[60px] sm:min-h-[70px] md:min-h-[90px]">
                      {truncateText(company.description, 550)}
                    </p>

                    {/* Button logic */}
                    {hasValidUrl(company.url) ? (
                      <button
                        onClick={() => handleVisit(company.url)}
                        className="mt-3 sm:mt-4 md:mt-6 inline-flex items-center justify-center gap-2 w-full border border-[#0A2342] text-[#0A2342] rounded-full py-2.5 sm:py-3 text-xs sm:text-sm font-medium hover:bg-[#0A2342] hover:text-white transition cursor-pointer"
                      >
                        Visit Website
                        <span>→</span>
                      </button>
                    ) : company.knowMore ? (
                      <button
                        onClick={() => window.open(company.knowMore, "_blank")}
                        className="mt-3 sm:mt-4 md:mt-6 inline-flex items-center justify-center gap-2 w-full border border-[#0A2342] text-[#0A2342] rounded-full py-2.5 sm:py-3 text-xs sm:text-sm font-medium hover:bg-[#0A2342] hover:text-white transition cursor-pointer"
                      >
                        Know More
                        <span>→</span>
                      </button>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}