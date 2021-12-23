import { css, Interpolation, Theme } from '@emotion/react';
import { getColor, ThemeMode } from '../../styles';
import { NOT_STRING_REGEX } from '../../utils/regex';
import { InputProps } from './Input';

const createStyle =
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
      &[type='text'],
      &[type='email'],
      &[type='tel'],
      &[type='password'],
      &[type='number'],
      &.affix {
        width: 100%;
        outline: none;
        font-weight: 400;
        border: 1px solid ${getColor(theme, 'gray7')};
        letter-spacing: 1px;
        background-color: #fff;
        border: 1px solid ${getColor(theme, 'gray5')};
        border-radius: 2px;
        text-overflow: ellipsis;
        line-height: 1.5715;

        &:focus,
        &.focused {
          border-color: ${primaryColor};
          box-shadow: 0 0 0 2px ${subColor};
          outline: 0;
        }

        &:disabled,
        &.disabled {
          color: ${getColor(theme, 'gray6')} !important;
          background-color: ${getColor(theme, 'gray3')} !important;
          border-color: ${getColor(theme, 'gray5')} !important;
          box-shadow: none !important;
          cursor: not-allowed;
        }

        &.affix {
          display: flex;
          justify-content: space-between;
          & > .prefix {
            margin-right: 4px;
            display: flex;
            align-items: center;
          }
          & > input {
            &[type='text'],
            &[type='email'],
            &[type='tel'],
            &[type='password'],
            &[type='number'] {
              flex: 1;
              border: none;
              outline: none;
              font-size: inherit;
            }
          }
          & > .suffix {
            margin-left: 4px;
            display: flex;
            align-items: center;
          }
          &.disabled {
            input {
              cursor: not-allowed;
            }
          }
        }
      }
    `;

    const getSize = () => {
      if (size === 'large')
        return css`
          &[type='text'],
          &[type='email'],
          &[type='tel'],
          &[type='password'],
          &[type='number'],
          &.affix {
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
          &[type='number'],
          &.affix {
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
          &[type='number'],
          &.affix {
            padding: 0px 7px;
            font-size: 14px;
          }
        `;
      return css``;
    };

    return [defaultStyle, getSize];
  };

export default createStyle;
