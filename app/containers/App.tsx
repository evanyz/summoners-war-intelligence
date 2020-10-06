import React, { ReactNode } from 'react';
import { Header } from '../components/header';

type Props = {
  children: ReactNode;
};

export default function App(props: Props) {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
}
