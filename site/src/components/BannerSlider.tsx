'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const banners = [
  {
    src: '/imagens/banners/banner_sementes_insumos_adubos.jpg',
    alt: 'Sementes, Insumos e Adubos - Capol',
  },
  {
    src: '/imagens/banners/banner_do_plantio_ate_colheita.jpg',
    alt: 'Do Plantio até a Colheita - Capol',
  },
  {
    src: '/imagens/banners/banner_facilidade_homem_campo.jpg',
    alt: 'Facilidade para o Homem do Campo - Capol',
  },
  {
    src: '/imagens/banners/banner_capol_cafes.jpg',
    alt: 'Capol Cafés',
  },
];

export default function BannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="slider-container relative w-full overflow-hidden">
      <div
        className="slider-track flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {banners.map((banner, index) => (
          <div key={index} className="slider-slide relative min-w-full">
            <div className="relative h-[300px] w-full sm:h-[400px] md:h-[500px] lg:h-[600px]">
              <Image
                src={banner.src}
                alt={banner.alt}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Previous Arrow */}
      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60 md:h-12 md:w-12"
        aria-label="Banner anterior"
      >
        <svg
          className="h-5 w-5 md:h-6 md:w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      {/* Next Arrow */}
      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60 md:h-12 md:w-12"
        aria-label="Próximo banner"
      >
        <svg
          className="h-5 w-5 md:h-6 md:w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-all ${
              index === currentSlide
                ? 'scale-110 bg-white'
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Ir para banner ${index + 1}`}
            aria-current={index === currentSlide ? 'true' : undefined}
          />
        ))}
      </div>
    </section>
  );
}
