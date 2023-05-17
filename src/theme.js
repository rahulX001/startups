import { createTheme, ThemeProvider } from '@mui/material/styles';

// Create a theme instance
const theme = createTheme();

export default function AppThemeProvider({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}