/** @jsxImportSource @emotion/react */
import React from 'react';
import { typographyStyles } from './styles';

const Typography: React.FC = ({ children }) => {
  return <article css={typographyStyles}>{children}</article>;
};

export default Typography;
