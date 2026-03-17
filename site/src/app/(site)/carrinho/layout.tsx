import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Orçamento - CAPOL | Cooperativa Agropecuária de Oliveira',
  description:
    'Solicite seu orçamento de produtos CAPOL. Rações, insumos e mais para sua propriedade rural.',
  keywords: 'CAPOL, orçamento, carrinho, rações, insumos, produtos',
};

export default function CarrinhoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
