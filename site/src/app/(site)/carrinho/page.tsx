'use client';

import Link from 'next/link';

export default function Carrinho() {
  return (
    <main>
      {/* Banner */}
      <section className="bg-gray-100 border-b-4 border-[#2e7d32] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800 tracking-wide uppercase font-heading">
            ORÇAMENTO
          </h1>
          <nav className="text-sm text-gray-500">
            <Link href="/" className="hover:text-[#2e7d32] transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">Orçamento</span>
          </nav>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Empty cart */}
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#9ca3af"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Sua lista de orçamento está vazia
            </h2>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              Navegue pelos nossos produtos e adicione os itens que deseja
              solicitar orçamento.
            </p>
            <Link
              href="/produtos"
              className="inline-block bg-[#2e7d32] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#1b5e20] transition-colors text-lg"
            >
              Ver Produtos
            </Link>
          </div>

          {/* Contact info */}
          <div className="mt-10 bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-[#2e7d32] mb-4">
              Prefere solicitar por telefone?
            </h3>
            <p className="text-gray-600 mb-6">
              Nossa equipe comercial está pronta para atender você e preparar
              o melhor orçamento para suas necessidades.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 bg-[#2e7d32] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Matriz</p>
                  <p className="font-semibold text-gray-800">(37) 3331.4410</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 bg-[#25d366] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.12 1.522 5.854L0 24l6.335-1.652A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.875 0-3.655-.5-5.206-1.41l-.375-.222-3.86 1.01 1.03-3.765-.244-.388A9.713 9.713 0 012.25 12 9.75 9.75 0 0112 2.25 9.75 9.75 0 0121.75 12 9.75 9.75 0 0112 21.75z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">WhatsApp</p>
                  <a href="https://wa.me/5537999021671" className="font-semibold text-gray-800 hover:text-[#2e7d32]">
                    (37) 9 9902.1671
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Link
                href="/contato"
                className="text-[#2e7d32] font-semibold hover:underline"
              >
                Ou envie uma mensagem pelo formulário de contato &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
