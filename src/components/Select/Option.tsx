/** @jsxImportSource @emotion/react */
import React from 'react';

interface OptionProps {
  children: React.ReactNode;
  value: number | string;
  disabled?: boolean;
}
const Option: React.FC<OptionProps> = ({ children, value }) => {
  return <div data-value={value}>{children}</div>;
};

export default Option;
