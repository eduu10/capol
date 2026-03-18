import type { Metadata } from 'next';
import Image from 'next/image';
import { assetPath } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Capol Cafés - CAPOL | Cafés Especiais de Oliveira',
  description:
    'Conheça o Capol Cafés: sustentabilidade, suporte agronômico, secagem, beneficiamento, armazenamento e exportação de cafés especiais de Oliveira/MG.',
  keywords: 'CAPOL, cafés, café especial, Oliveira, MG, exportação, sustentabilidade',
};

const sections = [
  {
    id: 'sustentabilidade',
    title: 'Sustentabilidade',
    text: 'A CAPOL acredita que a produção de café de qualidade caminha lado a lado com a preservação ambiental. Nossos cooperados adotam práticas sustentáveis de manejo, incluindo conservação do solo, uso racional de recursos hídricos e preservação de áreas de mata nativa. O compromisso com a sustentabilidade não é apenas ambiental, mas também social e econômico, garantindo a viabilidade das propriedades rurais para as futuras gerações.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67" />
      </svg>
    ),
    bg: 'bg-white',
  },
  {
    id: 'suporte',
    title: 'Suporte Agronômico',
    text: 'Contamos com uma equipe técnica de engenheiros agrônomos que acompanham cada etapa da produção cafeeira, desde o planejamento do plantio até a colheita. O suporte agronômico da CAPOL inclui análise de solo, recomendação de adubação, manejo integrado de pragas e doenças, além de orientações sobre as melhores práticas de cultivo. Esse acompanhamento é fundamental para garantir a produtividade e a qualidade dos grãos.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
      </svg>
    ),
    bg: 'bg-gray-50',
  },
  {
    id: 'secagem',
    title: 'Processo de Secagem',
    text: 'O processo de secagem é uma das etapas mais críticas na produção de café de qualidade. A CAPOL oferece terreiros de secagem adequados e acompanhamento técnico para que o cooperado realize a secagem de forma correta e uniforme. A secagem bem conduzida preserva as características sensoriais do café, evitando defeitos e garantindo grãos com padrão de excelência para o mercado nacional e internacional.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    bg: 'bg-white',
  },
  {
    id: 'beneficiamento',
    title: 'Beneficiamento e Processamento',
    text: 'A CAPOL conta com infraestrutura moderna de beneficiamento, realizando o descascamento, a classificação por peneira e a separação por cor eletrônica dos grãos. Todo o processo é monitorado para garantir a eliminação de defeitos e a padronização dos lotes. O beneficiamento adequado agrega valor ao café, tornando-o apto para atender aos exigentes padrões dos mercados interno e externo.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    bg: 'bg-gray-50',
  },
  {
    id: 'armazenamento',
    title: 'Armazenamento',
    text: 'O armazenamento adequado é essencial para preservar a qualidade do café após o beneficiamento. A CAPOL dispõe de armazéns modernos com controle de temperatura e umidade, garantindo que os grãos mantenham suas propriedades organolépticas até a comercialização. A capacidade de armazenagem permite aos cooperados maior flexibilidade na negociação, podendo aguardar os melhores momentos do mercado.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    bg: 'bg-white',
  },
  {
    id: 'exportacao',
    title: 'Excelência e Exportação',
    text: 'Os cafés CAPOL são reconhecidos por sua excelência e alcançam mercados internacionais exigentes. A cooperativa realiza a degustação e classificação dos lotes segundo os padrões da SCA (Specialty Coffee Association), identificando cafés especiais com pontuações elevadas. Esse trabalho minucioso de curadoria permite acessar nichos de mercado premium, valorizando a produção dos cooperados e levando o nome de Oliveira para o mundo.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a48.454 48.454 0 01-7.54 0" />
      </svg>
    ),
    bg: 'bg-gray-50',
  },
];

export default function CapolCafes() {
  return (
    <main>
      {/* Hero Banner */}
      <section className="relative h-[400px] md:h-[500px]">
        <Image
          src={assetPath("/imagens/cafes/qualidade-e-compromisso-min.jpg")}
          alt="Capol Cafés - Qualidade e Compromisso"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Capol Cafés
            </h1>
            <p className="text-xl md:text-2xl text-[#f57c00] font-semibold mb-4">
              Paixão, qualidade e amor
            </p>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Do plantio à exportação, a CAPOL acompanha cada etapa para garantir
              cafés de excelência reconhecidos no Brasil e no mundo.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#2e7d32] mb-6">
                A Tradição do Café em Oliveira
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A cultura cafeeira é uma das principais atividades econômicas da
                região de Oliveira. A CAPOL, comprometida com a qualidade desde
                o início, trabalha ao lado dos cooperados para valorizar cada
                grão produzido.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Com investimentos em infraestrutura, tecnologia e capacitação,
                a cooperativa se destaca como parceira estratégica dos cafeicultores
                da região, contribuindo para a melhoria contínua da qualidade
                e a inserção em mercados de alto valor.
              </p>
            </div>
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={assetPath("/imagens/cafes/qualidade-e-compromisso-2-min.jpg")}
                alt="Café CAPOL - Grãos de qualidade"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sections */}
      {sections.map((section) => (
        <section key={section.id} id={section.id} className={`py-16 ${section.bg}`}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-5">
              <div className="flex-shrink-0 w-16 h-16 bg-[#2e7d32] text-white rounded-2xl flex items-center justify-center shadow-lg">
                {section.icon}
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#2e7d32] mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {section.text}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-16 bg-[#2e7d32]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Quer saber mais sobre nossos cafés?
          </h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            Entre em contato com nossa equipe e descubra como podemos ajudar
            a valorizar a produção da sua propriedade.
          </p>
          <a
            href="/contato"
            className="inline-block bg-white text-[#2e7d32] px-10 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition-colors shadow-lg"
          >
            Fale Conosco
          </a>
        </div>
      </section>
    </main>
  );
}
