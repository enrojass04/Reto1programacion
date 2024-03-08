import React from 'react';

const CardMiniProject = ({ projectName, projectComponent }) => {
  return (
    <div className="bg-gray-300 p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">{projectName}</h1>
      {projectComponent}
    </div>
  );
};

export default CardMiniProject;
