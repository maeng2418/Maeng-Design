export enum ThemeMode {
  DARK = 'DARK',
  LIGHT = 'LIGHT',
}

export interface Theme {
  mode: ThemeMode.DARK | ThemeMode.LIGHT;
}
