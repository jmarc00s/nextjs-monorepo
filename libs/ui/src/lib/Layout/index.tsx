import React, { ReactNode } from 'react';
import { Container } from '../Container';
import { Navbar } from '../Navbar';

type LayoutProps = {
  children: ReactNode;
  appTitle: string;
};

export const Layout = ({ children, appTitle }: LayoutProps) => {
  return (
    <>
      <Navbar title={appTitle} />
      <Container>{children}</Container>
    </>
  );
};
