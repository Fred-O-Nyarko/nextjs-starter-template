import React from "react";
import styled from "styled-components";
import Image from "next/image";

const Services = () => {
  return (
    <StyledDiv>
      <h1 className="text-capitalize text-left fw-bold mb-5">
        Our Offered Services
      </h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-6"></div>
          <div className="col-lg-6">
            <div className="service">
              <Image
                src="/assets/images/blob.svg"
                width={540}
                height={540}
                layout="intrinsic"
                alt=""
                className="blob"
              />
              <div className="service__image">
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
`;
