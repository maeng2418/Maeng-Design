/** @jsxImportSource @emotion/react */
import React, { MouseEvent } from 'react';
import { DarkColorType, LightColorType } from '../../styles/colors';
import createStyle from './styles';

export type TagColorType =
  | 'red'
  | 'volcano'
  | 'orange'
  | 'gold'
  | 'yellow'
  | 'lime'
  | 'green'
  | 'cyan'
  | 'blue'
  | 'geekblue'
  | 'purple'
  | 'magenta'
  | 'gray';

export interface TagProps {
  className?: string;
  children?: React.ReactNode;
  color?: LightColorType | DarkColorType | TagColorType;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  size?: 'large' | 'medium' | 'small';
  style?: React.CSSProperties;
}

const Tag: React.FC<TagProps> = ({ className = '', children, color, size, ...props }) => {
  return (
    <span className={`tag ${className}`} css={createStyle(color, size)} {...props}>
      {children}
    </span>
  );
};

export default Tag;
