/** @jsxImportSource @emotion/react */
import React, { MouseEventHandler, useRef, useState } from 'react';
import { graphStyle, tooltipStyle } from './styles';

interface GraphProps {
  data: any;
  dataKey: string;
  size: { width: number; height: number };
  max: number;
  tooltipKey?: string;
}

const Graph: React.FC<GraphProps> = ({ data, dataKey, size, max, tooltipKey }) => {
  const { width, height } = size;
  const CANVAS_X_START_POS = 0;
  const CANVAS_X_END_POS = width;
  const CANVAS_Y_START_POS = 0;
  const CANVAS_Y_END_POS = height;

  const X_AXIS_LEN = CANVAS_X_END_POS - CANVAS_X_START_POS;
  const Y_AXIS_LEN = CANVAS_Y_END_POS - CANVAS_Y_START_POS;

  const BAR_WIDTH = 20;

  const [selectData, setSelectData] = useState<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const onSelectData =
    (data: any): MouseEventHandler<SVGRectElement> =>
    (e) => {
      e.preventDefault();
      console.log(tooltipKey);
      if (data) {
        console.log(data);
        setSelectData({
          ...data,
          x: e.clientX - (containerRef.current?.offsetLeft || 0) + 20,
          y: e.clientY,
        });
      } else {
        setSelectData(data);
      }
    };

  return (
    <div className="graph-container" css={graphStyle} ref={containerRef}>
      <svg className="graph" aria-labelledby="title" role="img" width={width} height={height}>
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

        <g className="bar">
          {data.map((value: any, i: number) => (
            <rect
              onMouseOver={onSelectData(value)}
              onMouseOut={onSelectData(null)}
              key={value[dataKey]}
              className="bar"
              x={CANVAS_X_START_POS + (X_AXIS_LEN / data.length) * (i + 0.5) + -BAR_WIDTH / 2}
              y={Y_AXIS_LEN * (1 - value[dataKey] / max)}
              width={BAR_WIDTH}
              height={CANVAS_Y_END_POS - Y_AXIS_LEN * (1 - value[dataKey] / max)}
            ></rect>
          ))}
        </g>
      </svg>
      {tooltipKey && selectData && (
        <article className="tooltip" css={tooltipStyle(selectData.x, selectData.y)}>
          <div className="tooltip-title">{selectData[tooltipKey]}</div>
          <div className="tooltip-data">{selectData[dataKey]}</div>
        </article>
      )}
    </div>
  );
};

export default Graph;
