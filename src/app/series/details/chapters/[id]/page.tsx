'use client'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import CommentSection from "@/components/CommentSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface ChapterPageProps {
  params: {
    id: string;
  };
}

// Função para buscar imagens de um capítulo
async function fetchChapterImages(manga: string, chapter: string) {
  const images = [];
  let page = 1;

  // Loop para buscar todas as imagens até que não existam mais arquivos
  while (true) {
    try {
      const response = await fetch(
        `/images/series/chapters/${manga}/${chapter}/${page}-o.jpg`
      );
      if (!response.ok) break;
      images.push(`/images/series/chapters/${manga}/${chapter}/${page}-o.jpg`);
      page++;
    } catch {
      break;
    }
  }

  return images;
}

export default function Page({ params }: ChapterPageProps) {
  const router = useRouter();
  const [images, setImages] = useState<string[]>([]);
  const [mangaTitle, setMangaTitle] = useState("");
  const [chapterId, setChapterId] = useState("");

  useEffect(() => {
    const { id } = params;
    const [manga, chapter] = ["parasite_in_love", "1"]
    setMangaTitle(manga);
    setChapterId(chapter);

    fetchChapterImages(manga, chapter).then(setImages);
  }, [params]);

  if (!images.length) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="page-layout">
      <Header />
      <main className="main-layout">
        <div className="bg-black min-h-screen text-white">
          {/* Header */}
          <div className="p-4 bg-red-700 flex items-center gap-4">
            <button
              className="text-white bg-red-500 p-2 rounded-md"
              onClick={() => router.back()}
            >
              Voltar
            </button>
            <h1 className="text-xl font-bold">{mangaTitle.replace("_", " ")}</h1>
            <span className="text-sm text-gray-300 ml-auto">
              Capítulo: {chapterId}
            </span>
          </div>

          {/* Imagens do Capítulo */}
          <div className="flex flex-col items-center gap-4 p-4">
            {images.map((src, index) => (
              <div key={index} className="w-full max-w-4xl">
                <Image
                  src={src}
                  alt={`Página ${index + 1}`}
                  width={800}
                  height={1200}
                  className="rounded-md shadow-md"
                />
              </div>
            ))}
          </div>

          {/* Rodapé com Comentários */}
          <CommentSection/>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
