import { IoLogoReact, IoLogoPython, IoLogoNodejs } from 'react-icons/io5'
import { SiTypescript, SiNextdotjs, SiFastapi, SiPostgresql, SiTailwindcss, SiMongodb } from 'react-icons/si'
import { FaJava } from "react-icons/fa";
import { BiSolidShield } from 'react-icons/bi'
import { BsGearFill, BsBootstrap } from "react-icons/bs"
import { AiOutlineCodepen } from "react-icons/ai"

export default function Skills() {
  const skills = [
    {name: 'Java', icon: FaJava, color: 'from-teal-300 to-yellow-200'},
    { name: 'React', icon: IoLogoReact, color: 'from-cyan-400 to-blue-500' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'from-gray-300 to-gray-500' },
    { name: 'TypeScript', icon: SiTypescript, color: 'from-blue-500 to-blue-700' },
    { name: 'Python', icon: IoLogoPython, color: 'from-yellow-400 to-blue-500' },
    { name: 'FastAPI', icon: SiFastapi, color: 'from-teal-400 to-green-500' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'from-blue-600 to-indigo-700' },
    { name: 'TailwindCSS', icon: SiTailwindcss, color: 'from-teal-300 to-sky-400' },
    { name: 'Node.js', icon: IoLogoNodejs, color: 'from-green-500 to-lime-600' },
    { name: 'MongoDB', icon: SiMongodb, color: 'from-green-400 to-emerald-600' }
  ]

  const services = [
    {
      title: 'Desarrollo Frontend',
      description: 'Interfaces modernas, responsivas y optimizadas para el máximo rendimiento.',
      icon: AiOutlineCodepen,
      gradient: 'bg-gradient-to-r from-violet-500 to-purple-500 dark:from-violet-400 dark:to-purple-600',
      features: ['React / Next.js', 'TypeScript', 'TailwindCSS / shadcn/ui', 'Vite']
    },
    {
      title: 'Desarrollo Backend',
      description: 'APIs RESTful escalables, seguras y documentadas con las mejores prácticas.',
      icon: BsGearFill,
      gradient: 'from-blue-500 to-cyan-500',
      features: ['Python / FastAPI', 'SQLModel', 'Node.js', 'PostgreSQL / MongoDB']
    },
    {
      title: 'Testing y Despliegue',
      description: 'Aseguro la calidad del código y automatizo la entrega continua con CI/CD.',
      icon: BiSolidShield,
      gradient: 'from-green-500 to-teal-500',
      features: ['Jest / React Testing Library', 'CI/CD con GitHub Actions', 'Despliegue en Vercel/Render', 'Autenticación con JWT']
    }
  ]

  return (
  <section className="py-20 sm:py-32 bg-gray-50 dark:bg-black relative overflow-hidden transition-colors duration-300">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-20">
          <h2 id="skills" className="sr-only">Habilidades</h2>
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 rounded-full text-violet-600 dark:text-violet-300 text-sm font-medium backdrop-blur-sm">
            Habilidades & Servicios
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
            Mi arsenal
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent"> tecnológico</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="mb-16 sm:mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-12 text-center">Tecnologías que domino</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => {
              // Mapear colores para cada skill
              const colorMap = {
                'Java': 'text-orange-500',
                'React': 'text-cyan-400',
                'Next.js': 'text-gray-400',
                'TypeScript': 'text-blue-500',
                'Python': 'text-yellow-400',
                'FastAPI': 'text-teal-400',
                'PostgreSQL': 'text-blue-600',
                'TailwindCSS': 'text-teal-300',
                'Node.js': 'text-green-500',
                'MongoDB': 'text-green-400',
                'Bootstrap': 'text-purple-500'
              }
              
              return (
                <div key={skill.name} className="group bg-white dark:bg-gradient-to-br dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-2xl p-6 hover:border-violet-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center">
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <skill.icon className={`text-6xl ${colorMap[skill.name] || 'text-gray-500'}`} />
                    </div>
                    <span className="text-gray-900 dark:text-white font-semibold text-lg">{skill.name}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Services Grid */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-12 text-center">Servicios que ofrezco</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative">
                <div className="bg-white dark:bg-gradient-to-br dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-3xl p-8 hover:border-violet-500/50 transition-all duration-300 hover:scale-105 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform`}>
                    <service.icon className="text-white" size={32} />
                  </div>
                  
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-violet-300 transition-colors">
                    {service.title}
                  </h4>
                  
                  <p className="text-gray-700 dark:text-gray-200 mb-6 leading-relaxed font-medium">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-violet-400 rounded-full mr-3"></div>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}