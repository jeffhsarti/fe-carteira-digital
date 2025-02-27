import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`;

const Header = styled.header`
  padding: 1rem 0;
  border-bottom: 1px solid #ccc;
`;

const Footer = styled.footer`
  padding: 1rem 0;
  border-top: 1px solid #ccc;
  margin-top: 2rem;
  text-align: center;
`;

type LayoutProps = {
  title?: string;
  children: React.ReactNode;
};

export default function Layout({ title = 'My App', children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header>
        <h1>{title}</h1>
      </Header>
      <Container>{children}</Container>
      <Footer>&copy; {new Date().getFullYear()} My App</Footer>
    </>
  );
}
