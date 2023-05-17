import '../styles/globals.css';
import AppThemeProvider from '../src/theme';

export default function MyApp({ Component, pageProps }) {
  return (
    <AppThemeProvider>
      <Component {...pageProps} />
    </AppThemeProvider>
  );
}