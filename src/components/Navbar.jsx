import { useState, useEffect } from 'react'
import { useTheme } from '../hooks/useTheme'
import { IoBulbOutline, IoBulb, IoMenu, IoClose } from 'react-icons/io5'
import logo from '../assets/navbar-logo.png'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = () => {
    setIsMobileMenuOpen(false)
  }

  const handleLogoClick = (e) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

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
          <a href="#top" onClick={handleLogoClick} className="group cursor-pointer">
            <img 
              src={logo} 
              alt="Logo" 
              className={`h-12 md:h-20 w-auto hover:scale-110 transition-transform ${
                isDark ? 'brightness-100' : 'brightness-0'
              }`}
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
            >
              {isDark ? <IoBulbOutline size={20} /> : <IoBulb size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-300 ${isDark
                  ? 'bg-gray-800/50 hover:bg-gray-700/50 text-yellow-400'
                  : 'bg-gray-200/50 hover:bg-gray-300/50 text-gray-700'
                }`}
            >
              {isDark ? <IoBulbOutline size={20} /> : <IoBulb size={20} />}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-all ${isDark
                  ? 'bg-gray-800/50 hover:bg-gray-700/50 text-white'
                  : 'bg-gray-200/50 hover:bg-gray-300/50 text-gray-700'
                }`}
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
              onClick={handleNavClick}
              className={`block py-2 px-4 rounded transition-colors hover:text-violet-400 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
            >
              Sobre mí
            </a>
            <a
              href="#skills"
              onClick={handleNavClick}
              className={`block py-2 px-4 rounded transition-colors hover:text-violet-400 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
            >
              Habilidades
            </a>
            <a
              href="#projects"
              onClick={handleNavClick}
              className={`block py-2 px-4 rounded transition-colors hover:text-violet-400 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
            >
              Proyectos
            </a>
            <a
              href="#contact"
              onClick={handleNavClick}
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