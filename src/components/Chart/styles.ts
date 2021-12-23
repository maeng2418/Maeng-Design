import { css, Interpolation, Theme } from '@emotion/react';
import { getColor, ThemeMode } from '../../styles';
import sizeTranslator from '../../utils/sizeTranslator';
import { BarChartProps } from './BarChart';

const barChartStyle = (width?: BarChartProps['width'], height?: BarChartProps['height']) =>
  css`
    display: flex;
    flex-direction: column;
    width: ${width ? sizeTranslator(width) : '100%'};
    height: ${height ? sizeTranslator(height) : '100%'};
    // title
    header.title {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      font-weight: 600;
    }
    // chart
    div.chart-container {
      display: flex;

      div.right-group {
        display: flex;
        flex-direction: column;
      }
    }
  `;

// Graph
export const graphStyle =
  () =>
  (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> =>
    css`
      position: relative;
      svg.graph {
        g.axis {
          stroke: ${getColor(theme, 'gray4')};
          stroke-dasharray: 0;
          stroke-width: 1;
        }
        g.bar {
          fill: ${getColor(theme, 'red6')};
          stroke-width: 1;
        }
      }
    `;

// X-Axis
export const xAxisStyle = css`
  display: flex;
`;

// X-Axis Value
export const xAxisValueStyle = (width: number) => css`
  width: ${width}px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
`;

// X-Axis Label {
export const xAxisLabelStyle = css`
  display: flex;
  justify-content: end;
  font-weight: 600;
`;

// Y-Axis
export const yAxisStyle = css`
  display: flex;
  label.y-axis-label {
    margin-right: 10px;
    font-weight: 600;
  }
  div.y-axis-value {
    display: flex;
    flex-direction: column;
    position: relative;
    margin-right: 10px;
    span {
      display: inline-block;
      text-align: right;
    }
  }
`;

// Y-Axis Value
export const yAxisValueStyle = (height: number) => css`
  height: 1em;
  margin-bottom: calc(${height}px - 1em);
  transform: translateY(-50%);

  &:last-child {
    margin-bottom: 0;
  }
`;

// Tooltip
export const tooltipStyle =
  (x: number, y: number) =>
  (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> =>
    css`
      position: absolute;
      padding: 1em;
      border-radius: 10px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      background: ${getColor(theme, 'gray1')};
      left: ${x}px;
      top: ${y}px;

      div.tooltip-title {
        color: ${getColor(theme, 'blue6')};
        font-size: 1em;
        font-weight: 600;
        margin-bottom: 10px;
      }
      div.tooltip-data {
        font-size: 1em;
      }
    `;

export default barChartStyle;
