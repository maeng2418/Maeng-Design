import React from 'react';

interface OptionProps {
  children: React.ReactNode;
  value: number | string;
}
const Option: React.FC<OptionProps> = ({ children, value }) => {
  return <div data-value={value}>{children}</div>;
};

export default Option;
