import React, { useEffect, useState } from "react";
import Landing from "./landing";
import FirstSection from "./components/sections/_first-section";
import SecondSection from "./components/sections/_second-section";
import { useTheme, useMediaQuery } from "@material-ui/core";
import { Components } from "../_shared";




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
  const isMediumScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));


  const [show, setShow] = useState<Boolean>(true);

  useEffect(() => {
    isSmallScreen ? setShow(false) : setShow(true)
  }, [isSmallScreen]);

  function handleClick() {
    setShow(false);
  }

  return (
    <React.Fragment>
      {show && (
        <Components.Banner
          message={"Download our mobile app for UAT/BETA"}
          handleClick={handleClick}
          className={!show ? "wow fadeInUp" : ""}
        />
      )}
      <Components.Header moveUp={show} />
      {isMediumScreen && <Components.SocialMediaIcons />}
      <main>
        <Landing />
        <FirstSection />
        <SecondSection />
      </main>
      <BackToTop />
      <Components.Footer />
    </React.Fragment>

  );
};

export default HomePage;
