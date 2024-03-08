import React from 'react';

const Card = ({projectData}) => {

    const { name, projectsImageSrc, description, url } = projectData;

  return (
    <div className="bg-gray-300 p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <img
        className="w-60 h-44 rounded-lg mx-auto mb-4"
        src={projectsImageSrc}
        alt="Imagen del proyecto"
      />
      <p className="text-left text-gray-600 mb-4">{description}</p>
      <p className="text-blue-500 hover:underline cursor-pointer">
        <a href={url} target="_blank" rel="noopener noreferrer">
          Ver más
        </a>
      </p>
    </div>
  );
};

export default Card;
