import React, { ReactElement } from 'react';

interface NavbarProps {
  title: string;
}

export const Navbar = ({ title }: NavbarProps): ReactElement => {
  return (
    <div className="h-16 px-4 flex items-center bg-gray-800 text-white font-semibold text-xl">
      Nx Monorepo - {title}
    </div>
  );
};
