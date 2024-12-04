'use client';

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MangaCard from "@/components/MangaCard";
import Section from "@/components/Section";
import SideList from "@/components/SideList";
import { FaBookOpen, FaFire, FaStar, FaEye, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Carousel, CarouselResponsiveOption } from 'primereact/carousel';
import './home.css'

export default function Page() {
  const continueReading = [
    { id: "1", title: 'Black Bullet', image: '/images/series/black_bullet.png' },
    { id: "2", title: 'Alice in Murderland', image: '/images/series/alice.png' },
    { id: "3", title: 'Chainsaw Man', image: '/images/series/chainsaw_man.png' },
    { id: "4", title: 'Cigarette and Cherry', image: '/images/series/cigarette_and_cherry.png' },
    { id: "5", title: 'Yakeko Shoujo', image: '/images/series/yakedo_syoju.png' },
    { id: "6", title: 'Perfect Blue', image: '/images/series/perfect_blue.png' },
  ];

  const newUpdates = [
    { id: "4", title: 'Cigarette and Cherry', image: '/images/series/cigarette_and_cherry.png' },
    { id: "5", title: 'Yakeko Shoujo', image: '/images/series/yakedo_syoju.png' },
    { id: "6", title: 'Perfect Blue', image: '/images/series/perfect_blue.png' },
  ];

  const recommendations = [
    { id: "7", title: 'Yuji Kaku', image: '/images/series/yuji_kaku.png' },
    { id: "8", title: 'Demon Slayer', image: '/images/series/demon_slayer.png' },
    { id: "9", title: 'Parasite in Love', image: '/images/series/parasite_in_love.png' },
  ];

  const mostViewed = [
    {
      id: "1",
      title: 'Black Bullet',
      details: '657 mil visualizações',
      image: '/images/series/black_bullet.png',
    },
    {
      id: "10",
      title: 'Skeleton In The Closet',
      details: '530 mil visualizações',
      image: '/images/series/skeleton_in_the_closet.png',
    },
    {
      id: "11",
      title: 'Soul Eater',
      details: '467 mil visualizações',
      image: '/images/series/soul_eater.png',
    },
  ];

  const highestRated = [
    {
      id: "8",
      title: 'Demon Slayer',
      details: '4.9',
      image: '/images/series/demon_slayer.png',
    },
    {
      id: "9",
      title: 'Parasite in Love',
      details: '4.7',
      image: '/images/series/parasite_in_love.png',
    },
    {
      id: "12",
      title: 'Transorbton',
      details: '4.6',
      image: '/images/series/transorbton.png',
    },
  ];

  const responsiveOptions: CarouselResponsiveOption[] = [
    {
        breakpoint: '1400px',
        numVisible: 4, // Ajustado para 4 itens em telas maiores
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 3, // Ajustado para 3 itens
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2, // Ajustado para 2 itens
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1, // Apenas 1 item em telas pequenas
        numScroll: 1
    }
];


  return (
    <div className="page-layout">
      <Header/>
      <main className="main-layout">
        <div className="p-8 bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col items-center justify-center">
          <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-2">

              <div className="carousel-wrapper">
                <Section title="Continue Lendo..." icon={<FaBookOpen className="text-orange-500" />}>
                  <div className="carousel-container">
                    <Carousel
                      value={continueReading}
                      numVisible={4}
                      numScroll={2}
                      responsiveOptions={responsiveOptions}
                      itemTemplate={(item) => <MangaCard {...item} />}
                      prevIcon={<FaChevronLeft className="text-4xl text-gray-800" />}
                      nextIcon={<FaChevronRight className="text-4xl text-gray-800" />}
                    />
                  </div>
                </Section>
              </div>

              <Section title="Novas Atualizações" icon={<FaFire className="text-red-500" />}>
                {newUpdates.map((manga) => (
                  <MangaCard
                    key={manga.id}
                    id={manga.id}
                    title={manga.title}
                    image={manga.image}
                  />
                ))}
              </Section>

              <Section title="Recomendações" icon={<FaStar className="text-yellow-500" />}>
                {recommendations.map((manga) => (
                  <MangaCard
                    key={manga.id}
                    id={manga.id}
                    title={manga.title}
                    image={manga.image}
                  />
                ))}
              </Section>
            </div>

            <div>
              <SideList
                title="Mais Vistos"
                icon={<FaEye className="text-purple-500" />}
                items={mostViewed}
              />

              <SideList
                title="Maiores Notas"
                icon={<FaStar className="text-yellow-500" />}
                items={highestRated}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
