/** @jsxImportSource @emotion/react */
import React, { useLayoutEffect, useRef, useState } from 'react';
import barChartStyle, { xAxisLabelStyle, yAxisLabelStyle } from './styles';

export interface BarChartProps {
  children?: React.ReactNode;
  title?: string;
  width?: number | string;
  height?: number | string;
  data: any;
  dataKey: string;
  xAxis?: { label?: string; dataKey: string } | false;
  yAxis?: { label?: string; row?: number } | false;
}

const BarChart: React.FC<BarChartProps> = ({
  data,
  title,
  width = '100%',
  height = '100%',
  dataKey,
  xAxis,
  yAxis = { row: 4 },
}) => {
  const containerRef = useRef<HTMLElement>(null);
  const yAxisContainerRef = useRef<HTMLDivElement>(null);
  const titleContainerRef = useRef<HTMLDivElement>(null);
  const xAxisContainerRef = useRef<HTMLDivElement>(null);

  const svgContainerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<{ width: number; height: number }>({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const updateSize = () => {
      const containerWidth = containerRef.current?.clientWidth || 0;
      const containerHeight = containerRef.current?.clientHeight || 0;
      const yAxisContainerWidth = yAxisContainerRef.current?.clientWidth || 0;
      const titleHeight = titleContainerRef.current?.clientHeight || 0;
      const xAxisContainerHeight = xAxisContainerRef.current?.clientHeight || 0;

      const width = containerWidth - yAxisContainerWidth;
      const height = containerHeight - titleHeight - xAxisContainerHeight;
      setSize({ width, height });
    };
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, [width, height]);

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
  const CANVAS_X_END_POS = size.width;
  const CANVAS_Y_START_POS = 0;
  const CANVAS_Y_END_POS = size.height;

  const X_AXIS_LEN = CANVAS_X_END_POS - CANVAS_X_START_POS;
  const Y_AXIS_LEN = CANVAS_Y_END_POS - CANVAS_Y_START_POS;

  const BAR_WIDTH = 20;

  return (
    <section className="chart" css={barChartStyle(width, height)} ref={containerRef}>
      {title && <div className="title">{title}</div>}
      <div className="chart-container">
        {yAxis && yAxis.label && (
          <div className="left-group y-axis" ref={yAxisContainerRef}>
            <div className="y-axis-label">{yAxis.label}</div>
            <div className="y-axis-value">
              {yAxis &&
                yLabel.reverse().map((y) => (
                  <label css={yAxisLabelStyle(size.height / (yLabel.length - 1))} key={y}>
                    {y}
                  </label>
                ))}
            </div>
          </div>
        )}
        <div className="right-group">
          <div className="graph" ref={svgContainerRef}>
            <svg
              className="graph"
              aria-labelledby="title"
              role="img"
              width={size.width}
              height={size.height}
            >
              <g className="axis y-axis">
                <line
                  x1={CANVAS_X_START_POS}
                  x2={CANVAS_X_START_POS}
                  y1={CANVAS_Y_START_POS}
                  y2={CANVAS_Y_END_POS}
                ></line>
              </g>
              <g className="axis x-axis">
                <line
                  x1={CANVAS_X_START_POS}
                  x2={CANVAS_X_END_POS}
                  y1={CANVAS_Y_END_POS}
                  y2={CANVAS_Y_END_POS}
                ></line>
              </g>

              <g className="data">
                {data.map((value: any, i: number) => (
                  <rect
                    onMouseOver={() => console.log('hello')}
                    key={value[dataKey]}
                    className="bar"
                    x={
                      CANVAS_X_START_POS + (X_AXIS_LEN / xLabel.length) * (i + 0.5) + -BAR_WIDTH / 2
                    }
                    y={Y_AXIS_LEN * (1 - value[dataKey] / Math.max(...yLabel))}
                    width={BAR_WIDTH}
                    height={
                      CANVAS_Y_END_POS - Y_AXIS_LEN * (1 - value[dataKey] / Math.max(...yLabel))
                    }
                  ></rect>
                ))}
              </g>
            </svg>
          </div>
          <div className="x-axis" ref={xAxisContainerRef}>
            {xAxis &&
              xAxis.dataKey &&
              data.every((d: Record<string, unknown>) => {
                if (d[dataKey] !== undefined && d[dataKey] !== null) return true;
              }) &&
              xLabel.map((x: any, i: number) => (
                <label key={x} css={xAxisLabelStyle(size.width / xLabel.length)}>
                  {x}
                </label>
              ))}
          </div>
          {xAxis && xAxis.label && <div className="x-axis-label">{xAxis.label}</div>}
        </div>
      </div>
    </section>
  );
};

export default BarChart;
