import { FC } from 'react';
import Link from 'next/link';
import { FaEye, FaStar } from 'react-icons/fa';

const SideList: FC<{
  title: string;
  icon: JSX.Element;
  items: { id: string; title: string; details: string; image: string }[];
}> = ({ title, icon, items }) => {
  return <section className="mb-8 w-full">
    <div className="flex items-center gap-2 mb-4">
      {icon}
      <h2 className="text-lg font-bold">{title}</h2>
    </div>
    <ul className="space-y-4">
      {items.map((item) => (
        <li
          key={item.id}
          className="flex items-center gap-4 p-2 bg-white dark:bg-gray-800 rounded-md shadow-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          <Link href={`/series/details/${item.id}`} className="flex items-center gap-4">
            <img
              src={item.image}
              alt={item.title}
              className="w-12 h-16 rounded-md object-cover"
            />
            <div>
              <h3 className="text-sm font-semibold">{item.title}</h3>
              
              <p className="text-xs text-gray-500">
              {item.details}
              {title === "Maiores Notas" ? (
                    <FaStar className="inline-block text-yellow-500 ml-2" />
                  ) : (
                    <FaEye className="inline-block text-purple-500 ml-2" />
                  )}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </section>
};

export default SideList;