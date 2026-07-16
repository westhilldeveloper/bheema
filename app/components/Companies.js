import Image from "next/image";

export default function Companies() {
  const companies = [
    {
      title: "SHAGUN FARM",
      image: "/images/cmpn_1.png",
      logo: "/images/log_1.png",
      description:
        "Shagun Farm is a premium event and hospitality destination designed to host unforgettable weddings, social celebrations, corporate events, and special occasions. ",
      url: "#",
    },
    {
      title: "BHIM SECURITY PVT. LTD.",
      image: "/images/cmpn_2.png",
      logo: "/images/log_2.png",
      description:
        "Bhim Secure Solutions is a trusted workforce and facility management company committed to delivering dependable manpower and support services to businesses across diverse industries.",
      url: "#",
    },
    {
      title: "BHEEMA TOLLING & TRAFFIC",
      image: "/images/cmpn_3.png",
      logo: "/images/log_3.png",
      description:
        "Bheema Tolling & Traffic Solution Pvt. Ltd. (BTTS) is a leading provider of integrated toll management, traffic control, security, and operational support services for highway and infrastructure projects across India. ",
      url: "#",
    },
    {
      title: "BS CAFÉ",
      image: "/images/cmpn_4.png",
      logo: "/images/log_4.png",
      description:
        "BS Café is a modern café and dining destination committed to serving high-quality food, refreshing beverages, and an exceptional customer experience. ",
      url: "#",
    },
  ];

  // Helper to truncate text to 300 characters
  const truncateText = (text, maxLength = 300) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + "…";
  };

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

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {companies.map((company, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="w-full h-48 sm:h-56 md:h-48 lg:h-52 overflow-hidden flex-shrink-0">
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
                {/* Logo */}
                <div className="h-16 sm:h-14 md:h-16 flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
                  <Image
                    src={company.logo}
                    alt={company.title}
                    width={161}
                    height={126}
                    className="w-auto h-full max-h-12 sm:max-h-14 md:max-h-16 object-contain"
                  />
                </div>

                {/* Description – truncated to 300 chars */}
                <p className="text-gray-500 text-xs sm:text-sm md:text-[14px] leading-5 sm:leading-6 flex-1 min-h-[60px] sm:min-h-[70px] md:min-h-[90px]">
                  {truncateText(company.description, 300)}
                </p>

                {/* Button */}
                <a
                  href={company.url}
                  className="mt-3 sm:mt-4 md:mt-6 inline-flex items-center justify-center gap-2 w-full border border-[#0A2342] text-[#0A2342] rounded-full py-2.5 sm:py-3 text-xs sm:text-sm font-medium hover:bg-[#0A2342] hover:text-white transition"
                >
                  Visit Website
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}