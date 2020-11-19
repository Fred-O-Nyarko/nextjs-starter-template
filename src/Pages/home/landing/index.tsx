import { Button, Typography } from "@material-ui/core";
import React from "react";
import ScrollDown from "./components/scroll-chevron";
import "./styles.css";

export default function Landing() {
  return (
    <div className="container-fluid">
      <div className="landing-overlay"></div>
      <div className="landing-background">
        <div className="container h-100">
          <div className="landing-content">
            <div className="row ">
              <div className="col-lg-12">
                <Typography
                  variant="h3"
                  color="secondary"
                  className="text-center"
                >
                  We seriously deliver
                </Typography>
              </div>
              <div className="col-lg-12">
                <Typography
                  variant="h3"
                  color="secondary"
                  className="ml11"
                  style={{ width: "auto" }}
                  align="center"
                >
                  <span className="text-wrapper">
                    <span className="line line1"></span>
                    <span className="letters">Text</span>
                  </span>
                </Typography>
              </div>
              <div className="col-lg-12">
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
              <div className="col-lg-12 d-flex justify-content-center">
                <Button size="large" variant="contained" color="primary">
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
            <div className="row position-absolute bottom-0 h-100 w-100">
              <div className="col-lg-12">
                <ScrollDown />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
