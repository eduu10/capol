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
    <div className="space-y-6">
      {/* Toast */}
      {toast && (
        <div className="fixed right-4 top-4 z-50 rounded-lg border border-[#bbf7d0] bg-[#f0fdf4] px-4 py-3 text-sm font-medium text-[#166534] shadow-lg">
          <div className="flex items-center gap-2">
            <svg className="h-4 w-4 text-[#16a34a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            {toast}
          </div>
        </div>
      )}

      {/* Header */}
      <div>
        <h2 className="text-xl font-semibold text-[#0f172a] tracking-tight">Configurações</h2>
        <p className="text-sm text-[#64748b] mt-0.5">Gerencie todas as configurações do site Capol</p>
      </div>

      {/* Content */}
      <div className="rounded-xl border border-[#e2e8f0] bg-white shadow-sm overflow-hidden">
        {/* Tabs */}
        <div className="border-b border-[#e2e8f0] bg-[#f8fafc]">
          <nav className="-mb-px flex overflow-x-auto" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap border-b-2 px-5 py-3 text-xs font-semibold transition-colors ${
                  activeTab === tab.id
                    ? 'border-[#0f172a] text-[#0f172a] bg-white'
                    : 'border-transparent text-[#64748b] hover:text-[#334155] hover:border-[#cbd5e1]'
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
  );
}
