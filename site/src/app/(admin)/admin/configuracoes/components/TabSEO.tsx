'use client';

import { useState } from 'react';
import { SiteConfig } from '@/contexts/SiteConfigContext';

interface TabSEOProps {
  config: SiteConfig;
  onChange: (partial: Partial<SiteConfig>) => void;
  onSave: () => void;
}

export default function TabSEO({ config, onChange, onSave }: TabSEOProps) {
  const [keywordInput, setKeywordInput] = useState('');

  const addKeyword = () => {
    const trimmed = keywordInput.trim();
    if (trimmed && !config.keywords.includes(trimmed)) {
      onChange({ keywords: [...config.keywords, trimmed] });
      setKeywordInput('');
    }
  };

  const removeKeyword = (keyword: string) => {
    onChange({ keywords: config.keywords.filter((k) => k !== keyword) });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addKeyword();
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Meta Title Padrão
        </label>
        <input
          type="text"
          value={config.metaTitle}
          onChange={(e) => onChange({ metaTitle: e.target.value })}
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#2e7d32] focus:outline-none focus:ring-2 focus:ring-[#2e7d32]/20"
        />
        <p className="mt-1 text-xs text-gray-400">
          {config.metaTitle.length}/60 caracteres recomendados
        </p>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Meta Description Padrão
        </label>
        <textarea
          value={config.metaDescription}
          onChange={(e) => onChange({ metaDescription: e.target.value })}
          rows={3}
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#2e7d32] focus:outline-none focus:ring-2 focus:ring-[#2e7d32]/20"
        />
        <p className="mt-1 text-xs text-gray-400">
          {config.metaDescription.length}/160 caracteres recomendados
        </p>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Keywords
        </label>
        <div className="mb-2 flex flex-wrap gap-2">
          {config.keywords.map((keyword) => (
            <span
              key={keyword}
              className="inline-flex items-center gap-1 rounded-full bg-[#2e7d32]/10 px-3 py-1 text-sm text-[#2e7d32]"
            >
              {keyword}
              <button
                type="button"
                onClick={() => removeKeyword(keyword)}
                className="ml-1 text-[#2e7d32]/60 hover:text-[#2e7d32]"
              >
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            value={keywordInput}
            onChange={(e) => setKeywordInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Digite uma keyword e pressione Enter"
            className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#2e7d32] focus:outline-none focus:ring-2 focus:ring-[#2e7d32]/20"
          />
          <button
            type="button"
            onClick={addKeyword}
            className="rounded-lg bg-gray-100 px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
          >
            Adicionar
          </button>
        </div>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Google Analytics ID
        </label>
        <input
          type="text"
          value={config.googleAnalyticsId}
          onChange={(e) => onChange({ googleAnalyticsId: e.target.value })}
          placeholder="G-XXXXXXXXXX"
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#2e7d32] focus:outline-none focus:ring-2 focus:ring-[#2e7d32]/20"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Open Graph Image URL
        </label>
        <input
          type="text"
          value={config.ogImageUrl}
          onChange={(e) => onChange({ ogImageUrl: e.target.value })}
          placeholder="/imagens/og-image.jpg"
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#2e7d32] focus:outline-none focus:ring-2 focus:ring-[#2e7d32]/20"
        />
        {config.ogImageUrl && (
          <div className="mt-2 overflow-hidden rounded-lg border border-gray-200">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={config.ogImageUrl}
              alt="OG Image preview"
              className="h-32 w-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
        )}
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
