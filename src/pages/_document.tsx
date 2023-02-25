import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='ja'>
      <Head>
        {/* サイト全体に反映させたいデフォルトの設定を記述する ex) Google Fonts の読み込み */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
