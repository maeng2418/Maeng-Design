/** @jsxImportSource @emotion/react */
import React, { MouseEvent } from 'react';
import { DarkColorType, LightColorType } from '../../../styles/colors';

interface OptionProps {
  className?: string;
  children: React.ReactNode;
  value?: number | string;
  color?: LightColorType | DarkColorType;
  disabled?: boolean;
  onClick?: (e: MouseEvent<HTMLLIElement>) => void;
}
const Option: React.FC<OptionProps> = ({ children }) => {
  return <>{children}</>;
};

export default Option;
