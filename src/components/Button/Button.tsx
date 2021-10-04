/** @jsxImportSource @emotion/react */
import React, { MouseEvent } from 'react';
import { DarkColorType, LightColorType } from '../../styles/colors';
import createStyle from './styles';

interface ButtonProps {
  children?: React.ReactNode;
  color?: LightColorType | DarkColorType;
  size?: 'large' | 'medium' | 'small';
  type?: 'primary' | 'dashed' | 'text' | 'link';
  htmlType?: 'submit' | 'reset' | 'button';
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  color = 'gray13',
  size = 'medium',
  type = 'primary',
  htmlType,
  disabled = false,
  onClick,
}) => {
  return (
    <button css={createStyle(color, size, type, disabled)} onClick={onClick} type={htmlType}>
      {children}
    </button>
  );
};

export default Button;
