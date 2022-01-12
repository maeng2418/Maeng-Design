/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';

const Footer: React.FC = () => {
  return <footer css={footerStyles}>Made by Maeng</footer>;
};

const footerStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  background: #f0f0f0;
  font-size: 14px;
  color: #8c8c8c;
`;

export default Footer;
