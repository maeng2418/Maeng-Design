/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import switchStyle from './styles';

export interface SwitchProps {
  children?: React.ReactNode;
}

const Switch: React.FC<SwitchProps> = ({ children }) => {
  return <div css={switchStyle}>{children}</div>;
};

export default Switch;
