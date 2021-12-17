import { css, Interpolation, Theme } from '@emotion/react';
import { getColor, ThemeMode } from '../../styles';

const lineGraphStyle =
  () =>
  (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => {
    // color
    const primaryColor = getColor(theme, 'blue6');

    // default
    const defaultStyle = css`
      display: grid;
      grid-template-columns: min-content min-content;

      .title {
        grid-column-start: 2;
        text-align: center;
        padding-left: 25px;
      }

      .x-axis-section {
        text-align: right;
        padding-left: 25px;
      }

      .y-axis-section {
        grid-row: span 2;
        padding-top: 25px;
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
        fill: red;
        stroke-width: 1;
      }
    `;

    return [defaultStyle];
  };

export default lineGraphStyle;
