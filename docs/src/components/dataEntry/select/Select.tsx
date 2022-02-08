/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';

export interface SelectProps {
  children?: React.ReactNode;
}

const Select: React.FC<SelectProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Select;
