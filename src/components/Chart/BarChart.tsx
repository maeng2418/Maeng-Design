/** @jsxImportSource @emotion/react */
import React, { useRef } from 'react';
import barChartStyle from './styles';

export interface BarChartProps {
  children?: React.ReactNode;
  width?: number;
  height?: number;
  padding?: {
    top?: number;
    right?: number;
    left?: number;
    bottom?: number;
  };
  title?: string;
  data: any;
  dataKey: string;
  xAxis?: { label?: string; dataKey: string } | false;
  yAxis?: { label?: string; row?: number } | false;
}

const BarChart: React.FC<BarChartProps> = ({
  width = 800,
  height = 500,
  padding,
  data,
  title,
  dataKey,
  xAxis,
  yAxis = { row: 4 },
}) => {
  const xLabelGroupRef = useRef<SVGGElement>(null);
  const DEFAULT_Y_AXIS_ROW_COUNT = 4;

  const xLabel =
    xAxis && xAxis.dataKey ? data.map((x: any) => x[xAxis.dataKey]) : Array(data.length).fill('');
  const yLabel = Array(yAxis && yAxis.row ? yAxis.row : DEFAULT_Y_AXIS_ROW_COUNT)
    .fill(0)
    .map(
      (_, i) =>
        Math.ceil(
          Math.max(...data.map((x: any) => x.user_count)) /
            ((yAxis && yAxis.row ? yAxis.row : DEFAULT_Y_AXIS_ROW_COUNT) - 1),
        ) * i,
    );

  const CANVAS_X_START_POS = 0;
  const CANVAS_X_END_POS = width;
  const CANVAS_Y_START_POS = 0;
  const CANVAS_Y_END_POS = height;

  const TOP_PADDING = padding?.top ?? 25;
  const BOTTOM_PADDING = padding?.bottom ?? 25;
  const LEFT_PADDING = padding?.left ?? 25;
  const RIGHT_PADDING = padding?.right ?? 0;

  const X_AXIS_LEN = CANVAS_X_END_POS - RIGHT_PADDING - (CANVAS_X_START_POS + LEFT_PADDING);
  const X_AXIS_BOTTOM_MARGIN = 25;
  const Y_AXIS_LEN = CANVAS_Y_END_POS - BOTTOM_PADDING - (CANVAS_Y_START_POS + TOP_PADDING);
  const Y_AXIS_LEFT_MARGIN = 15;

  const BAR_WIDTH = 20;

  return (
    <div className="chart" css={barChartStyle(yAxis, padding)}>
      {title && <section className="title">{title}</section>}
      {yAxis && yAxis.label && <section className="y-axis-section">{yAxis.label}</section>}
      <section className="graph-section">
        <svg className="graph" aria-labelledby="title" role="img" width={width} height={height}>
          <title id="title">{title}</title>
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
              x2={CANVAS_X_END_POS - RIGHT_PADDING}
              y1={CANVAS_Y_END_POS - BOTTOM_PADDING}
              y2={CANVAS_Y_END_POS - BOTTOM_PADDING}
            ></line>
          </g>
          {xAxis &&
            xAxis.dataKey &&
            data.every((d: Record<string, unknown>) => {
              if (d[dataKey] !== undefined && d[dataKey] !== null) return true;
            }) && (
              <g className="labels x-labels" ref={xLabelGroupRef}>
                {xLabel.map((x: any, i: number) => (
                  <text
                    key={x}
                    x={CANVAS_X_START_POS + (X_AXIS_LEN / xLabel.length) * (i + 0.5) + LEFT_PADDING}
                    y={CANVAS_Y_END_POS - BOTTOM_PADDING + X_AXIS_BOTTOM_MARGIN}
                  >
                    {x}
                  </text>
                ))}
              </g>
            )}
          {yAxis && (
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
          )}
          <g className="data">
            {data.map((value: any, i: number) => (
              <rect
                key={value[dataKey]}
                className="bar"
                x={
                  CANVAS_X_START_POS +
                  (X_AXIS_LEN / xLabel.length) * (i + 0.5) +
                  LEFT_PADDING -
                  BAR_WIDTH / 2
                }
                y={Y_AXIS_LEN * (1 - value[dataKey] / Math.max(...yLabel)) + TOP_PADDING}
                width={BAR_WIDTH}
                height={
                  CANVAS_Y_END_POS -
                  BOTTOM_PADDING -
                  (Y_AXIS_LEN * (1 - value[dataKey] / Math.max(...yLabel)) + TOP_PADDING)
                }
              ></rect>
            ))}
          </g>
        </svg>
      </section>
      {xAxis && xAxis.label && <section className="x-axis-section">{xAxis.label}</section>}
    </div>
  );
};

export default BarChart;
