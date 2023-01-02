import React, { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return (
    <section className="container mx-auto p-8 mt-8 bg-gray-100">
      {children}
    </section>
  );
};
