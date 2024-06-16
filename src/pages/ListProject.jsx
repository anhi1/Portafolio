const callouts = [
    {
      name: 'Feellike, tipo Airbnb',
      stack: 'React, Angular, Angular material, Bootstrap, Mysql, Nest.',
      description: 'Las imágenes son de airbnb y pinterest.',
      imageSrc: '/img/angular.png',
      imageAlt: 'feellike',
      href: '#',
    },
    {
      name: 'GoodRoot, página en desarrollo para la visualización y venta de plantas.',
      description: 'Incluye una pequeña descripción a través de un modal, un buscador y una API del tiempo. Las imágenes provienen de Pinterest.',
      stack: 'Javascript, Html, Bootstrap.',
      imageSrc: '/img/plantas.png',
      imageAlt: 'plantas',
      href: 'https://goodroot.vercel.app/',
    },
    {
      name: 'Oso polar',
      description: 'Infografía de osos, con un enfoque en el calentamiento global. Los modelos 3D son de Sketchfab.',
      stack: 'A-frame (framework), Javascript.',
      imageSrc: '/img/oso.png',
      imageAlt: 'plantas',
      href: 'https://effortless-capybara-d94286.netlify.app/',
    },
    {
      name: 'Book, muestra una descripción de cada libro y autor.',
      stack: 'React(Next), Bootstrap, json-server.',
      description: 'En este proyecto, que está en desarrollo, se ha instalado json-server y otras APIs que aún no son visibles por el momento.',
      imageSrc: '/img/libro.png',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: 'https://libro-omega.vercel.app/',
    },
    {
      name: 'EcoKids',
      stack: 'A-frame, Html, Javascript, Illustrator.',
      description: 'Página en desarrollo dirigida a niños. El objetivo de este proyecto es concienciar sobre el cuidado de nuestros mares. El juego consiste en eliminar plásticos con el puntero. Los modelos 3D son de Sketchfab',
      imageSrc: '/img/plastic.png',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: 'https://www.behance.net/portfolio/editor?project_id=200361127',
    },
    {
      name: 'Alevarium',
      stack: 'MERN, three.js, A-frame, Illustrator.',
      description: 'Proyecto grupal, el objetivo es desarrollar más enlaces que te lleven a otras páginas que informen sobre Alvearium.',
      imageSrc: '/img/alvea.png',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '#',
    },
  ]
  
  export default function ListProject() {
    return (
      <div className="bg-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">Proyectos</h2>
  
            <div className="mt-6 grid gap-y-12 lg:grid-cols-3 lg:gap-x-10">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-base font-semibold">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <h4 className="text-sm font-semibold text-gray-400">{callout.description}</h4>
                  {callout.stack && <h4 className="text-sm font-regular text-gray-900">Stack: {callout.stack}</h4>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  