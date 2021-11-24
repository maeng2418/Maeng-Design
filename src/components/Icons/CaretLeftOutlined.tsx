/** @jsxImportSource @emotion/react */
import React, { MouseEventHandler } from 'react';
import { DarkColorType, LightColorType } from '../../styles/colors';
import SVG from './Svg';

export interface CaretLeftOutlinedProps {
  color?: LightColorType | DarkColorType;
  onClick?: MouseEventHandler<SVGSVGElement>;
}

const CaretLeftOutlined: React.FC<CaretLeftOutlinedProps> = ({ color, onClick }) => {
  return (
    <SVG
      color={color}
      viewBox="0 0 1024 1024"
      focusable="false"
      data-icon="caret-left"
      aria-hidden="true"
      onClick={onClick}
    >
      <path d="M689 165.1L308.2 493.5c-10.9 9.4-10.9 27.5 0 37L689 858.9c14.2 12.2 35 1.2 35-18.5V183.6c0-19.7-20.8-30.7-35-18.5z"></path>
    </SVG>
  );
};

export default CaretLeftOutlined;
