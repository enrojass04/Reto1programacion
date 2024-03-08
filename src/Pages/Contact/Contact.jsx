import React from 'react'

const Contact = () => {
  return (
    <div className="container mx-auto my-10 bg-gray-300 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6">Contacto</h2>
          <div className="max-w-md mx-auto">
            <p className="mb-4">
              <strong>Correo Electrónico:</strong> enrojass04@gmail.com
            </p>
            <p className="mb-4">
              <strong>Teléfono:</strong> (57) 318 358 2689
            </p>
            <p className="mb-4">
              <strong>LinkedIn:</strong>{' '}
              <a
                href="https://www.linkedin.com/in/enrojass/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                LinkedIn
              </a>
            </p>
            <p className="mb-4">
              <strong>GitHub:</strong>{' '}
              <a
                href="https://github.com/enrojass04"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                GitHub
              </a>
            </p>
            <div className="mb-6">
              <label className="block text-black text-sm font-bold mb-2" htmlFor="mensaje">
                Mensaje:
              </label>
              <textarea
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                id="mensaje"
                name="mensaje"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all"
              type="submit"
            >
              Enviar mensaje
            </button>
          </div>
        </div>
  )
}

export default Contact