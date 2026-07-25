import { stripImages } from '../data';

export default function ImageStrip() {
  return (
    <div className='w-full text-center mb-8 sm:mb-10 md:mb-12'>
       <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-5 mb-3 sm:mb-4">
            <div className="w-6 sm:w-8 md:w-12 h-[1px] bg-[#D9A441]" />
            <h2 className="text-[#08264A] text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold uppercase">
              ABOUT US
            </h2>
            <div className="w-6 sm:w-8 md:w-12 h-[1px] bg-[#D9A441]" />
          </div>
    <section className="grid grid-cols-1 md:grid-cols-3">
      {stripImages.map((image, index) => (
        <img key={index} src={image} alt="gallery" className="h-[260px] w-full object-cover md:h-[628px]" />
      ))}
    </section>
    </div>
  );
}