import type { Metadata } from 'next';
import { Raleway, Lato } from 'next/font/google';
import './globals.css';
import { SiteConfigProvider } from '@/contexts/SiteConfigContext';

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
  weight: ['400', '600', '700', '800'],
});

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  display: 'swap',
  weight: ['300', '400', '700'],
});

export const metadata: Metadata = {
  title: 'Cooperativa Agropecuária de Oliveira | Capol',
  description:
    'A Capol é uma cooperativa agropecuária fundada em 1963 em Oliveira, MG. Oferecemos rações, suplementos minerais, insumos agrícolas, assistência técnica e benefícios exclusivos para cooperados.',
  keywords: [
    'Capol',
    'cooperativa',
    'agropecuária',
    'Oliveira',
    'ração',
    'suplemento mineral',
    'insumos',
    'Minas Gerais',
  ],
  openGraph: {
    title: 'Cooperativa Agropecuária de Oliveira | Capol',
    description:
      'Desde 1963 trabalhando pelo desenvolvimento do produtor rural e da agropecuária regional.',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${raleway.variable} ${lato.variable} font-sans antialiased`}>
        <SiteConfigProvider>
          {children}
        </SiteConfigProvider>
      </body>
    </html>
  );
}
