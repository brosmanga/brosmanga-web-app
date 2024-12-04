'use client';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";

interface Serie {
  id: number;
  title: string;
  chapters: number;
  genres: string[];
  image: string;
  description: string;
  author: string;
}

export default function Page() {
  const [series, setSeries] = useState<Serie[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [isAscending, setIsAscending] = useState(true);
  const limit = 10; // Número de itens por página
  const router = useRouter();

  const toggleSortOrder = () => {
    setIsAscending((prev) => !prev); // Alterna entre true e false
    const sortedSeries = [...series].sort((a, b) => {
      if (isAscending) {
        return a.title.localeCompare(b.title); // Ordena de A-Z
      } else {
        return b.title.localeCompare(a.title); // Ordena de Z-A
      }
    });
    setSeries(sortedSeries);
  };

  // Função para buscar os dados da API
  const fetchSeries = async (page: number) => {
    // const response = await fetch(`https://sua-api.com/series?page=${page}&limit=${limit}`);
    // const data = await response.json();
    const data = {
      "data": [
        {
          id: 1,
          title: "Black Bullet",
          chapters: 21,
          genres: ["Ação", "Ficção Científica", "Drama"],
          image: "/images/series/black_bullet.png",
          description:
            "Em um mundo devastado por parasitas conhecidos como Gastrea, Rentarou Satomi luta para proteger a humanidade usando uma força especial chamada Iniciador. Ao lado de Enju Aihara, eles enfrentam perigos crescentes enquanto descobrem verdades sombrias.",
          author: "Shiden Kanzaki"
        },
        {
          id: 2,
          title: "Alice in Murderland",
          chapters: 44,
          genres: ["Romance", "Psicológico", "Mistério", "Sobrenatural"],
          image: "/images/series/alice.png",
          description:
            "Para os membros da casa de elite de Kuonji, um dia do nome tem um histórico macabro. Uma decisão entre a vida e a morte marcará o destino de cada herdeiro nesta casa. Olga, uma garota talentosa, enfrenta esses desafios e desenterra segredos ocultos.",
          author: "Kaori Yuki"
        },
        {
          id: 3,
          title: "Chainsaw Man",
          chapters: 96,
          genres: ["Ação", "Horror", "Comédia"],
          image: "/images/series/chainsaw_man.png",
          description:
            "Denji é um jovem que vive no limite da pobreza, pagando suas dívidas ao caçar demônios com sua motosserra demoníaca, Pochita. Quando ele é traído, Denji faz um pacto que mudará sua vida para sempre.",
          author: "Tatsuki Fujimoto"
        },
        {
          id: 4,
          title: "Cigarette and Cherry",
          chapters: 38,
          genres: ["Romance", "Comédia", "Slice of Life"],
          image: "/images/series/cigarette_and_cherry.png",
          description:
            "Um tímido calouro da faculdade tenta conquistar uma garota mais velha e experiente que sempre está com um cigarro em mãos. Uma série que explora relacionamentos com humor e profundidade.",
          author: "Daishiro Kawakami"
        },
        {
          id: 5,
          title: "Yakeko Shoujo",
          chapters: 24,
          genres: ["Drama", "Psicológico"],
          image: "/images/series/yakedo_syoju.png",
          description:
            "Uma garota vive em um mundo repleto de expectativas irreais e enfrenta cicatrizes emocionais e físicas enquanto luta para encontrar seu verdadeiro eu.",
          author: "Mizuki Goto"
        }
      ],
      "total": 2,
      "page": 1,
      "limit": 10
    }
    setSeries(data.data); // Define os dados da página atual
    setTotal(data.total); // Total de itens disponíveis
  };

  // Busca os dados ao carregar a página ou mudar de página
  useEffect(() => {
    fetchSeries(page);
  }, [page]);

  // Calcula o total de páginas
  const totalPages = Math.ceil(total / limit);

  return (
    <div className="page-layout">
      <Header/>  
      <main className="main-layout">
        {/* Barra de Busca */}
        <div className="bg-white shadow-md p-5">
          <div className="flex flex-col items-center gap-4">
            {/* Input de Busca */}
            <input
              type="text"
              placeholder="Encontre o que quiser!"
              className="w-full md:w-1/2 p-2 border rounded-md"
            />

            {/* Botões Centralizados */}
            <div className="flex justify-center gap-4">
              <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={() => router.push('/series/all')}>
                Todas as séries
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={() => router.push('/series/updated')}>
                Atualizações
              </button>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-md" onClick={() => router.push('/series/ranking')}>
                Ranking
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md p-4 mt-4">
          {/* Título da Seção */}
          <div className="flex items-center gap-2">
            <span className="text-red-500 text-xl flex items-center">
              {/* Novo Ícone ao lado de "Todas as Séries" */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <span className="font-semibold">Todas as Séries</span>
            </span>
          </div>

          {/* Filtros e Ordenação */}
          <div className="flex justify-between items-center mt-4">
            {/* Dropdowns */}
            <div className="flex gap-4">
              <div className="relative">
                <select className="appearance-none bg-red-500 text-white px-4 py-2 rounded-md w-full">
                  <option value="">Gênero</option>
                  <option value="acao">Ação</option>
                  <option value="aventura">Aventura</option>
                  <option value="drama">Drama</option>
                </select>
                <div className="absolute right-2 top-2 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              <div className="relative">
                <select className="appearance-none bg-red-500 text-white px-4 py-2 rounded-md w-full">
                  <option value="">Ano de Lançamento  </option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                </select>
                <div className="absolute right-2 top-2 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Ordenação */}
            <div className="flex items-center gap-4">
              {/* Botão para alternar ordenação */}
              <div className="flex justify-end">
                <button
                  onClick={toggleSortOrder}
                  className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100"
                >
                  {isAscending ? "Crescente (A-Z)" : "Decrescente (Z-A)"}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={isAscending ? "M6 10h12M6 14h8" : "M6 14h12M6 10h8"}
                    />
                  </svg>
                </button>
              </div>
            </div>

          </div>
        </div>


        {/* Lista de Séries */}
        {series.map((serie) => (
          <div
            key={serie.id}
            className="bg-white shadow-md rounded-lg flex gap-4 p-4 mb-4"
          >
            <img
              src={serie.image}
              alt={serie.title}
              className="w-32 h-48 rounded-md"
            />
            <div className="flex flex-col flex-grow">
              <h2 className="text-xl font-bold">{serie.title}</h2>
              <p className="text-sm text-gray-600">{serie.author}</p>
              <p className="text-sm text-gray-700 mt-2">{serie.description}</p>
              <div className="flex gap-2 mt-4">
                {serie.genres.map((genre, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 px-2 py-1 text-xs rounded-md"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className="flex justify-center items-center p-4">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className={`px-4 py-2 border rounded-md mx-2 ${
              page === 1 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : ''
            }`}
          >
            Anterior
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setPage(index + 1)}
              className={`px-4 py-2 border rounded-md mx-2 ${
                page === index + 1 ? 'bg-orange-500 text-white' : ''
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
            className={`px-4 py-2 border rounded-md mx-2 ${
              page === totalPages ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : ''
            }`}
          >
            Próximo
          </button>
        </div>

      </main>
      <Footer/>
    </div>
  );
}
