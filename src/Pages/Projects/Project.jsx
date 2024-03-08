import React from 'react';
import Card from '../../Components/Cards/Card';

const Project = () => {
    const projects = [
        {
          name: 'API Postres',
          description: "Proyecto educativo realizado en la Unviersidad Politécnico Grancoombiano de una aplicación CRUD realizada en express.js y Vue. En este proyecto se encuentra tanto los archivos del frontend, backend y la BD usada.",
          projectsImageSrc: "../src/assets/Photos/pj1.png",
          url: "https://github.com/enrojass04/API-Postres-Vue-Node",
        },
        {
          name: 'Wordle',
          description: "Proyecto educativo realizado en la Unviersidad Politécnico Grancoombiano usando programación POO, lenguajes usados Java, DB MySQL, y JavaFX.",
          projectsImageSrc: "../src/assets/Photos/pj2.png",
          url: "https://github.com/enrojass04/WORDLE",
        },
        {
          name: 'Jugadores de la NBA',
          description: "Proyecto educativo realizado para el BootCamp Talento Tech, realizado en React donde se aplican primeros conceptos de la programación por componentes.",
          projectsImageSrc: "../src/assets/Photos/pj3.png",
          url: "https://github.com/enrojass04/TalentoTech/tree/master/lab1",
        },
      ];

  return (
    <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between md:space-x-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} projectData={project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
