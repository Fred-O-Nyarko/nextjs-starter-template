import React, { useEffect } from "react";
import { BrowserRouter as Router, useLocation, withRouter } from "react-router-dom";
import Routes from "./routes";


const App = () => {

  function _ScrollToTop(props: any) {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return props.children
  }
  const ScrollToTop = withRouter(_ScrollToTop)

  return (
    <Router>
      <ScrollToTop>
        <Routes />
      </ScrollToTop>
    </Router>
  );
};

export default App;
