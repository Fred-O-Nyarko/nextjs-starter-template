import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Header2 } from "./components/Header";
// import Footer from "./components/Footer";
import { useTheme, useMediaQuery } from "@material-ui/core";
import Social from "./components/Social";
import Footer2 from "./components/Footer/Footer2";
import Banner from "./components/Header/Banner";
// import Header from "./components/Header";
// import Social from "./components/Social";
// import { useMediaQuery, useTheme } from "@material-ui/core";
// import Footer from "./components/Footer";

interface IProps {
  children: React.ReactNode;
}

const BackToTop = () => {
  return (
    <React.Fragment>
      <a href="/" className="back-to-top">
        <i className="fa fa-chevron-up"></i>
      </a>
    </React.Fragment>
  );
};

const Main: React.FC<IProps> = (props) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const { children } = props;

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
          message={"Download our mobile app for UAT"}
          handleClick={handleClick}
          className={!show ? "wow fadeInUp" : ""}
        />
      )}
      <Header2 moveUp={show} />
      {/* <Header /> */}
      {isSmallScreen && <Social />}
      <main>{children}</main>
      <BackToTop />
      {/* <Footer /> */}
      <Footer2 />
    </React.Fragment>
  );
};

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
