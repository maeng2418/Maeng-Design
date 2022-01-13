/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import selectStyle from './styles';

export interface SelectProps {
  children?: React.ReactNode;
}

const Select: React.FC<SelectProps> = ({ children }) => {
  return <div css={selectStyle}>{children}</div>;
};

export default Select;
