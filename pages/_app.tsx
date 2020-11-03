import { AppProps } from "next/app";
import { CSSReset, ThemeProvider } from "@chakra-ui/core";
import "../styles/index.css";
import { customTheme } from "../utils/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
