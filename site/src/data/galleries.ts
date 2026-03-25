export interface Gallery {
  id: number;
  name: string;
  slug: string;
  cover: string;
  images: string[];
}

export const galleries: Gallery[] = [
  {
    id: 22,
    name: 'Fábrica de Ração',
    slug: 'fabrica-de-racao',
    cover: '/imagens/galeria-capas/fabrica-de-racao.jpg',
    images: [
      '/imagens/galeria/fabrica-de-racao/capa.jpg',
      '/imagens/galeria/fabrica-de-racao/foto_1.jpg',
      '/imagens/galeria/fabrica-de-racao/foto_2.jpg',
      '/imagens/galeria/fabrica-de-racao/foto_3.jpg',
      '/imagens/galeria/fabrica-de-racao/foto_5.jpg',
      '/imagens/galeria/fabrica-de-racao/foto_6.jpg',
      '/imagens/galeria/fabrica-de-racao/fabrica_de_racao.jpg',
    ],
  },
  {
    id: 23,
    name: 'Armazenagem',
    slug: 'armazenagem',
    cover: '/imagens/galeria-capas/armazenagem.jpg',
    images: [
      '/imagens/galeria/armazenagem/armazenagem_1.jpg',
      '/imagens/galeria/armazenagem/armazenagem_2.jpg',
      '/imagens/galeria/armazenagem/armazenagem_3.jpg',
      '/imagens/galeria/armazenagem/armazenagem_4.jpg',
      '/imagens/galeria/armazenagem/armazenagem_5.jpg',
      '/imagens/galeria/armazenagem/armazenagem_6.jpg',
    ],
  },
  {
    id: 24,
    name: 'Veículos',
    slug: 'veiculos',
    cover: '/imagens/galeria-capas/veiculos.jpg',
    images: [
      '/imagens/galeria/veiculos/veiculos_1.jpg',
      '/imagens/galeria/veiculos/veiculos_2.jpg',
    ],
  },
  {
    id: 25,
    name: 'Beneficiamento',
    slug: 'beneficiamento',
    cover: '/imagens/galeria-capas/beneficiamento.jpg',
    images: [
      '/imagens/galeria/beneficiamento/beneficiamento_1.jpg',
      '/imagens/galeria/beneficiamento/beneficiamento_2.jpg',
    ],
  },
  {
    id: 26,
    name: 'São Francisco de Paula',
    slug: 'sao-francisco-de-paula',
    cover: '/imagens/galeria-capas/sao-francisco-de-paula.jpg',
    images: [
      '/imagens/galeria/sao-francisco-de-paula/imagem_1.jpg',
      '/imagens/galeria/sao-francisco-de-paula/imagem_2.jpg',
      '/imagens/galeria/sao-francisco-de-paula/imagem_3.jpg',
      '/imagens/galeria/sao-francisco-de-paula/imagem_4.jpg',
      '/imagens/galeria/sao-francisco-de-paula/imagem_5.jpg',
      '/imagens/galeria/sao-francisco-de-paula/imagem_6.jpg',
      '/imagens/galeria/sao-francisco-de-paula/imagem_7.jpg',
      '/imagens/galeria/sao-francisco-de-paula/imagem_8.jpg',
      '/imagens/galeria/sao-francisco-de-paula/imagem_9.jpg',
      '/imagens/galeria/sao-francisco-de-paula/imagem_10.jpg',
    ],
  },
  {
    id: 27,
    name: 'Capol Oliveira',
    slug: 'capol-oliveira',
    cover: '/imagens/galeria-capas/capol-oliveira.jpg',
    images: [
      '/imagens/galeria/capol-oliveira/capa.jpg',
      '/imagens/galeria/capol-oliveira/foto_1.jpg',
      '/imagens/galeria/capol-oliveira/foto_2.jpg',
      '/imagens/galeria/capol-oliveira/foto_3.jpg',
    ],
  },
  {
    id: 28,
    name: 'Capol Cafés',
    slug: 'capol-cafes',
    cover: '/imagens/galeria-capas/capol-cafes.jpg',
    images: [
      '/imagens/galeria/capol-cafes/capol-cafes-vista-aerea-fabrica-oliveira-mg-01.jpg',
      '/imagens/galeria/capol-cafes/capol-cafes-vista-aerea-fabrica-oliveira-mg-02.jpg',
      '/imagens/galeria/capol-cafes/capol-cafes-vista-aerea-fabrica-oliveira-mg-03.jpg',
      '/imagens/galeria/capol-cafes/capol-cafes-vista-aerea-fabrica-oliveira-mg-04.jpg',
      '/imagens/galeria/capol-cafes/capol-cafes-estrutura-producao-oliveira-mg-01.jpg',
      '/imagens/galeria/capol-cafes/capol-cafes-estrutura-producao-oliveira-mg-02.jpg',
      '/imagens/galeria/capol-cafes/capol-cafes-estrutura-producao-oliveira-mg-03.jpg',
      '/imagens/galeria/capol-cafes/capol-cafes-panoramica-instalacoes-oliveira-mg-01.jpg',
      '/imagens/galeria/capol-cafes/capol-cafes-panoramica-instalacoes-oliveira-mg-02.jpg',
      '/imagens/galeria/capol-cafes/capol-cafes-panoramica-instalacoes-oliveira-mg-03.jpg',
      '/imagens/galeria/capol-cafes/capol-cafes-drone-terreiro-secagem-oliveira-mg-01.jpg',
      '/imagens/galeria/capol-cafes/capol-cafes-drone-terreiro-secagem-oliveira-mg-02.jpg',
      '/imagens/galeria/capol-cafes/capol-cafes-drone-terreiro-secagem-oliveira-mg-03.jpg',
      '/imagens/galeria/capol-cafes/capol-cafes-drone-area-beneficiamento-oliveira-mg-01.jpg',
      '/imagens/galeria/capol-cafes/capol-cafes-drone-area-beneficiamento-oliveira-mg-02.jpg',
      '/imagens/galeria/capol-cafes/capol-cafes-drone-area-beneficiamento-oliveira-mg-03.jpg',
      '/imagens/galeria/capol-cafes/capol-cafes-logo-marca-cafe-especial-oliveira-mg.jpg',
    ],
  },
  {
    id: 29,
    name: 'Capol São Francisco de Paula',
    slug: 'capol-sao-francisco',
    cover: '/imagens/galeria-capas/capol-sao-francisco.jpg',
    images: [
      '/imagens/galeria/capol-sao-francisco/capol-sao-francisco-de-paula-fachada-unidade-mg-01.jpg',
      '/imagens/galeria/capol-sao-francisco/capol-sao-francisco-de-paula-interior-loja-mg-01.jpg',
      '/imagens/galeria/capol-sao-francisco/capol-sao-francisco-de-paula-interior-loja-mg-02.jpg',
      '/imagens/galeria/capol-sao-francisco/capol-sao-francisco-de-paula-estoque-produtos-mg-01.jpg',
      '/imagens/galeria/capol-sao-francisco/capol-sao-francisco-de-paula-estoque-produtos-mg-02.jpg',
      '/imagens/galeria/capol-sao-francisco/capol-sao-francisco-de-paula-vista-aerea-drone-mg-01.jpg',
      '/imagens/galeria/capol-sao-francisco/capol-sao-francisco-de-paula-vista-aerea-drone-mg-02.jpg',
      '/imagens/galeria/capol-sao-francisco/capol-sao-francisco-de-paula-vista-aerea-drone-mg-03.jpg',
      '/imagens/galeria/capol-sao-francisco/capol-sao-francisco-de-paula-panoramica-drone-mg-01.jpg',
      '/imagens/galeria/capol-sao-francisco/capol-sao-francisco-de-paula-panoramica-drone-mg-02.jpg',
      '/imagens/galeria/capol-sao-francisco/capol-sao-francisco-de-paula-panoramica-drone-mg-03.jpg',
      '/imagens/galeria/capol-sao-francisco/capol-sao-francisco-de-paula-instalacoes-drone-mg-01.jpg',
      '/imagens/galeria/capol-sao-francisco/capol-sao-francisco-de-paula-instalacoes-drone-mg-02.jpg',
      '/imagens/galeria/capol-sao-francisco/capol-sao-francisco-de-paula-estrutura-geral-mg.jpg',
      '/imagens/galeria/capol-sao-francisco/capol-sao-francisco-de-paula-deposito-racao-mg-01.jpg',
      '/imagens/galeria/capol-sao-francisco/capol-sao-francisco-de-paula-deposito-racao-mg-02.jpg',
      '/imagens/galeria/capol-sao-francisco/capol-sao-francisco-de-paula-area-carregamento-mg-01.jpg',
      '/imagens/galeria/capol-sao-francisco/capol-sao-francisco-de-paula-area-carregamento-mg-02.jpg',
      '/imagens/galeria/capol-sao-francisco/capol-sao-francisco-de-paula-silos-armazenagem-mg-01.jpg',
      '/imagens/galeria/capol-sao-francisco/capol-sao-francisco-de-paula-silos-armazenagem-mg-02.jpg',
      '/imagens/galeria/capol-sao-francisco/capol-sao-francisco-de-paula-patio-externo-mg-01.jpg',
      '/imagens/galeria/capol-sao-francisco/capol-sao-francisco-de-paula-patio-externo-mg-02.jpg',
    ],
  },
  {
    id: 30,
    name: 'Sede Oliveira',
    slug: 'capol-oliveira-sede',
    cover: '/imagens/galeria-capas/capol-oliveira-sede.jpg',
    images: [
      '/imagens/galeria/capol-oliveira-sede/capol-cooperativa-oliveira-mg-fachada-principal.jpg',
      '/imagens/galeria/capol-oliveira-sede/capol-cooperativa-oliveira-mg-fachada-sede-01.jpg',
      '/imagens/galeria/capol-oliveira-sede/capol-cooperativa-oliveira-mg-area-interna-01.jpg',
      '/imagens/galeria/capol-oliveira-sede/capol-cooperativa-oliveira-mg-area-interna-02.jpg',
      '/imagens/galeria/capol-oliveira-sede/capol-cooperativa-oliveira-mg-estoque-racoes-01.jpg',
      '/imagens/galeria/capol-oliveira-sede/capol-cooperativa-oliveira-mg-estoque-racoes-02.jpg',
      '/imagens/galeria/capol-oliveira-sede/capol-cooperativa-oliveira-mg-loja-atendimento-01.jpg',
      '/imagens/galeria/capol-oliveira-sede/capol-cooperativa-oliveira-mg-loja-atendimento-02.jpg',
    ],
  },
];

export function getGalleryBySlug(slug: string): Gallery | undefined {
  return galleries.find((g) => g.slug === slug);
}
