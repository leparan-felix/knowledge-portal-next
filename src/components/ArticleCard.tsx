// src/components/ArticleCard.tsx
import Link from 'next/link'

interface Article {
  _id: string
  title: string
  slug: string
  category: string
  excerpt: string
  publishedAt: string
}

export default function ArticleCard({ article }: { article: Article }) {
  // Safety check: if article is undefined, show nothing
  if (!article) {
    return null
  }

  return (
    <article className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 border border-gray-100">
      {/* Category Badge */}
      <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full mb-3">
        {article.category || 'Uncategorized'}
      </span>

      {/* Title */}
      <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
        {article.title || 'Untitled'}
      </h2>

      {/* Excerpt */}
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
        {article.excerpt || 'No description available.'}
      </p>

      {/* Meta + Actions */}
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-400">
          {article.publishedAt ? new Date(article.publishedAt).toLocaleDateString() : 'No date'}
        </span>
        <div className="flex gap-3">
          <Link 
            href={`/articles/${article.slug || '#'}`}
            className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Read Article
          </Link>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
            Save
          </button>
        </div>
      </div>
    </article>
  )
}