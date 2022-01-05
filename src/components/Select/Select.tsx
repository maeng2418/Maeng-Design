/** @jsxImportSource @emotion/react */
import React, { ReactElement } from 'react';
import { DarkColorType, LightColorType } from '../../styles/colors';
import MultiSelector from './MultiSelect';
import SingleSelect from './SingleSelect';

export interface SelectProps {
  children?: ReactElement | readonly ReactElement[];
  onSelect?: (value?: string | number) => void; // 선택한 옵션에 대한 동작
  onChange?: (value?: (string | number)[] | string | number) => void; // 선택한 후 셀렉터에 대한 동작
  multiple?: boolean;
  placeholder?: string;
  defaultValue?: string | number | (string | number)[];
  size?: 'large' | 'medium' | 'small';
  color?: LightColorType | DarkColorType;
  disabled?: boolean;
  tagRender?: boolean;
}

const Select: React.FC<SelectProps> = ({ multiple = false, ...props }) => {
  return multiple ? <MultiSelector {...props} /> : <SingleSelect {...props} />;
};

export default Select;
