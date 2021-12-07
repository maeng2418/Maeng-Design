import '@emotion/react';

declare module '@emotion/react' {
  enum ThemeMode {
    DARK = 'DARK',
    LIGHT = 'LIGHT',
  }
  export interface Theme {
    mode: ThemeMode.DARK | ThemeMode.LIGHT;
  }
}
