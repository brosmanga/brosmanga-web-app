'use client';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";


interface Serie {
  id: number;
  title: string;
  author: string;
  views: number;
  image: string;
  description: string;
}


export default function Page() {
  const router = useRouter();
  const [series, setSeries] = useState<Serie[]>([]);
  const [topSeries, setTopSeries] = useState<Serie | null>(null);
  
  // Função para buscar dados da API
  const fetchSeries = async () => {
    // const response = await fetch("https://sua-api.com/ranking");
    // const data = await response.json();
    const data = [
      {
        id: 1,
        title: "Black Bullet",
        image: "/images/series/black_bullet.png",
        views: 500000,
        description:
          "Em um mundo devastado por parasitas conhecidos como Gastrea, Rentarou Satomi luta para proteger a humanidade usando uma força especial chamada Iniciador. Ao lado de Enju Aihara, eles enfrentam perigos crescentes enquanto descobrem verdades sombrias.",
        author: "Shiden Kanzaki"
      },
      {
        id: 2,
        title: "Alice in Murderland",
        image: "/images/series/alice.png",
        views: 50000,
        description:
          "Para os membros da casa de elite de Kuonji, um dia do nome tem um histórico macabro. Uma decisão entre a vida e a morte marcará o destino de cada herdeiro nesta casa. Olga, uma garota talentosa, enfrenta esses desafios e desenterra segredos ocultos.",
        author: "Kaori Yuki"
      },
      {
        id: 3,
        title: "Chainsaw Man",
        image: "/images/series/chainsaw_man.png",
        views: 2000000,
        description:
          "Denji é um jovem que vive no limite da pobreza, pagando suas dívidas ao caçar demônios com sua motosserra demoníaca, Pochita. Quando ele é traído, Denji faz um pacto que mudará sua vida para sempre.",
        author: "Tatsuki Fujimoto"
      },
      {
        id: 4,
        title: "Cigarette and Cherry",
        image: "/images/series/cigarette_and_cherry.png",
        views: 500,
        description:
          "Um tímido calouro da faculdade tenta conquistar uma garota mais velha e experiente que sempre está com um cigarro em mãos. Uma série que explora relacionamentos com humor e profundidade.",
        author: "Daishiro Kawakami"
      },
      {
        id: 5,
        title: "Yakeko Shoujo",
        image: "/images/series/yakedo_syoju.png",
        views: 100000,
        description:
          "Uma garota vive em um mundo repleto de expectativas irreais e enfrenta cicatrizes emocionais e físicas enquanto luta para encontrar seu verdadeiro eu.",
        author: "Mizuki Goto"
      },
      {
        id: 7,
        title: "Yuji Kaku",
        image: "/images/series/yuji_kaku.png",
        views: 700000,
        description:
          "Uma série envolvente que mistura mistério e ação enquanto os personagens enfrentam inimigos desconhecidos em um mundo sombrio.",
        author: "Yuji Kaku"
      },
      {
        id: 8,
        title: "Demon Slayer",
        image: "/images/series/demon_slayer.png",
        views: 900000,
        description:
          "Kaname Aizawa vive uma vida despercebida no ensino médio, tendo grande problemas em sua casa, mas tudo começa mudar quando ele descobre o segredo de sua colega de classe Shiina Hinami, que vai revelar um lado completamente oposto da garota popular e perfeita de sua sala de aula. Pouco a pouco, Kaname é atraído por ela. Em uma escola onde o cheiro da morte fica cada vez mais impregnado, o que acontecerá com o futuro deles?",
        author: "Koyoharu Gotouge"
      },
      {
        id: 9,
        title: "Parasite in Love",
        image: "/images/series/parasite_in_love.png",
        views: 20000,
        description:
          "Um jovem chamado Kengo Kosaka sofre de misofobia extrema. Devido ao seu transtorno compulsivo, ele não consegue manter um relacionamento com ninguém. Kengo também é um jovem solitário. Enquanto isso, a estudante do ensino médio Hijiri Sanagi tem escopofobia.",
        author: "Rapha Pinheiro"
      },
      {
        id: 10,
        title: "Skeleton In The Closet",
        image: "/images/series/skeleton_in_the_closet.png",
        views: 5000,
        description:
          "Em uma pequena cidade isolada, um jovem descobre segredos obscuros sobre sua própria família, enquanto lida com estranhas visões e mistérios que o cercam. Quanto mais ele se aprofunda, mais perigos surgem, desafiando sua sanidade.",
        author: "Junji Ito"
      }
    ]

    setSeries(data);

    // Define a série mais visualizada
    const top = data.sort((a: Serie, b: Serie) => b.views - a.views)[0];
    setTopSeries(top);
  };
  
  // Buscar os dados ao carregar a página
  useEffect(() => {
    fetchSeries();
  }, []);

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

        {/* Destaque da Série Top 1 */}
        {topSeries && (
          <section className="bg-white shadow-md rounded-lg p-6 mb-8">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center w-16 h-16 bg-red-500 text-white rounded-full text-2xl font-bold">
                  1
                </div>
                <img
                  src={topSeries.image}
                  alt={topSeries.title}
                  className="w-32 h-48 rounded-lg shadow-md"
                />
              </div>
              <h1 className="text-3xl font-bold text-center">{topSeries.title}</h1>
              <p className="text-sm text-center text-gray-500">{topSeries.author}</p>
              <p className="text-lg font-semibold text-center text-red-500 mt-2">
                {topSeries.views.toLocaleString()} visualizações
              </p>
              <p className="text-sm text-gray-700 mt-4 text-center">{topSeries.description}</p>
            </div>
          </section>
        )}

        {/* Ranking Geral */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Ranking Geral</h2>
          <div className="bg-white shadow-md rounded-lg">
            {series
              .sort((a, b) => b.views - a.views)
              .map((serie, index) => (
                <div
                  key={serie.id}
                  className="flex justify-between items-center p-4 border-b last:border-b-0"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xl font-bold text-gray-700">{index + 1}</span>
                    <div>
                      <h3 className="text-lg font-semibold">{serie.title}</h3>
                      <p className="text-sm text-gray-500">{serie.author}</p>
                    </div>
                  </div>
                  <p className="text-sm text-red-500">{serie.views.toLocaleString()} visualizações</p>
                </div>
              ))}
          </div>
        </section>

      </main>
      <Footer/>
    </div>
  );
}
