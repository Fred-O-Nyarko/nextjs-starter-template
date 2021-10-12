import type { NextPage } from "next";
import {Landing, About} from "../components";

const Home: NextPage = () => {
  return (
  <div className="container">
    <Landing />
    <About />
  </div>
  );
};

export default Home;
