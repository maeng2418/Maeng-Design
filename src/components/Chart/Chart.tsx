/** @jsxImportSource @emotion/react */
import React, { useRef } from 'react';
import lineGraphStyle from './styles';

export interface LineGraphProps {
  children?: React.ReactNode;
  width?: number;
  height?: number;
}

const LineGraph: React.FC<LineGraphProps> = ({ width = 800, height = 500 }) => {
  const xLabelGroupRef = useRef<SVGGElement>(null);

  const data = [7.7, 8.1, 7.7, 6.8, 6.7];
  const xLabel = [2017, 2018, 2019, 2020, 2021];
  const yLabel = [0, 5, 10, 15];

  const CANVAS_X_START_POS = 0;
  const CANVAS_X_END_POS = width;
  const CANVAS_Y_START_POS = 0;
  const CANVAS_Y_END_POS = height;

  const TOP_PADDING = 25;
  const BOTTOM_PADDING = 25;
  const LEFT_PADDING = 25;

  const X_AXIS_LEN = CANVAS_X_END_POS - (CANVAS_X_START_POS + LEFT_PADDING);
  const X_AXIS_BOTTOM_MARGIN = 25;
  const Y_AXIS_LEN = CANVAS_Y_END_POS - BOTTOM_PADDING - (CANVAS_Y_START_POS + TOP_PADDING);
  const Y_AXIS_LEFT_MARGIN = 15;

  return (
    <div className="chart" css={lineGraphStyle}>
      <section className="title">Title</section>
      <section className="y-axis-section">Value</section>
      <section className="graph-section">
        <svg className="graph" aria-labelledby="title" role="img" width={width} height={height}>
          <title id="title">Line Chart</title>
          <g className="axis y-axis">
            <line
              x1={CANVAS_X_START_POS + LEFT_PADDING}
              x2={CANVAS_X_START_POS + LEFT_PADDING}
              y1={CANVAS_Y_START_POS + TOP_PADDING}
              y2={CANVAS_Y_END_POS - BOTTOM_PADDING}
            ></line>
          </g>
          <g className="axis x-axis">
            <line
              x1={CANVAS_X_START_POS + LEFT_PADDING}
              x2={CANVAS_X_END_POS}
              y1={CANVAS_Y_END_POS - BOTTOM_PADDING}
              y2={CANVAS_Y_END_POS - BOTTOM_PADDING}
            ></line>
          </g>
          <g className="labels x-labels" ref={xLabelGroupRef}>
            {xLabel.map((x, i) => (
              <text
                key={x}
                x={CANVAS_X_START_POS + (X_AXIS_LEN / xLabel.length) * (i + 0.5) + LEFT_PADDING}
                y={CANVAS_Y_END_POS - BOTTOM_PADDING + X_AXIS_BOTTOM_MARGIN}
              >
                {x}
              </text>
            ))}
          </g>
          <g className="labels y-labels">
            {yLabel.map((y, i) => (
              <text
                key={y}
                x={CANVAS_X_START_POS + LEFT_PADDING - Y_AXIS_LEFT_MARGIN}
                y={CANVAS_Y_END_POS - BOTTOM_PADDING - (i * Y_AXIS_LEN) / (yLabel.length - 1) + 5}
              >
                {y}
              </text>
            ))}
          </g>
          <g className="data">
            {data.map((value, i) => (
              <circle
                key={value}
                cx={CANVAS_X_START_POS + (X_AXIS_LEN / xLabel.length) * (i + 0.5) + LEFT_PADDING}
                cy={Y_AXIS_LEN * (1 - value / Math.max(...yLabel)) + TOP_PADDING}
                r={4}
              />
            ))}
          </g>
        </svg>
      </section>
      <section className="x-axis-section">Year</section>
    </div>
  );
};

export default LineGraph;
