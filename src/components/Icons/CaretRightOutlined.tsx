/** @jsxImportSource @emotion/react */
import React from 'react';
import { DarkColorType, LightColorType } from '../../styles/colors';
import SVG from './Svg';

export interface CaretRightOutlinedProps {
  color?: LightColorType | DarkColorType;
}

const CaretRightOutlined: React.FC<CaretRightOutlinedProps> = ({ color }) => {
  return (
    <SVG
      color={color}
      viewBox="0 0 1024 1024"
      focusable="false"
      data-icon="caret-right"
      aria-hidden="true"
    >
      <path d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"></path>
    </SVG>
  );
};

export default CaretRightOutlined;
