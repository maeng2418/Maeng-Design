/** @jsxImportSource @emotion/react */
import React from 'react';
import colStyle from './styles';

export interface ColProps {
  className?: string;
  children?: React.ReactNode;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
  space?: number;
}

const Col: React.FC<ColProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={`col ${className}`} css={colStyle(props)}>
      {children}
    </div>
  );
};

export default Col;
