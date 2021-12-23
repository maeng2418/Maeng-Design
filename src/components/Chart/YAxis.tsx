/** @jsxImportSource @emotion/react */
import React, { forwardRef } from 'react';
import { yAxisStyle, yAxisValueStyle } from './styles';

interface YAxisProps {
  yAxis: { label?: string; row?: number; height: number; values: number[] };
}

const YAxis = forwardRef<HTMLDivElement, YAxisProps>(({ yAxis }, ref) => {
  const { label, height, values } = yAxis;

  return (
    <div className="y-axis" ref={ref} css={yAxisStyle}>
      {label && <label className="y-axis-label">{label}</label>}
      <div className="y-axis-value">
        {values.map((y) => (
          <span css={yAxisValueStyle(height / (values.length - 1))} key={y}>
            {y}
          </span>
        ))}
      </div>
    </div>
  );
});

YAxis.displayName = 'YAxis';
export default YAxis;
