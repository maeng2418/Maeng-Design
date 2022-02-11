/** @jsxRuntime classic */
/** @jsx jsx */
import { css, Global, jsx } from '@emotion/react';
import { ThemeMode, ThemeProvider } from 'maeng-design';
import React, { MouseEvent, useCallback, useEffect, useLayoutEffect, useState } from 'react';
import globalStyle from '../../../styles/globals';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';
import SEO from './SEO';

interface LayoutProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ title, children, className }) => {
  const [darkMode, setDarkMode] = useState(false);

  useLayoutEffect(() => {
    if (typeof window !== 'undefined')
      setDarkMode(localStorage.getItem('theme-ui-color-mode') === 'dark');
  }, []);

  useEffect(() => {
    localStorage.setItem('theme-ui-color-mode', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const onToggleDarkMode = useCallback((e: MouseEvent) => {
    e.preventDefault();
    setDarkMode((prev) => !prev);
  }, []);

  return (
    <ThemeProvider theme={{ mode: darkMode ? ThemeMode.DARK : ThemeMode.LIGHT }}>
      <SEO title={title} />
      <Global styles={globalStyle} />
      <Header onSetDarkMode={onToggleDarkMode} />
      <main css={mainStyles}>
        <Nav />
        <section className={className} css={sectionStyles}>
          {children}
        </section>
      </main>
      <Footer />
    </ThemeProvider>
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
