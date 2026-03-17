import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { galleries } from '@/data/galleries';

export const metadata: Metadata = {
  title: 'Galerias | Capol',
  description:
    'Conheça as instalações, veículos e unidades da Cooperativa Agropecuária de Oliveira - Capol através de nossas galerias de fotos.',
};

export default function GaleriasPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner */}
      <section className="bg-gray-100 border-b-4 border-[#2e7d32] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800 tracking-wide uppercase font-heading">
            GALERIAS
          </h1>
          <nav className="text-sm text-gray-500">
            <Link href="/" className="hover:text-[#2e7d32] transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">Galerias</span>
          </nav>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleries.map((gallery) => (
            <Link
              key={gallery.id}
              href={`/galeria/${gallery.id}`}
              className="gallery-item group bg-white rounded-2xl shadow-sm overflow-hidden"
            >
              <div className="relative aspect-[4/3] bg-gray-100">
                <Image
                  src={gallery.cover}
                  alt={gallery.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="inline-flex items-center text-white text-sm font-medium">
                    Ver galeria
                    <svg
                      className="w-4 h-4 ml-2"
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
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-[#2e7d32] transition-colors">
                  {gallery.name}
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  {gallery.images.length} foto
                  {gallery.images.length !== 1 ? 's' : ''}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
