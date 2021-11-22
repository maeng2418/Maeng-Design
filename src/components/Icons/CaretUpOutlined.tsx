/** @jsxImportSource @emotion/react */
import React from 'react';
import { DarkColorType, LightColorType } from '../../styles/colors';
import SVG from './Svg';

export interface CaretUpOutlinedProps {
  color?: LightColorType | DarkColorType;
}

const CaretUpOutlined: React.FC<CaretUpOutlinedProps> = ({ color }) => {
  return (
    <SVG
      color={color}
      viewBox="0 0 1024 1024"
      focusable="false"
      data-icon="caret-up"
      aria-hidden="true"
    >
      <path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"></path>
    </SVG>
  );
};

export default CaretUpOutlined;