import { IoArrowForward } from 'react-icons/io5'

export default function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-white dark:bg-black transition-colors duration-300">
      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      {/* Animated orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full blur-3xl opacity-15 animate-pulse delay-500"></div>
      
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 rounded-full text-violet-600 dark:text-violet-300 text-sm font-medium backdrop-blur-sm">
              Disponible para proyectos
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none">
            <span className="bg-gradient-to-r from-gray-900 via-violet-600 to-gray-900 dark:from-white dark:via-violet-200 dark:to-white bg-clip-text text-transparent">
              JULIAN GONZALEZ
            </span>
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              FULL STACK
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Desarrollador Fullstack especializado en Python (FastAPI) y React. Convierto ideas en aplicaciones web modernas y eficientes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="#contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl font-bold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/25"
            >
              <span className="relative z-10">Trabajemos juntos</span>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a 
              href="#projects"
              className="group px-8 py-4 border-2 border-violet-500/50 dark:border-violet-500/50 rounded-2xl font-bold text-gray-900 dark:text-violet-300 hover:border-violet-400 hover:bg-violet-500/10 transition-all duration-300 backdrop-blur-sm"
            >
              Ver mis proyectos
              <IoArrowForward className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-violet-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-violet-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}