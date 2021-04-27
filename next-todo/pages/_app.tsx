import { AppProps } from "next/app";
import Footer from "../components/Footer";
import Header from "../components/Header";
import GlobalStyle from "../styles/GlobalStyles";
import { wrapper } from "../store"

const app = ({ Component, pageProps }: AppProps) => {
  return(
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default wrapper.withRedux(app);