import { ServerStyleSheets } from "@material-ui/styles";
import Document, { Head, Html, Main, NextScript } from "next/document";
import flush from "styled-jsx/server";

export default class RootDocument extends Document {
  static async getInitialProps(ctx) {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        // eslint-disable-next-line react/display-name
        enhanceApp: App => props => sheets.collect(<App {...props} />)
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          {sheets.getStyleElement()}
          {flush() || null}
        </>
      )
    };
  }

  render() {
    return (
      <Html>
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
