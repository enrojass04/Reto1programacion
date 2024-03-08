import React from 'react'
import Card from '../../Components/Cards/Card';

const Skill = () => {

    const projects = [
        {
          name: 'JavaScript',
          description: "JavaScript es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos, ​ basado en prototipos, imperativo, débilmente tipado y dinámico.",
          projectsImageSrc: "../src/assets/Photos/skill1.png",
          url: "https://developer.mozilla.org/es/docs/Web/JavaScript",
        },
        {
          name: 'React',
          description: "React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad de software libre.",
          projectsImageSrc: "../src/assets/Photos/skill2.png",
          url: "https://es.react.dev/",
        },
        {
          name: 'Tailwind',
          description: "Tailwind CSS es un framework de CSS de código abierto​ para el diseño de páginas web. La principal característica de esta biblioteca es que, a diferencia de otras como Bootstrap, no genera una serie de clases predefinidas para elementos como botones o tablas.",
          projectsImageSrc: "../src/assets/Photos/skill3.png",
          url: "https://tailwindcss.com/",
        },
        {
          name: 'Nextjs',
          description: "Next.js es un marco web de desarrollo front-end de React de código abierto creado por Vercel que habilita funcionalidades como la representación del lado del servidor y la generación de sitios web estáticos para aplicaciones web basadas en React.",
          projectsImageSrc: "../src/assets/Photos/skill4.png",
          url: "https://nextjs.org/",
        },
      ];

  return (
    <div className="mt-10 flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <Card key={index} projectData={project} />
        ))}
      </div>
    </div>
  )
}

export default Skill