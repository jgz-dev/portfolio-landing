import { IoLogoLinkedin, IoLogoGithub, IoMailOutline, IoChevronForward } from 'react-icons/io5'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 text-white py-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Julián González
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Desarrollador Full Stack especializado en crear soluciones digitales innovadoras
              con las mejores tecnologías del mercado.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-purple-300">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  Sobre Mí
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  Habilidades
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-purple-300">Sígueme</h4>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/julián-gonzález-5b6097275"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110"
              >
                <IoLogoLinkedin size={20} />
              </a>
              <a
                href="https://github.com/jgz-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg flex items-center justify-center text-white hover:from-gray-800 hover:to-gray-900 transition-all duration-300 transform hover:scale-110"
              >
                <IoLogoGithub size={20} />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=jg12hg@gmail.com&su=Hola&body=Quisiera hablar sobre tu portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center text-white hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-110"
              >
                <IoMailOutline size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Julián González. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}