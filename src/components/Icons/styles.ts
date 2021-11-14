import { css, Interpolation, Theme } from '@emotion/react';
import { getColor, ThemeMode } from '../../styles';
import { DarkColorType, LightColorType } from '../../styles/colors';

const createStyle = (color?: LightColorType | DarkColorType) => (
  theme: Theme = { mode: ThemeMode.LIGHT },
): Interpolation<Theme> => {
  // color
  const primaryColor = color ? getColor(theme, color) : 'inherit';

  // default
  const defaultStyle = css`
    width: 1em;
    height: 1em;
    fill: ${primaryColor};
  `;

  return [defaultStyle];
};

export default createStyle;
