'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { assetPath } from '@/lib/utils';
import { products, categories } from '@/data/products';
import { blogPosts } from '@/data/blog';

const heroSlides = [
  {
    bg: '/imagens/banners/banner_sementes_insumos_adubos.jpg',
    title: 'Sementes, Insumos, Adubos e',
    highlight: 'Beneficiamento',
    description: 'Tudo o que o produtor rural precisa para uma produção de alta qualidade, reunido em um só lugar.',
    bullets: ['Sementes selecionadas', 'Insumos agrícolas', 'Adubos de qualidade', 'Beneficiamento completo'],
    cta: { label: 'Ver Produtos', href: '/produtos' },
    image: '/imagens/banners/banner_sementes_insumos_adubos.jpg',
  },
  {
    bg: '/imagens/banners/banner_do_plantio_ate_colheita.jpg',
    title: 'Do plantio até a colheita,',
    highlight: 'estamos com você',
    description: 'A CAPOL acompanha o produtor rural em todas as etapas, oferecendo assistência técnica e produtos de confiança.',
    bullets: ['Assistência técnica especializada', 'Acompanhamento completo'],
    cta: { label: 'Quem Somos', href: '/quem-somos' },
    image: '/imagens/banners/banner_do_plantio_ate_colheita.jpg',
  },
  {
    bg: '/imagens/banners/banner_facilidade_homem_campo.jpg',
    title: 'Facilidade para o',
    highlight: 'homem do campo',
    description: 'Desde 1963, a CAPOL trabalha pelo desenvolvimento do produtor rural e da agropecuária regional em Oliveira/MG.',
    bullets: ['Rações de alta qualidade', 'Cafés especiais reconhecidos'],
    cta: { label: 'Fale Conosco', href: '/contato' },
    image: '/imagens/banners/banner_facilidade_homem_campo.jpg',
  },
];

const stats = [
  { value: '60+', label: 'Anos de história', icon: '🏛️' },
  { value: '48', label: 'Produtos', icon: '📦' },
  { value: '12', label: 'Categorias', icon: '🏷️' },
  { value: '1000+', label: 'Cooperados', icon: '👥' },
];

