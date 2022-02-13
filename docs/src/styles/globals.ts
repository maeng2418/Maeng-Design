import { css, Interpolation, Theme } from '@emotion/react';
import { getColor, Theme as MaengTheme, ThemeMode } from 'maeng-design';
import normalizeCSS from './normalize';

const globalStyle = (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => css`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

  ${normalizeCSS}

  html,
  body,
  body > div#___gatsby {
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: ${(theme as MaengTheme).mode === ThemeMode.DARK
      ? getColor(theme, 'gray12')
      : getColor(theme, 'gray1')};
    color: ${(theme as MaengTheme).mode === ThemeMode.DARK
      ? getColor(theme, 'gray1')
      : getColor(theme, 'gray13')};

    &#___gatsby div#gatsby-focus-wrapper {
      display: flex;
      flex-direction: column;
      flex: 1;
      width: 100%;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    word-break: keep-all;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

export default globalStyle;
