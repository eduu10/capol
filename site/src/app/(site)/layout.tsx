import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import CartFloat from '@/components/CartFloat';
import PageTracker from '@/components/PageTracker';
import { CartProvider } from '@/contexts/CartContext';

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider>
      <PageTracker />
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <WhatsAppFloat />
      <CartFloat />
    </CartProvider>
  );
}
