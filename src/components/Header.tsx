'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Instagram, Search } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Contato', href: '/contato' },
    { name: 'Informativos', href: '#' },
  ]

  const isActive = (href: string) => pathname === href

  // Fecha pesquisa ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="fixed top-0 w-full bg-gray-900/30 backdrop-blur-sm shadow-sm z-50">
      <div className=" mx-auto sm:px-6 lg:px-8 flex items-center justify-between py-0">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/images/hero_bg.png"
            alt="Logo BIOAMA"
            width={50}
            height={50}
            className="object-contain"
            priority
          />
        </Link>

        {/* Menu Desktop centralizado - posição absoluta para não ser afetado */}
        <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center space-x-10 z-10 ">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-gray-900 font-medium transition-colors duration-100 hover:text-white"
            >
              {item.name}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-bioamaGreen transition-all duration-100
                  ${isActive(item.href) ? 'w-full' : 'w-0'} 
                  group-hover:w-full
                `}
              ></span>
            </Link>
          ))}
        </nav>

        {/* Pesquisa + Instagram */}
        <div className="hidden md:flex items-center  gap-4 relative" ref={searchRef}>
          {/* Campo de pesquisa sobreposto */}
          {isSearchOpen && (
          <div className="absolute right-28 flex items-center bg-transparent rounded-full px-2 py-1 shadow-md border border-black">
            <input
              type="text"
              placeholder="Pesquisar..."
              className="text-sm focus:outline-none bg-transparent border-none ml-2 placeholder-black"
              autoFocus
            />
            <button
              type="button"
              className="bg-bioamaGreen text-white px-2 py-1 rounded-full text-sm font-medium"
            >
              Pesquisar
            </button>
          </div>

          )}

          {/* Lupa */}
          {!isSearchOpen && (
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              className="text-gray-700 hover:text-bioamaGreen"
              aria-label="Abrir pesquisa"
            >
              <Search className="h-5 w-5" />
            </button>
          )}

          {/* Instagram */}
          <a
            href="https://instagram.com/bioamaconsultoria"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1"
          >
            <Instagram className="h-5 w-5 text-[#E1306C]" />
            <h1>Instagram</h1>
          </a>
        </div>

        {/* Menu Mobile */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-bioamaGreen"
            aria-label="Abrir menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile Expandido */}
      {isMenuOpen && (
        <div className="md:hidden py-4 border-t border-gray-200">
          <nav className="flex flex-col space-y-4 px-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-gray-900 font-medium transition-colors duration-100 hover:text-white group"
              >
                {item.name}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-bioamaGreen transition-all duration-100
                    ${isActive(item.href) ? 'w-full' : 'w-0'}
                  `}
                />
              </Link>
            ))}
            <div className="flex items-center space-x-2">
              <button type="button" className="text-gray-700 hover:text-bioamaGreen">
                <Search className="h-5 w-5" />
              </button>
              <a
                href="https://instagram.com/bioamaconsultoria"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-700 hover:text-bioamaGreen transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
                <span>Instagram</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
