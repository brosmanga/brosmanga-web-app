'use client';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useState } from 'react';

export default function SubmitWorkPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="page-layout">
      <Header />
      <main className="main-layout">
        <div className="bg-black min-h-screen text-white">
          <div className="p-4 bg-black flex items-center gap-4"></div>
          <div className="text-center mt-12">
            <h2 className="text-5xl font-bold text-orange-500">Mande seu trabalho!</h2>
            <p className="text-lg max-w-2xl mx-auto mt-4 text-gray-300">
              Ficamos felizes em divulgar seu trabalho! Agradecemos desde já pela preferência, seu esforço será recompensado.
              Após nos dar uma leve descrição sobre sua obra e anexar os arquivos necessários, sua obra passará por uma verificação e,
              caso passe ou não, você será notificado com o resultado! Boa sorte!
            </p>
          </div>

          {/* Campo de descrição */}
          <div className="flex flex-col items-center mt-8">
            <textarea
              className="w-full max-w-2xl p-4 rounded-md bg-gray-800 text-white border border-gray-600 shadow-md focus:outline-none focus:ring focus:ring-orange-500"
              rows={5}
              placeholder="Nos dê uma curta descrição de sua obra!"
            />
          </div>

          {/* Botões de adicionar arquivos e enviar */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              className="flex items-center gap-2 bg-orange-500 px-6 py-3 rounded-md text-black font-bold shadow-md hover:bg-orange-600 transition"
              onClick={() => setShowModal(true)}
            >
              <span className="text-xl font-bold">+</span> Adicionar arquivos
            </button>
            <button className="bg-red-500 px-6 py-3 rounded-md text-white font-bold shadow-md hover:bg-red-600 transition">
              Enviar
            </button>
          </div>
        </div>
      </main>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="bg-gray-900 rounded-lg p-6 text-white max-w-3xl w-full relative shadow-lg">
            <h3 className="text-3xl font-bold text-center mb-8 text-orange-400">
              Carregar Arquivos
            </h3>
            <div className="grid grid-cols-3 gap-8">
              {/* Sinopse */}
              <div className="bg-gray-800 rounded-lg p-4 text-center relative border border-orange-400">
                <div className="absolute top-2 left-2 text-orange-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-orange-400">Sinopse</h4>
                <p className="text-sm mt-4 text-gray-300">
                  Aqui você anexará um arquivo com a sinopse da sua obra.
                </p>
                <button className="mt-6 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md text-white font-bold">
                  Carregar arquivo
                </button>
              </div>

              {/* Capa */}
              <div className="bg-gray-800 rounded-lg p-4 text-center relative border border-orange-400">
                <div className="absolute top-2 left-2 text-orange-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-orange-400">Capa</h4>
                <p className="text-sm mt-4 text-gray-300">
                  Aqui você anexará a capa da sua obra.
                </p>
                <button className="mt-6 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md text-white font-bold">
                  Carregar arquivo
                </button>
              </div>

              {/* Obra */}
              <div className="bg-gray-800 rounded-lg p-4 text-center relative border border-orange-400">
                <div className="absolute top-2 left-2 text-orange-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-orange-400">Obra</h4>
                <p className="text-sm mt-4 text-gray-300">
                  Aqui você anexará o conteúdo completo da sua obra.
                </p>
                <button className="mt-6 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md text-white font-bold">
                  Carregar arquivo
                </button>
              </div>
            </div>
            <div className="flex justify-end mt-8">
              <button
                className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-md text-black font-bold"
                onClick={() => setShowModal(false)}
              >
                Concluir
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Rodapé */}
      <Footer />
    </div>

  );
}
