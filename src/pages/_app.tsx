import "../styles/globals.css";
import type { AppProps } from "next/app";
import Router from "next/router";
import { MainLayout } from "../components";

function MyApp({ Component, pageProps }: AppProps) {
  Router.events.on("routeChangeStart", (url) => {
    console.log(url);
  });
  Router.events.on("routeChangeComplete", (url) => {
    console.log(url);
  });
  return (
    <MainLayout>
      {/* <Component {...pageProps} /> */}
    </MainLayout>
  );
}
export default MyApp;
