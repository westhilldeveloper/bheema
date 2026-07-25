'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// Card component to avoid duplication
const LeadershipCard = ({ service }) => (
  <div className="flex w-full max-w-sm bg-[#FFF6EB] flex-col rounded-[18px] p-4 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1 sm:max-w-xs md:max-w-sm">
    <Image
      src={service.image}
      alt={service.title}
      width={400}
      height={400}
      className="aspect-square w-full rounded-[16px] object-cover"
      style={{ objectPosition: '100% -40px' }}
    />
    <h3 className="mt-5 text-[20px] font-medium sm:text-[22px]">
      {service.title}
    </h3>
    <p className="mt-0 text-[12px] leading-5 text-[#555] sm:text-[13px]">
      {service.designation}
    </p>
    <p className="mt-4 text-[12px] leading-5 text-[#555] sm:text-[13px]">
      {service.description}
    </p>
  </div>
);

export default function Leadership({ slides = [] }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);

  if (!slides.length) return null;

  // Auto‑advance (only for carousel)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Scroll to active slide (carousel)
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const slideWidth = container.children[0]?.offsetWidth || 0;
      const gap = 16;
      container.scrollTo({
        left: currentSlide * (slideWidth + gap),
        behavior: 'smooth',
      });
    }
  }, [currentSlide]);

  return (
    <section id='leadership' className="bg-[#041E3D]  px-4 py-12 text-center sm:px-6 md:px-10 lg:px-12 lg:py-16">
      {/* Heading */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-5 mb-3 sm:mb-4">
        <div className="w-6 sm:w-8 md:w-12 h-[1px] bg-[#D9A441]" />
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold uppercase">
          LEADERSHIP
        </h2>
        <div className="w-6 sm:w-8 md:w-12 h-[1px] bg-[#D9A441]" />
      </div>

      

      <p className="mx-auto mt-4 max-w-full text-white text-[12px] leading-5 sm:text-[13px] md:text-[14px]">
        Behind Bheema Tolling & Traffic Solution Pvt. Ltd. (BTTS) is a team of accomplished professionals with deep expertise in infrastructure, toll operations, security management, strategic planning, and technology. Their collective leadership, industry knowledge, and commitment to operational excellence have been instrumental in building trusted partnerships and delivering exceptional results across India's highway and infrastructure sector.
      </p>

      {/* -------- MOBILE VIEW (static, no carousel) -------- */}
      <div className="mt-10 sm:hidden">
        <div className="grid grid-cols-1 gap-4 justify-items-center">
          {slides.map((slide, slideIndex) =>
            slide.map((service, idx) => (
              <LeadershipCard key={`${slideIndex}-${idx}`} service={service} />
            ))
          )}
        </div>
      </div>

      {/* -------- DESKTOP/TABLET VIEW (carousel with peek) -------- */}
      <div className="relative mt-10 hidden sm:block">
        <div
          ref={containerRef}
          className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex} className="w-full shrink-0 snap-start">
              <div className="grid grid-cols-2 gap-1 justify-items-center lg:grid-cols-4 xl:gap-4">
                {slide.map((service, idx) => (
                  <LeadershipCard key={idx} service={service} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Dots (only for carousel) */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to services slide ${index + 1}`}
              className={`h-3.5 w-3.5 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'scale-110 bg-[#8b6335]' : 'bg-white'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}