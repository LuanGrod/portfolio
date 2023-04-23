import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  return (
    <Html
      lang="en"
      className="dark"
    >
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
