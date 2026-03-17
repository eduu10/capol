import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quem Somos - CAPOL | Cooperativa Agropecuária de Oliveira',
  description:
    'Conheça a história da CAPOL, fundada em 1959 por 36 produtores rurais em Oliveira/MG. Mais de 60 anos de tradição e compromisso com o cooperativismo.',
  keywords: 'CAPOL, quem somos, história, cooperativa, Oliveira, MG, fundadores',
};

const founders = [
  'Moacyr Ferreira Leite', 'José Coelho', 'Antonio Viglioni', 'Nelson Ferreira Leite',
  'Paulo Rocha', 'Alcebíades Viana Costa', 'José Geraldo Santos', 'Elias Raimundo',
  'Cícero de Castro Filho', 'Julio Resende de Barros', 'David Matar',
  'Sílvio Resende de Barros', 'Nelson Ribeiro de Oliveira e Silva',
  'Waldemar Leite Junqueira', 'Levy Lacerda', 'Plínio Assis Ribeiro',
  'Francisco Cambraia Campos', 'Wander Assis Ribeiro', 'Dário Afonso',
  'Juarez Caldeira Brant', 'Efigênio Salgado dos Santos', 'Alcides Ferreira Leite',
  'José Maria Lobato', 'José Ferreira Leite', 'Domingos Ribeiro',
  'Célio Ávila de Azevedo', 'Augusto Silveira Neto', 'Polínia Santos Leite',
  'Francisco Ferreira Pacheco', 'José Pinto Ferreira', 'José Teodoro Silveira Filho',
  'Olinto de Aguiar', 'Lincoln Santos', 'Francisco Ferreira de Assis',
  'Ivan Ribeiro de Castro', 'Clóvis Cambraia de Andrade',
];

export default function QuemSomos() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gray-100 border-b-4 border-[#2e7d32] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800 tracking-wide uppercase font-heading">
            QUEM SOMOS
          </h1>
          <nav className="text-sm text-gray-500">
            <a href="/" className="hover:text-[#2e7d32] transition-colors">Home</a>
            <span className="mx-2">/</span>
            <span className="text-gray-800">Quem Somos</span>
          </nav>
        </div>
      </section>

      {/* História */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#2e7d32] mb-8">Nossa História</h2>
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p>
              A <strong>Sociedade Cooperativa Agropecuária de Oliveira Ltda - CAPOL</strong> foi
              fundada em <strong>17 de junho de 1959</strong> por 36 produtores rurais que
              acreditavam na força do cooperativismo como instrumento de desenvolvimento
              econômico e social para a região de Oliveira, Minas Gerais.
            </p>
            <p>
              Desde sua fundação, a CAPOL tem como missão promover o crescimento
              sustentável dos seus cooperados, oferecendo suporte técnico, insumos de
              qualidade e canais de comercialização para a produção agropecuária.
            </p>
          </div>
        </div>
      </section>

      {/* Fundadores */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#2e7d32] mb-4">
            Os 36 Fundadores
          </h2>
          <p className="text-gray-600 mb-8">
            Visionários que acreditaram no cooperativismo e deram início à história da CAPOL.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {founders.map((name, i) => (
              <div
                key={i}
                className="bg-white rounded-lg px-4 py-3 shadow-sm border border-gray-100 text-gray-700 text-sm font-medium"
              >
                <span className="text-[#2e7d32] font-bold mr-2">{i + 1}.</span>
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Primeira Diretoria */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#2e7d32] mb-8">
            Primeira Diretoria
          </h2>
          <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm">
            <table className="w-full text-left">
              <thead className="bg-[#2e7d32] text-white">
                <tr>
                  <th className="px-6 py-4 font-semibold">Cargo</th>
                  <th className="px-6 py-4 font-semibold">Nome</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-100 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-700">Presidente</td>
                  <td className="px-6 py-4 text-gray-600">Moacyr Ferreira Leite</td>
                </tr>
                <tr className="hover:bg-gray-100 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-700">Vice-Presidente</td>
                  <td className="px-6 py-4 text-gray-600">José Coelho</td>
                </tr>
                <tr className="hover:bg-gray-100 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-700">Secretário</td>
                  <td className="px-6 py-4 text-gray-600">Antonio Viglioni</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Timeline / Marcos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#2e7d32] mb-12 text-center">
            Marcos Históricos
          </h2>
          <div className="space-y-8">
            {[
              {
                year: '1959',
                title: 'Fundação da CAPOL',
                text: 'Em 17 de junho, 36 produtores rurais fundam a Sociedade Cooperativa Agropecuária de Oliveira Ltda.',
              },
              {
                year: '1980',
                title: 'Expansão para São Francisco de Paula',
                text: 'A CAPOL inaugura sua filial em São Francisco de Paula, ampliando o atendimento para a região com 570 cooperados.',
              },
              {
                year: '2007-2013',
                title: 'Complexo de Produção',
                text: 'Construção do complexo de produção moderno, elevando a capacidade produtiva e a qualidade dos produtos CAPOL.',
              },
              {
                year: '2013',
                title: 'Lançamento da Marca Rações CAPOL',
                text: 'A marca Rações CAPOL é lançada, consolidando a cooperativa como referência em nutrição animal na região.',
              },
            ].map((item) => (
              <div key={item.year} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-24 md:w-32 text-right">
                  <span className="text-[#2e7d32] font-bold text-lg md:text-xl">
                    {item.year}
                  </span>
                </div>
                <div className="relative flex-shrink-0">
                  <div className="w-4 h-4 bg-[#2e7d32] rounded-full mt-1.5" />
                  <div className="absolute top-6 left-1.5 w-1 h-full bg-[#2e7d32]/20" />
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diretoria Atual */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#2e7d32] mb-8 text-center">
            Diretoria Atual
          </h2>

          {/* Diretoria Executiva */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-800 mb-6 border-b-2 border-[#2e7d32] pb-2">
              Diretoria Executiva
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { cargo: 'Presidente', nome: 'Rodolfo Ferreira Pacheco' },
                { cargo: 'Diretor Administrativo', nome: 'Luiz Roberto Thielemann' },
                { cargo: 'Diretor Financeiro', nome: 'Osório Rocha Avelar' },
              ].map((d) => (
                <div
                  key={d.cargo}
                  className="bg-gray-50 rounded-xl p-6 text-center shadow-sm border border-gray-100"
                >
                  <div className="w-16 h-16 bg-[#2e7d32] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <p className="text-[#2e7d32] font-semibold text-sm mb-1">{d.cargo}</p>
                  <p className="text-gray-800 font-bold">{d.nome}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Conselheiros */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-800 mb-6 border-b-2 border-[#2e7d32] pb-2">
              Conselheiros
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Paulo Ribeiro Filho',
                'Wagner Gonçalves de Morais',
                'Álvaro Augusto Pinheiro Campos',
                'Rubens Helder de Castro',
                'Salatiel Alvim Lobato',
                'Breno Bicalho Resende',
              ].map((nome) => (
                <div
                  key={nome}
                  className="bg-gray-50 rounded-lg px-5 py-4 shadow-sm border border-gray-100 flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-[#2e7d32]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#2e7d32" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{nome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Conselho Fiscal */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-6 border-b-2 border-[#2e7d32] pb-2">
              Conselho Fiscal
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                'Décio Leone de Paula',
                'Edson Martins do Nascimento',
                'Renato Ferreira de Resende',
              ].map((nome) => (
                <div
                  key={nome}
                  className="bg-gray-50 rounded-lg px-5 py-4 shadow-sm border border-gray-100 flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-[#f57c00]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#f57c00" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{nome}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
