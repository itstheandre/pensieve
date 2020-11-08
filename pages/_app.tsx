import { AppProps } from "next/app";
import { CSSReset, ThemeProvider } from "@chakra-ui/core";
import "../styles/index.css";
import { customTheme } from "../utils/theme";
import { Provider } from "next-auth/client";
import { Layout } from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  console.log("pageProps:", pageProps);
  return (
    <ThemeProvider theme={customTheme}>
      <Provider session={pageProps.session}>
        <Layout>
          <CSSReset />
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
