'use client';

import { SiteConfig, HeroSlide, StatItem, ServiceItem, GalleryImage, AboutFeature, ProgressBar } from '@/contexts/SiteConfigContext';

interface Props {
  config: SiteConfig;
  onChange: (partial: Partial<SiteConfig>) => void;
  onSave: () => void;
}

export default function TabHomepage({ config, onChange, onSave }: Props) {
  const updateSlide = (index: number, field: keyof HeroSlide, value: string | string[]) => {
    const slides = [...config.heroSlides];
    slides[index] = { ...slides[index], [field]: value };
    onChange({ heroSlides: slides });
  };

  const addSlide = () => {
    onChange({ heroSlides: [...config.heroSlides, { bg: '', title: '', highlight: '', description: '', bullets: [], ctaLabel: '', ctaHref: '' }] });
  };

  const removeSlide = (index: number) => {
    onChange({ heroSlides: config.heroSlides.filter((_, i) => i !== index) });
  };

  const updateStat = (index: number, field: keyof StatItem, value: string) => {
    const stats = [...config.stats];
    stats[index] = { ...stats[index], [field]: value };
    onChange({ stats });
  };

  const addStat = () => {
    onChange({ stats: [...config.stats, { value: '', label: '' }] });
  };

  const removeStat = (index: number) => {
    onChange({ stats: config.stats.filter((_, i) => i !== index) });
  };

  const updateService = (index: number, field: keyof ServiceItem, value: string) => {
    const services = [...config.services];
    services[index] = { ...services[index], [field]: value };
    onChange({ services });
  };

  const addService = () => {
    onChange({ services: [...config.services, { title: '', description: '', link: '' }] });
  };

  const removeService = (index: number) => {
    onChange({ services: config.services.filter((_, i) => i !== index) });
  };

  const updateGalleryImage = (index: number, field: keyof GalleryImage, value: string) => {
    const images = [...config.homeGalleryImages];
    images[index] = { ...images[index], [field]: value };
    onChange({ homeGalleryImages: images });
  };

  const addGalleryImage = () => {
    onChange({ homeGalleryImages: [...config.homeGalleryImages, { src: '', alt: '' }] });
  };

  const removeGalleryImage = (index: number) => {
    onChange({ homeGalleryImages: config.homeGalleryImages.filter((_, i) => i !== index) });
  };

  const updateFeature = (index: number, field: keyof AboutFeature, value: string) => {
    const features = [...config.aboutFeatures];
    features[index] = { ...features[index], [field]: value };
    onChange({ aboutFeatures: features });
  };

  const addFeature = () => {
    onChange({ aboutFeatures: [...config.aboutFeatures, { title: '', description: '' }] });
  };

  const removeFeature = (index: number) => {
    onChange({ aboutFeatures: config.aboutFeatures.filter((_, i) => i !== index) });
  };

  const updateProgressBar = (index: number, field: keyof ProgressBar, value: string | number) => {
    const bars = [...config.progressBars];
    bars[index] = { ...bars[index], [field]: value };
    onChange({ progressBars: bars });
  };

  const addProgressBar = () => {
    onChange({ progressBars: [...config.progressBars, { label: '', value: 100 }] });
  };

  const removeProgressBar = (index: number) => {
    onChange({ progressBars: config.progressBars.filter((_, i) => i !== index) });
  };

  const inputClass = 'w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#2e7d32] focus:outline-none focus:ring-2 focus:ring-[#2e7d32]/20';
  const labelClass = 'mb-1 block text-sm font-medium text-gray-700';
  const sectionClass = 'border border-gray-200 rounded-xl p-5 space-y-4';
  const removeBtn = 'text-red-500 hover:text-red-700 text-xs font-medium';

  return (
    <div className="space-y-8">
      {/* Hero Slides */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Hero Slides</h3>
        <div className="space-y-4">
          {config.heroSlides.map((slide, i) => (
            <div key={i} className={sectionClass}>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-600">Slide {i + 1}</span>
                <button type="button" onClick={() => removeSlide(i)} className={removeBtn}>Remover</button>
              </div>
              <div>
                <label className={labelClass}>Imagem de Fundo (URL)</label>
                <input type="text" value={slide.bg} onChange={(e) => updateSlide(i, 'bg', e.target.value)} className={inputClass} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Título</label>
                  <input type="text" value={slide.title} onChange={(e) => updateSlide(i, 'title', e.target.value)} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Destaque</label>
                  <input type="text" value={slide.highlight} onChange={(e) => updateSlide(i, 'highlight', e.target.value)} className={inputClass} />
                </div>
              </div>
              <div>
                <label className={labelClass}>Descrição</label>
                <textarea value={slide.description} onChange={(e) => updateSlide(i, 'description', e.target.value)} rows={2} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Bullets (um por linha)</label>
                <textarea value={slide.bullets.join('\n')} onChange={(e) => updateSlide(i, 'bullets', e.target.value.split('\n'))} rows={3} className={inputClass} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Texto do Botão</label>
                  <input type="text" value={slide.ctaLabel} onChange={(e) => updateSlide(i, 'ctaLabel', e.target.value)} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Link do Botão</label>
                  <input type="text" value={slide.ctaHref} onChange={(e) => updateSlide(i, 'ctaHref', e.target.value)} className={inputClass} />
                </div>
              </div>
            </div>
          ))}
          <button type="button" onClick={addSlide} className="text-sm font-medium text-[#2e7d32] hover:underline">+ Adicionar Slide</button>
        </div>
      </div>

      {/* Stats */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Estatísticas</h3>
        <div className="space-y-3">
          {config.stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-3">
              <input type="text" value={stat.value} onChange={(e) => updateStat(i, 'value', e.target.value)} placeholder="60+" className="w-24 rounded-lg border border-gray-300 px-3 py-2 text-sm text-center font-bold" />
              <input type="text" value={stat.label} onChange={(e) => updateStat(i, 'label', e.target.value)} placeholder="Anos de história" className={inputClass} />
              <button type="button" onClick={() => removeStat(i)} className={removeBtn}>X</button>
            </div>
          ))}
          <button type="button" onClick={addStat} className="text-sm font-medium text-[#2e7d32] hover:underline">+ Adicionar Estatística</button>
        </div>
      </div>

      {/* Services */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Serviços</h3>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className={labelClass}>Tag</label>
            <input type="text" value={config.servicesTitle} onChange={(e) => onChange({ servicesTitle: e.target.value })} className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Título da Seção</label>
            <input type="text" value={config.servicesSubtitle} onChange={(e) => onChange({ servicesSubtitle: e.target.value })} className={inputClass} />
          </div>
        </div>
        <div className="space-y-4">
          {config.services.map((svc, i) => (
            <div key={i} className={sectionClass}>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-600">Serviço {i + 1}</span>
                <button type="button" onClick={() => removeService(i)} className={removeBtn}>Remover</button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Título</label>
                  <input type="text" value={svc.title} onChange={(e) => updateService(i, 'title', e.target.value)} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Link</label>
                  <input type="text" value={svc.link} onChange={(e) => updateService(i, 'link', e.target.value)} className={inputClass} />
                </div>
              </div>
              <div>
                <label className={labelClass}>Descrição</label>
                <textarea value={svc.description} onChange={(e) => updateService(i, 'description', e.target.value)} rows={2} className={inputClass} />
              </div>
            </div>
          ))}
          <button type="button" onClick={addService} className="text-sm font-medium text-[#2e7d32] hover:underline">+ Adicionar Serviço</button>
        </div>
      </div>

      {/* Gallery Section */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Galeria (Home)</h3>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className={labelClass}>Tag</label>
            <input type="text" value={config.gallerySectionTitle} onChange={(e) => onChange({ gallerySectionTitle: e.target.value })} className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Título</label>
            <input type="text" value={config.gallerySectionSubtitle} onChange={(e) => onChange({ gallerySectionSubtitle: e.target.value })} className={inputClass} />
          </div>
        </div>
        <div className="space-y-3">
          {config.homeGalleryImages.map((img, i) => (
            <div key={i} className="flex items-center gap-3">
              <input type="text" value={img.src} onChange={(e) => updateGalleryImage(i, 'src', e.target.value)} placeholder="URL da imagem" className={inputClass} />
              <input type="text" value={img.alt} onChange={(e) => updateGalleryImage(i, 'alt', e.target.value)} placeholder="Descrição" className="w-40 rounded-lg border border-gray-300 px-3 py-2.5 text-sm" />
              <button type="button" onClick={() => removeGalleryImage(i)} className={removeBtn}>X</button>
            </div>
          ))}
          <button type="button" onClick={addGalleryImage} className="text-sm font-medium text-[#2e7d32] hover:underline">+ Adicionar Imagem</button>
        </div>
      </div>

      {/* About Section */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Seção Quem Somos (Home)</h3>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Tag</label>
              <input type="text" value={config.aboutSectionTag} onChange={(e) => onChange({ aboutSectionTag: e.target.value })} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Título</label>
              <input type="text" value={config.aboutSectionTitle} onChange={(e) => onChange({ aboutSectionTitle: e.target.value })} className={inputClass} />
            </div>
          </div>
          <div>
            <label className={labelClass}>Texto</label>
            <textarea value={config.aboutSectionText} onChange={(e) => onChange({ aboutSectionText: e.target.value })} rows={3} className={inputClass} />
          </div>
          <div>
            <label className={labelClass + ' mt-4'}>Destaques</label>
            {config.aboutFeatures.map((feat, i) => (
              <div key={i} className="flex items-start gap-3 mt-2">
                <input type="text" value={feat.title} onChange={(e) => updateFeature(i, 'title', e.target.value)} placeholder="Título" className="w-1/3 rounded-lg border border-gray-300 px-3 py-2 text-sm" />
                <input type="text" value={feat.description} onChange={(e) => updateFeature(i, 'description', e.target.value)} placeholder="Descrição" className={inputClass} />
                <button type="button" onClick={() => removeFeature(i)} className={removeBtn}>X</button>
              </div>
            ))}
            <button type="button" onClick={addFeature} className="text-sm font-medium text-[#2e7d32] hover:underline mt-2">+ Adicionar Destaque</button>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Por Que Nos Escolher</h3>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Tag</label>
              <input type="text" value={config.whyChooseUsTag} onChange={(e) => onChange({ whyChooseUsTag: e.target.value })} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Título</label>
              <input type="text" value={config.whyChooseUsTitle} onChange={(e) => onChange({ whyChooseUsTitle: e.target.value })} className={inputClass} />
            </div>
          </div>
          <div>
            <label className={labelClass}>Texto</label>
            <textarea value={config.whyChooseUsText} onChange={(e) => onChange({ whyChooseUsText: e.target.value })} rows={2} className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Imagem</label>
            <input type="text" value={config.whyChooseUsImage} onChange={(e) => onChange({ whyChooseUsImage: e.target.value })} className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Barras de Progresso</label>
            {config.progressBars.map((bar, i) => (
              <div key={i} className="flex items-center gap-3 mt-2">
                <input type="text" value={bar.label} onChange={(e) => updateProgressBar(i, 'label', e.target.value)} placeholder="Label" className={inputClass} />
                <input type="number" value={bar.value} onChange={(e) => updateProgressBar(i, 'value', Number(e.target.value))} min={0} max={100} className="w-20 rounded-lg border border-gray-300 px-3 py-2 text-sm text-center" />
                <span className="text-xs text-gray-500">%</span>
                <button type="button" onClick={() => removeProgressBar(i)} className={removeBtn}>X</button>
              </div>
            ))}
            <button type="button" onClick={addProgressBar} className="text-sm font-medium text-[#2e7d32] hover:underline mt-2">+ Adicionar Barra</button>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Seção de Produtos</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Tag</label>
            <input type="text" value={config.productsSectionTag} onChange={(e) => onChange({ productsSectionTag: e.target.value })} className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Título</label>
            <input type="text" value={config.productsSectionTitle} onChange={(e) => onChange({ productsSectionTitle: e.target.value })} className={inputClass} />
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Newsletter</h3>
        <div className="space-y-4">
          <div>
            <label className={labelClass}>Título</label>
            <input type="text" value={config.newsletterTitle} onChange={(e) => onChange({ newsletterTitle: e.target.value })} className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Texto</label>
            <textarea value={config.newsletterText} onChange={(e) => onChange({ newsletterText: e.target.value })} rows={2} className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Vídeo de Fundo (URL)</label>
            <input type="text" value={config.newsletterVideoUrl} onChange={(e) => onChange({ newsletterVideoUrl: e.target.value })} className={inputClass} />
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <button type="button" onClick={onSave} className="rounded-lg bg-[#2e7d32] px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1b5e20]">
          Salvar
        </button>
      </div>
    </div>
  );
}
