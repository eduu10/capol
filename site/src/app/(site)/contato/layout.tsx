import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contato - CAPOL | Cooperativa Agropecuária de Oliveira',
  description:
    'Entre em contato com a CAPOL. Matriz em Oliveira/MG e Filial em São Francisco de Paula/MG. Telefone, WhatsApp e e-mail.',
  keywords: 'CAPOL, contato, telefone, e-mail, Oliveira, São Francisco de Paula, MG',
};

export default function ContatoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
