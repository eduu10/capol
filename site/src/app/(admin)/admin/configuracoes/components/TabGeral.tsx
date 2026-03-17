'use client';

import { SiteConfig } from '@/contexts/SiteConfigContext';

interface TabGeralProps {
  config: SiteConfig;
  onChange: (partial: Partial<SiteConfig>) => void;
  onSave: () => void;
}

export default function TabGeral({ config, onChange, onSave }: TabGeralProps) {
  return (
    <div className="space-y-6">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Nome do Site
        </label>
        <input
          type="text"
          value={config.siteName}
          onChange={(e) => onChange({ siteName: e.target.value })}
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#2e7d32] focus:outline-none focus:ring-2 focus:ring-[#2e7d32]/20"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Descrição do Site
        </label>
        <textarea
          value={config.siteDescription}
          onChange={(e) => onChange({ siteDescription: e.target.value })}
          rows={3}
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#2e7d32] focus:outline-none focus:ring-2 focus:ring-[#2e7d32]/20"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Logo URL
        </label>
        <input
          type="text"
          value={config.logoUrl}
          onChange={(e) => onChange({ logoUrl: e.target.value })}
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#2e7d32] focus:outline-none focus:ring-2 focus:ring-[#2e7d32]/20"
        />
        {config.logoUrl && (
          <div className="mt-2 rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="mb-2 text-xs text-gray-500">Preview:</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={config.logoUrl}
              alt="Logo preview"
              className="h-14 w-auto"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Cor Principal
          </label>
          <div className="flex items-center gap-3">
            <input
              type="color"
              value={config.primaryColor}
              onChange={(e) => onChange({ primaryColor: e.target.value })}
              className="h-10 w-14 cursor-pointer rounded border border-gray-300"
            />
            <input
              type="text"
              value={config.primaryColor}
              onChange={(e) => onChange({ primaryColor: e.target.value })}
              className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#2e7d32] focus:outline-none focus:ring-2 focus:ring-[#2e7d32]/20"
            />
          </div>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Cor Secundária
          </label>
          <div className="flex items-center gap-3">
            <input
              type="color"
              value={config.secondaryColor}
              onChange={(e) => onChange({ secondaryColor: e.target.value })}
              className="h-10 w-14 cursor-pointer rounded border border-gray-300"
            />
            <input
              type="text"
              value={config.secondaryColor}
              onChange={(e) => onChange({ secondaryColor: e.target.value })}
              className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#2e7d32] focus:outline-none focus:ring-2 focus:ring-[#2e7d32]/20"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Telefone Principal
          </label>
          <input
            type="text"
            value={config.mainPhone}
            onChange={(e) => onChange({ mainPhone: e.target.value })}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#2e7d32] focus:outline-none focus:ring-2 focus:ring-[#2e7d32]/20"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Email Principal
          </label>
          <input
            type="email"
            value={config.mainEmail}
            onChange={(e) => onChange({ mainEmail: e.target.value })}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#2e7d32] focus:outline-none focus:ring-2 focus:ring-[#2e7d32]/20"
          />
        </div>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Instagram URL
        </label>
        <input
          type="url"
          value={config.instagramUrl}
          onChange={(e) => onChange({ instagramUrl: e.target.value })}
          placeholder="https://instagram.com/..."
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#2e7d32] focus:outline-none focus:ring-2 focus:ring-[#2e7d32]/20"
        />
      </div>

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
