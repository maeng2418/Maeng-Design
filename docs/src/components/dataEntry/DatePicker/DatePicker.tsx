/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import inputStyle from './styles';

export interface DatePickerProps {
  children?: React.ReactNode;
}

const DatePicker: React.FC<DatePickerProps> = ({ children }) => {
  return <div css={inputStyle}>{children}</div>;
};

export default DatePicker;
