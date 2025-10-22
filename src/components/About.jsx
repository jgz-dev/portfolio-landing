export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Sobre Mí</h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Soy Julián González, desarrollador web fullstack y estudiante avanzado de la Tecnicatura Universitaria en Programación en UTN (ingreso 2024). Mi objetivo es construir aplicaciones web modernas, eficientes y escalables, aplicando siempre las mejores prácticas del sector.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 sm:gap-12 items-start">
          <div className="md:col-span-3">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4">Mi Trayectoria y Stack Tecnológico</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Mi experiencia incluye proyectos con C# y Java (Spring Boot), pero mi stack principal se centra en tecnologías modernas. Actualmente, me especializo en el desarrollo de APIs REST con <strong className="font-semibold">Python (FastAPI, SQLModel)</strong> y frontends interactivos con <strong className="font-semibold">React, Next.js y TypeScript</strong>.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Utilizo <strong className="font-semibold">TailwindCSS</strong> y <strong className="font-semibold">shadcn/ui</strong> para crear interfaces limpias y responsivas, y aseguro la calidad y seguridad del código con herramientas como <strong className="font-semibold">Jest, React Testing Library, Zod, JWT y bcrypt</strong>.
            </p>
             <p className="text-gray-600 dark:text-gray-300">
              Además, tengo experiencia en la configuración de flujos de <strong className="font-semibold">CI/CD con GitHub Actions</strong> para automatizar despliegues en plataformas como <strong className="font-semibold">Vercel, Render y Railway</strong>.
            </p>
          </div>

          <div className="md:col-span-2 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4">Filosofía de Desarrollo</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-500 font-bold mr-3 mt-1">✓</span>
                <span className="text-gray-700 dark:text-gray-300"><strong className="font-semibold">Calidad de Código:</strong> Escribo código limpio, mantenible y bien documentado.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 font-bold mr-3 mt-1">✓</span>
                <span className="text-gray-700 dark:text-gray-300"><strong className="font-semibold">Testing Riguroso:</strong> Implemento pruebas unitarias y de integración para garantizar la estabilidad.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 font-bold mr-3 mt-1">✓</span>
                <span className="text-gray-700 dark:text-gray-300"><strong className="font-semibold">Soluciones Completas:</strong> Abordo los proyectos con una mentalidad fullstack, desde la base de datos hasta la UI.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 font-bold mr-3 mt-1">✓</span>
                <span className="text-gray-700 dark:text-gray-300"><strong className="font-semibold">Mejora Continua:</strong> Estoy en constante aprendizaje y adaptación a las nuevas tecnologías del ecosistema web.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}