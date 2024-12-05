import MangaHeader from '@/components/MangaHeader';
import ChapterTable from '@/components/ChapterTable';
import Header from '@/components/Header';
import RecommendationList from '@/components/RecommendationList';
import Footer from '@/components/Footer';

interface MangaDetailsPageProps {
  params: {
    id: string;
  };
}

// Função para buscar dados do mangá no lado do servidor
async function fetchManga(id: string) {
  return {
    id: 9,
    title: "Parasite In love",
    author: "Rapha Pinheiro",
    genres: ["Ação", "Mistério"],
    image: "/images/series/parasite_in_love.png",
    rating: 4.1,
    description: "Um jovem chamado Kengo Kosaka sofre de misofobia extrema. Devido ao seu transtorno compulsivo, ele não consegue manter um relacionamento com ninguém. Kengo também é um jovem solitário. Enquanto isso, a estudante do ensino médio Hijiri Sanagi tem escopofobia.",
    chapters: [
      {
        title: "Capítulo 1",
        date: "27 de Agosto de 2012",
        image: "/path-to-growth-image.jpg"
      }
    ],
    recommendations: [
      { id: "7", title: 'Yuji Kaku', image: '/images/series/yuji_kaku.png' },
      { id: "8", title: 'Demon Slayer', image: '/images/series/demon_slayer.png' },
      { id: "10", title: 'Skeleton In The Closet', image: '/images/series/skeleton_in_the_closet.png'},
      { id: "1", title: 'Black Bullet', image: '/images/series/black_bullet.png' },
      { id: "2", title: 'Alice in Murderland', image: '/images/series/alice.png' },
      { id: "3", title: 'Chainsaw Man', image: '/images/series/chainsaw_man.png' },
      { id: "4", title: 'Cigarette and Cherry', image: '/images/series/cigarette_and_cherry.png' },
      { id: "5", title: 'Yakeko Shoujo', image: '/images/series/yakedo_syoju.png' },
      { id: "6", title: 'Perfect Blue', image: '/images/series/perfect_blue.png' },
    ]
  };
  // Lógica para buscar dados da API
  const response = await fetch(`https://sua-api.com/series/${id}`, { cache: 'no-store' });
  if (!response.ok) {
    throw new Error('Falha ao buscar dados do mangá.');
  }
  return response.json();
}

export default async function Page({ params }: MangaDetailsPageProps) {
  const { id } = params;

  // Busca dos dados do mangá
  const manga = await fetchManga(id);

  return (
    <div className="page-layout">
      <Header />
      <main className="main-layout">
        <div className="bg-gray-100 min-h-screen p-4">
          <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-6">
            {/* Cabeçalho do Mangá */}
            <MangaHeader
              title={manga.title}
              authors={manga.authors}
              genres={manga.genres}
              image={manga.image}
              rating={manga.rating}
              favoriteButton={true}
            />

            {/* Sinopse */}
            <div className="mt-6">
              <h2 className="text-2xl font-bold">Sinopse</h2>
              <p className="text-gray-700 mt-2">{manga.description}</p>
            </div>

            {/* Capítulos */}
            <ChapterTable chapters={manga.chapters} />

            {/* Recomendações */}
            <div className="mt-6">
              <h2 className="text-2xl font-bold">Recomendações</h2>
              <RecommendationList recommendations={manga.recommendations} />
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
