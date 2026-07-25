'use client';

import { useEffect, useState, useMemo } from 'react';
import Image from 'next/image';

export default function ProjectDetails() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const singleSlide = {
    title: 'Mukarba Chowk - Panipat Highway, Bhigan Toll Plaza (Welspun)',
    subtitle:
      'This project involved providing a large workforce of 238 personnel for industrial and construction manpower requirements at Bhigan, Haryana. Our team played a crucial role in ensuring smooth toll operations and infrastructure support from May 2022 to October 2023.',
    description:
      'We focused on efficient manpower deployment, ensuring productivity and safety across all operations. Our ability to manage a high-volume workforce helped the client maintain operational efficiency and meet project timelines successfully.',
    points: ['Project Management', 'Candidate Management', 'Interview Management'],
    image:'/gallery/2.jpeg',
    image1:'/gallery/5.jpeg',
    image2:'/gallery/1.jpeg',
    image3:'/gallery/4.jpeg',
    logo:'/gallery/1.jpeg'
  };
  
  const slides = useMemo(
    () => [singleSlide],[]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 12000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section id='gallery' className="bg-[#FFFFFF] px-4 py-8 md:px-8 lg:px-12 lg:py-10">
      <div className="mx-auto max-w-full">
       <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-5 mb-3 sm:mb-4">
            <div className="w-6 sm:w-8 md:w-12 h-[1px] bg-[#D9A441]" />
            <h2 className="text-[#08264A] text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold uppercase">
              GALLERY
            </h2>
            <div className="w-6 sm:w-8 md:w-12 h-[1px] bg-[#D9A441]" />
          </div>

        <div className="relative mt-4 overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, slideIndex) => (
              <div key={slideIndex} className="w-full shrink-0">
                {/* Top content */}
                <div className="grid gap-8 lg:grid-cols-[1.55fr_0.9fr] lg:items-start">
                  

                  <div className="flex flex-col items-start gap-5 lg:items-start">
                   
                  {/* {slide.logo &&   <div className="flex h-[72px] w-[170px] items-center justify-center rounded-[6px] bg-[#ececec] text-[11px] text-[#7a7a7a] md:h-[84px] md:w-[200px]">
                     <Image
  src={slide.logo}
  alt="project"
  width={800}
  height={600}
  className="h-full w-full object-fill"
  loading="lazy"          // lazy-load off-screen images
  sizes="(max-width: 768px) 100vw, 50vw"
/>
                    </div>} */}
                  </div>
                </div>

                {/* Image layout */}
                <div className="mt-8 grid grid-cols-1 gap-[10px] lg:grid-cols-12 lg:gap-[10px]">
  {/* Top left */}
  <div className="flex h-[220px] overflow-hidden rounded-[10px] bg-[#fff6eb] lg:col-span-4 lg:h-[390px]">
    <Image
  src={slide.image}
  alt="project"
  width={800}
  height={600}
  className="h-full w-full object-cover"
  loading="lazy"          // lazy-load off-screen images
  sizes="(max-width: 768px) 100vw, 50vw"
/>
  </div>

  {/* Top middle */}
  <div className="flex h-[220px] overflow-hidden rounded-[10px] bg-[#fff6eb] lg:col-span-4 lg:h-[390px]">
    <Image
  src={slide.image1}
  alt="project"
  width={800}
  height={600}
  className="h-full w-full object-cover"
  loading="lazy"          // lazy-load off-screen images
  sizes="(max-width: 768px) 100vw, 50vw"
/>
  </div>

  {/* Right tall */}
  <div className="flex h-[260px] overflow-hidden rounded-[10px] bg-[#fff6eb] lg:col-span-4 lg:row-span-2 lg:h-[673px]">
    <Image
  src={slide.image2}
  alt="project"
  width={800}
  height={600}
 className="w-full h-auto  object-cover object-center-top"
  loading="lazy"          // lazy-load off-screen images
  sizes="(max-width: 768px) 100vw, 50vw"
/>
  </div>

  {/* Bottom wide */}
  <div className="flex h-[220px] overflow-hidden rounded-[10px] bg-[#fff6eb] lg:col-span-8 lg:h-[273px]">
    <Image
  src={slide.image3}
  alt="project"
  width={800}
  height={600}
  className="h-full w-full object-cover"
  loading="lazy"          // lazy-load off-screen images
  sizes="(max-width: 768px) 100vw, 50vw"
/>
  </div>
</div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-5 flex items-center justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`md:h-3.5 w-3.5 h-2 w-2  rounded-full transition-all ${
                currentSlide === index ? 'bg-[#8b6335]' : 'bg-[#e4d3b8]'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}