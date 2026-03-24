'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useCart } from '@/contexts/CartContext';
import { assetPath } from '@/lib/utils';

const contacts = [
  {
    label: 'OLIVEIRA',
    number: '553799021671',
    greeting: 'Olá Oliveira!',
  },
  {
    label: 'CAPOL CAFÉS',
    number: '553799620986',
    greeting: 'Olá Capol Cafés!',
  },
  {
    label: 'LOJA | FÁBRICA DE RAÇÃO',
    number: '553798516781',
    greeting: 'Olá!',
  },
];

export default function CartFloat() {
  const { items, totalItems, removeItem, updateQuantity, clearCart } = useCart();
  const [open, setOpen] = useState(false);
  const [showContacts, setShowContacts] = useState(false);

  if (totalItems === 0) return null;

  const siteUrl = 'https://eduu10.github.io/capol';

  const buildMessage = (greeting: string) => {
    const productList = items
      .map((item) => `• *Capol ${item.name}* (${item.quantity}x)\n  ${siteUrl}/produto/${item.slug}`)
      .join('\n\n');
    return encodeURIComponent(
      `${greeting} Gostaria de solicitar um orçamento dos seguintes produtos:\n\n${productList}\n\nAguardo retorno!`
    );
  };

  return (
    <>
      {/* Cart FAB */}
      <button
        type="button"
        onClick={() => { setOpen(true); setShowContacts(false); }}
        className="fixed right-4 bottom-4 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#2e7d32] text-white shadow-xl hover:bg-[#1b5e20] transition-colors cursor-pointer"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
        </svg>
        <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center">
          {totalItems}
        </span>
      </button>

      {/* Cart Modal */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center sm:justify-end bg-black/50 p-0 sm:p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white w-full sm:w-[420px] sm:max-h-[80vh] max-h-[85vh] sm:rounded-2xl rounded-t-2xl shadow-2xl flex flex-col overflow-hidden sm:mr-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-[#2e7d32] px-6 py-4 flex items-center justify-between flex-shrink-0">
              <h3 className="text-white font-bold text-lg flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
                Carrinho ({totalItems} {totalItems === 1 ? 'item' : 'itens'})
              </h3>
              <button
                onClick={() => setOpen(false)}
                className="text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {!showContacts ? (
              <>
                {/* Items list */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                  {items.map((item) => (
                    <div key={item.slug} className="flex items-center gap-3 border border-gray-100 rounded-xl p-3">
                      <div className="relative w-14 h-14 flex-shrink-0 bg-gray-50 rounded-lg overflow-hidden">
                        <Image
                          src={assetPath(item.image)}
                          alt={item.name}
                          fill
                          className="object-contain p-1"
                          sizes="56px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-gray-900 truncate">{item.name}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.slug, item.quantity - 1)}
                            className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 cursor-pointer"
                          >
                            -
                          </button>
                          <span className="text-sm font-semibold w-6 text-center">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.slug, item.quantity + 1)}
                            className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 cursor-pointer"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.slug)}
                        className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="border-t border-gray-100 p-4 flex-shrink-0 space-y-3">
                  <button
                    type="button"
                    onClick={() => setShowContacts(true)}
                    className="w-full flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#1da851] text-white font-bold py-3 rounded-xl transition-colors cursor-pointer"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Solicitar Orçamento via WhatsApp
                  </button>
                  <button
                    type="button"
                    onClick={clearCart}
                    className="w-full text-sm text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
                  >
                    Limpar carrinho
                  </button>
                </div>
              </>
            ) : (
              /* WhatsApp Contacts */
              <div className="p-6">
                <button
                  type="button"
                  onClick={() => setShowContacts(false)}
                  className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 mb-4 cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                  Voltar
                </button>
                <p className="text-gray-600 text-sm mb-5">
                  Escolha com quem deseja falar para solicitar o orçamento:
                </p>
                <div className="flex flex-col gap-4">
                  {contacts.map((contact) => (
                    <a
                      key={contact.number}
                      href={`https://wa.me/${contact.number}?text=${buildMessage(contact.greeting)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => { clearCart(); setOpen(false); }}
                      className="flex items-center gap-4 rounded-xl bg-[#25d366] py-4 px-6 text-white font-bold text-base shadow-md hover:bg-[#1da851] transition-all hover:shadow-lg hover:scale-[1.02]"
                    >
                      <svg className="h-7 w-7 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      <span className="text-lg">{contact.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
