import '@emotion/react';
import { ThemeMode } from '../src/styles/Theme';

declare module '@emotion/react' {
  export interface Theme {
    mode: ThemeMode.DARK | ThemeMode.LIGHT;
  }
}
