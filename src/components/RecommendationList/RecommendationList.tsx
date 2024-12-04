import Link from 'next/link';
import { FC } from 'react';

interface Recommendation {
  id: string;
  image: string;
  title: string;
}

interface RecommendationListProps {
  recommendations: Recommendation[];
}


const RecommendationList: FC<RecommendationListProps> = ({ recommendations }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4">
      {recommendations.map((manga, index) => (
         <Link href={`/series/details/${manga.id}`} className="block w-36 p-2 shadow-lg rounded-md bg-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
          <div key={index} className="flex flex-col items-center">
            <img
              src={manga.image}
              alt={manga.title}
              className="w-24 h-32 rounded-md shadow-md"
            />
            <p className="text-sm mt-2">{manga.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RecommendationList;