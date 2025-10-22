import { useState, useEffect, useCallback, useMemo } from 'react'
import { useTheme } from '../hooks/useTheme'
import { IoBulbOutline, IoBulb, IoMenu, IoClose } from 'react-icons/io5'
import logo from '../assets/navbar-logo.png'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? isDark
          ? 'bg-black/80 backdrop-blur-md border-b border-violet-500/20'
          : 'bg-white/80 backdrop-blur-md border-b border-violet-500/20'
        : isDark
          ? 'bg-transparent'
          : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <a href="#top" className="group cursor-pointer flex-shrink-0">
            <img 
              src={logo} 
              alt="Logo" 
              className={`h-12 md:h-20 w-auto hover:scale-110 transition-transform ${
                isDark ? 'brightness-100' : 'brightness-0'
              }`}
              loading="eager"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className={`transition-colors hover:text-violet-400 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Sobre mí
            </a>
            <a href="#skills" className={`transition-colors hover:text-violet-400 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Habilidades
            </a>
            <a href="#projects" className={`transition-colors hover:text-violet-400 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Proyectos
            </a>
            <a
              href="#contact"
              className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-violet-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105"
            >
              Contacto
            </a>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-300 transform hover:scale-110 ${isDark
                  ? 'bg-gray-800/50 hover:bg-gray-700/50 text-yellow-400'
                  : 'bg-gray-200/50 hover:bg-gray-300/50 text-gray-700'
                }`}
              title={isDark ? 'Modo claro' : 'Modo oscuro'}
              aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            >
              {isDark ? <IoBulbOutline size={20} /> : <IoBulb size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all ${isDark
                  ? 'bg-gray-800/50 hover:bg-gray-700/50 text-yellow-400'
                  : 'bg-gray-200/50 hover:bg-gray-300/50 text-gray-700'
                }`}
              aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            >
              {isDark ? <IoBulbOutline size={20} /> : <IoBulb size={20} />}
            </button>

            <button
              onClick={toggleMobileMenu}
              className={`p-2 rounded-lg transition-all ${isDark
                  ? 'bg-gray-800/50 hover:bg-gray-700/50 text-white'
                  : 'bg-gray-200/50 hover:bg-gray-300/50 text-gray-700'
                }`}
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className={`md:hidden mt-4 pb-4 space-y-3 ${isDark ? 'bg-gray-900/50' : 'bg-white/50'} rounded-lg p-4`}>
            <a
              href="#about"
              onClick={closeMobileMenu}
              className={`block py-2 px-4 rounded transition-colors hover:text-violet-400 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
            >
              Sobre mí
            </a>
            <a
              href="#skills"
              onClick={closeMobileMenu}
              className={`block py-2 px-4 rounded transition-colors hover:text-violet-400 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
            >
              Habilidades
            </a>
            <a
              href="#projects"
              onClick={closeMobileMenu}
              className={`block py-2 px-4 rounded transition-colors hover:text-violet-400 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
            >
              Proyectos
            </a>
            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="block bg-gradient-to-r from-violet-600 to-purple-600 text-white py-2 px-4 rounded font-medium hover:from-violet-500 hover:to-purple-500 transition-all text-center"
            >
              Contacto
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}