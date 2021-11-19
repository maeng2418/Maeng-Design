import { css, Interpolation, Theme } from '@emotion/react';
import { getColor, ThemeMode } from '../../styles';
import { STRING_REGEX } from '../../utils/regex';
import { SelectProps } from './Select';

const createSelectStyle = (
  active: boolean,
  color?: SelectProps['color'],
  size?: SelectProps['size'],
  disabled?: SelectProps['disabled'],
) => (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => {
  // color
  const primaryColor = getColor(theme, color, disabled, 'gray5');

  // default
  const defaultStyle = css`
    position: relative;
    display: flex;
    color: ${getColor(theme, 'gray10')};

    & > div.input-box > svg {
      fill: ${getColor(theme, 'gray7')};
    }

    & > div.input-box {
      border: 1px solid ${getColor(theme, 'gray5')};
      border-radius: 2px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;

      & > input {
        line-height: 22px;
        padding: 4px 15px;
        font-size: 14px;
        width: 100%;
        border: none;
        outline: none;
        margin: 0;
      }

      & > svg {
        position: absolute;
        right: 10px;
      }
    }

    & > div.input-box {
      ${active &&
      css`
        color: ${getColor(theme, 'gray6')};
        border-color: ${primaryColor};
        background: ${getColor(theme, 'gray1')};
        box-shadow: 0 0 8px 2px rgb(0 0 0 / 12%);

        & > input {
          color: ${getColor(theme, 'gray6')};
          border-color: ${primaryColor};
          background: ${getColor(theme, 'gray1')};
          box-shadow: 0 0 8px 2px rgb(0 0 0 / 12%);
        }
      `}

      &:focus,
      &:active,
      &:hover {
        color: ${primaryColor};
        border-color: ${primaryColor};
        background: ${getColor(theme, 'gray1')};
        box-shadow: 0 0 8px 2px rgb(0 0 0 / 12%);
      }
    }
  `;

  // option
  const optionStyle = css`
    & > div.option-list {
      border-radius: 4px;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      opacity: 1;
      visibility: hidden;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      transform: translateY(10px);
      box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%),
        0 9px 28px 8px rgb(0 0 0 / 5%);

      &::before {
        content: '';
        width: 100%;
        height: 10px;
        background-color: transparent;
        position: absolute;
        top: 0;
        left: 0;
        transform: translateY(-100%);
      }
    }

    ${active &&
    css`
      & > div.option-list {
        opacity: 1;
        visibility: visible;
      }
    `}
  `;

  // size
  const getSize = () => {
    if (size === 'large')
      return css`
        & > div.input-box > input {
          font-size: 16px;
          height: 32px;
          line-height: 32px;
        }
      `;
    if (size === 'small')
      return css`
        & > div.input-box > input {
          height: 16px;
          line-height: 14px;
        }
      `;
    return css``;
  };

  // disabled
  const getDisabled = () => {
    if (disabled) {
      return css`
        & > div.input-box,
        & > div.input-box > input[disabled] {
          cursor: not-allowed !important;
          background: ${getColor(theme, 'gray3')} !important;

          &:focus,
          &:active,
          &:hover {
            color: ${getColor(theme, 'gray6')} !important;
            background: ${getColor(theme, 'gray3')} !important;
            border-color: ${getColor(theme, 'gray5')} !important;
            text-shadow: none !important;
            box-shadow: none !important;
          }
        }
      `;
    }
    return css``;
  };

  return [defaultStyle, optionStyle, getSize(), getDisabled()];
};

export const createOptionStyle = (
  color?: SelectProps['color'],
  size?: SelectProps['size'],
  disabled?: SelectProps['disabled'],
  option?: SelectProps['optionStyle'],
) => (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => {
  const subColor = (function () {
    const SUB_COLOR_IDX = 1;
    const sub = `${color?.replace(STRING_REGEX, '')}${SUB_COLOR_IDX}` as SelectProps['color'];
    return getColor(theme, sub, disabled, 'gray5');
  })();

  // default
  const defaultStyle = css`
    display: flex;
    align-items: center;
    min-height: 32px;
    line-height: 22px;
    font-size: 14px;
    padding: 4px 15px;
    &:hover {
      background-color: ${getColor(theme, 'gray3')};
    }
    &.selected {
      font-weight: 600;
      background-color: ${subColor};
    }
  `;
  const getDisabled = () => {
    if (disabled)
      return css`
        cursor: not-allowed !important;
        color: ${getColor(theme, 'gray6')} !important;
        background: ${getColor(theme, 'gray1')} !important;
        border-color: ${getColor(theme, 'gray5')} !important;
        text-shadow: none !important;
        box-shadow: none !important;
      `;
    return css``;
  };

  // size
  const getSize = () => {
    if (size === 'large')
      return css`
        font-size: 16px;
        height: 32px;
        line-height: 32px;
      `;
    if (size === 'small')
      return css`
        height: 16px;
        line-height: 14px;
      `;
    return css``;
  };
  return [defaultStyle, getSize(), getDisabled(), option];
};

export default createSelectStyle;
