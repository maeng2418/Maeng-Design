/** @jsxRuntime classic */
/** @jsx jsx */
import { css, Global, jsx } from '@emotion/react';
import React from 'react';
import globalStyle from '../../../styles/globals';
import { SEO } from '../SEO';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';

interface LayoutProps {
  title?: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <>
      <SEO title={title} />
      <Global styles={globalStyle} />
      <Header />
      <main css={mainStyles}>
        <Nav />
        <section css={sectionStyles}>{children}</section>
      </main>
      <Footer />
    </>
  );
};

const mainStyles = css`
  display: flex;
  flex: 1;
`;

const sectionStyles = css`
  overflow-x: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 32px 46px;
`;

export default Layout;
