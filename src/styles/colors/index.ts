import lightColor from './light';
import darkColor from './dark';

export { default as lightColor } from './light';
export { default as darkColor } from './dark';
export { default as getColor } from './getColor';

export type LightColorType = keyof typeof lightColor;
export type DarkColorType = keyof typeof darkColor;
