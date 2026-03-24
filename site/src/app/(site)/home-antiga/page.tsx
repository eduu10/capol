import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import BannerSlider from '@/components/BannerSlider';
import { assetPath } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'CAPOL - Cooperativa Agropecuária de Oliveira',
  description:
    'A CAPOL é uma cooperativa agropecuária localizada em Oliveira/MG, oferecendo rações, cafés especiais, insumos agrícolas e muito mais para o produtor rural.',
  keywords: 'CAPOL, cooperativa, agropecuária, Oliveira, MG, rações, cafés, insumos',
};

const blogCards = [
  {
    label: 'PARCEIROS',
    title: 'Parceiros Credenciados para Oferecer o Melhor',
    thumb: '/imagens/blog/p_banner_parceiros.jpg',
    link: '/blog/parceiros-credenciados-para-oferecer-o-melhor',
    text: 'Eficiência e economia em produtos prontos para atender a demanda de sua fazenda',
  },
  {
    label: 'ASSISTÊNCIA',
    title: 'Assistência Técnica e Especializada',
    thumb: '/imagens/blog/p_banner_assistencia.jpg',
    link: '/blog/assistencia-tecnica-e-especializada',
    text: 'Todo negócio que conta com profissionais qualificados ganham destaque no mercado...',
  },
  {
    label: 'SAÚDE',
    title: 'Unimed e CAPOL, saúde para a família inteira',
    thumb: '/imagens/blog/p_banner_saude.jpg',
    link: '/blog/unimed-e-capol--saude-para-a-familia-inteira-',
    text: 'Ao escolher a UNIMED CAPOL você contará com uma das mais completas redes de atendimento do país',
  },
];

const animalSegments = [
  { name: 'Aves', img: '/imagens/seguimentos/aves.jpg', link: '/categoria/aves' },
  { name: 'Bovinos', img: '/imagens/seguimentos/bovinos.jpg', link: '/categoria/corte' },
  { name: 'Equinos', img: '/imagens/seguimentos/equinos.jpg', link: '/categoria/equinos' },
  { name: 'Suínos', img: '/imagens/seguimentos/suinos.jpg', link: '/categoria/suinos' },
];

export default function HomeAntiga() {
  return (
    <>
      {/* Section 1: Banner Slider */}
      <BannerSlider />

      {/* Section 2: Blog Highlights */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-[1140px] px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogCards.map((card) => (
              <Link
                key={card.title}
                href={card.link}
                className="group block"
              >
                {/* Card image with label overlay */}
                <div className="relative h-[220px] overflow-hidden">
                  <Image
                    src={assetPath(card.thumb)}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <span
                      className="text-white text-xl md:text-2xl font-bold uppercase"
                      style={{ letterSpacing: '0.3em' }}
                    >
                      {card.label}
                    </span>
                  </div>
                </div>
                {/* Card text below image */}
                <div className="pt-5 pb-2">
                  <h3
                    className="text-[#333] text-base font-bold uppercase mb-2"
                                     >
                    {card.title}
                  </h3>
                  <p
                    className="text-[#666] text-sm leading-relaxed"
                                     >
                    {card.text}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Capol Cafés */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-[1140px] px-4">
          {/* Intro text */}
          <div className="text-center mb-10">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#333] uppercase mb-2"
                         >
              Paixão, qualidade e amor
            </h2>
            <p
              className="text-[#666] text-base"
                         >
              Com a CAPOL, você se une a uma comunidade apaixonada pela cultura cafeeira!
            </p>
          </div>

          {/* Capol Cafés banner */}
          <Link href="/capol-cafes" className="group block relative">
            <div className="relative h-[300px] md:h-[400px] overflow-hidden">
              <Image
                src={assetPath("/imagens/banners/banner_capol_cafes.jpg")}
                alt="Capol Cafés"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-[#2e7d32]/60 flex flex-col items-center justify-center text-center px-4">
                <h3
                  className="text-white text-2xl md:text-4xl font-bold uppercase mb-4"
                  style={{ letterSpacing: '0.1em' }}
                >
                  CONHEÇA TUDO SOBRE A CAPOL CAFÉS
                </h3>
                <span
                  className="inline-block border-2 border-white text-white uppercase text-sm font-bold px-8 py-3 tracking-wider group-hover:bg-white group-hover:text-[#2e7d32] transition-colors"
                                 >
                  CLIQUE AQUI
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Section 4: Rações Especiais Para */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-[1140px] px-4 text-center">
          <h2
            className="text-2xl md:text-3xl font-bold text-[#333] uppercase mb-3"
                     >
            RAÇÕES ESPECIAIS PARA
          </h2>
          {/* Green underline */}
          <div className="flex justify-center mb-12">
            <span className="block w-[50px] h-[3px] bg-[#2e7d32]" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
            {animalSegments.map((seg) => (
              <Link
                key={seg.name}
                href={seg.link}
                className="group flex flex-col items-center"
              >
                <div className="relative w-[150px] h-[150px] md:w-[180px] md:h-[180px] rounded-full overflow-hidden mb-4">
                  <Image
                    src={assetPath(seg.img)}
                    alt={seg.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="180px"
                  />
                </div>
                <span
                  className="text-[#333] text-base font-bold uppercase"
                                 >
                  {seg.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Nutrição Animal */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-[1140px] px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left: text */}
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold text-[#333] uppercase mb-3"
                             >
                NUTRIÇÃO ANIMAL
              </h2>
              {/* Green underline */}
              <span className="block w-[50px] h-[3px] bg-[#2e7d32] mb-6" />
              <p
                className="text-[#666] text-base leading-relaxed"
                             >
                A nutrição animal é definida pelo conjunto de processos em que um
                organismo vivo digere ou assimila os nutrientes contidos nos
                alimentos, usando-os para seu crescimento, reposição ou reparação
                dos tecidos corporais e também, para elaboração de produtos, como
                por exemplo a produção de leite.
              </p>
            </div>
            {/* Right: image */}
            <div className="relative h-[300px] md:h-[380px] overflow-hidden">
              <Image
                src={assetPath("/imagens/home-centro/banner-nutricao-animal.jpg")}
                alt="Nutrição Animal CAPOL"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Ração Balanceada */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-[1140px] px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left: text */}
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold text-[#333] uppercase mb-3"
                             >
                RAÇÃO BALANCEADA
              </h2>
              {/* Green underline */}
              <span className="block w-[50px] h-[3px] bg-[#2e7d32] mb-6" />
              <p
                className="text-[#666] text-base leading-relaxed"
                             >
                O avanço das tecnologias ligadas ao melhoramento genético e ao
                manejo resultam em aumento da capacidade produtiva dos animais, em
                razão disso a simples oferta de forragem não é mais capaz de
                atender suas necessidades por completo.
              </p>
            </div>
            {/* Right: image */}
            <div className="relative h-[300px] md:h-[380px] overflow-hidden">
              <Image
                src={assetPath("/imagens/home-centro/banner-racao-balanceada.jpg")}
                alt="Ração Balanceada CAPOL"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
