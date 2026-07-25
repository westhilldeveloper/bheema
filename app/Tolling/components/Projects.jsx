"use client";

import { useEffect, useRef, useState } from "react";

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);

  const slides = [
    {
      title: "Current Projects",
      description:
        "We are currently managing 11 active highway infrastructure projects across India, providing integrated Toll Operations, Traffic Control, Housekeeping, Security, and Highway Operations & Maintenance services.",
      type: "table",
      data: [
        ["Samakhiali Toll Plaza", "L&T IDPL (SGTL)", "Gujarat"],
        ["Shree Jagannath Expressways", "Maple Highways", "Odisha"],
        [
          "Eastern Peripheral Expressway (11 Toll Plazas)",
          "Maple Highways",
          "Haryana & Uttar Pradesh",
        ],
        ["Rewa–Katni–Jabalpur–Lakhnadon", "NHIT", "Madhya Pradesh"],
        ["Bilaspur–Raigarh Corridor", "NHIT", "Chhattisgarh"],
        ["Raipur–Simga (NH-30)", "NHIT", "Chhattisgarh"],
        ["Simga–Bilaspur Section", "NHIT", "Chhattisgarh"],
        ["Ashoka Sambalpur–Bargarh Tollways", "Maple Highways", "Odisha"],
        ["Ashoka Highways Bhandara", "Maple Highways", "Maharashtra"],
        ["Ashoka Highways Durg", "Maple Highways", "Chhattisgarh"],
        ["Baran–Jhalawar Mega Highway", "RIDCOR", "Rajasthan"],
      ],
    },
    {
      title: "Successfully Delivered Projects",
      description:
        "Over the years, BTTS has successfully completed numerous highway infrastructure projects for leading organizations.",
      type: "list",
      data: [
        "Shahjahanpur Toll Plaza, Rajasthan",
        "Manoharpur Toll Plaza, Rajasthan",
        "Bhigan Toll Plaza, Haryana",
        "Bharthana Toll Plaza, Gujarat",
        "Panihar & Mudhkheda Toll Plaza, Madhya Pradesh",
        "Ramnagar Toll Plaza, Madhya Pradesh",
        "Para Toll Plaza, Rajasthan",
        "Majhgawa Toll Plaza, Madhya Pradesh",
        "Chhara Toll Plaza, Haryana",
        "Titoli & Rabawata Toll Plaza, Rajasthan",
      ],
    },
    {
      title: "Specialized Infrastructure Projects",
      description:
        "Beyond toll operations, BTTS has successfully delivered specialized infrastructure maintenance and incident management projects.",
      type: "special",
      maintenance: [
        "Median & Avenue Plantation Maintenance",
        "Routine Highway Maintenance",
        "Landscaping & Green Belt Development",
        "Pavement Maintenance",
        "Road Asset Maintenance",
      ],
      maintenanceProjects: [
        "Bilaspur–Pathrapali Road Project (NH-111 Bharatmala) – Adani",
        "Kundli–Manesar Expressway – Essel Infra",
        "Gurgaon–Jaipur Expressway (NH-8) – KMC/ETA",
      ],
      incidents: [
        "Kundli–Manesar Expressway – Essel Infra",
        "Four-Laning of Chikhali–Tarsod Section (NH-6) – Welspun",
      ],
    },
  ];

  // Scroll to the current slide whenever currentSlide changes
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const slideWidth = container.children[0]?.offsetWidth || 0;
      container.scrollTo({
        left: currentSlide * slideWidth,
        behavior: "smooth",
      });
    }
  }, [currentSlide]);

  const goToPrev = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
  };

  const goToNext = () => {
    if (currentSlide < slides.length - 1) setCurrentSlide(currentSlide + 1);
  };

  return (
    <section id="projects" className="bg-[#08264A] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex items-center justify-center gap-4 mb-3">
          <div className="w-12 h-[1px] bg-[#D9A441]" />
          <h2 className="text-white text-3xl md:text-4xl font-bold uppercase">
            Projects
          </h2>
          <div className="w-12 h-[1px] bg-[#D9A441]" />
        </div>

        <p className="text-center text-[#D9A441] text-sm font-semibold">
          Proven Experience Across India's Highway Infrastructure
        </p>

        <p className="max-w-6xl mx-auto mt-3 text-center text-white text-xs md:text-sm leading-relaxed">
          For nearly 16 years, Bheema Tolling & Traffic Solution Pvt. Ltd.
          (BTTS) has successfully executed and managed highway infrastructure
          projects across India. Our expertise spans Toll Operations, Traffic
          Management, Highway Operations & Maintenance, Security Services,
          Housekeeping, Incident Management, and Road Maintenance.
        </p>

        {/* Slider with navigation buttons */}
        <div className="relative mt-10">
          {/* Left Arrow */}
          <button
            onClick={goToPrev}
            disabled={currentSlide === 0}
            className={`absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-[#08264A] rounded-full p-3 md:p-2 shadow-lg backdrop-blur-sm transition border border-gray-200 ${
              currentSlide === 0
                ? "opacity-30 cursor-not-allowed"
                : "opacity-100"
            }`}
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 md:h-6 md:w-6"
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

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            disabled={currentSlide === slides.length - 1}
            className={`absolute right-1 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-[#08264A] rounded-full p-3 md:p-2 shadow-lg backdrop-blur-sm transition border border-gray-200 ${
              currentSlide === slides.length - 1
                ? "opacity-30 cursor-not-allowed"
                : "opacity-100"
            }`}
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 md:h-6 md:w-6"
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

          {/* Slides container */}
          <div
            ref={containerRef}
            className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full shrink-0 snap-start">
                <div className="bg-[#F3F3F3] rounded-2xl p-2 md:p-10 mx-auto max-w-6xl h-[500px] md:h-[550px] flex flex-col">
                  {/* Fixed header */}
                  <div className="flex-shrink-0">
                    <h3 className="text-center text-2xl md:text-[28px] font-medium text-[#222]">
                      {slide.title}
                    </h3>
                    <p className="text-center text-gray-600 mt-3 mb-4 md:mb-6 text-[14px] md:text-base">
                      {slide.description}
                    </p>
                  </div>

                  {/* Scrollable content */}
                  <div
                    className="flex-1 overflow-y-auto pr-2 -mr-2 [&::-webkit-scrollbar]:hidden"
                    style={{
                      scrollbarWidth: "none",
                      msOverflowStyle: "none",
                    }}
                  >
                    {/* Table */}
                    {slide.type === "table" && (
                      <div className="overflow-x-auto">
                        <table className="w-full md:w-3/4 mx-auto bg-white border border-gray-200 text-sm md:text-base">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="p-3 text-left">Project</th>
                              <th className="p-3 text-left">Client</th>
                              <th className="p-3 text-left">Location</th>
                            </tr>
                          </thead>
                          <tbody>
                            {slide.data.map((row, i) => (
                              <tr key={i} className="border-t border-gray-200">
                                <td className="p-3">{row[0]}</td>
                                <td className="p-3">{row[1]}</td>
                                <td className="p-3">{row[2]}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {/* List */}
                    {slide.type === "list" && (
                      <ul className="space-y-3 text-sm md:text-base">
                        {slide.data.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[#08264A] font-bold">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Special */}
                    {slide.type === "special" && (
                      <div className="grid md:grid-cols-2 gap-8 md:gap-10 text-sm md:text-base">
                        <div>
                          <h4 className="font-bold text-xl mb-4">
                            Highway Maintenance
                          </h4>
                          <ul className="space-y-2">
                            {slide.maintenance.map((item, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-[#08264A] font-bold">
                                  •
                                </span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                          <h5 className="font-semibold mt-6 mb-3">
                            Key Projects
                          </h5>
                          <ul className="space-y-2">
                            {slide.maintenanceProjects.map((item, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-[#08264A] font-bold">
                                  •
                                </span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold text-xl mb-4">
                            Incident Management Services
                          </h4>
                          <ul className="space-y-2">
                            {slide.incidents.map((item, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-[#08264A] font-bold">
                                  •
                                </span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                          <p className="mt-6 text-gray-600">
                            Our services included Ambulance Operations, Road
                            Patrol Vehicles (RPVs), Recovery Vehicles, Tow
                            Cranes, Hydra Services, Emergency Response, and
                            Traffic Incident Management.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index
                  ? "bg-[#A5743B] scale-110"
                  : "bg-[#F5E6D2]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}