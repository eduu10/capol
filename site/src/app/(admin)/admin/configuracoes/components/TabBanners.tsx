'use client';

import { SiteConfig, BannerItem } from '@/contexts/SiteConfigContext';

interface TabBannersProps {
  config: SiteConfig;
  onChange: (partial: Partial<SiteConfig>) => void;
  onSave: () => void;
}

export default function TabBanners({ config, onChange, onSave }: TabBannersProps) {
  const updateBanner = (index: number, field: keyof BannerItem, value: string) => {
    const updated = [...config.banners];
    updated[index] = { ...updated[index], [field]: value };
    onChange({ banners: updated });
  };

  const moveBanner = (index: number, direction: 'up' | 'down') => {
    const updated = [...config.banners];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= updated.length) return;
    [updated[index], updated[targetIndex]] = [updated[targetIndex], updated[index]];
    onChange({ banners: updated });
  };

  const addBanner = () => {
    onChange({
      banners: [...config.banners, { src: '', alt: '', link: '' }],
    });
  };

  const removeBanner = (index: number) => {
    const updated = config.banners.filter((_, i) => i !== index);
    onChange({ banners: updated });
  };

  return (
    <div className="space-y-6">
      {config.banners.map((banner, index) => (
        <div
          key={index}
          className="rounded-lg border border-gray-200 bg-gray-50 p-4"
        >
          <div className="mb-3 flex items-center justify-between">
            <h4 className="text-sm font-semibold text-gray-700">
              Banner {index + 1}
            </h4>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => moveBanner(index, 'up')}
                disabled={index === 0}
                className="rounded p-1.5 text-gray-500 transition-colors hover:bg-gray-200 disabled:opacity-30"
                title="Mover para cima"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => moveBanner(index, 'down')}
                disabled={index === config.banners.length - 1}
                className="rounded p-1.5 text-gray-500 transition-colors hover:bg-gray-200 disabled:opacity-30"
                title="Mover para baixo"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => removeBanner(index)}
                className="ml-2 rounded p-1.5 text-red-500 transition-colors hover:bg-red-50"
                title="Remover banner"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <label className="mb-1 block text-xs font-medium text-gray-600">
                URL da Imagem
              </label>
              <input
                type="text"
                value={banner.src}
                onChange={(e) => updateBanner(index, 'src', e.target.value)}
                placeholder="/imagens/banners/banner.jpg"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-[#2e7d32] focus:outline-none focus:ring-2 focus:ring-[#2e7d32]/20"
              />
              {banner.src && (
                <div className="mt-2 overflow-hidden rounded-lg border border-gray-200">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={banner.src}
                    alt={banner.alt || 'Preview'}
                    className="h-32 w-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs font-medium text-gray-600">
                  Texto Alternativo (Alt)
                </label>
                <input
                  type="text"
                  value={banner.alt}
                  onChange={(e) => updateBanner(index, 'alt', e.target.value)}
                  placeholder="Descrição do banner"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-[#2e7d32] focus:outline-none focus:ring-2 focus:ring-[#2e7d32]/20"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-gray-600">
                  Link (opcional)
                </label>
                <input
                  type="text"
                  value={banner.link}
                  onChange={(e) => updateBanner(index, 'link', e.target.value)}
                  placeholder="/produtos"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-[#2e7d32] focus:outline-none focus:ring-2 focus:ring-[#2e7d32]/20"
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={addBanner}
        className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-dashed border-gray-300 py-3 text-sm text-gray-500 transition-colors hover:border-[#2e7d32] hover:text-[#2e7d32]"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
        Adicionar Banner
      </button>

      <div className="flex justify-end pt-4">
        <button
          type="button"
          onClick={onSave}
          className="rounded-lg bg-[#2e7d32] px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1b5e20]"
        >
          Salvar
        </button>
      </div>
    </div>
  );
}
