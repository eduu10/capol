'use client';

import { useState, FormEvent } from 'react';

export default function Contato() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      {/* Banner */}
      <section className="bg-gray-100 border-b-4 border-[#2e7d32] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800 tracking-wide uppercase font-heading">
            CONTATO
          </h1>
          <nav className="text-sm text-gray-500">
            <a href="/" className="hover:text-[#2e7d32] transition-colors">Home</a>
            <span className="mx-2">/</span>
            <span className="text-gray-800">Contato</span>
          </nav>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contato heading with dotted line */}
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 whitespace-nowrap">Contato</h2>
            <div className="flex-1 border-t-2 border-dotted border-gray-300"></div>
          </div>

          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-[#2e7d32] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Mensagem enviada!</h3>
              <p className="text-gray-600">Entraremos em contato em breve. Obrigado!</p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({ nome: '', email: '', telefone: '', assunto: '', mensagem: '' });
                }}
                className="mt-6 text-[#2e7d32] font-semibold hover:underline"
              >
                Enviar outra mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div>
                  <label htmlFor="nome" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    NOME *
                  </label>
                  <input type="text" id="nome" name="nome" value={form.nome} onChange={handleChange} required
                    className="w-full border border-gray-300 px-4 py-3 text-gray-800 focus:ring-2 focus:ring-[#2e7d32] focus:border-transparent outline-none transition" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    EMAIL *
                  </label>
                  <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required
                    className="w-full border border-gray-300 px-4 py-3 text-gray-800 focus:ring-2 focus:ring-[#2e7d32] focus:border-transparent outline-none transition" />
                </div>
                <div>
                  <label htmlFor="telefone" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    TELEFONE
                  </label>
                  <input type="tel" id="telefone" name="telefone" value={form.telefone} onChange={handleChange}
                    className="w-full border border-gray-300 px-4 py-3 text-gray-800 focus:ring-2 focus:ring-[#2e7d32] focus:border-transparent outline-none transition" />
                </div>
              </div>

              <div>
                <label htmlFor="assunto" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  ASSUNTO *
                </label>
                <input type="text" id="assunto" name="assunto" value={form.assunto} onChange={handleChange} required
                  className="w-full border border-gray-300 px-4 py-3 text-gray-800 focus:ring-2 focus:ring-[#2e7d32] focus:border-transparent outline-none transition" />
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  MENSAGEM *
                </label>
                <textarea id="mensagem" name="mensagem" value={form.mensagem} onChange={handleChange} required rows={6}
                  className="w-full border border-gray-300 px-4 py-3 text-gray-800 focus:ring-2 focus:ring-[#2e7d32] focus:border-transparent outline-none transition resize-vertical" />
              </div>

              <button type="submit"
                className="bg-[#2e7d32] text-white font-semibold py-3 px-8 hover:bg-[#1b5e20] transition-colors uppercase tracking-wider text-sm">
                ENVIAR CONTATO
              </button>
            </form>
          )}

          {/* Map + Matriz */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            <div className="w-full h-80 bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.5!2d-44.8247!3d-20.6983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDQxJzUzLjkiUyA0NMKwNDknMjkuMCJX!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" title="Localização CAPOL" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Matriz</h3>
              <div className="space-y-3 text-gray-600">
                <p>Av. Maracanã, 336, Bairro das Graças - Oliveira/MG, CEP 35.540-000</p>
                <p><strong>Telefone:</strong> (37) 3331.4410</p>
                <p><strong>WhatsApp:</strong>{' '}<a href="https://wa.me/5537999021671" className="text-[#2e7d32] hover:underline">(37) 9 9902.1671</a></p>
                <div className="pt-3 border-t border-gray-100">
                  <p className="font-semibold text-gray-700 mb-2">E-mails:</p>
                  <ul className="space-y-1 text-sm">
                    <li><a href="mailto:fabricio@capol.com.br" className="text-[#2e7d32] hover:underline">fabricio@capol.com.br</a> - Fabrício</li>
                    <li><a href="mailto:comercial@capol.com.br" className="text-[#2e7d32] hover:underline">comercial@capol.com.br</a> - Cleudimar / Érica</li>
                    <li><a href="mailto:tida@capol.com.br" className="text-[#2e7d32] hover:underline">tida@capol.com.br</a> - Tida</li>
                    <li><a href="mailto:adriana@capol.com.br" className="text-[#2e7d32] hover:underline">adriana@capol.com.br</a> - Adriana / Poliana / Ananias</li>
                    <li><a href="mailto:lucas@capol.com.br" className="text-[#2e7d32] hover:underline">lucas@capol.com.br</a> - Lucas / José Antônio</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Map + Filial */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            <div className="w-full h-80 bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.5!2d-44.9!3d-20.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDQyJzAwLjAiUyA0NMKwNTQnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" title="Localização CAPOL Filial" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Filial - São Francisco de Paula/MG</h3>
              <div className="space-y-3 text-gray-600">
                <p>Rua Padre Joaquim Cardoso, 1050, Centro - São Francisco de Paula/MG, CEP 35.543-000</p>
                <p><strong>Telefone:</strong> (37) 3332.1233</p>
                <p><strong>Oi:</strong> <a href="tel:+5537988516781" className="text-[#2e7d32] hover:underline">(37) 9 8851.6781</a></p>
                <p><strong>Vivo:</strong> <a href="tel:+5537998612138" className="text-[#2e7d32] hover:underline">(37) 9 9861.2138</a></p>
                <div className="pt-3 border-t border-gray-100">
                  <p className="font-semibold text-gray-700 mb-2">E-mails:</p>
                  <ul className="space-y-1 text-sm">
                    <li><a href="mailto:gerencia@capol.com.br" className="text-[#2e7d32] hover:underline">gerencia@capol.com.br</a> - Eliana / Evelyn / Maurício</li>
                    <li><a href="mailto:vendas@capol.com.br" className="text-[#2e7d32] hover:underline">vendas@capol.com.br</a> - Reginaldo / Rodrigo</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
