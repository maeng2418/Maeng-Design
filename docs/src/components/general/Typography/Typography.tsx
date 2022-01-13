/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import typographyStyle from './styles';

export interface TypographyProps {
  children?: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({ children }) => {
  return <div css={typographyStyle}>{children}</div>;
};

export default Typography;
