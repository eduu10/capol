import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { galleries } from '@/data/galleries';
import GaleriaClient from './GaleriaClient';

interface PageProps {
  params: Promise<{ id: string }>;
}

function getGalleryById(id: number) {
  return galleries.find((g) => g.id === id);
}

export async function generateStaticParams() {
  return galleries.map((gallery) => ({
    id: String(gallery.id),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const gallery = getGalleryById(parseInt(id, 10));

  if (!gallery) {
    return { title: 'Galeria nao encontrada | Capol' };
  }

  return {
    title: `${gallery.name} | Galerias | Capol`,
    description: `Galeria de fotos: ${gallery.name}. Conhega as instalagoes da Capol.`,
  };
}

export default async function GaleriaPage({ params }: PageProps) {
  const { id } = await params;
  const gallery = getGalleryById(parseInt(id, 10));

  if (!gallery) {
    notFound();
  }

  return <GaleriaClient gallery={gallery} />;
}
