import type { NextPage } from "next";
import Landing from "../components/modules/Landing";
import Script from 'next/script'

const Home: NextPage = () => {
  return (
  <  >
    <Script src="https://unpkg.com/scrollreveal"/>
    <Landing />
  </>
  );
};

export default Home;
