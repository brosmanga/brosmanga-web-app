import { FC } from 'react';

const Section: FC<{ title: string; children: React.ReactNode, icon: JSX.Element; }> = ({
  title,
  children,
  icon
}) => (
  <section className="mb-8">

    <div className="flex items-center gap-2 mb-4">
      {icon}
      <h2 className="text-lg font-bold">{title}</h2>
    </div>
    <div className="flex gap-4 overflow-x-auto">{children}</div>
  </section>
);

export default Section;
