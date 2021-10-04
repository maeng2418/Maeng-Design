import { css, Interpolation, Theme } from '@emotion/react';
import { getColor, LightColorType, DarkColorType, ThemeMode } from '../../styles';

const createStyle = (
  color?: LightColorType | DarkColorType,
  size?: 'large' | 'medium' | 'small',
  type?: 'primary' | 'dashed' | 'text' | 'link',
  disabled?: boolean,
) => (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => {
  // color
  const mainColor = getColor(theme, color, disabled, 'gray5');

  // size
  const getSize = () => {
    if (size === 'large') return css``;
    if (size === 'medium') return css``;
    if (size === 'small') return css``;
    return css``;
  };

  // type
  const getType = () => {
    if (type === 'primary')
      return css`
        color: ${mainColor};
      `;
    if (type === 'dashed')
      return css`
        color: ${mainColor};
      `;
    if (type === 'text')
      return css`
        color: ${mainColor};
      `;
    if (type === 'link')
      return css`
        color: ${mainColor};
      `;
    return css`
      color: ${mainColor};
    `;
  };

  return [getType(), getSize()];
};

export default createStyle;
