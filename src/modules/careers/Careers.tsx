import { useMediaQuery, useTheme } from "@material-ui/core";

import React, { useEffect, useState } from "react";
import { Components } from "../_shared";

const Careers = () => {
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
    isSmallScreen ? setShow(false) : setShow(true);
  }, [isSmallScreen]);

  function handleClick() {
    setShow(false);
  }

  return (
    <>
      {show && (
        <Components.Banner
          message={"Download our mobile app for UAT/BETA"}
          handleClick={handleClick}
          className={!show ? "wow fadeInUp" : ""}
        />
      )}
      <Components.Header moveUp={show} />
      {isMediumScreen && <Components.SocialMediaIcons />}
      <BackToTop />
      <Components.Footer />
    </>
  );
};

export default Careers;
