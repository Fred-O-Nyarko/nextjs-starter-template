import React from "react";
import styled from "styled-components";
import Section from "../layouts/Section";
import Image from "next/image";
import { K } from "../../constants";
import { Button } from "../elements";

const About = () => {
  const isServer = typeof window === "undefined";
  const WOW = !isServer ? require("wowjs") : null;

  React.useEffect(() => {
    new WOW.WOW().init();
  });

  return (
    <StyledDiv>
      <h1 className="h1 text-capitalize text-center fw-bold mb-5 wow fadeIn">
        What we stand for
      </h1>
      <div className="container cards__section">
        <div className="row">
          {K.ABOUT_US.map((details, idx) => (
            <>
              <div
                className="card col-lg-3 col-sm-6 col-xs-12 wow fadeInUpBig"
                key={idx}
                data-wow-delay={`${idx / 2}s`}
              >
                <div className="content d-flex flex-column p-3">
                  <div className="image__container d-flex justify-content-center">
                    <Image
                      src={details.src}
                      height={details.height}
                      width={details.width}
                      layout="intrinsic"
                      alt=""
                    />
                  </div>
                  <h4 className="h4 text-center my-3 heading">
                    {details.heading}
                  </h4>
                  <h6 className="h6 text-center subtext">{details.subtext}</h6>
                </div>
                <div className="curved__blob">
                  <Image
                    src="/assets/images/curved_blob.svg"
                    height={100}
                    width={100}
                    layout="intrinsic"
                    alt=""
                  />
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="row float-end cta__more align-items-center my-3">
          <Button
            icon
            iconPath="/assets/icons/chevron_right.svg"
            onClick={() => console.log()}
            className="button"
            variant="filled"
            circular
          />
          <h6 className="h6 fw-700 cta__text mb-0">
            <a>Find out More!</a>
          </h6>
        </div>
      </div>
    </StyledDiv>
  );
};

export default About;

const StyledDiv = styled.div`
  margin-top: 9.5rem !important;

  .card {
    background: transparent;
    transition: box-shadow 0.3s ease-in-out;
    border: none;
  }

  .card:hover {
    background: #ffffff;
    box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.02),
      0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852),
      0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481),
      0px 20px 13px rgba(0, 0, 0, 0.01),
      0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185),
      0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481);
    border-radius: 16px;
    display: flex;
  }

  .curved__blob {
    position: absolute;
    display: none;
  }

  .button {
    width: fit-content !important;
  }

  .cta__text {
    width: fit-content;
  }
`;
