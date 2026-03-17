import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Produtos | Capol',
  description:
    'Conhega a linha completa de ragoes, suplementos minerais e ingredientes para nutrigao animal da Cooperativa Agropecuaria de Oliveira - Capol.',
};

export default function ProdutosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
