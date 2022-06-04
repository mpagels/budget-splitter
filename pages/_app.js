import { GlobalStyles } from "../GlobalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
