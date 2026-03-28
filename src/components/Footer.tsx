// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 mt-auto border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left: Branding */}
          <div className="text-center md:text-left">
            <p className="text-sm font-medium text-gray-300">© 2026 Knowledge Portal</p>
            <p className="text-xs text-gray-500 mt-1"> Digital Transformation Programme</p>
          </div>
          
          {/* Right: Tech Stack */}
          <div className="flex items-center space-x-4 text-xs text-gray-500">
            <span className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Next.js 15
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Sanity.io
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
              Vercel
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}