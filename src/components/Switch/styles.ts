import { css, Interpolation, Theme } from '@emotion/react';
import { getColor, ThemeMode } from '../../styles';
import { SwitchProps } from './Switch';

const createStyle =
  (color?: SwitchProps['color'], size?: SwitchProps['size'], checked?: SwitchProps['checked']) =>
  (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => {
    // color
    const primaryColor = getColor(theme, color);

    // default
    const defaultStyle = css`
      margin: 0;
      padding: 0;
      font-size: 14px;
      position: relative;
      display: inline-block;
      box-sizing: border-box;
      vertical-align: middle;
      border: 0;
      border-radius: 100px;
      cursor: pointer;
      transition: all 0.2s;
      user-select: none;
      background-color: ${getColor(theme, 'gray6')};
      & .handle {
        position: absolute;
        top: 2px;
        left: 2px;
        transition: all 0.2s ease-in-out;
        &::before {
          content: ' ';
          box-sizing: border-box;
          position: absolute;
          inset: 0;
          background-color: ${getColor(theme, 'gray1')};
          box-shadow: 0 2px 4px #00230b33;
          transition: all 0.2s ease-in-out;
        }
      }

      &[disabled] {
        cursor: not-allowed;
        opacity: 0.4;
      }
    `;

    const getSize = () => {
      if (size === 'large')
        return css`
          min-width: 60px;
          height: 28px;

          .handle {
            width: 24px;
            height: 24px;
            &::before {
              border-radius: 12px;
            }
          }
        `;
      if (size === 'small')
        return css`
          min-width: 28px;
          height: 16px;

          .handle {
            width: 12px;
            height: 12px;
            &::before {
              border-radius: 6px;
            }
          }
        `;

      return css`
        min-width: 44px;
        height: 22px;

        .handle {
          width: 18px;
          height: 18px;
          &::before {
            border-radius: 9px;
          }
        }
      `;
    };

    const getChecked = () => {
      if (checked) {
        if (size === 'large')
          return css`
            background-color: ${primaryColor};
            .handle {
              left: calc(100% - 26px);
            }
          `;
        if (size === 'small')
          return css`
            background-color: ${primaryColor};
            .handle {
              left: calc(100% - 14px);
            }
          `;
        return css`
          background-color: ${primaryColor};
          .handle {
            left: calc(100% - 20px);
          }
        `;
      }

      return css``;
    };

    return [defaultStyle, getSize, getChecked];
  };

export default createStyle;
