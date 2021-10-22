import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Button } from "../elements";

const Apps = () => {
  const isServer = typeof window === "undefined";
  const WOW = !isServer ? require("wowjs") : null;

  React.useEffect(() => {
    new WOW.WOW().init();
  });

  return (
    <StyledDiv>
      <h1 className="text-capitalize text-center fw-bold mb-5 wow fadeIn">
        Our Apps
      </h1>
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-6 col-sm-12">
            <div className="mockup d-flex wow fadeIn" data-wow-delay="1s">
              <Image
                src="/assets/images/mockup.png"
                width={460}
                height={227}
                layout="intrinsic"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="p3 d-flex flex-column align-items-center justify-content-center h-100">
              <h4 className="h4 text-center mb-4 fw-700 wow fadeInUp">
                Download app to enjoy more!
              </h4>
              <h5 className="h5 text text-center lh-base my-3 sub__text wow fadeInUp">
                Get the PigeonUltra™ Client or PigeonUltra™ Fleet mobile app on
                the available platforms below. You can access our web
                application if you are already a shop owner at
                https://shops.pigeonultra.com
              </h5>
              <div className="apps__buttons d-flex mt-3 wow fadeInUp">
                <Button
                  icon
                  iconPath="/assets/icons/logos_google-play.svg"
                  onClick={() => console.log()}
                  className="app__button"
                  iconStyles={{ width: 120, height: 40 }}
                />
                <Button
                  icon
                  iconPath="/assets/icons/logos_app-store.svg"
                  onClick={() => console.log()}
                  className="app__button"
                  iconStyles={{ width: 120, height: 40 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledDiv>
  );
};

export default Apps;

const StyledDiv = styled.div`
  margin-top: 11rem !important;

  .app__button {
    background: #000000 !important;
    border-radius: 10px !important;
  }

  .app__button:first-child {
    margin-right: 1rem;
  }
  .sub__text {
    font-size: 1rem;
  }
`;
