// src/app/saved/page.tsx
import Link from 'next/link'
import { articles } from '@/data/mockArticles'

export default function SavedArticlesPage() {
  // For demo, show 2 saved articles (you can make this dynamic later)
  const savedArticles = articles.slice(0, 2)

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Saved Articles
          </h1>
          <p className="text-gray-600">
            Your bookmarked articles for later reading.
          </p>
        </header>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
            <p className="text-sm text-gray-500">Total Saved</p>
            <p className="text-2xl font-bold text-gray-900">{savedArticles.length}</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
            <p className="text-sm text-gray-500">Read</p>
            <p className="text-2xl font-bold text-gray-900">1</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
            <p className="text-sm text-gray-500">Unread</p>
            <p className="text-2xl font-bold text-gray-900">{savedArticles.length - 1}</p>
          </div>
        </div>

        {/* Articles List */}
        {savedArticles.length > 0 ? (
          <div className="space-y-4">
            {savedArticles.map((article) => (
              <article 
                key={article._id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-6 border border-gray-100"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full mb-3">
                      {article.category}
                    </span>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 text-sm mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-gray-400">
                        Saved on {new Date(article.publishedAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Link 
                      href={`/articles/${article.slug}`}
                      className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Read
                    </Link>
                    <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors" title="Remove from saved">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-xl border border-gray-200">
            <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No saved articles yet</h3>
            <p className="text-gray-500 mb-4">Start exploring and save articles to read later.</p>
            <Link href="/" className="inline-block px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Browse Articles
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}