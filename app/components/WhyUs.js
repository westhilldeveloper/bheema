import Image from "next/image";

const features = [
  {
    icon: "/images/icon_1-png 1.png",
    title: "EXPERIENCED &\nPROFESSIONAL TEAM",
  },
  {
    icon: "/images/icon_2-png 1.png",
    title: "CUSTOMER-CENTRIC\nAPPROACH",
  },
  {
    icon: "/images/icon_3-png 1.png",
    title: "MULTI-SECTOR EXPERTISE",
  },
  {
    icon: "/images/icon_4-png 1.png",
    title: "COMMITMENT TO QUALITY\n& COMPLIANCE",
  },
  {
    icon: "/images/icon_5-png 1.png",
    title: "RELIABLE & TIMELY\nSERVICES",
  },
  {
    icon: "/images/icon_6-png 1.png",
    title: "STRONG PRESENCE ACROSS\nINDIA",
  },
  {
    icon: "/images/asset/16+_Years_of_Industry_Experience-png.png",
    title: "16+ Years of Industry \nExperience",
  },
  {
    icon: "/images/asset/Trusted_by_Leading_Government___Corporate_Clients-png.png",
    title: "Trusted by Leading Government \nCorporate Clients",
  },
  {
    icon: "/images/asset/ISO_9001_2015_Certified_Organization-png.png",
    title: "ISO 9001 2015 Certified Organization",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-[#0A2342] text-white py-12 sm:py-16 md:py-20">
      <div className="max-w-8xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-10 md:mb-14">
          <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-2">
            <div className="w-6 sm:w-8 md:w-12 h-[1px] bg-[#D9A441]" />
            <h2 className="text-2xl sm:text-3xl md:text-[32px] font-bold">
              WHY US
            </h2>
            <div className="w-6 sm:w-8 md:w-12 h-[1px] bg-[#D9A441]" />
          </div>
          <p className="text-gray-300 text-sm sm:text-base">
            At Bheema Group, we combine experience, expertise, and operational excellence to deliver dependable solutions across multiple industries. Our group companies have successfully partnered with government organizations, infrastructure developers, corporate enterprises, and private institutions, earning a reputation for reliability, professionalism, and long-term client relationships. We take pride in understanding the unique challenges of every project and delivering customized solutions that drive measurable results.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              {/* Icon */}
              <div className="h-14 sm:h-16 md:h-[74px] flex items-center justify-center mb-3 sm:mb-4">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={60}
                  height={74}
                  className="w-auto h-full object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="whitespace-pre-line text-center text-[10px] sm:text-xs md:text-[12px] font-medium leading-tight">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}