import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
     
    >
      <div className="absolute inset-0 z-0">
    <Image
      src="/images/her.jpeg"
      alt="Hero Background"
      fill
      
      className="object-cover"
      priority
       sizes="100vw"
    />
  </div>
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 max-w-8xl  md:mx-4 px-4 sm:px-6 w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-12 py-12 lg:py-0">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[72px] text-[#C8A34B] font-bold mb-4 leading-tight">
            BHEEMA GROUP
          </h1>

          <h2 className="text-lg sm:text-xl md:text-[32px] text-white mb-4 font-medium">
            Building Trust, Delivering Excellence Across Industries
          </h2>

          <p className="text-gray-200 text-sm sm:text-base max-w-2xl mx-auto lg:mx-0 text-justify lg:text-left mb-6 leading-relaxed">
            BHEEMA GROUP is a diversified business conglomerate committed to
            delivering excellence, innovation, and customer satisfaction across
            multiple sectors. With integrity, professionalism and quality
            service at our core, we create value and build lasting
            relationships.
          </p>

         {/* <button className="bg-[#C8A34B] hover:bg-[#b8923a] text-black font-semibold px-8 py-3 rounded-md transition shadow-lg flex items-center gap-2">
  KNOW MORE
  <ArrowRight size={18} />
</button> */}
        </div>

        {/* Right Image – Hidden on small screens, shown on lg+ */}
        <div className="hidden lg:block flex-1 relative h-[400px] xl:h-[500px] w-full">
          
        </div>
      </div>
    </section>
  );
}