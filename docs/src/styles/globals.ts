import { css } from '@emotion/react';
import normalizeCSS from './normalize';

const globalStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

  ${normalizeCSS}

  * {
    word-break: keep-all;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body,
  body > div#___gatsby {
    display: flex;
    width: 100vw;
    height: 100vh;

    &#___gatsby div#gatsby-focus-wrapper {
      display: flex;
      flex-direction: column;
      flex: 1;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

export default globalStyle;
