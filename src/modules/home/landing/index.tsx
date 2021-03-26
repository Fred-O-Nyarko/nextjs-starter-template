import { Button, Typography } from "@material-ui/core";
import React, { useState } from "react";
import "./styles.css";
import TransitionsModal from "./components/modal";
import ScrollDown from "./components/scroll-chevron";

export default function Landing() {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <React.Fragment>
      <TransitionsModal open={open} handleClose={handleClose} />
      <div className="container-fluid">
        <div className="landing-overlay"></div>
        <div className="landing-background">
          <div className="container h-100 d-flex">
            <div className="landing-content">
              <div className="row ml-0 mr-0">
                <div className="col-lg-12 pt-1 pb-1">
                  <Typography
                    variant="h1"
                    color="secondary"
                    className="text-center"
                  >
                    We save you
                  </Typography>
                </div>
                <div className="col-lg-12 pt-1 pb-1 overflow-hidden">
                  <Typography
                    variant="h2"
                    color="secondary"
                    className="ml11"
                    style={{ width: "auto" }}
                    align="center"
                  >
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
                    <strong>#PigeonIT</strong>
                  </Typography>
                </div>
                <div className="col-lg-12 d-flex justify-content-center pt-1 pb-1">
                  <Button
                    size="large"
                    variant="contained"
                    color="primary"
                    className="cta-btn"
                    onClick={handleClick}
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
            </div>
            <ScrollDown />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
