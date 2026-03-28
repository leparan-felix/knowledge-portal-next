// src/app/articles/[slug]/page.tsx
import Link from 'next/link'
import { articles } from '@/data/mockArticles'
import { notFound } from 'next/navigation'

// This function runs at build time to generate static pages
export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

// ✅ FIX: Make component async and await params (Next.js 15+ requirement)
export default async function ArticlePage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  // ✅ Unwrap the Promise
  const { slug } = await params
  
  // Find the article that matches the slug
  const article = articles.find((a) => a.slug === slug)

  // If no article found, show 404
  if (!article) {
    notFound()
  }

  // Format date nicely
  const formattedDate = new Date(article.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  // Estimate reading time (avg 200 words/min)
  const wordCount = article.content?.replace(/<[^>]*>/g, '').split(/\s+/).length || 0
  const readingTime = Math.ceil(wordCount / 200)

  return (
    <article className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        
        {/* Back Button */}
        <Link 
          href="/"
          className="inline-flex items-center text-sm text-gray-500 hover:text-blue-600 mb-8 transition-colors group"
        >
          <span className="mr-1 group-hover:-translate-x-1 transition-transform">←</span>
          Back to Portal
        </Link>

        {/* Category Badge */}
        <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full mb-4">
          {article.category}
        </span>

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
          {article.title}
        </h1>

        {/* Meta Info */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-200">
          <time dateTime={article.publishedAt}>{formattedDate}</time>
          <span>•</span>
          <span>{readingTime} min read</span>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
          {/* 
            Note: For mock data, dangerouslySetInnerHTML is safe.
            In production with user-generated content, use a sanitization library like DOMPurify.
          */}
          <div dangerouslySetInnerHTML={{ __html: article.content || '' }} />
        </div>

        {/* Bottom Action */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link 
            href="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm hover:shadow"
          >
            ← Back to All Articles
          </Link>
        </div>

      </div>
    </article>
  )
}