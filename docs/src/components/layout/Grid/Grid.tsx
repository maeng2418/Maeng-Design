/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import gridStyle from './styles';

export interface GridProps {
  children?: React.ReactNode;
}

const Grid: React.FC<GridProps> = ({ children }) => {
  return <div css={gridStyle}>{children}</div>;
};

export default Grid;
