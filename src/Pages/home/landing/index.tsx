import { Button, Typography } from "@material-ui/core";
import React from "react";
import ScrollDown from "./components/scroll-chevron";
import "./styles.css";

export default function Landing() {
  return (
    <div className="container-fluid">
      <div className="landing-overlay"></div>
      <div className="landing-background">
        <div className="container h-100 d-flex">
          <div className="landing-content">
            <div className="row ml-0 mr-0">
              <div className="col-lg-12 pt-1 pb-1">
                <Typography
                  variant="h3"
                  color="secondary"
                  className="text-center"
                >
                  We save you
                </Typography>
              </div>
              <div className="col-lg-12 pt-1 pb-1">
                <Typography
                  variant="h3"
                  color="secondary"
                  className="ml11"
                  style={{ width: "auto" }}
                  align="center"
                >
                  {/* <span className="text-wrapper">
                    <span className="line line1"></span>
                    <span className="letters">Time Energy</span>
                  </span> */}
                  <span className="text-wrapper">
                    <h1 className="ml4">
                      <span className="letter letters letters-1">Time</span>
                      <span className="letter letters letters-2">Money</span>
                      <span className="letter letters letters-3">Effort</span>
                    </h1>
                  </span>
                </Typography>
              </div>
              <div className="col-lg-12 pt-1 pb-1">
                <Typography
                  variant="h6"
                  align="center"
                  gutterBottom
                  paragraph
                  color="secondary"
                >
                  # Lorem Ipsum
                </Typography>
              </div>
              <div className="col-lg-12 d-flex justify-content-center pt-1 pb-1">
                <Button
                  size="large"
                  variant="contained"
                  color="primary"
                  className="cta-btn"
                >
                  <Typography
                    variant="h6"
                    color="secondary"
                    className="font-weight-bold"
                  >
                    GET THE APP
                  </Typography>
                </Button>
              </div>
            </div>
            {/* <div className="row position-absolute bottom-0 h-100 w-100">
              <div className="col-lg-12"> */}

            {/* </div>
            </div> */}
          </div>
          <ScrollDown />
        </div>
      </div>
    </div>
  );
}
