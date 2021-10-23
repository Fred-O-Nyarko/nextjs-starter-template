import type { NextPage } from "next";
import { Landing, About, Services, Apps, Testimonials } from "../components";

const Home: NextPage = () => {
  return (
    <div className="container">
      <Landing />
      <About />
      <Services />
      <Apps />
      <Testimonials />
    </div>
  );
};

export default Home;
