import { Theme, ThemeProvider as Provider } from '@emotion/react';
import React from 'react';

interface ThemeProviderProps {
  children: React.ReactNode;
  theme: Theme;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme }) => {
  return <Provider theme={theme}>{children}</Provider>;
};

export default ThemeProvider;
