"use client";

import { useEffect, useRef, useState } from "react";
import { CheckSquare } from "lucide-react";

export default function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);

 const servicesData = [
  // 1. Toll Operations & Revenue Assurance
  {
    title: "Toll Operations & Revenue Assurance",
    image: "/images/dummy.png",
    description:
      "We provide end-to-end toll plaza management focused on maximizing revenue, ensuring operational transparency, and maintaining seamless traffic flow. Our experienced professionals leverage industry best practices to improve toll collection efficiency while ensuring full compliance with concession agreements.",
    sections: [
      {
        heading: "Our Services Include",
        items: [
          "Complete Toll Plaza Operations",
          "FASTag Reconciliation & Resolution",
          "100% Revenue Reconciliation",
          "Revenue Leakage Identification & Prevention",
          "Monitoring of Forced Exemptions & Violations",
          "Traffic Flow Management",
          "Compliance with Concession Agreements",
          "Skilled & Trained Operational Workforce",
          "State & Central Labour Law Compliance",
        ],
      },
    ],
  },

  // 2. Incident Management Services
  {
    title: "Incident Management Services",
    image: "/images/dummy.png",
    description:
      "Our rapid response teams ensure highways remain safe, operational, and compliant with regulatory standards. We provide complete incident management solutions supported by trained emergency personnel and specialized equipment.",
    sections: [
      {
        heading: "Our Services Include",
        items: [
          "Ambulance & Road Patrol Vehicle (RPV) Deployment",
          "Certified Rescue Personnel & Paramedics",
          "Trained Emergency Response Drivers",
          "Tow Crane & Hydra Services",
          "Highway Incident Response",
          "Emergency Traffic Management",
          "Periodic Staff Training & Certification",
          "Compliance with Gazette Notification 2018 & Client Requirements",
        ],
      },
    ],
  },

  // 3. Highway Operations & Road Maintenance
  {
    title: "Highway Operations & Road Maintenance",
    image: "/images/dummy.png",
    description:
      "We deliver comprehensive highway maintenance services that preserve road infrastructure, improve safety, and ensure uninterrupted operations throughout the project lifecycle.",
    sections: [
      {
        heading: "Our Services Include",
        items: [
          "Toll Plaza & Project Facility Maintenance",
          "Road, Structure & Right of Way (RoW) Cleaning",
          "Waterway & Drain Maintenance",
          "Median & Avenue Plantation Maintenance",
          "Landscaping & Greenbelt Maintenance",
          "Earthen Shoulder & Rain Cut Repairs",
          "Pavement Cleaning & Debris Removal",
          "Pothole Repairs & Crack Sealing",
          "Asphalt Surface Treatment",
          "Accident Damage Restoration",
          "Flexible & Rigid Pavement Maintenance",
          "Road Sign & Road Marking Maintenance",
          "Guard Rail & Road Furniture Repairs",
          "Culvert, Drain & Channel Maintenance",
        ],
      },
    ],
  },

  // 4. Manpower Provisioning
  {
    title: "Manpower Provisioning",
    image: "/images/dummy.png",
    description:
      "We provide skilled, semi-skilled, and specialized manpower solutions tailored to the operational needs of infrastructure, highway, industrial, and corporate projects. Our recruitment process ensures the right talent is deployed quickly while maintaining quality, compliance, and operational efficiency.",
    sections: [
      {
        heading: "Our Strengths",
        items: [
          "Skilled & Experienced Workforce",
          "Temporary & Permanent Staffing",
          "Fast Recruitment & Deployment",
          "Industry-Specific Talent Pool",
          "Quality Assurance",
          "Labour Law Compliance",
          "Customized Staffing Solutions",
          "Client-Centric Service Delivery",
          "Continuous Workforce Development",
        ],
      },
    ],
  },

  // 5. Road Safety Management
  {
    title: "Road Safety Management",
    image: "/images/dummy.png",
    description:
      "Safety is an integral part of every project we undertake. We are committed to protecting both our workforce and road users by implementing industry-leading safety practices, preventive maintenance, and continuous monitoring.",
    sections: [
      {
        heading: "Manpower Safety",
        items: [
          "Mandatory PPE Compliance",
          "Trained Site Supervisors",
          "Daily Work Planning & Monitoring",
          "Zero Accident & Zero Incident Focus",
          "Near-Miss Reporting & Analysis",
          "Continuous Safety Training Programs",
        ],
      },
      {
        heading: "Road User Safety",
        items: [
          "Pavement Overlay & Road Marking Renewal",
          "Crash Barrier & Guard Rail Installation and Repair",
          "Road Signage & Cat's Eye Installation",
          "Rumble Strips & Blinkers at Critical Locations",
          "Access Control & Traffic Safety Management",
          "Highway Safety Infrastructure Maintenance",
        ],
      },
    ],
  },
];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === servicesData.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [servicesData.length]);

  useEffect(() => {
    if (containerRef.current) {
      const cardWidth =
        containerRef.current.children[0]?.offsetWidth || 0;

      containerRef.current.scrollTo({
        left: currentSlide * (cardWidth + 24),
        behavior: "smooth",
      });
    }
  }, [currentSlide]);

  return (
   <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Heading */}
        
  <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-5 mb-3 sm:mb-4">
            <div className="w-6 sm:w-8 md:w-12 h-[1px] bg-[#D9A441]" />
            <h2 className="text-[#08264A] text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold uppercase">
              Our Services
            </h2>
            <div className="w-6 sm:w-8 md:w-12 h-[1px] bg-[#D9A441]" />
          </div>
        <p className="text-center text-sm md:text-base font-medium text-[#444]">
          Comprehensive Highway Operations & Infrastructure Solutions
        </p>

        <p className="max-w-5xl mx-auto text-center text-xs md:text-sm text-[#666] mt-2 leading-relaxed">
          At Bheema Tolling & Traffic Solution Pvt. Ltd. (BTTS), we deliver integrated highway operations, toll management, infrastructure maintenance, and manpower solutions designed to maximize operational efficiency, ensure regulatory compliance, and enhance revenue performance. Backed by nearly 16 years of industry expertise, our services support national highways, expressways, and large-scale infrastructure projects across India.
        </p>

        {/* Slider */}
        <div className="mt-10 overflow-hidden">
          <div
            ref={containerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="w-full md:w-[48%] shrink-0 snap-start"
              >
                <div className="bg-[#F9F2E9] rounded-2xl p-4 md:p-5 h-[600px] md:h-[640px] flex flex-col">
                  {/* Image – fixed height */}
                  <div className="overflow-hidden rounded-xl flex-shrink-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[180px] md:h-[200px] object-cover"
                    />
                  </div>

                  {/* Title – fixed */}
                  <h3 className="mt-3 text-xl md:text-[28px] font-bold text-[#222] flex-shrink-0">
                    {service.title}
                  </h3>

                  {/* Scrollable content area */}
                   <div
                    className="flex-1 overflow-y-auto mt-2 pr-1 [&::-webkit-scrollbar]:hidden"
                    style={{
                      scrollbarWidth: "none",
                      msOverflowStyle: "none",
                    }}
                  >
                    {/* Description */}
                    <p className="text-[14px] text-[#555] text-justify leading-6">
                      {service.description}
                    </p>

                    {/* Services sections – grid for multiple sections */}
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.sections.map((section, idx) => (
                        <div key={idx}>
                          <h4 className="font-bold text-[#222] mb-2 text-[18px]">
                            {section.heading}
                          </h4>
                          <ul className="space-y-1 text-sm text-[#333]">
                            {section.items.map((item, i) => (
                              <li key={i} className="flex gap-2">
                                <CheckSquare
                                  size={16}
                                  className="text-[#8B6335] mt-1 shrink-0"
                                />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {servicesData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 w-3 rounded-full transition-all ${
                currentSlide === index
                  ? "bg-[#8B6335]"
                  : "bg-[#E5D6C4]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}