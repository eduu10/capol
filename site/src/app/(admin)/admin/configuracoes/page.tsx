'use client';

import { useState, useCallback } from 'react';
import { useSiteConfig, SiteConfig } from '@/contexts/SiteConfigContext';
import TabGeral from './components/TabGeral';
import TabBanners from './components/TabBanners';
import TabHomepage from './components/TabHomepage';
import TabHorarios from './components/TabHorarios';
import TabContato from './components/TabContato';
import TabFooter from './components/TabFooter';
import TabSEO from './components/TabSEO';
import TabRedesSociais from './components/TabRedesSociais';

const tabs = [
  { id: 'geral', label: 'Geral' },
  { id: 'homepage', label: 'Homepage' },
  { id: 'banners', label: 'Banners' },
  { id: 'horarios', label: 'Horários' },
  { id: 'contato', label: 'Contato & WhatsApp' },
  { id: 'footer', label: 'Rodapé' },
  { id: 'seo', label: 'SEO' },
  { id: 'redes', label: 'Redes Sociais' },
] as const;

type TabId = (typeof tabs)[number]['id'];

export default function ConfiguracoesPage() {
  const { config, updateConfig } = useSiteConfig();
  const [activeTab, setActiveTab] = useState<TabId>('geral');
  const [localConfig, setLocalConfig] = useState<SiteConfig>(config);
  const [toast, setToast] = useState<string | null>(null);

  const handleChange = useCallback((partial: Partial<SiteConfig>) => {
    setLocalConfig((prev) => ({ ...prev, ...partial }));
  }, []);

  const handleSave = useCallback(() => {
    updateConfig(localConfig);
    setToast('Configurações salvas com sucesso!');
    setTimeout(() => setToast(null), 3000);
  }, [localConfig, updateConfig]);

  const renderTab = () => {
    const props = { config: localConfig, onChange: handleChange, onSave: handleSave };
    switch (activeTab) {
      case 'geral':
        return <TabGeral {...props} />;
      case 'homepage':
        return <TabHomepage {...props} />;
      case 'banners':
        return <TabBanners {...props} />;
      case 'horarios':
        return <TabHorarios {...props} />;
      case 'contato':
        return <TabContato {...props} />;
      case 'footer':
        return <TabFooter {...props} />;
      case 'seo':
        return <TabSEO {...props} />;
      case 'redes':
        return <TabRedesSociais {...props} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Toast */}
      {toast && (
        <div className="fixed right-4 top-4 z-50 animate-fade-in rounded-lg bg-[#2e7d32] px-5 py-3 text-sm font-medium text-white shadow-lg">
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            {toast}
          </div>
        </div>
      )}

      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2e7d32]">
              <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Configurações do Site</h1>
              <p className="text-sm text-gray-500">Gerencie todas as configurações do site Capol</p>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex overflow-x-auto" aria-label="Tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`whitespace-nowrap border-b-2 px-5 py-4 text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'border-[#2e7d32] text-[#2e7d32]'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">{renderTab()}</div>
        </div>
      </div>
    </div>
  );
}
