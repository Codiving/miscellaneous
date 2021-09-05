import { Layout2 } from "layouts";
import "../styles/globals.css";

const MyApp = props => {
  const { Component, pageProps } = props;

  return (
    <Layout2>
      <Component {...pageProps} />
    </Layout2>
  );
};

export default MyApp;
