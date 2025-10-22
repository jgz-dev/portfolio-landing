import { lazy, Suspense } from 'react'
import { useTheme } from './hooks/useTheme'
import useSmoothScroll from './hooks/useSmoothScroll'
import useGoogleAnalytics from './hooks/useGoogleAnalytics'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ScrollToTop from './components/ScrollToTop'

// Lazy load componentes que no están en viewport inicial
const About = lazy(() => import('./components/About'))
const Skills = lazy(() => import('./components/Skills'))
const Projects = lazy(() => import('./components/Projects'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

// Placeholder simple para suspense
const LoadingPlaceholder = () => <div className="h-96 bg-white dark:bg-gray-900" />

function App() {
  useSmoothScroll();
  useTheme();
  useGoogleAnalytics();

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Navbar />
      <Hero />
      <Suspense fallback={<LoadingPlaceholder />}>
        <About />
      </Suspense>
      <Suspense fallback={<LoadingPlaceholder />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<LoadingPlaceholder />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<LoadingPlaceholder />}>
        <Contact />
      </Suspense>
      <Suspense fallback={<div className="h-48" />}>
        <Footer />
      </Suspense>
      <ScrollToTop />
    </div>
  )
}

export default App