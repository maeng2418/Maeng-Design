/** @jsxImportSource @emotion/react */
import React, { MouseEvent } from 'react';
import { DarkColorType, LightColorType } from '../../styles/colors';
import createStyle from './styles';

export interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
  color?: LightColorType | DarkColorType;
  size?: 'large' | 'medium' | 'small';
  shape?: 'default' | 'circle' | 'round';
  type?: 'default' | 'primary' | 'dashed' | 'text' | 'link' | 'outline';
  htmlType?: 'submit' | 'reset' | 'button';
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  className = '',
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
      className={className}
      css={createStyle(color, size, shape, type, disabled)}
      onClick={onClick}
      onMouseDown={(e) => e.preventDefault()}
      type={htmlType}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
