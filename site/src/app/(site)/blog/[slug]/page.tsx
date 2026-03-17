import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts, getBlogPostBySlug } from '@/data/blog';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: 'Post nao encontrado | Capol' };
  }

  return {
    title: `${post.title} | Blog | Capol`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const otherPosts = blogPosts.filter((p) => p.id !== post.id);

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
            <Link href="/blog" className="hover:text-[#2e7d32] transition-colors">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800 line-clamp-1">{post.title}</span>
          </nav>
        </div>
      </section>

      {/* Banner Image */}
      <div className="relative w-full h-64 md:h-96 bg-gray-200">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Post Header */}
        <div className="mb-8">
          <time className="text-sm text-gray-500 font-medium">
            {post.date}
          </time>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            {post.title}
          </h1>
        </div>

        {/* Post Content */}
        <div
          className="prose prose-lg max-w-none
            prose-headings:text-gray-900 prose-headings:font-bold
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-gray-600 prose-p:leading-relaxed
            prose-li:text-gray-600
            prose-strong:text-gray-900
            prose-ul:mt-4 prose-ul:space-y-2
            prose-a:text-[#2e7d32] prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Back to blog */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/blog"
            className="inline-flex items-center text-[#2e7d32] hover:text-[#1b5e20] font-medium transition-colors"
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Voltar para o blog
          </Link>
        </div>
      </article>

      {/* Other Posts */}
      {otherPosts.length > 0 && (
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Outras Publicacoes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherPosts.map((otherPost) => (
                <Link
                  key={otherPost.id}
                  href={`/blog/${otherPost.slug}`}
                  className="flex gap-4 bg-gray-50 rounded-xl overflow-hidden group hover:bg-gray-100 transition-colors"
                >
                  <div className="relative w-32 h-32 flex-shrink-0 bg-gray-200">
                    <Image
                      src={otherPost.thumbnail}
                      alt={otherPost.title}
                      fill
                      className="object-cover"
                      sizes="128px"
                    />
                  </div>
                  <div className="py-4 pr-4">
                    <time className="text-xs text-gray-500">
                      {otherPost.date}
                    </time>
                    <h3 className="text-sm font-bold text-gray-900 mt-1 group-hover:text-[#2e7d32] transition-colors line-clamp-2">
                      {otherPost.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                      {otherPost.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
