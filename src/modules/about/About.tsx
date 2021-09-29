import React, { useEffect, useState } from "react";

import { useTheme, useMediaQuery, Typography, Paper } from "@material-ui/core";
import { Components } from "../_shared";
import styled from "styled-components";
import bgImage from "../_shared/assets/img/lorenzo.jpg";
import business from "../_shared/assets/img/business.jpg";

const About = () => {
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
      <Root style={{ backgroundColor: "#f1f4f6" }}>
        <div className="container-fluid">
          <Components.StyledComponents.Overlay
            backgroundColor="rgba(0,0,0,0.6)"
            height="90vh"
          />
          <Components.StyledComponents.Background
            height="90vh"
            backgroundImage={bgImage}
            backgroundSize="cover"
          >
            <div className="container-fluid h-100 d-flex">
              <div className="row values">
                <div className="col-lg-3">
                  <div className="d-flex flex-column justify-content-center">
                    <Paper
                      elevation={6}
                      style={{
                        padding: "1rem",
                        height: "10rem",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="h6" align="center">
                        Budget
                      </Typography>
                      <Typography
                        align="center"
                        variant="subtitle2"
                        color="textSecondary"
                      >
                        Helping consumers save money, always!
                      </Typography>
                    </Paper>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="d-flex flex-column justify-content-center">
                    <Paper
                      elevation={6}
                      style={{
                        padding: "1rem",
                        height: "10rem",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="h6" align="center">
                        Quality
                      </Typography>
                      <Typography
                        align="center"
                        variant="subtitle2"
                        color="textSecondary"
                      >
                        Making a substantive change to how you access
                        high-quality goods
                      </Typography>
                    </Paper>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="d-flex flex-column justify-content-center">
                    <Paper
                      elevation={6}
                      style={{
                        padding: "1rem",
                        height: "10rem",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="h6" align="center">
                        Flavor
                      </Typography>
                      <Typography
                        align="center"
                        variant="subtitle2"
                        color="textSecondary"
                      >
                        Proving the platform to access and enjoy a varied and
                        flavorful food.
                      </Typography>
                    </Paper>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="d-flex flex-column justify-content-center">
                    <Paper
                      elevation={6}
                      style={{
                        padding: "1rem",
                        height: "10rem",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="h6" align="center">
                        Environmental Awareness
                      </Typography>
                      <Typography
                        align="center"
                        variant="subtitle2"
                        color="textSecondary"
                      >
                        Less food waste with minimal CO<sub>2</sub> footprint
                      </Typography>
                    </Paper>
                  </div>
                </div>
              </div>
            </div>
          </Components.StyledComponents.Background>
        </div>

        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="business-image"></div>
              </div>
              <div className="col-lg-5">
                <div className="d-flex flex-column">
                  <Typography variant="h4" paragraph>
                    Our Business Model
                  </Typography>
                  <Typography>
                    We operate an e-commerce model with some IaaS and SaaS
                    features with distinctive advantages of other peers. Our
                    IaaS and SaaS models provides us the flexibility, retain
                    customer acquisition and high revenue over time.
                    <br /> <br />
                    Our business model offers high degree of flexibility where
                    customers(clients and vendors) adapt to usage patterns that
                    satisfies their needs.
                    <br /> <br />
                    Acrossll service spectrums, we aim to provide every
                    individual with a complete human-service-like experiences
                    like food, liquor, groceries and many more zero-hassle-free
                    shopping experience.
                    <br /> <br />
                    Everything we do is carefully planned, carefully sourced,
                    and carefully executed to make deliveries to your home
                    flawless and most convenient.
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ backgroundColor: "#fff" }}>
          <div className="container">
            <div className="row">
              <Typography variant="h4" paragraph>
                Our Development
              </Typography>
            </div>
          </div>
        </section>
      </Root>
      <BackToTop />
      <Components.Footer />
    </React.Fragment>
  );
};

export default About;

const Root = styled.main`
  .values {
    position: absolute;
    bottom: 24px;
    margin: 0 5rem;
    z-index: 2;
  }
  .business-image {
    background-image: url(${business});
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .section {
    margin-top: 8rem;
    padding: 3rem 0rem;
  }
`;
