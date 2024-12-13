'use client'

import { useRouter } from "next/navigation";

interface ChapterTableProps {
  chapters: {
    id: number;
    title: string;
    date: string;
    image: string;
  }[];
}

const ChapterTable: React.FC<ChapterTableProps> = ({ chapters }) => {
  const router = useRouter();

  const handleChapterClick = (chapterId: number) => {
    router.push(`/series/details/chapters/${chapterId}`);
  };

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4">Capítulos</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">#</th>
            <th className="border border-gray-300 p-2">Capítulo</th>
            <th className="border border-gray-300 p-2">Data</th>
            <th className="border border-gray-300 p-2">Crescimento</th>
          </tr>
        </thead>

        <tbody>
          {chapters.map((chapter, index) => (
            <tr
              key={chapter.id}
              className="cursor-pointer hover:bg-gray-100"
              onClick={() => handleChapterClick(chapter.id)}
            >
              <td className="border border-gray-300 p-2 text-center">{index + 1}</td>
              <td className="border border-gray-300 p-2">{chapter.title}</td>
              <td className="border border-gray-300 p-2 text-center">{chapter.date}</td>
              <td className="border border-gray-300 p-2 text-center">
                <img
                  src={chapter.image}
                  alt={chapter.title}
                  className="w-8 h-8 rounded-full mx-auto"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ChapterTable;
