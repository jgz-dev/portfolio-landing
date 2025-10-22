import { useTheme } from './hooks/useTheme'
import useSmoothScroll from './hooks/useSmoothScroll'
import useGoogleAnalytics from './hooks/useGoogleAnalytics'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  useSmoothScroll();
  useTheme();
  useGoogleAnalytics();

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App