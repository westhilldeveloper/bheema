export default function ClientsDetails() {
  const clients = [
    "/clients/adani.png",
    "/clients/Ayushajay_Construction_Pvt._Ltd.png",
    "/clients/Essel_Infra.png",
    "/clients/Irrigation___Flood_Control_Department__Govt._of_Delhi.png",
    "/clients/KMC.png",
    "/clients/LNT.png",
    "/clients/Maple_highways.png",
    "/clients/NHAI.png",
    "/clients/NHIT.png",
    "/clients/Pink_City_Expressway.png",
    "/clients/Sadbhav_Engineering.png",
    "/clients/welspun.png",
   
  ];

  return (
    <section id="clients" className="bg-[#FFFFFF] px-4 py-6 md:px-8 lg:px-12">
      <div className="mx-auto max-w-full">
         <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-5 mb-3 sm:mb-4">
            <div className="w-6 sm:w-8 md:w-12 h-[1px] bg-[#D9A441]" />
            <h2 className="text-[#08264A] text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold uppercase">
              clients
            </h2>
            <div className="w-6 sm:w-8 md:w-12 h-[1px] bg-[#D9A441]" />
          </div>
        {/* Description */}
        <p className="mx-auto max-w-full text-center font-bold  text-[12px] leading-[1.35] text-[#4a4a4a] md:text-[14px]">
          Trusted By Industry Leaders
        </p>
        <p className="mx-auto max-w-full text-center font-bold  text-[12px] leading-[1.35] text-[#4a4a4a] md:text-[14px]">
          Delivering Excellence for India's Leading Infrastructure Organizations
        </p>
        <p className="mx-auto max-w-full text-centermy-12 text-justify text-[12px] leading-[1.35] text-[#4a4a4a] md:text-[14px]">
          Our clients are at the core of everything we do at Bhim Secure Solutions. Over the years, we have built strong and lasting relationships with reputed organizations across infrastructure, construction, government, and private sectors. Our client portfolio reflects trust, reliability, and consistent service delivery, as we continue to support companies with tailored manpower solutions that meet their operational needs. We take pride in partnering with industry leaders and contributing to their success through our commitment to quality, professionalism, and long-term collaboration.
        </p>

        {/* Responsive Logo Grid - optimized for small screens */}
        <div className="my-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:gap-4">
          {clients.map((logo, index) => (
            <div
              key={index}
              className="flex h-[100px] items-center justify-center overflow-hidden rounded-[8px] border border-[#d6d6d6] bg-gray-200 p-2 shadow-sm sm:h-[120px] md:h-[140px] lg:h-[160px] xl:h-[180px]"
            >
              <img
                src={logo}
                alt="client logo"
                className="h-full w-full object-contain p-1"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}