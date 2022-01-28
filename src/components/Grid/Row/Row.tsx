/** @jsxImportSource @emotion/react */
import React, { ReactElement, useMemo } from 'react';
import Col from '../Col';
import rowStyle from './styles';

export interface RowProps {
  className?: string;
  children?: ReactElement | readonly ReactElement[];
  gutter?: number | number[];
}

const Row: React.FC<RowProps> = ({ className = '', children, gutter = [0, 0] }) => {
  const horizontalSpace = useMemo(
    () => (Array.isArray(gutter) && gutter[0] ? gutter[0] : (gutter as number)),
    [gutter],
  );
  const verticalSpace: number = useMemo(
    () => (Array.isArray(gutter) && gutter[1] ? gutter[1] : (gutter as number)),
    [gutter],
  );
  return (
    <div className={`row ${className}`} css={rowStyle(horizontalSpace, verticalSpace)}>
      {children &&
        React.Children.map(children, (child: React.ReactElement) => {
          if (child.type !== Col) {
            console.warn(`Row에서는 '${child.type}'은 사용 불가능합니다. 'Col'을 사용해주세요.`);
          } else {
            return React.cloneElement(child, { space: horizontalSpace, ...child.props });
          }
        })}
    </div>
  );
};

export default Row;
