import { css, Interpolation, Theme } from '@emotion/react';
import { getColor, LightColorType, DarkColorType, ThemeMode } from '../../styles';

const createStyle = (
  color?: LightColorType | DarkColorType,
  size?: 'large' | 'medium' | 'small',
  shape?: 'default' | 'circle' | 'round',
  type?: 'default' | 'primary' | 'dashed' | 'text' | 'link',
  disabled?: boolean,
) => (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => {
  // color
  const primaryColor = getColor(theme, color, disabled, 'gray5');

  // default
  const defaultStyle = css`
    line-height: 1.5715;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    border: 1px solid transparent;
    box-sizing: border-box;
    box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    user-select: none;
    touch-action: manipulation;
    height: 32px;
    padding: 4px 15px;
    font-size: 14px;
    border-radius: 2px;
    color: ${getColor(theme, 'gray10')};
    border-color: ${getColor(theme, 'gray5')};
    background: ${getColor(theme, 'gray1')};

    &:focus,
    &:active,
    &:hover {
      color: ${primaryColor};
      border-color: ${primaryColor};
      background: ${getColor(theme, 'gray1')};
    }

    &[disabled] {
      cursor: not-allowed !important;
      color: ${getColor(theme, 'gray6')} !important;
      border-color: ${getColor(theme, 'gray5')} !important;
      background: ${getColor(theme, 'gray3')} !important;
      text-shadow: none !important;
      box-shadow: none !important;
    }
  `;

  // size
  const getSize = () => {
    if (size === 'large')
      return css`
        height: 40px;
        padding: 6.4px 15px;
        font-size: 16px;
        border-radius: 2px;
      `;
    if (size === 'small')
      return css`
        height: 24px;
        padding: 0px 7px;
        font-size: 14px;
        border-radius: 2px;
      `;
    return css``;
  };

  // shape
  const getShape = () => {
    if (shape === 'circle')
      return css`
        min-width: 32px;
        padding-right: 0;
        padding-left: 0;
        text-align: center;
        border-radius: 50%;

        ${size === 'large' &&
        `
          min-width: 40px;
          border-radius: 50%;
        `}
      `;
    if (shape === 'round')
      return css`
        height: 32px;
        padding: 4px 16px;
        font-size: 14px;
        border-radius: 32px;
      `;
    return css``;
  };

  // type
  const getType = () => {
    if (type === 'primary')
      return css`
        color: ${getColor(theme, 'gray1')};
        border-color: ${primaryColor};
        background: ${primaryColor};
        text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
        box-shadow: 0 2px #0000000b;

        &:focus,
        &:hover,
        &:active {
          color: ${getColor(theme, 'gray1')};
          border-color: ${primaryColor};
          background: ${primaryColor};
          opacity: 0.8;
        }
      `;
    if (type === 'dashed')
      return css`
        border-color: ${getColor(theme, 'gray5')};
        background: ${getColor(theme, 'gray1')};
        border-style: dashed;
      `;
    if (type === 'text')
      return css`
        border-color: transparent;
        background: 0 0;
        box-shadow: none;

        &:focus,
        &:hover,
        &:active {
          color: ${getColor(theme, 'gray10')};
          background: rgba(0, 0, 0, 0.018);
          border-color: transparent;
        }

        &[disabled] {
          border-color: transparent !important;
          background: transparent !important;
        }
      `;
    if (type === 'link')
      return css`
        &,
        &:focus,
        &:hover,
        &:active {
          color: ${primaryColor};
          border-color: transparent;
          background: 0 0;
          box-shadow: none;
          text-decoration: none;
        }

        &[disabled] {
          border-color: transparent !important;
          background: transparent !important;
        }
      `;
    return css``;
  };

  return [defaultStyle, getType(), getSize(), getShape()];
};

export default createStyle;
