import { Button, Typography } from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";
import TransitionsModal from "./components/modal";
import ScrollDown from "./components/scroll-chevron";
import { Components } from "../../_shared";
import bgImage from "../../_shared/assets/img/bg.jpg";
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
      <Root className="container-fluid">
        <Components.StyledComponents.Overlay
          backgroundColor="rgba(0,0,0,0.6)"
          height="100vh"
        />
        <Components.StyledComponents.Background
          height="100vh"
          backgroundImage={bgImage}
          backgroundSize="cover"
        >
          <div className="container h-100 d-flex">
            <Content>
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
            </Content>
            <ScrollDown />
          </div>
        </Components.StyledComponents.Background>
      </Root>
    </React.Fragment>
  );
}

const Root = styled.div`
  .cta-btn {
    padding: 0.8rem 3rem !important;
    filter: drop-shadow(-2px 4px 13px rgba(0, 0, 0, 0.25)) !important;
    outline: none !important;
  }

  .btn-outline-success {
    color: #ffa203 !important;
    border-color: #ffa203 !important;
  }

  .btn-outline-success:hover {
    background-color: #ffa203 !important;
    color: #fff !important;
  }

  .ml4 {
    position: relative !important;
    /* padding-left: 0.5rem; */
  }
  .ml4 .letters {
    position: absolute;
    margin: auto;
    left: -3.5rem;
    top: -1rem;
    /* right: 1rem; */
    opacity: 0;
  }

  .ml11 {
    font-weight: 700;
    font-size: 3.5em;
  }

  .ml11 .text-wrapper {
    position: relative;
    display: inline-block;
    padding-top: 0.1em;
    padding-right: 0.05em;
    padding-bottom: 0.15em;
  }

  .ml11 .line {
    opacity: 0;
    position: absolute;
    left: 0;
    height: 100%;
    width: 3px;
    background-color: #fff;
    transform-origin: 0 50%;
  }

  .ml11 .line1 {
    top: 0;
    left: 0;
  }

  .ml11 .letter {
    display: inline-block;
    line-height: 1em;
    font-weight: 600;
    font-family: Poppins;
    color: #ffa203;
  }
`;

const Content = styled.div`
  /* z-index: 9999; */
  /* position: absolute; */
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  z-index: 100;
  width: 100%;
`;
