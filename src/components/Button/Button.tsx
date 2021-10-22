/** @jsxImportSource @emotion/react */
import React, { MouseEvent } from 'react';
import { DarkColorType, LightColorType } from '../../styles/colors';
import createStyle from './styles';

export interface ButtonProps {
  children?: React.ReactNode;
  color?: LightColorType | DarkColorType;
  size?: 'large' | 'medium' | 'small';
  shape?: 'default' | 'circle' | 'round';
  type?: 'default' | 'primary' | 'dashed' | 'text' | 'link';
  htmlType?: 'submit' | 'reset' | 'button';
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  color = 'blue6',
  size = 'medium',
  shape = 'default',
  type = 'default',
  htmlType,
  disabled = false,
  onClick,
}) => {
  return (
    <button
      css={createStyle(color, size, shape, type, disabled)}
      onClick={onClick}
      type={htmlType}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
