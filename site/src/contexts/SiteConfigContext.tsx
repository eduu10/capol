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

export interface HeroSlide {
  bg: string;
  title: string;
  highlight: string;
  description: string;
  bullets: string[];
  ctaLabel: string;
  ctaHref: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  link: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface AboutFeature {
  title: string;
  description: string;
}

export interface ProgressBar {
  label: string;
  value: number;
}

export interface FooterConfig {
  hoursTitle: string;
  hoursDescription: string;
  contactTitle: string;
  contactDescription: string;
  galleriesTitle: string;
  galleryThumbnails: GalleryImage[];
  copyrightText: string;
  developerName: string;
  developerUrl: string;
}

export interface SiteConfig {
  // Geral
  siteName: string;
  siteDescription: string;
  logoUrl: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  mainPhone: string;
  mainEmail: string;
  instagramUrl: string;

  // Banners
  banners: BannerItem[];

  // Hero Slides
  heroSlides: HeroSlide[];

  // Estatísticas
  stats: StatItem[];

  // Serviços
  servicesTitle: string;
  servicesSubtitle: string;
  services: ServiceItem[];

  // Galeria Home
  gallerySectionTitle: string;
  gallerySectionSubtitle: string;
  homeGalleryImages: GalleryImage[];

  // Quem Somos (seção home)
  aboutSectionTag: string;
  aboutSectionTitle: string;
  aboutSectionText: string;
  aboutFeatures: AboutFeature[];

  // Por que nos escolher
  whyChooseUsTag: string;
  whyChooseUsTitle: string;
  whyChooseUsText: string;
  whyChooseUsImage: string;
  progressBars: ProgressBar[];

  // Newsletter
  newsletterTitle: string;
  newsletterText: string;
  newsletterVideoUrl: string;

  // Seção Produtos Home
  productsSectionTag: string;
  productsSectionTitle: string;

  // Footer
  footer: FooterConfig;

  // Horarios
  businessHours: BusinessHours[];

  // Contato & WhatsApp
  addressMatriz: string;
  addressFilial: string;
  phoneNumbers: string[];
  whatsappNumbers: WhatsAppNumber[];
  contactEmails: string[];

  // Contato Página
  matrizPhone: string;
  matrizWhatsapp: string;
  matrizEmails: string[];
  filialPhone: string;
  filialMobiles: string[];
  filialEmails: string[];
  mapMatrizUrl: string;
  mapFilialUrl: string;

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
  accentColor: '#ffc107',
  mainPhone: '(37) 3331.4410',
  mainEmail: 'contato@capol.com.br',
  instagramUrl: 'https://instagram.com/capol_oliveira',

  banners: [
    { src: '/imagens/banners/banner_sementes_insumos_adubos.jpg', alt: 'Sementes, Insumos e Adubos - Capol', link: '' },
    { src: '/imagens/banners/banner_do_plantio_ate_colheita.jpg', alt: 'Do Plantio até a Colheita - Capol', link: '' },
    { src: '/imagens/banners/banner_facilidade_homem_campo.jpg', alt: 'Facilidade para o Homem do Campo - Capol', link: '' },
    { src: '/imagens/banners/banner_capol_cafes.jpg', alt: 'Capol Cafés', link: '' },
  ],

  heroSlides: [
    {
      bg: '/imagens/banners/banner_sementes_insumos_adubos.jpg',
      title: 'Sementes, Insumos, Adubos e',
      highlight: 'Beneficiamento',
      description: 'Tudo o que o produtor rural precisa para uma produção de alta qualidade, reunido em um só lugar.',
      bullets: ['Sementes selecionadas', 'Insumos agrícolas', 'Adubos de qualidade', 'Beneficiamento completo'],
      ctaLabel: 'Ver Produtos',
      ctaHref: '/produtos',
    },
    {
      bg: '/imagens/banners/banner_do_plantio_ate_colheita.jpg',
      title: 'Do plantio até a colheita,',
      highlight: 'estamos com você',
      description: 'A CAPOL acompanha o produtor rural em todas as etapas, oferecendo assistência técnica e produtos de confiança.',
      bullets: ['Assistência técnica especializada', 'Acompanhamento completo'],
      ctaLabel: 'Quem Somos',
      ctaHref: '/quem-somos',
    },
    {
      bg: '/imagens/banners/banner_facilidade_homem_campo.jpg',
      title: 'Facilidade para o',
      highlight: 'homem do campo',
      description: 'Desde 1963, a CAPOL trabalha pelo desenvolvimento do produtor rural e da agropecuária regional em Oliveira/MG.',
      bullets: ['Rações de alta qualidade', 'Cafés especiais reconhecidos'],
      ctaLabel: 'Fale Conosco',
      ctaHref: '/contato',
    },
  ],

