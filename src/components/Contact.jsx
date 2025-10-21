import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react';
import { IoMailOutline, IoLogoLinkedin, IoLogoGithub, IoPaperPlane } from 'react-icons/io5'
import { IoCheckmarkCircle } from 'react-icons/io5'

export default function Contact() {
  const [state, handleSubmit] = useForm("myznvnkk");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Desarrollo Web Full Stack',
    budget: 'A discutir',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (state.succeeded) {
    return (
      <section id="contact" className="py-32 bg-white dark:bg-black relative overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <IoCheckmarkCircle className="mx-auto mb-6 text-green-500" size={64} />
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-violet-600 dark:from-violet-400 to-cyan-600 dark:to-cyan-400 bg-clip-text text-transparent">¡Gracias por tu mensaje!</span>
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              He recibido tu correo y te responderé en menos de 24 horas.
            </p>
            <a
              href="#"
              className="inline-block bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-violet-500 hover:to-purple-500 transition-all duration-300 hover:scale-105"
            >
              Volver al inicio
            </a>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-32 bg-white dark:bg-black relative overflow-hidden transition-colors duration-300">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 rounded-full text-violet-600 dark:text-violet-300 text-sm font-medium backdrop-blur-sm">
            Contacto
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
            Trabajemos
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent"> juntos</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Si tienes una idea o un proyecto en mente, no dudes en contactarme. Estoy disponible para nuevos desafíos.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Contact Info - Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-3xl p-8 transition-colors duration-300">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <div className="w-3 h-8 bg-gradient-to-b from-violet-400 to-purple-600 rounded-full mr-4"></div>
                Información de Contacto
              </h3>

              <div className="space-y-6">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=jg12hg@gmail.com&su=Hola&body=Quisiera hablar sobre tu portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center p-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 dark:from-blue-500/10 dark:to-cyan-500/10 border border-blue-500/20 dark:border-blue-500/20 rounded-2xl hover:border-blue-400/40 transition-all cursor-pointer"
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-2xl mr-4 group-hover:scale-110 transition-transform">
                    <IoMailOutline className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-gray-900 dark:text-white font-semibold">Email</div>
                    <div className="text-blue-600 dark:text-blue-300">jg12hg@gmail.com</div>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/julián-gonzález-5b6097275"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-500/10 dark:to-pink-500/10 border border-purple-500/20 dark:border-purple-500/20 rounded-2xl hover:border-purple-400/40 transition-all cursor-pointer"
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-2xl mr-4 group-hover:scale-110 transition-transform">
                    <IoLogoLinkedin className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-gray-900 dark:text-white font-semibold">LinkedIn</div>
                    <div className="text-purple-600 dark:text-purple-300">julián-gonzález-5b6097275</div>
                  </div>
                </a>

                <a
                  href="https://github.com/jgz-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center p-4 bg-gradient-to-r from-green-500/10 to-teal-500/10 dark:from-green-500/10 dark:to-teal-500/10 border border-green-500/20 dark:border-green-500/20 rounded-2xl hover:border-green-400/40 transition-all cursor-pointer"
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center text-2xl mr-4 group-hover:scale-110 transition-transform">
                    <IoLogoGithub className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-gray-900 dark:text-white font-semibold">GitHub</div>
                    <div className="text-green-600 dark:text-green-300">github.com/jgz-dev</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Availability card */}
            <div className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20 rounded-3xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-4 h-4 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-green-600 dark:text-green-400 font-bold">Disponible para proyectos</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                Actualmente acepto nuevos proyectos. Tiempo de respuesta promedio: 12 horas.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-3xl p-8 transition-colors duration-300">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <div className="w-3 h-8 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full mr-4"></div>
                Envíame un mensaje
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-3">Nombre *</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-white dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600/50 text-gray-900 dark:text-white rounded-2xl placeholder-gray-400 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200 hover:border-gray-400 dark:hover:border-gray-500/50"
                      placeholder="Tu nombre completo"
                    />
                    <ValidationError
                      prefix="Nombre"
                      field="name"
                      errors={state.errors}
                      className="text-red-500 dark:text-red-400 mt-2 text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-3">Email *</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-white dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600/50 text-gray-900 dark:text-white rounded-2xl placeholder-gray-400 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200 hover:border-gray-400 dark:hover:border-gray-500/50"
                      placeholder="tu@email.com"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                      className="text-red-500 dark:text-red-400 mt-2 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-gray-700 dark:text-gray-300 font-medium mb-3">Tipo de proyecto</label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-white dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600/50 text-gray-900 dark:text-white rounded-2xl focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200 hover:border-gray-400 dark:hover:border-gray-500/50"
                  >
                    <option>Desarrollo Web Full Stack</option>
                    <option>Frontend (React/Next.js)</option>
                    <option>Backend (Python/FastAPI)</option>
                    <option>Consultoría técnica</option>
                    <option>Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-gray-700 dark:text-gray-300 font-medium mb-3">Presupuesto estimado</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-white dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600/50 text-gray-900 dark:text-white rounded-2xl focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200 hover:border-gray-400 dark:hover:border-gray-500/50"
                  >
                    <option>$500 - $1,000</option>
                    <option>$1,000 - $3,000</option>
                    <option>$3,000 - $5,000</option>
                    <option>$5,000+</option>
                    <option>A discutir</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-3">Cuéntame sobre tu proyecto *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-4 bg-white dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600/50 text-gray-900 dark:text-white rounded-2xl placeholder-gray-400 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200 hover:border-gray-400 dark:hover:border-gray-500/50 resize-none"
                    placeholder="Describe tu proyecto, objetivos, timeline y cualquier detalle relevante..."
                  ></textarea>
                  <ValidationError
                    prefix="Mensaje"
                    field="message"
                    errors={state.errors}
                    className="text-red-500 dark:text-red-400 mt-2 text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white py-4 px-8 rounded-2xl font-bold hover:from-violet-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-2xl hover:shadow-violet-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {state.submitting ? 'Enviando...' : 'Enviar mensaje'}
                  {!state.submitting && <IoPaperPlane size={18} />}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}