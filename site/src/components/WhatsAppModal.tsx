'use client';

import { useState } from 'react';

const contacts = [
  {
    label: 'CAPOL OLIVEIRA',
    number: '553799021671',
    greeting: 'Olá Oliveira! Vi o produto',
  },
  {
    label: 'CAPOL CAFÉS',
    number: '553799620986',
    greeting: 'Olá Capol Cafés! Tenho interesse no produto',
  },
  {
    label: 'LOJA | FÁBRICA DE RAÇÃO',
    number: '553798516781',
    greeting: 'Olá! Gostaria de comprar o produto',
  },
];

interface WhatsAppModalProps {
  productName: string;
  productSlug?: string;
}

export default function WhatsAppModal({ productName, productSlug }: WhatsAppModalProps) {
  const productUrl = productSlug ? `\nhttps://eduu10.github.io/capol/produto/${productSlug}` : '';
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-[#2e7d32] text-white font-semibold rounded-xl hover:bg-[#1b5e20] transition-colors shadow-lg hover:shadow-xl cursor-pointer"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"
          />
        </svg>
        Solicitar Orçamento
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-end bg-black/50 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden mr-4 sm:mr-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-[#2e7d32] px-6 py-5 flex items-center justify-between">
              <h3 className="text-white font-bold text-xl">Fale Conosco</h3>
              <button
                onClick={() => setOpen(false)}
                className="text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className="p-6">
              <p className="text-gray-600 text-base mb-5">
                Escolha com quem deseja falar sobre o produto <strong className="text-gray-800">{productName}</strong>:
              </p>

              <div className="flex flex-col gap-4">
                {contacts.map((contact) => {
                  const message = encodeURIComponent(
                    `${contact.greeting} *Capol ${productName}* no site da Capol. Poderia me passar mais informações e valores?${productUrl}`
                  );
                  return (
                    <a
                      key={contact.number}
                      href={`https://wa.me/${contact.number}?text=${message}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 rounded-xl bg-[#25d366] py-4 px-6 text-white font-bold text-base shadow-md hover:bg-[#1da851] transition-all hover:shadow-lg hover:scale-[1.02]"
                    >
                      <svg className="h-7 w-7 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      <span className="text-lg">{contact.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
