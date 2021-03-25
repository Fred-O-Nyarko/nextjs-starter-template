import React, { useEffect, useState } from "react";
import Landing from "./landing";
import FirstSection from "./components/sections/_first-section";
import SecondSection from "./components/sections/_second-section";
import { useTheme, useMediaQuery } from "@material-ui/core";
import Footer2 from "../../_shared/Layouts/Main/components/Footer/Footer2";
import { Header2 } from "../../_shared/Layouts/Main/components/Header";
import Banner from "../../_shared/Layouts/Main/components/Header/Banner";
import Social from "../../_shared/Layouts/Main/components/Social";


const HomePage = () => {

  const BackToTop = () => {
    return (
      <React.Fragment>
        <a href="/" className="back-to-top">
          <i className="fa fa-chevron-up"></i>
        </a>
      </React.Fragment>
    );
  };


  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));

  const [show, setShow] = useState<Boolean>(true);

  useEffect(() => {
    setShow(true);
  }, []);

  function handleClick() {
    setShow(false);
  }

  return (
    <React.Fragment>
      {show && (
        <Banner
          message={"Download our mobile app for UAT/BETA"}
          handleClick={handleClick}
          className={!show ? "wow fadeInUp" : ""}
        />
      )}
      <Header2 moveUp={show} />
      {isSmallScreen && <Social />}
      <main>
        <Landing />
        <FirstSection />
        <SecondSection />
      </main>
      <BackToTop />
      <Footer2 />
    </React.Fragment>

  );
};

export default HomePage;
