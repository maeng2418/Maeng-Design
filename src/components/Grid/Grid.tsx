import { jsx } from '@emotion/react';
import React from 'react';

export interface GridProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  children?: React.ReactNode;
  component?: keyof JSX.IntrinsicElements;
}

const Grid: React.FC<GridProps> = ({ component = 'div', className = '', ...props }) => {
  return jsx(component, {
    ...props,
    className: `grid-container ${className}`,
  });
};

export default Grid;
