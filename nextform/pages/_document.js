import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Add any global scripts or stylesheets here */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                function googleTranslateElementInit() {
                  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
                }
              `
            }}
          />
          <script
            type="text/javascript"
            src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
