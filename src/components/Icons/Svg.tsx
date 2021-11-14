/** @jsxImportSource @emotion/react */
import React from 'react';
import { DarkColorType, LightColorType } from '../../styles/colors';
import createStyle from './styles';

export interface SVGProps extends React.SVGProps<SVGSVGElement> {
  children?: React.ReactNode;
  color?: LightColorType | DarkColorType;
}

const SVG: React.FC<SVGProps> = (props) => {
  return (
    <svg css={createStyle(props.color)} {...props}>
      {props.children}
    </svg>
  );
};

export default SVG;
