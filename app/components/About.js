import Image from "next/image";

export default function About() {
  const missionPoints = [
    "Our mission is to provide reliable, innovative, and value-driven solutions through our diverse portfolio of businesses. We are committed to delivering exceptional service in toll management, traffic operations, security services, workforce solutions, facility management, healthcare support, and other sectors by leveraging skilled professionals, efficient processes, and a customer-centric approach.",
    "We strive to build lasting relationships based on trust, transparency, and performance while continuously improving our services, empowering our workforce, and contributing positively to the growth and success of our clients and the communities we serve.",
    
  ];

  return (
    <section id="about" className="bg-[#f5f5f5] py-12 sm:py-16 md:py-20">
      <div className="max-w-8xl mx-auto px-4 sm:px-6">
        {/* About Heading */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-5 mb-3 sm:mb-4">
            <div className="w-6 sm:w-8 md:w-12 h-[1px] bg-[#D9A441]" />
            <h2 className="text-[#08264A] text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold uppercase">
              ABOUT US
            </h2>
            <div className="w-6 sm:w-8 md:w-12 h-[1px] bg-[#D9A441]" />
          </div>

          <p className="max-w-8xl mx-auto text-xs sm:text-sm md:text-[14px] leading-5 sm:leading-6 text-gray-500 px-2">
           Bheema Group is a diversified business conglomerate built on a foundation of trust, commitment, and operational excellence. Over the years, we have established a strong presence across multiple industries, delivering specialized solutions in toll management, traffic operations, security services, facility management, manpower solutions, healthcare support services, hospitality, and infrastructure-related operations. Our businesses are driven by a common vision—to provide reliable, innovative, and value-driven services that contribute to the growth and success of our clients while creating meaningful opportunities for communities and professionals alike.
          </p>
          <p className="max-w-8xl mx-auto text-xs sm:text-sm md:text-[14px] mt-4 leading-5 sm:leading-6 text-gray-500 px-2">
            With a legacy spanning more than a decade, Bheema Group has earned the confidence of government organizations, infrastructure developers, corporate enterprises, and private institutions through consistent performance and unwavering dedication. Through our group companies, including Bheema Tolling & Traffic Solution Pvt. Ltd. (BTTS) and Bhim Secure Solutions, we continue to deliver comprehensive operational support, workforce management, security, traffic control, housekeeping, healthcare assistance, and other essential services. Our commitment to integrity, customer satisfaction, and long-term partnerships has enabled us to build a reputation as a trusted business partner capable of meeting complex challenges with professionalism, efficiency, and excellence.
          </p>
        </div>

        {/* Vision Mission */}
        <div className="grid lg:grid-cols-2 gap-10 md:gap-10 lg:gap-20 mt-8 sm:mt-10 md:mt-14">
          {/* Vision */}
          <div>
            <h3 className="text-[#08264A] text-xl sm:text-2xl md:text-[28px] font-bold uppercase mb-4 pl-4 sm:mb-6 md:mb-8 text-center lg:text-left">
              OUR VISION
            </h3>

            <div className="flex flex-col sm:flex-row items-center pl-4 sm:items-start gap-3 sm:gap-5">
              <div className="text-[#D9A441] text-7xl font-bold leading-none flex-shrink-0">
                <Image
                  src="/images/qt.png"
                  alt="Quote"
                  width={48}
                  height={48}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
              </div>

              <p className="text-[#1D1D1F] md:mt-4 mt-0 text-center sm:text-left text-base sm:text-lg md:text-[20px] font-medium leading-7 sm:leading-8 max-w-xl">
               To be a trusted and diversified business group recognized for excellence, innovation, and integrity, delivering sustainable growth across industries while creating long-term value for our clients, partners, employees, and communities. We aspire to build businesses that set benchmarks in operational excellence, customer satisfaction, and social responsibility, becoming a preferred partner for organizations across India and beyond.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div>
            <h3 className="text-[#1D1D1F]   text-xl sm:text-2xl md:text-[28px] font-bold uppercase mb-4 sm:mb-6 md:mb-8 text-center lg:text-left">
              OUR MISSION
            </h3>

            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {missionPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 sm:gap-4"
                >
                  <div className="w-5 h-5 rounded-full bg-[#D9A441] flex items-center justify-center mt-0.5 sm:mt-1 flex-shrink-0">
                    <span className="text-white text-[10px] font-bold">✓</span>
                  </div>

                  <p className="text-gray-700 text-sm sm:text-base md:text-[16px] leading-5 sm:leading-6">
                    {point}
                  </p>
                </div>
              ))}

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}