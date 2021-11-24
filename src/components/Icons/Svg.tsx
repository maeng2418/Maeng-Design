/** @jsxImportSource @emotion/react */
import React, { MouseEventHandler } from 'react';
import { DarkColorType, LightColorType } from '../../styles/colors';
import createStyle from './styles';

export interface SVGProps extends React.SVGProps<SVGSVGElement> {
  children?: React.ReactNode;
  color?: LightColorType | DarkColorType;
  onClick?: MouseEventHandler<SVGSVGElement>;
}

const SVG: React.FC<SVGProps> = (props) => {
  return (
    <svg css={createStyle(props.color)} {...props}>
      {props.children}
    </svg>
  );
};

export default SVG;
