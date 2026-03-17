'use client';

import { SiteConfig, WhatsAppNumber } from '@/contexts/SiteConfigContext';

interface TabContatoProps {
  config: SiteConfig;
  onChange: (partial: Partial<SiteConfig>) => void;
  onSave: () => void;
}

export default function TabContato({ config, onChange, onSave }: TabContatoProps) {
  // Phone numbers
  const addPhone = () => {
    onChange({ phoneNumbers: [...config.phoneNumbers, ''] });
  };

  const updatePhone = (index: number, value: string) => {
    const updated = [...config.phoneNumbers];
    updated[index] = value;
    onChange({ phoneNumbers: updated });
  };

  const removePhone = (index: number) => {
    onChange({ phoneNumbers: config.phoneNumbers.filter((_, i) => i !== index) });
  };

  // WhatsApp numbers
  const addWhatsApp = () => {
    onChange({
      whatsappNumbers: [
        ...config.whatsappNumbers,
        { label: '', number: '', display: '' },
      ],
    });
  };

  const updateWhatsApp = (index: number, field: keyof WhatsAppNumber, value: string) => {
    const updated = [...config.whatsappNumbers];
    updated[index] = { ...updated[index], [field]: value };
    onChange({ whatsappNumbers: updated });
  };

  const removeWhatsApp = (index: number) => {
    onChange({
      whatsappNumbers: config.whatsappNumbers.filter((_, i) => i !== index),
    });
  };

  // Contact emails
  const addEmail = () => {
    onChange({ contactEmails: [...config.contactEmails, ''] });
  };

  const updateEmail = (index: number, value: string) => {
    const updated = [...config.contactEmails];
    updated[index] = value;
    onChange({ contactEmails: updated });
  };

  const removeEmail = (index: number) => {
    onChange({ contactEmails: config.contactEmails.filter((_, i) => i !== index) });
  };

  return (
    <div className="space-y-8">
      {/* Enderecos */}
      <div>
        <h3 className="mb-3 text-sm font-semibold text-gray-800">Endereços</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Endereço Matriz
            </label>
            <textarea
              value={config.addressMatriz}
              onChange={(e) => onChange({ addressMatriz: e.target.value })}
              rows={3}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#2e7d32] focus:outline-none focus:ring-2 focus:ring-[#2e7d32]/20"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Endereço Filial
            </label>
            <textarea
              value={config.addressFilial}
              onChange={(e) => onChange({ addressFilial: e.target.value })}
              rows={3}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#2e7d32] focus:outline-none focus:ring-2 focus:ring-[#2e7d32]/20"
            />
          </div>
        </div>
      </div>

      {/* Telefones */}
      <div>
        <h3 className="mb-3 text-sm font-semibold text-gray-800">Telefones</h3>
        <div className="space-y-2">
          {config.phoneNumbers.map((phone, index) => (
            <div key={index} className="flex items-center gap-2">
              <input
                type="text"
                value={phone}
                onChange={(e) => updatePhone(index, e.target.value)}
                placeholder="(37) 3331-4410"
                className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#2e7d32] focus:outline-none focus:ring-2 focus:ring-[#2e7d32]/20"
              />
              <button
                type="button"
                onClick={() => removePhone(index)}
                className="rounded-lg p-2.5 text-red-500 transition-colors hover:bg-red-50"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addPhone}
            className="text-sm font-medium text-[#2e7d32] hover:underline"
          >
            + Adicionar telefone
          </button>
        </div>
      </div>

      {/* WhatsApp */}
      <div>
        <h3 className="mb-3 text-sm font-semibold text-gray-800">
          Números de WhatsApp
        </h3>
        <div className="space-y-3">
          {config.whatsappNumbers.map((wa, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 bg-gray-50 p-3"
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-medium text-gray-500">
                  WhatsApp {index + 1}
                </span>
                <button
                  type="button"
                  onClick={() => removeWhatsApp(index)}
                  className="rounded p-1 text-red-500 transition-colors hover:bg-red-50"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                <input
                  type="text"
                  value={wa.label}
                  onChange={(e) => updateWhatsApp(index, 'label', e.target.value)}
                  placeholder="Nome / Unidade"
                  className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-[#2e7d32] focus:outline-none focus:ring-2 focus:ring-[#2e7d32]/20"
                />
                <input
                  type="text"
                  value={wa.number}
                  onChange={(e) => updateWhatsApp(index, 'number', e.target.value)}
                  placeholder="5537999999999"
                  className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-[#2e7d32] focus:outline-none focus:ring-2 focus:ring-[#2e7d32]/20"
                />
                <input
                  type="text"
                  value={wa.display}
                  onChange={(e) => updateWhatsApp(index, 'display', e.target.value)}
                  placeholder="(37) 9 9999-9999"
                  className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-[#2e7d32] focus:outline-none focus:ring-2 focus:ring-[#2e7d32]/20"
                />
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={addWhatsApp}
            className="text-sm font-medium text-[#2e7d32] hover:underline"
          >
            + Adicionar WhatsApp
          </button>
        </div>
      </div>

      {/* Emails */}
      <div>
        <h3 className="mb-3 text-sm font-semibold text-gray-800">
          Emails de Contato
        </h3>
        <div className="space-y-2">
          {config.contactEmails.map((email, index) => (
            <div key={index} className="flex items-center gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => updateEmail(index, e.target.value)}
                placeholder="contato@capol.com.br"
                className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#2e7d32] focus:outline-none focus:ring-2 focus:ring-[#2e7d32]/20"
              />
              <button
                type="button"
                onClick={() => removeEmail(index)}
                className="rounded-lg p-2.5 text-red-500 transition-colors hover:bg-red-50"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addEmail}
            className="text-sm font-medium text-[#2e7d32] hover:underline"
          >
            + Adicionar email
          </button>
        </div>
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
