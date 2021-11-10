/** @jsxImportSource @emotion/react */
import React from 'react';
import createStyle, { getChildrenStyle } from './styles';

export interface DividerProps {
  children?: React.ReactNode;
  dashed?: boolean;
  position?: 'left' | 'right' | 'center';
  type?: 'horizontal' | 'vertical';
}

const Divider: React.FC<DividerProps> = ({
  children,
  dashed = false,
  position = 'center',
  type = 'horizontal',
}) => {
  return (
    <div css={createStyle(children, dashed, position, type)}>
      {children && <span css={getChildrenStyle}>{children}</span>}
    </div>
  );
};

export default Divider;
