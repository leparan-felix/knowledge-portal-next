// src/app/categories/page.tsx
import Link from 'next/link'
import { articles } from '@/data/mockArticles'

export default function CategoriesPage() {
  // Group articles by category
  const categories = articles.reduce((acc, article) => {
    if (!acc[article.category]) {
      acc[article.category] = []
    }
    acc[article.category].push(article)
    return acc
  }, {} as Record<string, typeof articles>)

  const categoryColors: Record<string, string> = {
    Management: 'bg-blue-50 text-blue-700 border-blue-200',
    Technology: 'bg-green-50 text-green-700 border-green-200',
    Workplace: 'bg-purple-50 text-purple-700 border-purple-200',
    Finance: 'bg-orange-50 text-orange-700 border-orange-200',
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Categories
          </h1>
          <p className="text-gray-600">
            Browse articles by topic.
          </p>
        </header>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(categories).map(([category, categoryArticles]) => (
            <Link 
              key={category}
              href={`/?category=${encodeURIComponent(category)}`}
              className={`bg-white rounded-xl p-6 border-2 transition-all hover:shadow-lg ${
                categoryColors[category] || 'bg-gray-50 text-gray-700 border-gray-200'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">{category}</h2>
                <span className="px-3 py-1 bg-white/80 rounded-full text-sm font-semibold">
                  {categoryArticles.length} articles
                </span>
              </div>
              <p className="text-sm opacity-80 mb-4">
                Explore insights on {category.toLowerCase()} topics.
              </p>
              <div className="flex items-center text-sm font-medium">
                <span>Browse Category</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* All Articles Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">All Articles by Category</h2>
          <div className="space-y-6">
            {Object.entries(categories).map(([category, categoryArticles]) => (
              <div key={category} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <span className={`w-3 h-3 rounded-full mr-3 ${
                    category === 'Management' ? 'bg-blue-500' :
                    category === 'Technology' ? 'bg-green-500' :
                    category === 'Workplace' ? 'bg-purple-500' :
                    'bg-orange-500'
                  }`}></span>
                  {category}
                </h3>
                <div className="space-y-3">
                  {categoryArticles.map((article) => (
                    <Link 
                      key={article._id}
                      href={`/articles/${article.slug}`}
                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <p className="text-sm font-medium text-gray-900">{article.title}</p>
                      <p className="text-xs text-gray-500 mt-1">{article.excerpt}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}