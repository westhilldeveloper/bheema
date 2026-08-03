import Image from "next/image";

export default function Industries() {
  const industries = [
    { title: "Tolling & Traffic", icon: "/images/in_1.png" },
    { title: "Hospitality & Events", icon: "/images/in_2.png" },
    { title: "Food & Beverages", icon: "/images/asset/Food_Beverages-Png.png" },
    { title: "Retail Provision", icon: "/images/in_4.png" },
    { title: "Finance", icon: "/images/in_5.png" },
    { title: "Manufacturing", icon: "/images/asset/manufacturing_2-png.png" },
    { title: "Recruitment", icon: "/images/asset/recruitment_2-png.png" },
    { title: "Technology", icon: "/images/asset/technology_2-png.png" },
    { title: "Healthcare", icon: "/images/asset/healthcare_2-png.png" },
    { title: "Security", icon: "/images/asset/security_2-png.png" },
  ];

  return (
    <section id="industries" className="bg-[#08264A] py-12 md:py-16">
      <div className="max-w-8xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">
           <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-5 mb-3 sm:mb-4">
            <div className="w-6 sm:w-8 md:w-12 h-[1px] bg-[#D9A441]" />
            <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold uppercase">
              INDUSTRIES
            </h2>
            <div className="w-6 sm:w-8 md:w-12 h-[1px] bg-[#D9A441]" />
          </div>
          
          <p className="text-gray-300 text-sm sm:text-base max-w-7xl mx-auto px-2">
            At Bheema Group, we deliver specialized solutions across diverse industries, helping organizations operate efficiently, securely, and sustainably. Through our group companies and experienced workforce, we support both public and private sector clients with tailored services designed to meet industry-specific challenges and operational requirements.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-10 md:gap-y-12 gap-x-4 sm:gap-x-6 lg:gap-x-8">
          {industries.map((item, index) => (
            
            <div
  key={index}
  className="flex flex-col items-center text-center group"
>
  {/* Wrapper – size matches the circle, and margin is applied here */}
  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-[106px] md:h-[106px] relative mb-2 sm:mb-3 md:mb-3">
    {/* Glow Ring – now covers exactly the wrapper, which is the same as the circle */}
    <div className="absolute inset-0 rounded-full border-2 border-[#D9A441] opacity-75 animate-glow" />

    {/* Circle Icon – no margin, fills the wrapper */}
    <div className="w-full h-full bg-white rounded-full flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105 relative z-10">
      <Image
        src={item.icon}
        alt={item.title}
        width={48}
        height={48}
        className="w-8 h-auto sm:w-10 sm:h-10 md:w-14 md:h-auto object-contain"
      />
    </div>
  </div>

  {/* Title */}
  <h3 className="text-white text-base sm:text-lg md:text-2xl font-regular leading-tight">
    {item.title}
  </h3>
</div>
          ))}
        </div>
      </div>
    </section>
  );
}