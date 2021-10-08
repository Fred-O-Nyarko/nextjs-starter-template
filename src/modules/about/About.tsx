import React, { useEffect, useState } from "react";

import { useTheme, useMediaQuery, Typography, Paper } from "@material-ui/core";
import { Components } from "../_shared";
import styled from "styled-components";
import bgImage from "../_shared/assets/img/about-bg.png";
import business from "../_shared/assets/img/business.png";
import logo from "../_shared/assets/img/logos/logo.png";
import { ArrowRightAltOutlined } from "@material-ui/icons";

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
              <div className="container">
                <div className="row flex-column mission">
                  <div className="col-lg-6 mb-5">
                    <Typography className="header_text" gutterBottom>
                      Our Mission
                    </Typography>
                    <Typography className="subtext">
                      "To become the first Ghanaian aggregation delivery company
                      that improves the supply experiences for every customer,
                      with seamless experience from vendor to home."
                    </Typography>
                  </div>
                  <div className="col-lg-6 ">
                    <Typography className="header_text" gutterBottom>
                      Our Vision
                    </Typography>
                    <Typography className="subtext">
                      "To always put our customers at the center of our growth.
                      We deliver opportunities without boundaries."
                    </Typography>
                  </div>
                </div>
              </div>

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
                        marginBottom: "2rem",
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
                        marginBottom: "2rem",
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
                        marginBottom: "2rem",
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
                        marginBottom: "2rem",
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

        <section className="section mt-5">
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
            <div className="row">
              <div className="development-timeline">
                <div className="country">
                  <div className="flag">
                    <img
                      src="https://www.countryflags.io/gh/shiny/64.png"
                      alt="ghana"
                    />
                  </div>
                  <span>
                    <Typography>2017</Typography>
                  </span>
                </div>
                <div className="country">
                  <div className="flag">
                    <img
                      src="https://www.countryflags.io/us/shiny/64.png"
                      alt="ghana"
                    />
                  </div>
                  <span>
                    <Typography>2018</Typography>
                  </span>
                </div>
                <div className="country">
                  <div className="flag">
                    <img
                      src="https://www.countryflags.io/us/shiny/64.png"
                      alt="ghana"
                    />
                  </div>
                  <span>
                    <Typography>2019</Typography>
                  </span>
                </div>
                <div className="country">
                  <div className="flag">
                    <img
                      src="https://www.countryflags.io/gh/shiny/64.png"
                      alt="ghana"
                    />
                  </div>
                  <span>
                    <Typography>2020</Typography>
                  </span>
                </div>
                <div className="country">
                  <div className="flag">
                    <img
                      src="https://www.countryflags.io/gh/shiny/64.png"
                      alt="ghana"
                    />
                  </div>
                  <span>
                    <Typography>2021</Typography>
                  </span>
                </div>
                <div className="col">
                  <div className="country flex-row">
                    <ArrowRightAltOutlined className="arrow-right" />
                    <img src={logo} alt="logo" className="logo img-fluid" />
                    <Typography className="mascot" color="textPrimary">
                      "To infinity and beyond!"
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <Typography variant="h4" paragraph>
              Our Management Board
            </Typography>
            <div className="row justify-content-center">
              <div className="col-lg-4">
                <div className="management">
                  <div className="circle">
                    <img
                      src="https://www.hom-fix.com/plugins/images/users/4.jpg"
                      alt="management"
                      className="img-fluid img"
                    />
                  </div>

                  <div className="details">
                    <Typography variant="h5" className="name" gutterBottom>
                      Beverly H.
                    </Typography>
                    <Typography variant="subtitle1">
                      Overseer, Head-Honcho
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="management">
                  <div className="circle">
                    <img
                      src="https://www.hom-fix.com/plugins/images/users/4.jpg"
                      alt="management"
                      className="img-fluid img"
                    />
                  </div>

                  <div className="details">
                    <Typography variant="h5" className="name" gutterBottom>
                      Benjamin N.S
                    </Typography>
                    <Typography variant="subtitle1">
                      Finance & Marketing
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="management">
                  <div className="circle">
                    <img
                      src="https://www.hom-fix.com/plugins/images/users/4.jpg"
                      alt="management"
                      className="img-fluid img"
                    />
                  </div>

                  <div className="details">
                    <Typography variant="h5" className="name" gutterBottom>
                      Frank A.
                    </Typography>
                    <Typography variant="subtitle1">Attorney at Law</Typography>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="management">
                  <div className="circle">
                    <img
                      src="https://www.hom-fix.com/plugins/images/users/4.jpg"
                      alt="management"
                      className="img-fluid img"
                    />
                  </div>

                  <div className="details">
                    <Typography variant="h5" className="name" gutterBottom>
                      Rachel H.
                    </Typography>
                    <Typography variant="subtitle1">
                      Advisory & Board
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="management">
                  <div className="circle">
                    <img
                      src="https://www.hom-fix.com/plugins/images/users/4.jpg"
                      alt="management"
                      className="img-fluid img"
                    />
                  </div>

                  <div className="details">
                    <Typography variant="h5" className="name" gutterBottom>
                      Sharvez H.
                    </Typography>
                    <Typography variant="subtitle1">
                      Advisory & Board
                    </Typography>
                  </div>
                </div>
              </div>
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
    margin: 0 auto;
    z-index: 2;
    width: 100%;
  }
  .business-image {
    background-image: url(${business});
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }

  .section {
    /* margin: 5rem 0; */
    padding: 5rem 0rem;
  }

  .mission {
    top: 50%;
    left: 2%;
    position: absolute;
    transform: translateY(-60%);
    width: 65vw;
  }

  .header_text {
    color: #fafafa;
    font-weight: 900;
  }

  .subtext {
    color: #fff;
    font-size: 1.2rem;
    font-weight: 700;
    font-style: italic;
  }

  .development-timeline {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    padding: 32px;
    overflow-x: auto;
  }

  .country {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: auto;
    position: relative;
  }

  .country:not(:last-child) {
    margin-right: 2rem;
  }

  .flag {
    padding-bottom: 3.75rem;
    display: flex;
    flex-flow: row nowrap;
    position: relative;
  }
  /* .flag::before {
    left: 24px;
    bottom: 40px;
    width: calc(100% - 48px);
    content: "";
    display: block;
    position: absolute;
    height: 1px;
    background: #4e4040;
  } */
  .flag::after {
    height: 40px;
    content: "";
    display: block;
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 1px;
    background: #242424;
  }

  span {
    margin-top: 0.8rem;
  }

  .management {
    display: flex;
    flex-direction: column;
    flex-flow: column nowrap;
    align-items: center;
    margin-top: 1rem;
    padding: 1rem;
  }

  .circle {
    border-radius: 50%;
    height: 100%;
  }

  .img {
    border-radius: 50%;
    height: 12rem;
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
  }

  .name {
    font-weight: 700 !important;
  }

  .logo {
    height: 10rem;
  }

  .arrow-right {
    font-size: 5rem;
    margin-right: 2rem;
    color: #ffa023;
  }

  .mascot {
    font-style: italic;
    font-weight: 700;
    font-size: 1.2rem;
    margin-left: 2rem;
  }
`;
