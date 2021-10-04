import '@emotion/react';
import { ThemeMode } from './Theme';

declare module '@emotion/react' {
  export interface Theme {
    mode: ThemeMode.DARK | ThemeMode.LIGHT;
  }
}
