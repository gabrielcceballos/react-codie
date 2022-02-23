import { AppProps } from "next/dist/next-server/lib/router/router";
import Head from "next/head";
import "../styles/reset.css";
import { GlobalStyle } from "../styles/global";
import { FontStyle } from "../styles/fonts";

import SwiperCore, { Navigation, Pagination, Autoplay, EffectFade } from "swiper";
import "swiper/swiper.scss";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';

SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade ]);

const App = ({  Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />

        <title> Codie Digital </title>

        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=11" />
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="keywords" content="" />
        <meta name="description" content="descrição" />
        <meta property="og:title" content="Nome do cliente" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="URL" />
        <meta property="og:image" content="image" />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="300" />
        <meta property="og:site_name" content="" />
        <meta property="og:description" content="descrição" />
        <meta name="content-language" content="pt-br" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="copyright" content="" />
        <link href="html/by%codie" rel="license" />
        <meta name="author" content="Codie" />
        <meta name="robots" content="index,follow,all" />
        <link rel="canonical" href="Url" />
        <meta name="theme-color" content="#fff" />
      </Head>

      <FontStyle />

      <GlobalStyle />

      <Component {...pageProps} />
    </>
  );
};

export default App;
