import React from 'react';
import CardMiniProject from '../../Components/Cards/CardMiniProjects';
import TodoListComponent from '../../Components/TodoList/TodoListComponent';
import Timer from '../../Components/Timer/Timer';


const MiniProject = () => {
  const miniProjects = [
    {
      projectName: 'To-Do List',
      projectComponent: <TodoListComponent />,
    },
    {
      projectName: 'Pomodoro Timer',
      projectComponent: <Timer />,
    },
  ];

  return (
    <div className="mt-10 flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10">
        {miniProjects.map((miniProject, index) => (
          <CardMiniProject key={index} {...miniProject} />
        ))}
      </div>
    </div>

  );
};

export default MiniProject;
