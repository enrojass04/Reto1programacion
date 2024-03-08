import React from 'react';

const Home = () => {
  const TecnicalSkills = ['JavaScript', 'React', 'HTML', 'SQL', 'Git'];
  const PersonalSkills = [
    'Habilidades analíticas y de resolución de problemas.',
    'Excelentes habilidades de comunicación verbal y escrita.',
    'Capacidad para trabajar de manera efectiva en equipos multidisciplinarios',
    'Orientado a resultados y acostumbrado a trabajar bajo presión.',
  ];

  return (
    <div className="bg-gray-300 p-8 rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-2">Edwin Rojas Suárez</h2>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between md:space-x-10">
        <div className="w-full md:w-1/2 pr-4 mb-4 md:mb-0">
          <img
            className="w-48 h-48 rounded-full mx-auto mb-4"
            src="https://drive.google.com/drive/u/0/folders/11VAtJDKfY5Pu38JJzW4v3w0JqJxFZ9i4"
            alt="portafolio"
          />
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-justify text-gray-900 mb-4">
            Ingeniero de Sistemas altamente motivado y dedicado, con una sólida formación académica y experiencia en análisis de requerimientos, pruebas funcionales y soporte técnico. A pesar de estar pendiente de la obtención del título, poseo habilidades técnicas y analíticas, así como una exitosa trayectoria en proyectos de desarrollo de software.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:gap-10">
        <div className="w-full md:w-1/2 pr-4 bg-gray-200 p-4 border border-gray-300 rounded-lg mb-4 md:mb-0">
          <h3 className="text-xl font-semibold mb-2">Habilidades Técnicas:</h3>
          <ul className="list-none">
            {TecnicalSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-1/2 pr-4 bg-gray-200 p-4 border border-gray-300 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Habilidades Personales:</h3>
          <ul className="pl-8 list-decimal text-left">
            {PersonalSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
