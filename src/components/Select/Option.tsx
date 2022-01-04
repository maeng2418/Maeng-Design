/** @jsxImportSource @emotion/react */
import React from 'react';

interface OptionProps {
  children: React.ReactNode;
  value: number | string;
  disabled?: boolean;
}
const Option: React.FC<OptionProps> = ({ children, value }) => {
  return <span data-value={value}>{children}</span>;
};

export default Option;
