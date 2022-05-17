import Head from "next/head";
import "../styles/globals.css";
// import "tailwindcss/tailwind.css";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no"
        />
        <link rel="icon" href="/favicon.ico" />
        {/* <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9130836798889522"
          crossorigin="anonymous"
        ></script> */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
