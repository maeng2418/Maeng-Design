/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import inputStyle from './styles';

export interface InputProps {
  children?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({ children }) => {
  return <div css={inputStyle}>{children}</div>;
};

export default Input;
