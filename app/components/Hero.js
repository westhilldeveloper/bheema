"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {
  const images = [
    "/images/hero.png",
    "/images/hero_2.jpeg",
    "/images/hero_3.jpeg",
    "/images/hero_4.jpeg",
    "/images/hero_5.jpeg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Image Slider */}
      <div className="absolute inset-0 z-0">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Hero Background ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      {/* Overlay for text contrast */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* Navigation Arrows – pointer-events-auto ensures clickable */}
      {/* <button
        onClick={prevSlide}
        className="absolute left-4 md:left-6 z-10 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 backdrop-blur-sm transition pointer-events-auto"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-6 z-10 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 backdrop-blur-sm transition pointer-events-auto"
        aria-label="Next slide"
      >
        <ChevronRight size={28} />
      </button> */}

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2 pointer-events-auto">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-[#D9A441] w-8"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content – same as before */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-12 py-12 lg:py-0">
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
        </div>
        <div className="hidden lg:block flex-1 relative h-[400px] xl:h-[500px] w-full" />
      </div>
    </section>
  );
}