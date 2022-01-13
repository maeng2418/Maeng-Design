/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import colorsStyle from './styles';

export interface ColorsProps {
  children?: React.ReactNode;
}

const Colors: React.FC<ColorsProps> = ({ children }) => {
  return <div css={colorsStyle}>{children}</div>;
};

export default Colors;
