import { css, Interpolation, Theme } from '@emotion/react';
import { getColor, ThemeMode } from '../../../styles';
import { NOT_STRING_REGEX } from '../../../utils/regex';
import { AffixInputProps } from './AffixInput';

const createStyle =
  (color?: AffixInputProps['color'], size?: AffixInputProps['size']) =>
  (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => {
    // color
    const primaryColor = getColor(theme, color);
    const subColor = (function () {
      const SUB_COLOR_IDX = 3;
      const sub = `${color?.replace(
        NOT_STRING_REGEX,
        '',
      )}${SUB_COLOR_IDX}` as AffixInputProps['color'];
      return getColor(theme, sub);
    })();

    // default
    const defaultStyle = css`
      display: flex;
      justify-content: space-between;
      width: 100%;
      outline: none;
      font-weight: 400;
      letter-spacing: 1px;
      background-color: #fff;
      border: 1px solid ${getColor(theme, 'gray5')};
      border-radius: 2px;
      text-overflow: ellipsis;
      line-height: 1.5715;

      &:hover {
        border-color: ${primaryColor};
        box-shadow: 0 0 0 2px ${subColor};
        outline: 0;
      }
    `;

    const getSize = () => {
      if (size === 'large')
        return css`
          padding: 6.5px 11px;
          font-size: 16px;
        `;
      if (size === 'medium')
        return css`
          padding: 4px 11px;
          font-size: 14px;
        `;
      if (size === 'small')
        return css`
          padding: 0px 7px;
          font-size: 14px;
        `;
      return css``;
    };

    const wrapperStyle = css`
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
    `;

    const affixStyle = css`
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
    `;

    return [defaultStyle, getSize, wrapperStyle, affixStyle];
  };

export default createStyle;
