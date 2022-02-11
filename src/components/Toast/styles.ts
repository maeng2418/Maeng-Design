import { css, Interpolation, Theme } from '@emotion/react';
import { getColor, ThemeMode } from '../../styles';
import { ToastMessageType } from './Toast';

const createStyle =
  (type: ToastMessageType) =>
  (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => {
    // default
    const defaultStyle = css`
      display: flex;
      flex-grow: 0;
      align-items: center;
      padding: 10px 16px;
      color: ${theme.mode === ThemeMode.DARK
        ? getColor(theme, 'gray1')
        : getColor(theme, 'gray13')};
      background: ${theme.mode === ThemeMode.DARK
        ? getColor(theme, 'gray13')
        : getColor(theme, 'gray1')};
      border-radius: 2px;
      box-shadow: ${theme.mode === ThemeMode.DARK
        ? `0 3px 16px -4px ${getColor(theme, 'gray13')}`
        : '0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%), 0 9px 28px 8px rgb(0 0 0 / 5%)'};
      margin-bottom: 16px;

      & > span {
        display: flex;
        align-items: center;
        font-size: 14px;
        line-height: 1.5;

        &.icon-wrapper {
          font-size: 16px;
          margin-right: 8px;
        }
      }
    `;

    // type
    const getType = () => {
      if (type === 'success')
        return css`
          & > span.icon-wrapper svg {
            fill: ${getColor(theme, 'green6')};
          }
        `;
      if (type === 'error')
        return css`
          & > span.icon-wrapper svg {
            fill: ${getColor(theme, 'red6')};
          }
        `;
      if (type === 'warning')
        return css`
          & > span.icon-wrapper svg {
            fill: ${getColor(theme, 'yellow6')};
          }
        `;
      return css``;
    };

    return [defaultStyle, getType];
  };

export const toastContainerStyle = css`
  position: fixed;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default createStyle;
