import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";

import type { AppProps } from "next/app";
import Router from "next/router";
import { MainLayout } from "../components";
import  Head  from "next/Head";

function MyApp({ Component, pageProps }: AppProps) {
  Router.events.on("routeChangeStart", (url) => {
    console.log(url);
  });
  Router.events.on("routeChangeComplete", (url) => {
    console.log(url);
  });
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
    </Head>
      <MainLayout><Component {...pageProps} /></MainLayout>
      
    </>
  );
}
export default MyApp;
