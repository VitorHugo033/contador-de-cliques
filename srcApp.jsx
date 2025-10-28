import { useState } from 'react';

const Contador = () => {
  const [count, setCount] = useState(0);

  const incrementarContador = () => {
    setCount(count + 1);
  };

  const resetarContador = () => {
    setCount(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Contador de Cliques
          </h1>
          <p className="text-gray-600 mb-8">
            Clique no botão para incrementar o contador
          </p>
          
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-8 mb-6 shadow-lg">
            <div className="text-white text-6xl font-bold mb-2">
              {count}
            </div>
            <div className="text-indigo-100 text-sm uppercase tracking-wide">
              {count === 1 ? 'clique' : 'cliques'}
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={incrementarContador}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-6 rounded-lg transition duration-200 transform hover:scale-105 active:scale-95 shadow-md"
            >
              Clique aqui
            </button>
            
            <button
              onClick={resetarContador}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg transition duration-200 shadow-sm"
            >
              Resetar
            </button>
          </div>

          <div className="mt-6 text-sm text-gray-500">
            💡 Desafio 1 - Contador de Cliques Básico
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contador;