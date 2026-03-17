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
];

export function getGalleryBySlug(slug: string): Gallery | undefined {
  return galleries.find((g) => g.slug === slug);
}
