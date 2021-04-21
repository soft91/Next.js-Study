import { AppProps } from "next/app";
import Header from "../components/Header";
import GlobalStyle from "../styles/GlobalStyles";

const app = ({ Component, pageProps }: AppProps) => {
  return(
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </>
  );
};

export default app;