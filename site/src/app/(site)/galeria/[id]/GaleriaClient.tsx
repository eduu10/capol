'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Gallery } from '@/data/galleries';

interface GaleriaClientProps {
  gallery: Gallery;
}

export default function GaleriaClient({ gallery }: GaleriaClientProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((prev) =>
      prev !== null
        ? prev === 0
          ? gallery.images.length - 1
          : prev - 1
        : null
    );
  const nextImage = () =>
    setLightboxIndex((prev) =>
      prev !== null
        ? prev === gallery.images.length - 1
          ? 0
          : prev + 1
        : null
    );

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Banner */}
      <section className="bg-gray-100 border-b-4 border-[#2e7d32] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800 tracking-wide uppercase font-heading">
            {gallery.name}
          </h1>
          <nav className="text-sm text-gray-500">
            <Link href="/" className="hover:text-[#2e7d32] transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/galerias" className="hover:text-[#2e7d32] transition-colors">Galerias</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">{gallery.name}</span>
          </nav>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back link */}
        <Link
          href="/galerias"
          className="inline-flex items-center text-[#2e7d32] hover:text-[#1b5e20] font-medium mb-8 transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Voltar para galerias
        </Link>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {gallery.images.map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className="gallery-item relative aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden cursor-pointer group"
            >
              <Image
                src={image}
                alt={`${gallery.name} - Foto ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/80 hover:text-white z-10 p-2"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 text-white/80 hover:text-white z-10 p-2"
          >
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative w-full max-w-5xl max-h-[85vh] aspect-[4/3] mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={gallery.images[lightboxIndex]}
              alt={`${gallery.name} - Foto ${lightboxIndex + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 text-white/80 hover:text-white z-10 p-2"
          >
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm">
            {lightboxIndex + 1} / {gallery.images.length}
          </div>
        </div>
      )}
    </main>
  );
}
