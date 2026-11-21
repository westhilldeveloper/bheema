
"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const images = [
    "/images/h1.png",
    "/images/h2.png",
    "/images/h3.png",
    "/images/h4.png",
    "/images/h5.png",
    "/images/h6.png",
    "/images/h7.png",
    "/images/h8.png",
    "/images/h9.png",
    "/images/h10.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden h-auto md:h-[70vh] md:min-h-[70vh] md:max-h-[70vh]"
    >
      {/* MOBILE VIEW */}
      <div className="block md:hidden relative w-full">
        {images.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`Hero Background ${index + 1}`}
            className="w-full h-auto block"
            style={{
              display: index === currentIndex ? "block" : "none",
            }}
          />
        ))}

        {/* Mobile Navigation Dots */}
        <div className="flex justify-center gap-2 py-3 bg-white">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-[#D9A441] w-7"
                  : "bg-gray-300 w-2.5"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* DESKTOP VIEW */}
      <div className="hidden md:block absolute inset-0 w-full h-full">
        {images.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`Hero Background ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{
              opacity: index === currentIndex ? 1 : 0,
              transition: "opacity 1s ease-in-out",
            }}
          />
        ))}

        {/* Desktop Overlay */}
        <div
          className="absolute inset-0 z-[1]"
          style={{ background: "rgba(0,0,0,0.3)" }}
        />

        {/* Desktop Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-[#D9A441] w-8"
                  : "bg-white/50 hover:bg-white/80 w-3"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