const services = [
  {
    title: 'Nutrição Animal',
    desc: 'Rações balanceadas e suplementos para bovinos, aves, equinos e suínos com a mais alta qualidade.',
    icon: (
      <svg className="w-12 h-12 text-[#2e7d32]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    link: '/produtos',
  },
  {
    title: 'Capol Cafés',
    desc: 'Cafés especiais produzidos com paixão e qualidade, direto das melhores lavouras da região.',
    icon: (
      <svg className="w-12 h-12 text-[#2e7d32]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3" />
      </svg>
    ),
    link: '/capol-cafes',
  },
  {
    title: 'Assistência Técnica',
    desc: 'Profissionais qualificados para orientar o produtor rural em todas as etapas da produção.',
    icon: (
      <svg className="w-12 h-12 text-[#2e7d32]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    link: '/blog/assistencia-tecnica-e-especializada',
  },
];

const galleryImages = [
  { src: '/imagens/galeria-capas/fabrica-de-racao.jpg', alt: 'Fábrica de Ração', large: true },
  { src: '/imagens/galeria-capas/armazenagem.jpg', alt: 'Armazenagem', large: false },
  { src: '/imagens/galeria-capas/veiculos.jpg', alt: 'Veículos', large: false },
  { src: '/imagens/galeria-capas/beneficiamento.jpg', alt: 'Beneficiamento', large: false },
  { src: '/imagens/galeria-capas/capol-oliveira.jpg', alt: 'Capol Oliveira', large: false },
];

const categoryFilters = ['Todos', 'Aves', 'Bovinos', 'Equinos', 'Suínos'];
const categoryMap: Record<string, string> = {
  'Aves': 'aves',
  'Bovinos': 'corte',
  'Equinos': 'equinos',
  'Suínos': 'suinos',
};

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [currentSlide, setCurrentSlide] = useState(0);

  const filteredProducts = activeFilter === 'Todos'
    ? products.slice(0, 6)
    : products.filter(p => p.category === categoryMap[activeFilter]).slice(0, 6);

  const recentPosts = blogPosts.slice(0, 3);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <>
      {/* ===== HERO SLIDER ===== */}
      <section className="relative overflow-hidden">
        {/* Slides */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {heroSlides.map((slide, index) => (
            <div key={index} className="relative min-w-full">
              {/* Background image */}
              <div className="absolute inset-0">
                <Image
                  src={assetPath(slide.bg)}
                  alt=""
                  fill
                  className="object-cover"
                  priority={index === 0}
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a5c20]/90 via-[#1a5c20]/70 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Left: Text */}
                  <div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                      {slide.title}{' '}
                      <span className="text-[#4caf50]">{slide.highlight}</span>
                    </h2>
                    <div className="w-16 h-1 bg-[#4caf50] mb-6" />
                    <p className="text-white/80 text-lg mb-8 max-w-lg" style={{ fontFamily: 'Lato, sans-serif' }}>
                      {slide.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {slide.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-center text-white font-semibold">
                          <span className="text-[#4caf50] mr-3">»</span> {bullet}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={slide.cta.href}
                      className="inline-flex items-center bg-[#4caf50] hover:bg-[#388e3c] text-white font-bold px-8 py-4 rounded-full transition-colors text-sm uppercase tracking-wider"
                    >
                      {slide.cta.label} <span className="ml-2">→</span>
                    </Link>
                  </div>

                  {/* Right: Circular Image */}
                  <div className="hidden lg:flex justify-center lg:justify-end">
                    <div className="relative">
                      <div className="w-[420px] h-[420px] rounded-full border-4 border-dashed border-[#4caf50]/40 flex items-center justify-center">
                        <div className="relative w-[370px] h-[370px] rounded-full overflow-hidden border-4 border-white shadow-2xl">
                          <Image
                            src={assetPath(slide.image)}
                            alt={slide.highlight}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#ffc107] rounded-full opacity-80" />
                      <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#4caf50] rounded-full opacity-60" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          type="button"
          onClick={prevSlide}
          className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/40"
          aria-label="Slide anterior"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button
          type="button"
          onClick={nextSlide}
          className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/40"
          aria-label="Próximo slide"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'w-8 bg-[#4caf50]'
                  : 'w-3 bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image composition */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-dashed border-[#2e7d32]/30">
                  <Image
                    src={assetPath('/imagens/home-centro/banner-racao-balanceada.jpg')}
                    alt="Ração Balanceada"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Floating small circles */}
                <div className="absolute -top-6 right-0 w-16 h-16 rounded-full border-2 border-dashed border-[#2e7d32]/40 flex items-center justify-center bg-white shadow-md">
                  <span className="text-2xl">🌾</span>
                </div>
                <div className="absolute -left-6 top-1/2 w-14 h-14 rounded-full border-2 border-dashed border-[#2e7d32]/40 flex items-center justify-center bg-white shadow-md">
                  <span className="text-xl">🐄</span>
                </div>
                <div className="absolute -bottom-4 left-1/4 w-14 h-14 rounded-full border-2 border-dashed border-[#2e7d32]/40 flex items-center justify-center bg-white shadow-md">
                  <span className="text-xl">☕</span>
                </div>
              </div>
            </div>
            {/* Right: Content */}
            <div>
              <span className="text-[#2e7d32] font-semibold text-sm uppercase tracking-wider">Por que nos escolher</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mt-2 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Qualidade e tradição no campo desde 1963
              </h2>
              <p className="text-gray-500 mb-8" style={{ fontFamily: 'Lato, sans-serif' }}>
                A CAPOL é uma cooperativa agropecuária comprometida com o desenvolvimento rural, oferecendo os melhores produtos e serviços para o produtor.
              </p>
              {/* Progress bars */}
              <div className="space-y-6 mb-8">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-[#1a1a2e]">Qualidade dos Produtos</span>
                    <span className="font-semibold text-[#1a1a2e]">95%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-[#ffc107] rounded-full" style={{ width: '95%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-[#1a1a2e]">Satisfação dos Cooperados</span>
                    <span className="font-semibold text-[#1a1a2e]">90%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-[#ffc107] rounded-full" style={{ width: '90%' }} />
                  </div>
                </div>
              </div>
              <Link
                href="/quem-somos"
                className="inline-flex items-center border-2 border-[#ffc107] text-[#1a1a2e] font-semibold px-8 py-3 rounded-full hover:bg-[#ffc107] hover:text-white transition-colors"
              >
                Saiba Mais
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="py-20 bg-[#f0f7f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#2e7d32] font-semibold text-sm uppercase tracking-wider">Nossa Galeria</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mt-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
              Conheça nossa estrutura
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* Large image */}
            <div className="col-span-2 row-span-2 relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden group">
              <Image
                src={assetPath(galleryImages[0].src)}
                alt={galleryImages[0].alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            </div>
            {/* Small images */}
            {galleryImages.slice(1).map((img, i) => (
              <div key={i} className="relative h-[140px] md:h-[240px] rounded-2xl overflow-hidden group">
                <Image
                  src={assetPath(img.src)}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/galerias" className="text-[#2e7d32] font-semibold hover:underline">
              Ver todas as galerias →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== STATS COUNTER ===== */}
      <section className="py-16 bg-[#f0f7f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#2e7d32] mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  {stat.value}
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-500">
                  <span className="text-xl">{stat.icon}</span>
                  <span className="font-medium">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#2e7d32] font-semibold text-sm uppercase tracking-wider">Nossos Serviços</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mt-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
              Soluções completas para o produtor rural
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((svc) => (
              <Link
                key={svc.title}
                href={svc.link}
                className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-[#f0f7f0] rounded-xl flex items-center justify-center group-hover:bg-[#2e7d32] group-hover:text-white transition-colors [&_svg]:group-hover:text-white">
                    {svc.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1a1a2e] mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                      {svc.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-4" style={{ fontFamily: 'Lato, sans-serif' }}>
                      {svc.desc}
                    </p>
                    <span className="text-[#2e7d32] font-semibold text-sm inline-flex items-center">
                      Saiba Mais <span className="ml-2">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="text-[#2e7d32] font-semibold text-sm uppercase tracking-wider">Nossos Produtos</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mt-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Rações de qualidade do campo à mesa
              </h2>
            </div>
            <div className="flex gap-2 mt-4 md:mt-0 flex-wrap">
              {categoryFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                    activeFilter === filter
                      ? 'bg-[#2e7d32] text-white'
                      : 'bg-white border border-gray-300 text-gray-600 hover:border-[#2e7d32] hover:text-[#2e7d32]'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Link
                key={product.slug}
                href={`/produto/${product.slug}`}
                className="border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group bg-white"
              >
                <div className="flex items-center p-4 gap-4">
                  <div className="relative w-28 h-28 flex-shrink-0 bg-[#f0f7f0] rounded-xl overflow-hidden">
                    <Image
                      src={assetPath(product.image)}
                      alt={product.name}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a1a2e] mb-1" style={{ fontFamily: 'Raleway, sans-serif' }}>
                      {product.name}
                    </h3>
                    <p className="text-gray-400 text-xs mb-3">
                      {categories.find(c => c.slug === product.category)?.name || product.category}
                    </p>
                    <span className="inline-block border border-gray-300 rounded-full px-4 py-1 text-xs font-semibold text-gray-600 group-hover:border-[#2e7d32] group-hover:text-[#2e7d32] transition-colors">
                      Ver Produto
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/produtos"
              className="inline-flex items-center bg-[#2e7d32] hover:bg-[#1b5e20] text-white font-bold px-8 py-3 rounded-full transition-colors text-sm uppercase tracking-wider"
            >
              Ver Todos os Produtos →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHO WE ARE + CONTACT ===== */}
      <section className="py-20 bg-[#1a5c20] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src={assetPath('/imagens/banners/banner_capol_cafes.jpg')}
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <div>
              <span className="text-[#4caf50] font-semibold text-sm uppercase tracking-wider">Quem Somos</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Tradição e inovação na agropecuária mineira
              </h2>
              <p className="text-white/70 mb-6" style={{ fontFamily: 'Lato, sans-serif' }}>
                A CAPOL - Cooperativa Agropecuária de Oliveira foi fundada em 1963 com o objetivo de fortalecer o produtor rural da região. Hoje, somos referência em nutrição animal e cafés especiais.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#4caf50]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#4caf50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Produtos de Qualidade</h4>
                    <p className="text-white/60 text-sm">Rações balanceadas e cafés especiais com rigoroso controle de qualidade.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#4caf50]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#4caf50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Compromisso com o Campo</h4>
                    <p className="text-white/60 text-sm">Assistência técnica especializada para o produtor rural.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Right: Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-[#1a1a2e] mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Entre em contato
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Nome"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#2e7d32]"
                  />
                  <input
                    type="email"
                    placeholder="E-mail"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#2e7d32]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder="Telefone"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#2e7d32]"
                  />
                  <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-500 focus:outline-none focus:border-[#2e7d32]">
                    <option>Sua Área</option>
                    <option>Nutrição Animal</option>
                    <option>Cafés</option>
                    <option>Insumos</option>
                    <option>Outro</option>
                  </select>
                </div>
                <textarea
                  placeholder="Mensagem"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#2e7d32] resize-none"
                />
                <button
                  type="button"
                  className="w-full bg-[#ffc107] hover:bg-[#ffb300] text-[#1a1a2e] font-bold py-3 rounded-xl transition-colors uppercase tracking-wider text-sm"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BLOG ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#2e7d32] font-semibold text-sm uppercase tracking-wider">Nosso Blog</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mt-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
              Novidades e informações do campo
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="relative h-[220px] overflow-hidden">
                  <Image
                    src={assetPath(post.image)}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#2e7d32] text-white text-xs font-bold px-3 py-1 rounded-full">
                    Capol
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                      Comentários
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                      Admin
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#1a1a2e] mb-2 group-hover:text-[#2e7d32] transition-colors" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2 mb-4" style={{ fontFamily: 'Lato, sans-serif' }}>
                    {post.excerpt}
                  </p>
                  <span className="text-[#2e7d32] font-semibold text-sm inline-flex items-center">
                    Leia Mais <span className="ml-2">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section className="py-16 bg-[#1a5c20] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src={assetPath('/imagens/banners/banner_sementes_insumos_adubos.jpg')}
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="flex justify-center">
              <div className="relative w-[250px] h-[250px] md:w-[300px] md:h-[300px]">
                <div className="w-full h-full rounded-full bg-[#ffc107] overflow-hidden flex items-center justify-center">
                  <Image
                    src={assetPath('/imagens/seguimentos/bovinos.jpg')}
                    alt="Newsletter"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
            {/* Right: Newsletter form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Inscreva-se em nossa newsletter
              </h2>
              <p className="text-white/70 mb-8" style={{ fontFamily: 'Lato, sans-serif' }}>
                Receba novidades, dicas e informações sobre nossos produtos diretamente no seu e-mail.
              </p>
              <div className="flex max-w-lg">
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="flex-1 px-6 py-4 rounded-l-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#4caf50]"
                />
                <button className="bg-[#4caf50] hover:bg-[#388e3c] text-white px-6 py-4 rounded-r-full transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
