import { FC } from 'react';
import Link from 'next/link';

const MangaCard: FC<{ id: string; title: string; image: string; subtitle?: string }> = ({
  id,
  title,
  image,
  subtitle,
}) => (
  <Link href={`/series/details/${id}`} className="block w-36 p-2 shadow-lg rounded-md bg-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
    <img
      src={image}
      alt={title}
      className="rounded-md w-full h-48 object-cover"
    />
    <h3 className="text-sm font-medium mt-2 truncate">{title}</h3>
    {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
  </Link>
);


export default MangaCard