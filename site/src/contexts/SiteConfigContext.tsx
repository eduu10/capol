'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

export interface BannerItem {
  src: string;
  alt: string;
  link: string;
}

export interface WhatsAppNumber {
  label: string;
  number: string;
  display: string;
}

export interface BusinessHours {
  day: string;
  open: string;
  close: string;
  isOpen: boolean;
}

export interface SiteConfig {
  // Geral
  siteName: string;
  siteDescription: string;
  logoUrl: string;
  primaryColor: string;
  secondaryColor: string;
  mainPhone: string;
  mainEmail: string;
  instagramUrl: string;

  // Banners
  banners: BannerItem[];

  // Horarios
  businessHours: BusinessHours[];

  // Contato & WhatsApp
  addressMatriz: string;
  addressFilial: string;
  phoneNumbers: string[];
  whatsappNumbers: WhatsAppNumber[];
  contactEmails: string[];

  // SEO
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  googleAnalyticsId: string;
  ogImageUrl: string;

  // Redes Sociais
  socialInstagram: string;
  socialFacebook: string;
  socialYoutube: string;
  socialLinkedin: string;
}

const defaultConfig: SiteConfig = {
  siteName: 'Cooperativa Agropecuária de Oliveira | Capol',
  siteDescription:
    'A Capol é uma cooperativa agropecuária fundada em 1963 em Oliveira, MG. Oferecemos rações, suplementos minerais, insumos agrícolas, assistência técnica e benefícios exclusivos para cooperados.',
  logoUrl: '/imagens/logos/logo-capol.png',
  primaryColor: '#2e7d32',
  secondaryColor: '#1b5e20',
  mainPhone: '(37) 3331.4410',
  mainEmail: 'contato@capol.com.br',
  instagramUrl: 'https://instagram.com/capol_oliveira',

  banners: [
    {
      src: '/imagens/banners/banner_sementes_insumos_adubos.jpg',
      alt: 'Sementes, Insumos e Adubos - Capol',
      link: '',
    },
    {
      src: '/imagens/banners/banner_do_plantio_ate_colheita.jpg',
      alt: 'Do Plantio até a Colheita - Capol',
      link: '',
    },
    {
      src: '/imagens/banners/banner_facilidade_homem_campo.jpg',
      alt: 'Facilidade para o Homem do Campo - Capol',
      link: '',
    },
    {
      src: '/imagens/banners/banner_capol_cafes.jpg',
      alt: 'Capol Cafés',
      link: '',
    },
  ],

  businessHours: [
    { day: 'Segunda-feira', open: '07:00', close: '18:00', isOpen: true },
    { day: 'Terça-feira', open: '07:00', close: '18:00', isOpen: true },
    { day: 'Quarta-feira', open: '07:00', close: '18:00', isOpen: true },
    { day: 'Quinta-feira', open: '07:00', close: '18:00', isOpen: true },
    { day: 'Sexta-feira', open: '07:00', close: '18:00', isOpen: true },
    { day: 'Sábado', open: '07:00', close: '12:00', isOpen: true },
    { day: 'Domingo', open: '00:00', close: '00:00', isOpen: false },
  ],

  addressMatriz:
    'Rua XV de Novembro, 100 - Centro, Oliveira - MG, 35540-000',
  addressFilial: '',
  phoneNumbers: ['(37) 3331.4410'],
  whatsappNumbers: [
    {
      label: 'Loja Fábrica de Cafés',
      number: '553798516781',
      display: '(37) 9 8851-6781',
    },
    {
      label: 'São Capol Cafés',
      number: '553799620986',
      display: '(37) 9 9962-0986',
    },
    {
      label: 'Oliveira',
      number: '553799021671',
      display: '(37) 9 9902-1671',
    },
  ],
  contactEmails: ['contato@capol.com.br'],

  metaTitle: 'Cooperativa Agropecuária de Oliveira | Capol',
  metaDescription:
    'Desde 1963 trabalhando pelo desenvolvimento do produtor rural e da agropecuária regional.',
  keywords: [
    'Capol',
    'cooperativa',
    'agropecuária',
    'Oliveira',
    'ração',
    'suplemento mineral',
    'insumos',
    'Minas Gerais',
  ],
  googleAnalyticsId: '',
  ogImageUrl: '',

  socialInstagram: 'https://instagram.com/capol_oliveira',
  socialFacebook: '',
  socialYoutube: '',
  socialLinkedin: '',
};

interface SiteConfigContextType {
  config: SiteConfig;
  updateConfig: (partial: Partial<SiteConfig>) => void;
  resetConfig: () => void;
}

const SiteConfigContext = createContext<SiteConfigContextType>({
  config: defaultConfig,
  updateConfig: () => {},
  resetConfig: () => {},
});

const STORAGE_KEY = 'capol-site-config';

export function SiteConfigProvider({ children }: { children: React.ReactNode }) {
  const [config, setConfig] = useState<SiteConfig>(defaultConfig);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as Partial<SiteConfig>;
        setConfig((prev) => ({ ...prev, ...parsed }));
      }
    } catch {
      // ignore parse errors
    }
    setLoaded(true);
  }, []);

  const updateConfig = useCallback((partial: Partial<SiteConfig>) => {
    setConfig((prev) => {
      const next = { ...prev, ...partial };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // ignore storage errors
      }
      return next;
    });
  }, []);

  const resetConfig = useCallback(() => {
    setConfig(defaultConfig);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  }, []);

  if (!loaded) return null;

  return (
    <SiteConfigContext.Provider value={{ config, updateConfig, resetConfig }}>
      {children}
    </SiteConfigContext.Provider>
  );
}

export function useSiteConfig() {
  return useContext(SiteConfigContext);
}

export { defaultConfig };
