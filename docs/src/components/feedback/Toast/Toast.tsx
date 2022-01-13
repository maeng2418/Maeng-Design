/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import toastStyle from './styles';

export interface ToastProps {
  children?: React.ReactNode;
}

const Toast: React.FC<ToastProps> = ({ children }) => {
  return <div css={toastStyle}>{children}</div>;
};

export default Toast;
