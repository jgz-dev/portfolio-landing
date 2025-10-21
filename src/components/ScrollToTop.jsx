import { useState, useEffect } from 'react'
import { IoArrowUp } from 'react-icons/io5'
import { useTheme } from '../hooks/useTheme'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const { isDark } = useTheme()

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-40 p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
            isDark
              ? 'bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-violet-600/50'
              : 'bg-violet-500 hover:bg-violet-600 text-white shadow-lg shadow-violet-500/50'
          }`}
          title="Ir al top"
          aria-label="Scroll to top"
        >
          <IoArrowUp size={24} />
        </button>
      )}
    </>
  )
}
