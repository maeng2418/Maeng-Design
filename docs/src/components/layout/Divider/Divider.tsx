/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import dividerStyle from './styles';

export interface DividerProps {
  children?: React.ReactNode;
}

const Divider: React.FC<DividerProps> = ({ children }) => {
  return <div css={dividerStyle}>{children}</div>;
};

export default Divider;
