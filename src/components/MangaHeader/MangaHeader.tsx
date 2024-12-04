import { FC } from 'react';

interface MangaHeaderProps {
  title: string;
  authors: string; // Array de strings para múltiplos autores
  genres: string[]; // Array de strings para os gêneros
  image: string; // URL da imagem
  rating: number; // Nota do mangá
  favoriteButton?: boolean; // Opcional: Se o botão de favoritos deve ser exibido
}

const MangaHeader: FC<MangaHeaderProps> = ({ title, authors, genres, image, rating, favoriteButton }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="w-full lg:w-1/4">
        <img src={image} alt={title} className="rounded-lg shadow-md" />
      </div>
      <div className="w-full lg:w-3/4">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-gray-500">{authors}</p>
        <div className="flex gap-2 mt-2">
          {genres.map((genre) => (
            <span key={genre} className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm">
              {genre}
            </span>
          ))}
        </div>
        <div className="mt-4">
          <p className="text-lg font-bold">Nota: {rating.toFixed(1)} ⭐</p>
        </div>
        {favoriteButton && (
          <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md">
            Adicionar aos favoritos
          </button>
        )}
      </div>
    </div>
  );
};

export default MangaHeader;
