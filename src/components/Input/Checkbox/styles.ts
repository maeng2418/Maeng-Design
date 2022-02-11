import { css, Interpolation, Theme } from '@emotion/react';
import { getColor, ThemeMode } from '../../../styles';
import { CheckboxProps } from './Checkbox';

const createStyle =
  (
    color?: CheckboxProps['color'],
    checked?: CheckboxProps['checked'],
    disabled?: CheckboxProps['disabled'],
  ) =>
  (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => {
    // color
    const primaryColor = getColor(theme, color);
    const defaultStyle = css`
      color: ${theme.mode === ThemeMode.DARK
        ? getColor(theme, 'gray1')
        : getColor(theme, 'gray13')};
      position: relative;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      line-height: 1.5715;
      align-items: baseline;
      line-height: unset;
      cursor: pointer;

      input[type='checkbox'] {
        position: absolute;
        inset: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        cursor: pointer;
        opacity: 0;
      }
      .checkbox {
        display: inline-block;
        position: relative;
        top: 0.2em;
        left: 0;
        width: 16px;
        height: 16px;
        direction: ltr;
        border: 1px solid
          ${theme.mode === ThemeMode.DARK ? getColor(theme, 'gray9') : getColor(theme, 'gray5')};
        background-color: ${theme.mode === ThemeMode.DARK
          ? getColor(theme, 'gray13')
          : getColor(theme, 'gray1')};
        border-radius: 2px;
        border-collapse: separate;
        transition: all 0.3s;
        line-height: 1.5715;
        white-space: nowrap;
        margin: 0;
        padding: 0;

        &::after {
          box-sizing: border-box;
          position: absolute;
          display: table;
          border: 2px solid
            ${theme.mode === ThemeMode.DARK ? getColor(theme, 'gray13') : getColor(theme, 'gray1')};
          border-top: 0;
          border-left: 0;
          transform: rotate(45deg) scale(1) translate(-50%, -50%);
          opacity: 1;
          transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
          content: '';
          width: 5.71428571px;
          height: 9.14285714px;
          top: 50%;
          left: 21.5%;
        }
      }
      .label {
        padding-right: 8px;
        padding-left: 8px;
        line-height: unset;
        cursor: pointer;
      }
    `;

    const getChecked = () => {
      if (checked)
        return css`
          .checkbox {
            border-color: ${primaryColor};
            background-color: ${primaryColor};
          }
        `;
      return css``;
    };

    const getDisabled = () => {
      if (disabled)
        return css`
          cursor: not-allowed;
          input[type='checkbox']:disabled {
            cursor: not-allowed;
          }
          .checkbox {
            background-color: ${theme.mode === ThemeMode.DARK
              ? getColor(theme, 'gray11')
              : getColor(theme, 'gray3')};
            border-color: ${theme.mode === ThemeMode.DARK
              ? getColor(theme, 'gray9')
              : getColor(theme, 'gray5')};
            cursor: not-allowed;

            &::after {
              border: 2px solid
                ${theme.mode === ThemeMode.DARK
                  ? getColor(theme, 'gray8')
                  : getColor(theme, 'gray6')};
              border-top: 0;
              border-left: 0;
              ${!checked && `border: none;`}
            }
          }
          .label {
            color: ${theme.mode === ThemeMode.DARK
              ? getColor(theme, 'gray8')
              : getColor(theme, 'gray6')};
            cursor: not-allowed;
          }
        `;
      return css``;
    };

    return [defaultStyle, getChecked, getDisabled];
  };

export default createStyle;
