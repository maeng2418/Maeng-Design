/** @jsxRuntime classic */
/** @jsx jsx */
import { css, Global, Interpolation, jsx, Theme } from '@emotion/react';
import {
  getColor,
  Theme as MaengTheme,
  ThemeMode,
  ThemeProvider,
  useWindowSize,
} from 'maeng-design';
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
  const [menuOpen, setMenuOpen] = useState(true);
  const [width] = useWindowSize();

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      setDarkMode(localStorage.getItem('theme-ui-color-mode') === 'dark');
    }
  }, []);

  useLayoutEffect(() => {
    if (width <= 768) {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  }, [width]);

  useEffect(() => {
    localStorage.setItem('theme-ui-color-mode', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const onToggleDarkMode = useCallback((e: MouseEvent) => {
    e.preventDefault();
    setDarkMode((prev) => !prev);
  }, []);

  const onClickMenuButton = useCallback((e: MouseEvent) => {
    e.preventDefault();
    setMenuOpen((prev) => !prev);
  }, []);

  return (
    <ThemeProvider theme={{ mode: darkMode ? ThemeMode.DARK : ThemeMode.LIGHT }}>
      <SEO title={title} />
      <Global styles={globalStyle} />
      <Header
        onSetDarkMode={onToggleDarkMode}
        menuOpen={menuOpen}
        onClickMenuButton={onClickMenuButton}
      />
      <main css={mainStyles}>
        <Nav open={menuOpen} />
        <section className={className} css={sectionStyles}>
          {children}
        </section>
        {width <= 768 && menuOpen && (
          <div className="background" css={menuBackground} onClick={onClickMenuButton} />
        )}
      </main>
      <Footer />
    </ThemeProvider>
  );
};

const mainStyles = css`
  display: flex;
  flex: 1;
  padding-top: 20px;

  @media screen and (max-width: 768px) {
    position: relative;
  }
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

const menuBackground = (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => css`
  width: 100%;
  position: absolute;
  opacity: 0.5;
  height: 100%;
  top: 0;
  left: 0;
  background-color: ${(theme as MaengTheme).mode === ThemeMode.DARK
    ? getColor(theme, 'gray1')
    : getColor(theme, 'gray13')};
  opacity: 0.3;
`;

export default Layout;
