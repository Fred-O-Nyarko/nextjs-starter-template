import React from "react";
import Landing from "./landing";
import FirstSection from "./components/sections/_first-section";
import SecondSection from "./components/sections/_second-section";

const HomePage: React.FC = () => {
  return (
    <>
      <Landing />
      <FirstSection />
      <SecondSection />
    </>
  );
};

export default HomePage;
