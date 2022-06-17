import "../styles/globals.css";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import createEmotionCache from "../utils/createEmotionCache";
import { theme } from "../utils/theme";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
