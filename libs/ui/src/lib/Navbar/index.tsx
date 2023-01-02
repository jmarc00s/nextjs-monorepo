import React, { ReactElement } from 'react';

interface NavbarProps {
  title: string;
}

export const Navbar = ({ title }: NavbarProps): ReactElement => {
  return (
    <div className="h-16 px-4 flex items-center bg-gray-800 text-white font-semibold text-xl">
      <h1 className="flex-1">Nx Monorepo - {title}</h1>
      <nav>
        <ul className="flex gap-4">
          <li>
            <a
              className="hover:underline"
              target="_blank"
              href="http://localhost:4200"
              rel="noreferrer"
            >
              Home app
            </a>
          </li>
          <li>
            <a
              className="hover:underline"
              target="_blank"
              href="http://localhost:4201"
              rel="noreferrer"
            >
              Notes app
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
