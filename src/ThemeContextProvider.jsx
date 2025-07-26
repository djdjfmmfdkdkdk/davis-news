import React, { createContext, useState, useMemo } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export default function ThemeContextProvider({ children }) {
  const [mode, setMode] = useState('light'); // default light

  const colorMode = useMemo(() => ({
    toggleColorMode: () => setMode(prev => (prev === 'light' ? 'dark' : 'light')),
  }), []);

  const theme = useMemo(() =>
    createTheme({ palette: { mode } }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}