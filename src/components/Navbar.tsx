// src/components/Navbar.tsx
'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const [notifOpen, setNotifOpen] = useState(false)

  const pathname = usePathname()

  const profileRef = useRef<HTMLDivElement>(null)
  const notifRef = useRef<HTMLDivElement>(null)

  const navLinks = [
    { name: 'Dashboard', href: '/' },
    { name: 'Saved Articles', href: '/saved' },
    { name: 'Categories', href: '/categories' },
  ]

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setProfileOpen(false)
      }
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
        setNotifOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center h-16">

          {/* LOGO */}
          <div className="flex items-center mr-8">
            <Link href="/" className="flex items-end space-x-3 group">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-200">
                <span className="text-white font-bold text-sm">KP</span>
              </div>

              <div className="hidden sm:block leading-tight">
                <p className="text-xs text-gray-500 tracking-widest">DECOUPLE</p>
                <p className="text-lg font-bold text-gray-900 -mt-0.5">
                  Knowledge Portal
                </p>
              </div>
            </Link>
          </div>

          {/* NAV LINKS */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  pathname === link.href
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* RIGHT SIDE - No Search Bar */}
          <div className="hidden md:flex items-center space-x-4 ml-auto">

            {/* NOTIFICATIONS */}
            <div className="relative" ref={notifRef}>
              <button
                onClick={() => setNotifOpen(!notifOpen)}
                className="relative p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-200"
                aria-label="Notifications"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159L4 17h5" />
                </svg>
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
              </button>

              {notifOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white border border-gray-200 rounded-xl shadow-lg p-3 space-y-2 animate-in fade-in zoom-in-95 z-50">
                  <p className="text-sm font-semibold text-gray-900">Notifications</p>
                  <p className="text-sm text-gray-500">No new notifications</p>
                </div>
              )}
            </div>

            {/* PROFILE */}
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-all duration-200"
                aria-label="User menu"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-sm">
                  <span className="text-white text-xs font-semibold">FL</span>
                </div>

                <div className="hidden lg:block text-left">
                  <p className="text-sm font-semibold text-gray-900 leading-none">Felix L.</p>
                  <p className="text-xs text-gray-500 mt-0.5">Developer</p>
                </div>

                <svg className="w-4 h-4 text-gray-400 hidden lg:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg py-2 animate-in fade-in zoom-in-95 z-50">
                  <Link href="/profile" className="block px-4 py-2 text-sm hover:bg-gray-100">
                    Profile
                  </Link>
                  <Link href="/settings" className="block px-4 py-2 text-sm hover:bg-gray-100">
                    Settings
                  </Link>
                  <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden ml-auto p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}