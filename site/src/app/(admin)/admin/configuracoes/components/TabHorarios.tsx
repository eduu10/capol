'use client';

import { SiteConfig } from '@/contexts/SiteConfigContext';

interface TabHorariosProps {
  config: SiteConfig;
  onChange: (partial: Partial<SiteConfig>) => void;
  onSave: () => void;
}

export default function TabHorarios({ config, onChange, onSave }: TabHorariosProps) {
  const updateHour = (index: number, field: 'open' | 'close' | 'isOpen', value: string | boolean) => {
    const updated = [...config.businessHours];
    updated[index] = { ...updated[index], [field]: value };
    onChange({ businessHours: updated });
  };

  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-500">
        Configure o horário de funcionamento para cada dia da semana.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-3 pr-4 text-left font-medium text-gray-700">Dia</th>
              <th className="px-4 py-3 text-left font-medium text-gray-700">Aberto</th>
              <th className="px-4 py-3 text-left font-medium text-gray-700">Abertura</th>
              <th className="px-4 py-3 text-left font-medium text-gray-700">Fechamento</th>
            </tr>
          </thead>
          <tbody>
            {config.businessHours.map((hours, index) => (
              <tr key={hours.day} className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-gray-700">
                  {hours.day}
                </td>
                <td className="px-4 py-3">
                  <button
                    type="button"
                    onClick={() => updateHour(index, 'isOpen', !hours.isOpen)}
                    className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors ${
                      hours.isOpen ? 'bg-[#2e7d32]' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition-transform ${
                        hours.isOpen ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </td>
                <td className="px-4 py-3">
                  <input
                    type="time"
                    value={hours.open}
                    onChange={(e) => updateHour(index, 'open', e.target.value)}
                    disabled={!hours.isOpen}
                    className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm disabled:bg-gray-100 disabled:text-gray-400 focus:border-[#2e7d32] focus:outline-none focus:ring-2 focus:ring-[#2e7d32]/20"
                  />
                </td>
                <td className="px-4 py-3">
                  <input
                    type="time"
                    value={hours.close}
                    onChange={(e) => updateHour(index, 'close', e.target.value)}
                    disabled={!hours.isOpen}
                    className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm disabled:bg-gray-100 disabled:text-gray-400 focus:border-[#2e7d32] focus:outline-none focus:ring-2 focus:ring-[#2e7d32]/20"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
