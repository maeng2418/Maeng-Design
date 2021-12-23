/** @jsxImportSource @emotion/react */
import React, { forwardRef } from 'react';
import { xAxisLabelStyle, xAxisStyle, xAxisValueStyle } from './styles';

interface XAxisProps {
  xAxis: { values?: (string | number)[]; label?: string; width: number };
}

const XAxis = forwardRef<HTMLDivElement, XAxisProps>(({ xAxis }, ref) => {
  const { width, values, label } = xAxis;
  return (
    <>
      {values && (
        <div className="x-axis" css={xAxisStyle} ref={ref}>
          {values.map((x) => (
            <span key={x} css={xAxisValueStyle(width / values.length)}>
              {x}
            </span>
          ))}
        </div>
      )}
      {label && (
        <label className="x-axis-label" css={xAxisLabelStyle}>
          {label}
        </label>
      )}
    </>
  );
});

XAxis.displayName = 'XAxis';
export default XAxis;
