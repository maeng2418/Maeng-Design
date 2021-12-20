import { css, Interpolation, Theme } from '@emotion/react';
import { getColor, ThemeMode } from '../../styles';
import { BarChartProps } from './BarChart';

const barChartStyle =
  (yAxis: BarChartProps['yAxis'], padding: BarChartProps['padding']) =>
  (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => {
    // color
    const primaryColor = getColor(theme, 'red5');

    // default
    const defaultStyle = css`
      display: grid;
      grid-template-columns: min-content min-content;

      .title {
        grid-column-start: ${yAxis && yAxis.label ? '2' : 'span 2'};
        text-align: center;
        padding-left: ${padding?.left}px;
      }

      .x-axis-section {
        ${(!yAxis || !yAxis.label) && `grid-column-start: 1;`}
        text-align: right;
        padding-left: ${padding?.left}px;
        padding-right: ${padding?.right}px;
      }

      .y-axis-section {
        grid-row: span 2;
        padding-top: ${padding?.top}px;
        padding-right: 15px;
      }

      .graph .labels.x-labels {
        text-anchor: middle;
      }

      .graph .labels.y-labels {
        text-anchor: end;
      }

      .graph .axis {
        stroke: #ccc;
        stroke-dasharray: 0;
        stroke-width: 1;
      }

      .labels {
        font-size: 13px;
      }

      .label-title {
        font-weight: bold;
        text-transform: uppercase;
        font-size: 12px;
        fill: black;
      }

      .data {
        fill: ${primaryColor};
        stroke-width: 1;
      }
    `;

    return [defaultStyle];
  };

export default barChartStyle;
