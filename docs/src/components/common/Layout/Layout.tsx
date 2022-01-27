/** @jsxRuntime classic */
/** @jsx jsx */
import { css, Global, jsx } from '@emotion/react';
import React from 'react';
import globalStyle from '../../../styles/globals';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';
import SEO from './SEO';

interface LayoutProps {
  title?: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <React.Fragment>
      <SEO title={title} />
      <Global styles={globalStyle} />
      <Header />
      <main css={mainStyles}>
        <Nav />
        <section css={sectionStyles}>{children}</section>
      </main>
      <Footer />
    </React.Fragment>
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
  padding: 0 46px 32px;
  max-width: 1280px;
  margin: 0 auto;

  & > article {
    margin-bottom: 32px;
  }
`;

export default Layout;