  stats: [
    { value: '60+', label: 'Anos de história' },
    { value: '48', label: 'Produtos' },
    { value: '12', label: 'Categorias' },
    { value: '1000+', label: 'Cooperados' },
  ],

  servicesTitle: 'Nossos Serviços',
  servicesSubtitle: 'Soluções completas para o produtor rural',
  services: [
    { title: 'Nutrição Animal', description: 'Rações balanceadas e suplementos para bovinos, aves, equinos e suínos com a mais alta qualidade.', link: '/produtos' },
    { title: 'Capol Cafés', description: 'Cafés especiais produzidos com paixão e qualidade, direto das melhores lavouras da região.', link: '/capol-cafes' },
    { title: 'Assistência Técnica', description: 'Profissionais qualificados para orientar o produtor rural em todas as etapas da produção.', link: '/blog/assistencia-tecnica-e-especializada' },
  ],

  gallerySectionTitle: 'Nossa Galeria',
  gallerySectionSubtitle: 'Conheça nossa estrutura',
  homeGalleryImages: [
    { src: '/imagens/galeria-capas/capol-oliveira.jpg', alt: 'Capol Oliveira' },
    { src: '/imagens/galeria-capas/armazenagem.jpg', alt: 'Armazenagem' },
    { src: '/imagens/galeria-capas/beneficiamento.jpg', alt: 'Beneficiamento' },
    { src: '/imagens/galeria-capas/sao-francisco-de-paula.jpg', alt: 'São Francisco de Paula' },
  ],

  aboutSectionTag: 'Quem Somos',
  aboutSectionTitle: 'Tradição e inovação na agropecuária mineira',
  aboutSectionText: 'A CAPOL - Cooperativa Agropecuária de Oliveira foi fundada em 1963 com o objetivo de fortalecer o produtor rural da região. Hoje, somos referência em nutrição animal e cafés especiais.',
  aboutFeatures: [
    { title: 'Produtos de Qualidade', description: 'Rações balanceadas e cafés especiais com rigoroso controle de qualidade.' },
    { title: 'Compromisso com o Campo', description: 'Assistência técnica especializada para o produtor rural.' },
  ],

  whyChooseUsTag: 'Por que nos escolher',
  whyChooseUsTitle: 'Qualidade e tradição no campo desde 1963',
  whyChooseUsText: 'A CAPOL é uma cooperativa agropecuária comprometida com o desenvolvimento rural, oferecendo os melhores produtos e serviços para o produtor.',
  whyChooseUsImage: '/imagens/home-centro/banner-racao-balanceada.jpg',
  progressBars: [
    { label: 'Qualidade dos Produtos', value: 100 },
    { label: 'Satisfação dos Cooperados', value: 100 },
  ],

  newsletterTitle: 'Inscreva-se em nossa newsletter',
  newsletterText: 'Receba novidades, dicas e informações sobre nossos produtos diretamente no seu e-mail.',
  newsletterVideoUrl: '/video-campo.mp4',

  productsSectionTag: 'Nossos Produtos',
  productsSectionTitle: 'Rações de qualidade do campo à mesa',

