import { css, Interpolation, Theme } from '@emotion/react';
import { getColor, ThemeMode } from '../../styles';
import { ToastProps } from './Toast';

const createStyle =
  (color?: ToastProps['color']) =>
  (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => {
    // color
    const primaryColor = getColor(theme, color);

    // default
    const defaultStyle = css`
      position: fixed;
      top: 8px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1000;

      & > div {
        border: 1px solid black;
      }
    `;

    return [defaultStyle];
  };

export default createStyle;
