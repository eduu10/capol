import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  products,
  getProductBySlug,
  getProductsByCategory,
} from '@/data/products';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: 'Produto não encontrado | Capol' };
  }

  return {
    title: `${product.name} | Capol`,
    description: product.description,
  };
}

export default async function ProdutoPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getProductsByCategory(product.categorySlug).filter(
    (p) => p.id !== product.id
  );

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Green Banner Header */}
      <div className="bg-[#2e7d32] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white tracking-wide uppercase font-heading">
            {product.name}
          </h1>
          <nav className="text-sm text-white/80">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/produtos" className="hover:text-white transition-colors">
              Produtos
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="lg:flex">
            {/* Product Image */}
            <div className="lg:w-1/2">
              <div className="relative aspect-square bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="lg:w-1/2 p-8 lg:p-12">
              <Link
                href={`/categoria/${product.categorySlug}`}
                className="inline-block px-3 py-1 text-sm font-medium bg-green-100 text-[#2e7d32] rounded-full hover:bg-green-200 transition-colors mb-4"
              >
                {product.category}
              </Link>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {product.name}
              </h1>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    Especie / Destino
                  </h3>
                  <p className="text-gray-900 font-medium">{product.species}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    Embalagem
                  </h3>
                  <p className="text-gray-900 font-medium">
                    {product.packaging}
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    Validade
                  </h3>
                  <p className="text-gray-900 font-medium">
                    {product.shelfLife}
                  </p>
                </div>
              </div>

              {/* Usage */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">
                  Modo de Uso
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.usage}
                </p>
              </div>

              {/* Restriction Warning */}
              {product.restriction && (
                <div className="bg-orange-50 border-l-4 border-orange-400 rounded-r-lg p-4 mb-8">
                  <div className="flex items-start">
                    <svg
                      className="w-5 h-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <h4 className="text-sm font-semibold text-orange-800">
                        Restrições de Uso
                      </h4>
                      <p className="text-sm text-orange-700 mt-1">
                        {product.restriction}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* CTA Button */}
              <Link
                href="/carrinho"
                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-[#2e7d32] text-white font-semibold rounded-xl hover:bg-[#1b5e20] transition-colors shadow-lg hover:shadow-xl"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"
                  />
                </svg>
                Solicitar Orcamento
              </Link>
            </div>
          </div>
        </div>

        {/* Composition Table */}
        {product.composition.length > 0 && (
          <div className="mt-12 bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="p-8 lg:p-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Composicao Nutricional
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-[#2e7d32]">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-[#2e7d32] uppercase tracking-wider">
                        Nutriente
                      </th>
                      <th className="text-right py-3 px-4 text-sm font-semibold text-[#2e7d32] uppercase tracking-wider">
                        Valor
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.composition.map((item, index) => (
                      <tr
                        key={index}
                        className={`border-b border-gray-100 ${
                          index % 2 === 0 ? 'bg-green-50/30' : 'bg-white'
                        }`}
                      >
                        <td className="py-3 px-4 text-gray-700">
                          {item.nutrient}
                        </td>
                        <td className="py-3 px-4 text-right font-medium text-gray-900">
                          {item.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Produtos Relacionados
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.slice(0, 4).map((related) => (
                <Link
                  key={related.id}
                  href={`/produto/${related.slug}`}
                  className="product-card bg-white rounded-xl shadow-sm overflow-hidden group"
                >
                  <div className="relative aspect-square bg-gray-100">
                    <Image
                      src={related.image}
                      alt={related.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-4">
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-green-100 text-[#2e7d32] rounded-full mb-2">
                      {related.category}
                    </span>
                    <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-[#2e7d32] transition-colors">
                      {related.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
