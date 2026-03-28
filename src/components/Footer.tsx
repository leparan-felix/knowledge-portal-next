export default function Footer() {
  return (
    <footer className="bg-gray-500 text-gray-00 py-6 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Knowledge Portal. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Privacy</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Terms</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Contact</a>
        </div>
      </div>
    </footer>
  )
}