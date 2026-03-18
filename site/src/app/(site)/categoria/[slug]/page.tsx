import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  categories,
  getCategoryBySlug,
  getProductsByCategory,
} from '@/data/products';
import { assetPath } from '@/lib/utils';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return categories.map((cat) => ({
    slug: cat.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return { title: 'Categoria não encontrada | Capol' };
  }

  return {
    title: `${category.name} | Produtos | Capol`,
    description: `Confira os produtos da categoria ${category.name} da Capol. Rações e suplementos de alta qualidade para nutrição animal.`,
  };
}

export default async function CategoriaPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = getProductsByCategory(slug);

  return (
    <div className="bg-white min-h-screen">
      {/* Green Header Banner */}
      <div className="bg-[#2e7d32] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white tracking-wide uppercase font-heading">
            {category.name.toUpperCase()}
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
            <span className="text-white">{category.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar - LEFT */}
          <aside className="w-full lg:w-72 flex-shrink-0">
            {/* Categories */}
            <div className="mb-8">
              <h2 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-4">
                CATEGORIAS
              </h2>
              <ul className="space-y-1">
                {categories.map((cat) => (
                  <li key={cat.slug}>
                    <Link
                      href={`/categoria/${cat.slug}`}
                      className={`w-full text-left text-sm py-1.5 transition-colors flex items-center gap-2 ${
                        cat.slug === slug
                          ? 'text-[#2e7d32] font-semibold'
                          : 'text-gray-600 hover:text-[#2e7d32]'
                      }`}
                    >
                      <span className="text-gray-400">&gt;</span>
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <hr className="border-gray-200 mb-8" />

            {/* Newsletter */}
            <div>
              <h2 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-4">
                ASSINE NOSSA NEWSLETTER
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                Receba informações com as últimas notícias, ofertas, etc.
              </p>
              <form
                action="/api/newsletter"
                method="POST"
                className="flex gap-2"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Insira o seu email"
                  className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#2e7d32]"
                />
                <button
                  type="submit"
                  className="bg-[#2e7d32] text-white px-3 py-2 rounded hover:bg-[#1b5e20] transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </button>
              </form>
            </div>
          </aside>

          {/* Main Content - Products Grid */}
          <div className="flex-1">
            {/* Products Grid - 3 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/produto/${product.slug}`}
                  className="group text-center"
                >
                  {/* Product Image */}
                  <div className="relative w-full aspect-[3/4] mb-4 bg-white">
                    <Image
                      src={assetPath(product.image)}
                      alt={product.name}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  {/* Product Name */}
                  <h3 className="text-base font-semibold text-gray-800 group-hover:text-[#2e7d32] transition-colors">
                    {product.name}
                  </h3>
                </Link>
              ))}
            </div>

            {/* Empty state */}
            {categoryProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">
                  Nenhum produto encontrado nesta categoria.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
