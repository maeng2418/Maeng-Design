import { css, Interpolation, Theme } from '@emotion/react';
import { getColor, ThemeMode } from '../../styles';
import { NOT_STRING_REGEX } from '../../utils/regex';
import { CheckboxProps } from './Checkbox';
import { InputProps } from './Input';

const inputStyle =
  (color?: InputProps['color'], size?: InputProps['size']) =>
  (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => {
    // color
    const primaryColor = getColor(theme, color);
    const subColor = (function () {
      const SUB_COLOR_IDX = 3;
      const sub = `${color?.replace(NOT_STRING_REGEX, '')}${SUB_COLOR_IDX}` as InputProps['color'];
      return getColor(theme, sub);
    })();

    // default
    const defaultStyle = css`
      width: 100%;
      outline: none;
      font-weight: 400;
      letter-spacing: 1px;
      background-color: #fff;
      border: 1px solid ${getColor(theme, 'gray5')};
      border-radius: 2px;
      text-overflow: ellipsis;
      line-height: 1.5715;

      &:focus,
      &:hover {
        border-color: ${primaryColor};
        box-shadow: 0 0 0 2px ${subColor};
        outline: 0;
      }

      &:disabled {
        color: ${getColor(theme, 'gray6')} !important;
        background-color: ${getColor(theme, 'gray3')} !important;
        border-color: ${getColor(theme, 'gray5')} !important;
        box-shadow: none !important;
        cursor: not-allowed;
      }
    `;

    const getSize = () => {
      if (size === 'large')
        return css`
          &[type='text'],
          &[type='email'],
          &[type='tel'],
          &[type='password'],
          &.affix,
          & [type='number'] {
            padding: 6.5px 11px;
            font-size: 16px;
          }
        `;
      if (size === 'medium')
        return css`
          &[type='text'],
          &[type='email'],
          &[type='tel'],
          &[type='password'],
          &.affix,
          & [type='number'] {
            padding: 4px 11px;
            font-size: 14px;
          }
        `;
      if (size === 'small')
        return css`
          &[type='text'],
          &[type='email'],
          &[type='tel'],
          &[type='password'],
          &.affix,
          & [type='number'] {
            padding: 0px 7px;
            font-size: 14px;
          }
        `;
      return css``;
    };

    const wrapperStyle = css`
      &.focused {
        border-color: ${primaryColor};
        box-shadow: 0 0 0 2px ${subColor};
        outline: 0;
      }

      &.disabled {
        color: ${getColor(theme, 'gray6')} !important;
        background-color: ${getColor(theme, 'gray3')} !important;
        border-color: ${getColor(theme, 'gray5')} !important;
        box-shadow: none !important;
        cursor: not-allowed;
      }

      &.affix,
      &.number {
        display: flex;
        justify-content: space-between;

        & > input {
          flex: 1;
          border: none;
          outline: none;
          font-size: inherit;
        }

        &.disabled {
          input {
            cursor: not-allowed;
          }
        }
      }
    `;

    const affixStyle = css`
      &.affix {
        & > .prefix {
          margin-right: 4px;
          display: flex;
          align-items: center;
        }

        & > .suffix {
          margin-left: 4px;
          display: flex;
          align-items: center;
        }
      }
    `;

    const numberStyle = css`
      &.number {
        position: relative;
        input[type='number'] {
          &::-webkit-outer-spin-button,
          &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            margin: 0;
          }
        }
        .input-number-handler {
          display: none;
        }

        &:hover {
          .input-number-handler {
            position: absolute;
            right: 0;
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 22px;
            border-left: 1px solid ${getColor(theme, 'gray5')};
            button {
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              padding: 0;
              margin: 0;
              height: 50%;
              background: none;
              outline: none;
              border: none;
              color: ${getColor(theme, 'gray7')};
              &:first-child {
                border-bottom: 1px solid ${getColor(theme, 'gray5')};
              }

              &:active,
              &:hover {
                background: ${getColor(theme, 'gray3')};
                color: ${primaryColor};
              }
            }
          }
          &.disabled .input-number-handler {
            display: none;
          }
        }
      }
    `;

    return [defaultStyle, getSize, wrapperStyle, affixStyle, numberStyle];
  };

export const checkboxStyle =
  (
    color?: CheckboxProps['color'],
    checked?: CheckboxProps['checked'],
    disabled?: CheckboxProps['disabled'],
  ) =>
  (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => {
    // color
    const primaryColor = getColor(theme, color);
    const defaultStyle = css`
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
        border: 1px solid ${getColor(theme, 'gray5')};
        background-color: ${getColor(theme, 'gray1')};
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
          border: 2px solid ${getColor(theme, 'gray1')};
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
            background-color: ${getColor(theme, 'gray3')};
            border-color: ${getColor(theme, 'gray5')};
            cursor: not-allowed;

            &::after {
              border: 2px solid ${getColor(theme, 'gray6')};
              border-top: 0;
              border-left: 0;
              ${!checked && `border: none;`}
            }
          }
          .label {
            color: ${getColor(theme, 'gray6')};
            cursor: not-allowed;
          }
        `;
      return css``;
    };

    return [defaultStyle, getChecked, getDisabled];
  };

export default inputStyle;
