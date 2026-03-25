'use client';

import { SiteConfig, GalleryImage } from '@/contexts/SiteConfigContext';

interface Props {
  config: SiteConfig;
  onChange: (partial: Partial<SiteConfig>) => void;
  onSave: () => void;
}

export default function TabFooter({ config, onChange, onSave }: Props) {
  const footer = config.footer;

  const updateFooter = (field: string, value: unknown) => {
    onChange({ footer: { ...footer, [field]: value } });
  };

  const updateThumb = (index: number, field: keyof GalleryImage, value: string) => {
    const thumbs = [...footer.galleryThumbnails];
    thumbs[index] = { ...thumbs[index], [field]: value };
    updateFooter('galleryThumbnails', thumbs);
  };

  const addThumb = () => {
    updateFooter('galleryThumbnails', [...footer.galleryThumbnails, { src: '', alt: '' }]);
  };

  const removeThumb = (index: number) => {
    updateFooter('galleryThumbnails', footer.galleryThumbnails.filter((_: GalleryImage, i: number) => i !== index));
  };

  const inputClass = 'w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#2e7d32] focus:outline-none focus:ring-2 focus:ring-[#2e7d32]/20';
  const labelClass = 'mb-1 block text-sm font-medium text-gray-700';

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-bold text-gray-900">Rodapé</h3>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Título Horários</label>
          <input type="text" value={footer.hoursTitle} onChange={(e) => updateFooter('hoursTitle', e.target.value)} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Descrição Horários</label>
          <input type="text" value={footer.hoursDescription} onChange={(e) => updateFooter('hoursDescription', e.target.value)} className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Título Contato</label>
          <input type="text" value={footer.contactTitle} onChange={(e) => updateFooter('contactTitle', e.target.value)} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Descrição Contato</label>
          <input type="text" value={footer.contactDescription} onChange={(e) => updateFooter('contactDescription', e.target.value)} className={inputClass} />
        </div>
      </div>

      <div>
        <label className={labelClass}>Título Galerias</label>
        <input type="text" value={footer.galleriesTitle} onChange={(e) => updateFooter('galleriesTitle', e.target.value)} className={inputClass} />
      </div>

      <div>
        <label className={labelClass}>Miniaturas da Galeria</label>
        <div className="space-y-2">
          {footer.galleryThumbnails.map((thumb: GalleryImage, i: number) => (
            <div key={i} className="flex items-center gap-3">
              <input type="text" value={thumb.src} onChange={(e) => updateThumb(i, 'src', e.target.value)} placeholder="URL da imagem" className={inputClass} />
              <input type="text" value={thumb.alt} onChange={(e) => updateThumb(i, 'alt', e.target.value)} placeholder="Descrição" className="w-40 rounded-lg border border-gray-300 px-3 py-2.5 text-sm" />
              <button type="button" onClick={() => removeThumb(i)} className="text-red-500 hover:text-red-700 text-xs font-medium">X</button>
            </div>
          ))}
          <button type="button" onClick={addThumb} className="text-sm font-medium text-[#2e7d32] hover:underline">+ Adicionar Miniatura</button>
        </div>
      </div>

      <div>
        <label className={labelClass}>Texto de Copyright</label>
        <input type="text" value={footer.copyrightText} onChange={(e) => updateFooter('copyrightText', e.target.value)} className={inputClass} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Nome do Desenvolvedor</label>
          <input type="text" value={footer.developerName} onChange={(e) => updateFooter('developerName', e.target.value)} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>URL do Desenvolvedor</label>
          <input type="text" value={footer.developerUrl} onChange={(e) => updateFooter('developerUrl', e.target.value)} className={inputClass} />
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
