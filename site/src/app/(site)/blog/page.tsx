import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/data/blog';

export const metadata: Metadata = {
  title: 'Blog | Capol',
  description:
    'Fique por dentro das novidades, parcerias e servicos da Cooperativa Agropecuaria de Oliveira - Capol.',
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Banner */}
      <section className="bg-gray-100 border-b-4 border-[#2e7d32] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800 tracking-wide uppercase font-heading">
            BLOG
          </h1>
          <nav className="text-sm text-gray-500">
            <Link href="/" className="hover:text-[#2e7d32] transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">Blog</span>
          </nav>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="bg-white rounded-2xl shadow-sm overflow-hidden group hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative aspect-[16/9] bg-gray-100">
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <time className="text-sm text-gray-500">{post.date}</time>
                <h2 className="text-xl font-bold text-gray-900 mt-2 mb-3 group-hover:text-[#2e7d32] transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center text-[#2e7d32] font-medium text-sm mt-4">
                  Ler mais
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
