// src/components/CountdownTimer.js
import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            setIsActive(false);
            // Puedes agregar una lógica aquí para manejar la finalización del Pomodoro
            alert('¡Pomodoro completado!');
          } else {
            setMinutes((prevMinutes) => prevMinutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, minutes, seconds]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setMinutes(25);
    setSeconds(0);
  };

  return (
    <div className="text-center">
      <div className="text-5xl font-bold mb-4">
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </div>
      <div className="flex justify-center mb-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mr-4"
          onClick={toggleTimer}
        >
          {isActive ? 'Pausar' : 'Iniciar'}
        </button>
        <button
          className="bg-gray-300 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-400"
          onClick={resetTimer}
        >
          Reiniciar
        </button>
      </div>
    </div>
  );
};

export default Timer;
