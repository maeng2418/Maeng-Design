import { css, Interpolation, Theme } from '@emotion/react';
import { getColor, ThemeMode } from '../../../styles';
import { EllipsisOptions, TitleProps } from './Title';

const createStyle = (
  level?: TitleProps['level'],
  color?: TitleProps['color'],
  ellipsis?: TitleProps['ellipsis'],
  disabled?: TitleProps['disabled'],
) => (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => {
  // color
  const primaryColor = getColor(theme, color, disabled, 'gray5');

  // default
  const defaultStyle = css`
    color: ${primaryColor};
    overflow-wrap: break-word;

    ${disabled &&
    `
      cursor: not-allowed !important;
      color: ${getColor(theme, 'gray6')} !important;
      background: none !important;
      text-shadow: none !important;
      box-shadow: none !important;
    `}
  `;

  // size
  const getSize = () => {
    if (level === 1)
      return css`
        margin-bottom: 0.5em;
        color: ${primaryColor};
        font-weight: 600;
        font-size: 38px;
        line-height: 1.23;
      `;
    if (level === 2)
      return css`
        margin-bottom: 0.5em;
        color: ${primaryColor};
        font-weight: 600;
        font-size: 30px;
        line-height: 1.35;
      `;
    if (level === 3)
      return css`
        margin-bottom: 0.5em;
        color: ${primaryColor};
        font-weight: 600;
        font-size: 24px;
        line-height: 1.35;
      `;
    if (level === 4)
      return css`
        margin-bottom: 0.5em;
        color: ${primaryColor};
        font-weight: 600;
        font-size: 20px;
        line-height: 1.4;
      `;
    return css`
      margin-bottom: 0.5em;
      color: ${primaryColor};
      font-weight: 600;
      font-size: 16px;
      line-height: 1.5;
    `;
  };

  // ellipsis
  const getEllipsis = () => {
    if ((ellipsis as EllipsisOptions).rows >= 2) {
      return css`
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: ${(ellipsis as EllipsisOptions).rows}; //원하는 라인수
        -webkit-box-orient: vertical;
      `;
    }
    if (ellipsis) {
      return css`
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      `;
    }
    return css``;
  };

  return [defaultStyle, getSize(), getEllipsis()];
};

// mark
export const markStyle = () => (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => {
  return css`
    background-color: ${getColor(theme, 'gold3')};
  `;
};

export default createStyle;
