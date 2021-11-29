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
  children?: React.ReactNode;
  color?: LightColorType | DarkColorType | TagColorType;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  style?: React.CSSProperties;
}

const Tag: React.FC<TagProps> = ({ children, color, style }) => {
  return (
    <span css={createStyle(color)} style={style}>
      {children}
    </span>
  );
};

export default Tag;
