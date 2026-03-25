'use client';

import Link from 'next/link';
import Image from 'next/image';
import { assetPath } from '@/lib/utils';
import { useSiteConfig } from '@/contexts/SiteConfigContext';

export default function Footer() {
  const { config } = useSiteConfig();
  const footer = config.footer;
  const hours = config.businessHours;

  const formatHours = () => {
    const weekdays = hours.filter(h => !['Sábado', 'Domingo'].includes(h.day));
    const saturday = hours.find(h => h.day === 'Sábado');
    const sunday = hours.find(h => h.day === 'Domingo');

    const lines: { label: string; time: string; open: boolean }[] = [];

    if (weekdays.length > 0 && weekdays[0].isOpen) {
      lines.push({ label: 'Segunda-Sexta', time: `${weekdays[0].open} - ${weekdays[0].close}`, open: true });
    }
    if (saturday) {
      lines.push({
        label: 'Sábado',
        time: saturday.isOpen ? `${saturday.open} - ${saturday.close}` : 'Fechado',
        open: saturday.isOpen,
      });
    }
    if (sunday) {
      lines.push({
        label: 'Domingo',
        time: sunday.isOpen ? `${sunday.open} - ${sunday.close}` : 'Fechado',
        open: sunday.isOpen,
      });
    }

    return lines;
  };

  const hoursLines = formatHours();

  return (
    <footer>
      {/* White Section - 3 Columns */}
      <div className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Col 1: Horário de Funcionamento */}
            <div>
              <h3 className="mb-1 text-lg font-bold text-gray-800 uppercase">{footer.hoursTitle}</h3>
              <div className="mb-4 h-[3px] w-12" style={{ backgroundColor: config.primaryColor }} />
              <p className="mb-4 text-sm text-gray-600 leading-relaxed">{footer.hoursDescription}</p>
              <ul className="space-y-2 text-sm text-gray-700">
                {hoursLines.map((line) => (
                  <li key={line.label} className="flex items-center gap-2">
                    <span className={`inline-block h-2.5 w-2.5 rounded-full ${line.open ? 'bg-green-500' : 'bg-red-500'}`} />
                    <span>{line.label}: {line.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 2: Contato */}
            <div>
              <h3 className="mb-1 text-lg font-bold text-gray-800 uppercase">{footer.contactTitle}</h3>
              <div className="mb-4 h-[3px] w-12" style={{ backgroundColor: config.primaryColor }} />
              <p className="mb-4 text-sm text-gray-600 leading-relaxed">{footer.contactDescription}</p>
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 rounded px-5 py-2.5 text-sm font-bold text-white uppercase tracking-wide transition-colors"
                style={{ backgroundColor: config.primaryColor }}
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Localização e Contato
              </Link>
            </div>

            {/* Col 3: Galerias */}
            <div>
              <h3 className="mb-1 text-lg font-bold text-gray-800 uppercase">{footer.galleriesTitle}</h3>
              <div className="mb-4 h-[3px] w-12" style={{ backgroundColor: config.primaryColor }} />
              <div className="grid grid-cols-3 gap-2">
                {footer.galleryThumbnails.map((thumb) => (
                  <Link key={thumb.src} href="/galerias" className="gallery-item block overflow-hidden rounded">
                    <Image
                      src={assetPath(thumb.src)}
                      alt={thumb.alt}
                      width={120}
                      height={90}
                      className="h-[70px] w-full object-cover"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dark Green Section */}
      <div className="py-10 text-white text-center" style={{ backgroundColor: config.primaryColor }}>
        <div className="mx-auto max-w-7xl px-4">
          <h3 className="text-xl font-bold uppercase tracking-widest mb-2">Instagram</h3>
          <div className="flex justify-center mb-2">
            <svg className="h-6 w-6 text-white/80" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </div>
          <div className="mx-auto mb-6 h-[3px] w-12 bg-white/50" />

          <p className="text-2xl font-bold uppercase tracking-wide mb-4">Como podemos ajudá-lo?</p>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-6">
            <p className="text-lg font-bold">TEL: {config.mainPhone}</p>
            <div className="flex items-center gap-3">
              {config.socialFacebook && (
                <a href={config.socialFacebook} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30" aria-label="Facebook">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                </a>
              )}
              {config.socialInstagram && (
                <a href={config.socialInstagram} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30" aria-label="Instagram">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Dark Bottom Bar */}
      <div className="bg-[#1a1a1a] py-4">
        <div className="mx-auto max-w-7xl px-4 flex flex-col items-center justify-between gap-2 text-sm text-gray-400 sm:flex-row">
          <span>{footer.copyrightText}</span>
          {footer.developerName && (
            <a href={footer.developerUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors hover:text-white">
              Desenvolvido por {footer.developerName}
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
