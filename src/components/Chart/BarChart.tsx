/** @jsxImportSource @emotion/react */
import React, { useLayoutEffect, useMemo, useRef, useState } from 'react';
import Graph from './Graph';
import barChartStyle from './styles';
import XAxis from './XAxis';
import YAxis from './YAxis';

export interface BarChartProps {
  children?: React.ReactNode;
  title?: string;
  width?: number | string;
  height?: number | string;
  data: any;
  dataKey: string;
  xAxis?: { label?: string; dataKey: string };
  yAxis?: { label?: string; rows?: number };
  tooltip?: boolean;
}

const BarChart: React.FC<BarChartProps> = ({
  data,
  title,
  width = '100%',
  height = '100%',
  dataKey,
  xAxis,
  yAxis = { rows: 4 },
  tooltip = true,
}) => {
  const containerRef = useRef<HTMLElement>(null);
  const yAxisContainerRef = useRef<HTMLDivElement>(null);
  const titleContainerRef = useRef<HTMLDivElement>(null);
  const xAxisContainerRef = useRef<HTMLDivElement>(null);

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

  const xLabel =
    xAxis && xAxis.dataKey ? data.map((x: any) => x[xAxis.dataKey]) : Array(data.length).fill('');

  const yAxisData: number[] = useMemo(() => {
    let yMin = 0;
    let yMax = Math.max(...data.map((x: any) => x[dataKey]));
    let { rows = 4 } = yAxis || {};
    if (yMin === yMax) {
      yMin = yMin - 10;
      yMax = yMax + 10;
    }

    const range = yMax - yMin;

    if (rows < 2) {
      rows = 2;
    } else if (rows > 2) rows -= 2;

    const tempStep: number = range / rows;

    const mag = Math.floor(Math.log10(tempStep));
    const magPow: number = Math.pow(10, mag);
    const magMsd = Math.floor(tempStep / magPow + 0.5);
    const stepSize = magMsd * magPow;

    const lb = stepSize * Math.floor(yMin / stepSize);
    const ub = stepSize * Math.ceil(yMax / stepSize);
    const result = [];

    for (let value = ub; value >= lb; value -= stepSize) {
      result.push(value);
    }
    return result;
  }, [data, dataKey, yAxis]);

  const MAX_Y_AXIS_DATA = Math.max(...yAxisData);

  return (
    <section className="chart" css={barChartStyle(width, height)} ref={containerRef}>
      {title && <header className="title">{title}</header>}
      <div className="chart-container">
        {yAxis && (
          <YAxis
            yAxis={{ ...yAxis, height: size.height, values: yAxisData }}
            ref={yAxisContainerRef}
          />
        )}
        <div className="right-group">
          <Graph
            data={data}
            dataKey={dataKey}
            size={size}
            max={MAX_Y_AXIS_DATA}
            tooltipKey={tooltip ? xAxis?.dataKey : undefined}
          />
          <XAxis xAxis={{ ...xAxis, width: size.width, values: xLabel }} />
        </div>
      </div>
    </section>
  );
};

export default BarChart;
