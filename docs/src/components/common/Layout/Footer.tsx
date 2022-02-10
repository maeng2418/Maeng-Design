/** @jsxRuntime classic */
/** @jsx jsx */
import { css, Interpolation, jsx, Theme } from '@emotion/react';
import { getColor, Theme as MaengTheme, ThemeMode } from 'maeng-design';
import React from 'react';

const Footer: React.FC = () => {
  return <footer css={footerStyles}>Made by Maeng</footer>;
};

const footerStyles = (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  background: ${(theme as MaengTheme).mode === ThemeMode.DARK
    ? getColor(theme, 'gray10')
    : getColor(theme, 'gray4')};
  font-size: 14px;
  color: #8c8c8c;
  color: ${getColor(theme, 'gray7')};
`;

export default Footer;
