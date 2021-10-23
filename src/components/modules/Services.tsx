import React from "react";
import styled from "styled-components";
import Image from "next/image";

const Services = () => {
  const isServer = typeof window === "undefined";
  const WOW = !isServer ? require("wowjs") : null;

  React.useEffect(() => {
    new WOW.WOW().init();
  });

  return (
    <StyledDiv>
      <h1 className="text-capitalize text-left fw-bold mb-5 wow fadeIn header__text">
        Our Offered Services
      </h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-6"></div>
          <div className="col-lg-6">
            <div className="service">
              <div className="wow fadeInRight">
                {" "}
                <Image
                  src="/assets/images/blob.svg"
                  width={540}
                  height={540}
                  layout="intrinsic"
                  alt=""
                  className="blob"
                />
              </div>

              <div
                className="service__image wow fadeInUp"
                data-wow-delay="2s"
                data-wow-duration=""
              >
                <Image
                  src="/assets/images/luxury.png"
                  width={392}
                  height={400}
                  layout="intrinsic"
                  alt=""
                  className="service"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledDiv>
  );
};

export default Services;

const StyledDiv = styled.div`
  margin-top: 11rem !important;

  .service {
    position: relative;
  }
  .service__image {
    position: absolute;
    top: 25%;
    left: 10%;
  }

  @media (max-width: 767.98px) {
    .header__text {
    }
  }
`;
