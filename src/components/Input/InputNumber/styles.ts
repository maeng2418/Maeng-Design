import { css, Interpolation, Theme } from '@emotion/react';
import { getColor, ThemeMode } from '../../../styles';
import { NOT_STRING_REGEX } from '../../../utils/regex';
import { InputNumberProps } from './InputNumber';

const createStyle =
  (color?: InputNumberProps['color'], size?: InputNumberProps['size']) =>
  (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => {
    // color
    const primaryColor = getColor(theme, color);
    const subColor = (function () {
      const SUB_COLOR_IDX = 3;
      const sub = `${color?.replace(
        NOT_STRING_REGEX,
        '',
      )}${SUB_COLOR_IDX}` as InputNumberProps['color'];
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
              &:first-of-type {
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

    return [defaultStyle, getSize, wrapperStyle, numberStyle];
  };

export default createStyle;
