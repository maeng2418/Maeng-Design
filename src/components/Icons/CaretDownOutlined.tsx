/** @jsxImportSource @emotion/react */
import React from 'react';
import { DarkColorType, LightColorType } from '../../styles/colors';
import SVG from './Svg';

export interface CaretDownOutlinedProps {
  color?: LightColorType | DarkColorType;
}

const CaretDownOutlined: React.FC<CaretDownOutlinedProps> = ({ color }) => {
  return (
    <SVG
      color={color}
      viewBox="0 0 1024 1024"
      focusable="false"
      data-icon="caret-down"
      aria-hidden="true"
    >
      <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
    </SVG>
  );
};

export default CaretDownOutlined;