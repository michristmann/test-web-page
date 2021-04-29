import React from 'react'
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Main,
  Head,
  NextScript
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" />
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100;300;400;500;700&display=swap"
            rel="stylesheet"
          ></link>
        </Head>

        <link
          rel="icon"
          href="https://images.squarespace-cdn.com/content/5dd37bc422e1576fb53f8bec/1576769201994-2O4IDPWZ1ITYE4A9Y72W/LOGO+HORIZONTAL+HM-01.png?format=100w&content-type=image%2Fpng"
        />

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
