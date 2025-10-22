import { IoArrowForward } from 'react-icons/io5'
import { BsCart, BsCalendarEvent, BsGear, BsCode } from 'react-icons/bs'

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Fullstack",
      description: "Plataforma de e-commerce completa con backend en FastAPI y frontend en React. Incluye autenticación JWT desde cero, gestión de productos, subida de imágenes, y un dashboard de analíticas en tiempo real.",
      tech: ["React", "Vite", "FastAPI", "SQLAlchemy", "JWT", "Pytest", "TailwindCSS"],
      link: "#",
      gradient: "from-orange-500 to-red-500",
      status: "En desarrollo",
      icon: BsCart
    },
    {
      title: "NET Turnero",
      description: "Sistema de gestión de reservas deportivas con autenticación JWT, panel de admin y notificaciones. Incluye validaciones de disponibilidad, soporte para reservas de media/cancha completa y modo oscuro.",
      tech: ["React", "FastAPI", "PostgreSQL", "JWT", "TailwindCSS", "shadcn/ui"],
      link: "#",
      gradient: "from-blue-500 to-cyan-500",
      status: "Listo para producción",
      icon: BsCalendarEvent
    },
    {
      title: "API REST con FastAPI", 
      description: "Microservicio de alto rendimiento con autenticación JWT, validación de datos con Pydantic y documentación OpenAPI automática. Ideal como base para proyectos escalables.",
      tech: ["Python", "FastAPI", "SQLModel", "PostgreSQL", "JWT", "Docker"],
      link: "#",
      gradient: "from-green-500 to-teal-500",
      status: "Template Base",
      icon: BsGear
    },
    {
      title: "Portfolio Personal",
      description: "Esta landing page, desarrollada para mostrar mis habilidades. Diseño moderno con dark mode, animaciones y construido con las últimas tecnologías del ecosistema React.",
      tech: ["React", "Vite", "TailwindCSS", "JavaScript", "Formspree"],
      link: "https://github.com/jgz-dev/portfolio-landing",
      gradient: "from-violet-500 to-purple-500",
      status: "En vivo",
      icon: BsCode
    }
  ]

  return (
    <section className="py-20 sm:py-32 bg-gray-50 dark:bg-black relative overflow-hidden transition-colors duration-300">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-20">
          <h2 id="projects" className="sr-only">Proyectos</h2>
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 rounded-full text-violet-600 dark:text-violet-300 text-sm font-medium backdrop-blur-sm">
            Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
            Proyectos que
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent"> he construido</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Aquí hay una selección de mis trabajos recientes donde aplico mi stack tecnológico.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative">
              <div className="bg-gray-50 dark:bg-gradient-to-br dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-3xl overflow-hidden hover:border-violet-500/50 transition-all duration-500 hover:scale-[1.02]">
                {/* Header with gradient */}
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                
                <div className="p-8">
                  {/* Project header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div className={`w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-2xl flex items-center justify-center text-2xl mr-4 group-hover:scale-110 transition-transform`}>
                        <project.icon className="text-white" size={32} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-violet-300 transition-colors">
                          {project.title}
                        </h3>
                        <span className={`inline-block px-3 py-1 bg-gradient-to-r ${project.gradient} bg-opacity-20 border border-current rounded-full text-xs font-medium mt-2`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-200 mb-6 leading-relaxed font-medium">
                    {project.description}
                  </p>
                  
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600/50 rounded-lg text-gray-700 dark:text-gray-300 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600/50 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action buttons */}
                  <div className="flex gap-4">
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 bg-gradient-to-r ${project.gradient} text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300 group-hover:scale-105 text-center inline-flex items-center justify-center gap-2`}
                    >
                      Ver proyecto
                      <IoArrowForward className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a 
                      href="https://github.com/jgz-dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-300 rounded-xl font-semibold hover:border-violet-500 hover:text-violet-600 dark:hover:text-violet-300 transition-all duration-300 text-center inline-block"
                    >
                      Código
                    </a>
                  </div>
                </div>
                
                {/* Hover effect overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gray-50 dark:bg-gradient-to-r dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">¿Tienes una idea en mente?</h3>
            <p className="text-gray-700 dark:text-gray-200 mb-6 font-medium">Convirtamos tu visión en realidad digital</p>
            <a 
              href="#contact"
              className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-violet-500 hover:to-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-violet-500/25 inline-block"
            >
              Hablemos de tu proyecto
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}