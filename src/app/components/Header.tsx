'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            Portfolio
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
              เกี่ยวกับฉัน
            </Link>
            <Link href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">
              ผลงาน
            </Link>
            <Link href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors">
              ทักษะ
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              ติดต่อ
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <Link href="#about" className="block py-2 text-gray-600 hover:text-blue-600">
              เกี่ยวกับฉัน
            </Link>
            <Link href="#projects" className="block py-2 text-gray-600 hover:text-blue-600">
              ผลงาน
            </Link>
            <Link href="#skills" className="block py-2 text-gray-600 hover:text-blue-600">
              ทักษะ
            </Link>
            <Link href="#contact" className="block py-2 text-gray-600 hover:text-blue-600">
              ติดต่อ
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
