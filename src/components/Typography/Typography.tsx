/** @jsxImportSource @emotion/react */
import React from 'react';
import { typographyStyles } from './styles';

const Typography: React.FC = ({ children }) => {
  return <div css={typographyStyles}>{children}</div>;
};

export default Typography;
