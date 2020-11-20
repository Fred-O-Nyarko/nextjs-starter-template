import React from "react";
import PropTypes from "prop-types";
import { Header2 } from "./components/Header";
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
  // const theme = useTheme();
  // const isSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const { children } = props;
  return (
    <React.Fragment>
      <Header2 />
      {/* <Header />
      {isSmallScreen && <Social />} */}
      <main>{children}</main>
      <BackToTop />
      {/* <Footer /> */}
    </React.Fragment>
  );
};

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
