import React, { useEffect } from "react";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import "antd/dist/antd.css";
// import "antd/dist/antd.dark.css";
// import "antd/dist/antd.compact.css";
import NextNProgress from "nextjs-progressbar";
import { Layout } from "antd";
const { Footer } = Layout;
import * as gtag from "../lib/gtag";
import { hotjar } from "react-hotjar";

function MyApp({ Component, pageProps }) {
  const schemaData = {
    "@context": "http://schema.org",
    "@type": "Organization",
    name: "폰북업 - 이 번호 찾아줘",
    url: "http://www.phonebookup.com",
    image: "https://phonebookup.s3.ap-northeast-2.amazonaws.com/logo.png",
    description:
      "스팸 전화번호부를 같이 만들어나가는 위키 서비스입니다. 모르는 전화번호를 검색하세요. 당신의 소중한 한 줄이 많은 사람들을 보이스피싱으로부터 구할 수 있습니다.",
    brand: "Phonebookup",
    datePublished: "2022-05-15",
  };
  const router = useRouter();
  useEffect(() => {
    const ip = localStorage.getItem("ip");
    if (ip === null) {
      axios.get(`https://api.ipify.org?format=json`).then((res) => {
        localStorage.setItem("ip", res.data.ip ? res.data.ip : "0.0.0.0");
      });
    }
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    hotjar.initialize(3079005, 6);

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no"
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:url" content="http://phonebookup.com" />
        <meta
          property="og:image"
          content="https://phonebookup.s3.ap-northeast-2.amazonaws.com/logo.png"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9130836798889522"
          crossOrigin="anonymous"
        />
        <script async type="text/javascript" src="//wcs.naver.net/wcslog.js" />
        <script
          async
          type="text/javascript"
          src="https://tistory2.daumcdn.net/tistory/1616367/skin/images/naver-analytics.js"
        />
      </Head>
      <NextNProgress
        color="#fff"
        startPosition={0.3}
        stopDelayMs={200}
        height={1}
        showOnShallow={true}
      />
      <Component {...pageProps} />
      <Footer className="mt-10 text-center w-full bottom-0">
        <div className="text-gray-400 text-xs mb-1">
          copyrightⓒ 2017 All rights reserved by <strong>Phonebookup</strong>
        </div>
        <div className="text-gray-400 text-xs">
          게시글과 댓글의 권리 및 책임은 작성자에게 있습니다.
        </div>
      </Footer>
    </>
  );
}

export default MyApp;
