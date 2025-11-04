"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('vyuka');
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    // Posun na začátek galerie
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: 0,
        behavior: 'smooth'
      });
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollPosition = scrollContainerRef.current.scrollLeft + 
        (direction === 'right' ? scrollAmount : -scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const categories = [
    { id: 'vyuka', name: 'Výuka', icon: '/book.png' },
    { id: 'jizdy', name: 'Jízdy', icon: '/car.png' },
    { id: 'zdravoveda', name: 'Zdravověda', icon: '/medical.png' },
  ];

  const galleryImages = {
    vyuka: [
      { src: '/gallery/placeholder.png', alt: 'Teoretická výuka v učebně' },
      { src: '/gallery/placeholder.png', alt: 'Přednáška dopravních předpisů' },
      { src: '/gallery/placeholder.png', alt: 'Interaktivní výuka' },
      { src: '/gallery/placeholder.png', alt: 'Studijní materiály' },
      { src: '/gallery/placeholder.png', alt: 'Moderní učebna' },
    ],
    jizdy: [
      { src: '/gallery/placeholder.png', alt: 'Praktická výuka jízdy' },
      { src: '/gallery/placeholder.png', alt: 'Jízda ve městě' },
      { src: '/gallery/placeholder.png', alt: 'Parkování' },
      { src: '/gallery/placeholder.png', alt: 'Výuka na parkovišti' },
      { src: '/gallery/placeholder.png', alt: 'Škoda Fabia - výukové vozidlo' },
    ],
    zdravoveda: [
      { src: '/gallery/placeholder.png', alt: 'Lekce první pomoci' },
      { src: '/gallery/placeholder.png', alt: 'Praktické cvičení' },
      { src: '/gallery/placeholder.png', alt: 'Resuscitace' },
      { src: '/gallery/placeholder.png', alt: 'Zdravověda - výuka' },
    ],
  };

  return (
    <section id="gallery" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-gray-900">
            Fotogalerie
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-skoda-dynamic-blue mx-auto mb-3 sm:mb-4"></div>
          <p className="text-lg sm:text-xl text-gray-600 px-4">
            Podívejte se na atmosféru naší autoškoly
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`flex items-center space-x-2 sm:space-x-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${
                activeCategory === category.id
                  ? 'bg-white text-gray-900 shadow-lg scale-105 sm:scale-110'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:cursor-pointer'
              }`}
            >
              <div className="w-5 h-5 sm:w-6 sm:h-6 relative">
                <Image
                  src={category.icon}
                  alt={category.name}
                  width={20}
                  height={20}
                />
              </div>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Horizontal Scrolling Gallery */}
        <div className="relative group/gallery">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 sm:p-4 rounded-full shadow-lg opacity-0 group-hover/gallery:opacity-100 transition-opacity duration-300 hover:cursor-pointer"
            aria-label="Posunout doleva"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 sm:p-4 rounded-full shadow-lg opacity-0 group-hover/gallery:opacity-100 transition-opacity duration-300 hover:cursor-pointer"
            aria-label="Posunout doprava"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div ref={scrollContainerRef} className="overflow-x-auto scrollbar-hide">
            <div className="flex space-x-4 sm:space-x-6 pb-4 px-2">
              {galleryImages[activeCategory as keyof typeof galleryImages].map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className="flex-shrink-0 w-72 h-56 sm:w-80 sm:h-64 lg:w-96 lg:h-72 relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group cursor-pointer"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-white font-semibold text-lg">
                        {image.alt}
                      </p>
                    </div>
                    {/* Zoom Icon */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/90 p-2 rounded-full">
                        <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Optional: Add scroll indicator dots */}
        {/* <div className="flex justify-center mt-8 space-x-2">
          {galleryImages[activeCategory as keyof typeof galleryImages].map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-gray-300"
            />
          ))}
        </div> */}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            aria-label="Zavřít"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative w-full max-w-6xl h-[80vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <p className="text-white text-xl font-semibold text-center">
                {selectedImage.alt}
              </p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}