'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ProfilePage() {
  return (
    <div className="page-layout">
      {/* Cabeçalho */}
      <Header />

      {/* Conteúdo principal */}
      <main className="main-layout bg-black min-h-screen text-white">
      <div className="bg-black min-h-screen text-white">
      <div className="p-4 bg-black flex items-center gap-4"></div>
          {/* Perfil */}
        <div className="bg-gray-900 rounded-lg p-6 border-2 border-gray-800 max-w-5xl mx-auto mt-8">
          {/* Seção superior - Informações e Estatísticas */}
          <div className="flex justify-between items-center">
            {/* Informações do usuário */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <img
                  src="https://github.com/shadcn.png"
                  alt="Avatar do usuário"
                  className="w-24 h-24 rounded-full bg-gray-700"
                />
                <button className="absolute bottom-0 right-0 bg-orange-500 p-2 rounded-full shadow-md hover:bg-orange-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M15.232 5H8a3 3 0 00-3 3v10a3 3 0 003 3h8a3 3 0 003-3v-5.232" />
                    <path d="M10 12l6-6m0 0l2 2m-2-2v4" />
                  </svg>
                </button>
              </div>
              <div>
                <h1 className="text-2xl font-bold">@zzayaya</h1>
                <p className="text-gray-400 text-sm">Marcos Paulo Silva de Souza</p>
                <p className="text-gray-300 text-sm mt-2">
                  Apenas alguém tentando fazer mangás! Já trabalhando em uma obra! 😄
                  <br />
                  Insta: zayaya6482
                </p>
              </div>
            </div>

            {/* Estatísticas */}
            <div className="bg-gray-800 rounded-lg p-4 w-64">
              <h2 className="text-lg font-bold mb-4">Estatísticas</h2>
              <p className="text-sm text-gray-300">
                <span className="font-bold text-white">Capítulos lidos:</span> 435
              </p>
              <p className="text-sm text-gray-300">
                <span className="font-bold text-white">Obras publicadas:</span> 0
              </p>
              <p className="text-sm text-gray-300">
                <span className="font-bold text-white">Data de entrada:</span> 15 de Outubro de 2023
              </p>
              <p className="text-sm text-gray-300">
                <span className="font-bold text-white">Última vez online:</span> Agora
              </p>
            </div>
          </div>

          {/* Séries favoritas */}
          <div className="mt-8">
            <h2 className="text-xl font-bold text-white">Séries favoritas ❤️</h2>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mt-4">
              {[
                '/images/series/black_bullet.png',
                '/images/series/alice.png',
                '/images/series/parasite_in_love.png',
                '/images/series/soul_eater.png',
                '/images/series/perfect_blue.png',
              ].map((src, index) => (
                <div key={index} className="group relative">
                  <img
                    src={src}
                    alt="Capa da série"
                    className="w-full rounded-md shadow-md"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 rounded-md opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                    <button className="bg-orange-500 px-4 py-2 rounded-md text-white font-bold">
                      Detalhes
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Artistas seguidos */}
          <div className="mt-8">
            <h2 className="text-xl font-bold text-white">Artistas Seguidos 🎨</h2>
            <div className="grid grid-cols-4 gap-4 mt-4">
              {[
                { name: 'Shiden Kanzaki', username: '@SkSu95' },
                { name: 'Tomohito Oda', username: '@Tomoda_Hitohito' },
                { name: 'Saki Ukai', username: '@SkSu95' },
                { name: 'Atsushi Ookubo', username: '@Atokuboshi' },
                { name: 'Kaori Yuki', username: '@KaKiRyu' },
              ].map((artist, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center bg-gray-800 rounded-lg p-4"
                >
                  <img
                    src="/icons/profile-user.png"
                    alt={artist.name}
                    className="w-16 h-16 rounded-full bg-gray-700"
                  />
                  <p className="text-sm font-bold text-white mt-2">{artist.name}</p>
                  <p className="text-xs text-gray-400">{artist.username}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
        <div className="p-4 bg-black flex items-center gap-4"></div>
      </main>

      {/* Rodapé */}
      <Footer />
    </div>
  );
}