  footer: {
    hoursTitle: 'Horário de Funcionamento',
    hoursDescription: 'Confira nosso horário de funcionamento e nos faça uma visita.',
    contactTitle: 'Contato',
    contactDescription: 'Venha nos visitar ou entre em contato conosco. Estamos prontos para atendê-lo.',
    galleriesTitle: 'Galerias',
    galleryThumbnails: [
      { src: '/imagens/galeria-capas/capol-oliveira.jpg', alt: 'Capol Oliveira' },
      { src: '/imagens/galeria-capas/fabrica-de-racao.jpg', alt: 'Fábrica de Ração' },
      { src: '/imagens/galeria-capas/armazenagem.jpg', alt: 'Armazenagem' },
      { src: '/imagens/galeria-capas/sao-francisco-de-paula.jpg', alt: 'São Francisco de Paula' },
      { src: '/imagens/galeria-capas/beneficiamento.jpg', alt: 'Beneficiamento' },
      { src: '/imagens/galeria-capas/veiculos.jpg', alt: 'Veículos' },
    ],
    copyrightText: 'Copyrights © 2026 Todos os Direitos Reservados.',
    developerName: 'Weebs Sites',
    developerUrl: 'https://weebsites.com.br/',
  },

  businessHours: [
    { day: 'Segunda-feira', open: '07:00', close: '18:00', isOpen: true },
    { day: 'Terça-feira', open: '07:00', close: '18:00', isOpen: true },
    { day: 'Quarta-feira', open: '07:00', close: '18:00', isOpen: true },
    { day: 'Quinta-feira', open: '07:00', close: '18:00', isOpen: true },
    { day: 'Sexta-feira', open: '07:00', close: '18:00', isOpen: true },
    { day: 'Sábado', open: '07:00', close: '12:00', isOpen: true },
    { day: 'Domingo', open: '00:00', close: '00:00', isOpen: false },
  ],

  addressMatriz: 'Av. Maracanã, 336, Bairro das Graças, Oliveira - MG, 35540-000',
  addressFilial: 'Rua Padre Joaquim Cardoso, 1050, São Francisco de Paula - MG',
  phoneNumbers: ['(37) 3331.4410'],
  whatsappNumbers: [
    { label: 'CAPOL OLIVEIRA', number: '553799021671', display: '(37) 9 9902-1671' },
    { label: 'CAPOL CAFÉS', number: '553799620986', display: '(37) 9 9962-0986' },
    { label: 'LOJA | FÁBRICA DE RAÇÃO', number: '553798516781', display: '(37) 9 8851-6781' },
  ],
  contactEmails: ['contato@capol.com.br'],

  matrizPhone: '(37) 3331.4410',
  matrizWhatsapp: '(37) 9 9902.1671',
  matrizEmails: ['fabricio@capol.com.br', 'comercial@capol.com.br', 'tida@capol.com.br', 'adriana@capol.com.br', 'lucas@capol.com.br'],
  filialPhone: '(37) 3332.1233',
  filialMobiles: ['(37) 9 8851.6781 (Oi)', '(37) 9 9861.2138 (Vivo)'],
  filialEmails: ['gerencia@capol.com.br', 'vendas@capol.com.br'],
  mapMatrizUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.123!2d-44.826!3d-20.698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDQxJzUyLjgiUyA0NMKwNDknMzMuNiJX!5e0!3m2!1spt-BR!2sbr!4v1',
  mapFilialUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.123!2d-44.826!3d-20.698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDQxJzUyLjgiUyA0NMKwNDknMzMuNiJX!5e0!3m2!1spt-BR!2sbr!4v2',

  metaTitle: 'Cooperativa Agropecuária de Oliveira | Capol',
  metaDescription: 'Desde 1963 trabalhando pelo desenvolvimento do produtor rural e da agropecuária regional.',
  keywords: ['Capol', 'cooperativa', 'agropecuária', 'Oliveira', 'ração', 'suplemento mineral', 'insumos', 'Minas Gerais'],
  googleAnalyticsId: '',
  ogImageUrl: '',

  socialInstagram: 'https://instagram.com/capol_oliveira',
  socialFacebook: 'https://facebook.com/capololiveira',
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
