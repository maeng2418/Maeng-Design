import { css, Interpolation, Theme } from '@emotion/react';
import { getColor, ThemeMode } from '../../styles';
import sizeTranslator from '../../utils/sizeTranslator';
import { BarChartProps } from './BarChart';

const barChartStyle =
  (width?: BarChartProps['width'], height?: BarChartProps['height']) =>
  (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => {
    // color
    const primaryColor = getColor(theme, 'red5');

    // default
    const defaultStyle = css`
      display: flex;
      flex-direction: column;
      width: ${width ? sizeTranslator(width) : '100%'};
      height: ${height ? sizeTranslator(height) : '100%'};
      .title {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
      }
      .chart-container {
        display: flex;

        .left-group.y-axis {
          display: flex;
          .y-axis-label {
            margin-right: 10px;
          }
          .y-axis-value {
            display: flex;
            flex-direction: column;
            position: relative;
            margin-right: 10px;
            label {
              display: inline-block;
              text-align: right;
            }
          }
        }

        .right-group {
          display: flex;
          flex-direction: column;

          .graph {
            position: relative;
            .axis {
              stroke: #ccc;
              stroke-dasharray: 0;
              stroke-width: 1;
            }
            .data {
              fill: ${primaryColor};
              stroke-width: 1;
            }
          }
          .x-axis {
            display: flex;
          }
          .x-axis-label {
            display: flex;
            justify-content: end;
          }
        }
      }
    `;

    return [defaultStyle];
  };

export const xAxisLabelStyle = (width: number) => css`
  width: ${width}px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
`;

export const yAxisLabelStyle = (height: number) => css`
  height: 1em;
  margin-bottom: calc(${height}px - 1em);
  transform: translateY(-50%);
`;

export default barChartStyle;
