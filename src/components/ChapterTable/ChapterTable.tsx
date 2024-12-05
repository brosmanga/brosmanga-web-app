interface Chapter {
  title: string,
  date: string,
  image: string
  
}

interface ChapterTableProps {
  chapters: Chapter[]
}

export default function ChapterTable({ chapters }: ChapterTableProps) {
  
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold">Capítulos</h2>
      <table className="w-full mt-4 border border-gray-300 rounded-lg">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">Capítulo</th>
            <th className="px-4 py-2">Data</th>
            <th className="px-4 py-2">Crescimento</th>
          </tr>
        </thead>
        <tbody>
          {chapters.map((chapter, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{chapter.title}</td>
              <td className="border px-4 py-2">{chapter.date}</td>
              <td className="border px-4 py-2">
                <img
                  src={chapter.image}
                  alt="Crescimento"
                  className="w-8 h-8 rounded-full"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
