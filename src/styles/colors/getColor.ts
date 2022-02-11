import { Theme } from '@emotion/react';
import { DarkColorType, LightColorType } from '.';
import { ThemeMode } from '../Theme';
import { darkColor, lightColor } from './index';

type GetColorType = (
  theme?: Theme,
  color?: LightColorType | DarkColorType,
  disabled?: boolean,
  disabledColor?: LightColorType | DarkColorType,
) => string;

const getColor: GetColorType = (
  theme = {
    mode: ThemeMode.LIGHT,
  },
  color,
  disabled = false,
  disabledColor = 'gray5',
) => {
  const mode = theme.mode || ThemeMode.LIGHT;
  if (!color && theme.mode === ThemeMode.LIGHT) color = 'gray13';
  if (!color && theme.mode === ThemeMode.DARK) color = 'gray1';
  if (mode === ThemeMode.DARK && !disabled) return darkColor[color as DarkColorType];
  if (mode === ThemeMode.LIGHT && !disabled) return lightColor[color as LightColorType];
  if (mode === ThemeMode.DARK && disabled) return darkColor[disabledColor as DarkColorType];
  if (mode === ThemeMode.LIGHT && disabled) return lightColor[disabledColor as LightColorType];
  return 'black';
};

export default getColor;
