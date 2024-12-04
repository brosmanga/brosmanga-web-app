'use client'

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MangaHeader from "@/components/MangaHeader/MangaHeader";

export default function Page() {

return (
  <div className="page-layout">
    <Header/>
    <main className="main-layout">
      <MangaHeader title='Black Bullet'
      authors={['Fabiano']}
      genres={['Ação']}
      image= '/images/mangas/black_bullet.png'/>
    </main>
    <Footer/>
  </div>
  );
}