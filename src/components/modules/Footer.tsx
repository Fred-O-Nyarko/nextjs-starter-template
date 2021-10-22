import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Button } from "../elements";
const Footer = () => {
  return (
    <StyledDiv className="container-fluid position-relative z-10">
      <div className="curved__blob position-absolute">
        <Image
          src="/assets/images/curved_blob.svg"
          height={100}
          width={100}
          layout="intrinsic"
          alt=""
        />
      </div>
      <div className="container ">
        <div className="row my-5 justify-content-space-between">
          <div className="col-lg-3 flex-column">
            <h3 className="h3 mb-3">PigeonUltra™</h3>
            <h6 className="h6 fw-light caption">
              Enjoy the best experience with timely deliveries on the
              PigeonUltra™ App now!
            </h6>
          </div>
          <div className="col-lg-2 flex-column">
            <h5 className="h5 fw-700 mb-3 link__header">Company</h5>
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>More</li>
            </ul>
          </div>
          <div className="col-lg-2 flex-column">
            <h5 className="h5 fw-700 mb-3 link__header">Contact</h5>
            <ul>
              <li>Help/FAQ</li>
              <li>Mail</li>
              <li>Support</li>
            </ul>
          </div>
          <div className="col-lg-2">
            <h5 className="h5 fw-700 mb-3 link__header">More</h5>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Service Conditions</li>
            </ul>
          </div>
          <div className="col-lg-3">
            <div className="row mb-3">
              <div className="col-lg-12">
                <Image
                  src="/assets/icons/facebook.svg"
                  width={50}
                  height={50}
                  layout="intrinsic"
                  alt=""
                />
                <Image
                  src="/assets/icons/instagram.svg"
                  width={50}
                  height={50}
                  layout="intrinsic"
                  alt=""
                />
                <Image
                  src="/assets/icons/twitter.svg"
                  width={50}
                  height={50}
                  layout="intrinsic"
                  alt=""
                />
              </div>
              <div className="col-lg-12">
                <h6 className="h6  fw-normal"> Discover our Apps</h6>
                <div className="apps__buttons d-flex mt-3">
                  <Button
                    icon
                    iconPath="/assets/icons/logos_google-play.svg"
                    onClick={() => console.log()}
                    className="app__button"
                    iconStyles={{ width: 60, height: 20 }}
                  />
                  <Button
                    icon
                    iconPath="/assets/icons/logos_app-store.svg"
                    onClick={() => console.log()}
                    className="app__button"
                    iconStyles={{ width: 60, height: 20 }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="text-center reserved">
              All rights reserved {new Date().getFullYear()} PigeonUltra™
            </div>
          </div>
        </div>
      </div>
      <div className="huge__blob position-absolute">
        <Image
          src="/assets/images/blob_huge.svg"
          width={483}
          height={495}
          layout="intrinsic"
          alt=""
        />
      </div>
    </StyledDiv>
  );
};

export default Footer;

const StyledDiv = styled.div`
  width: 100%;

  margin-top: 15rem !important;
  /* position: absolute;
  bottom: 0;
  left: 0; */

  li {
    list-style: none !important;
    margin-left: 0;
    padding-left: 0 !important;
    color: rgba(16, 24, 32, 0.47);
    font-weight: 400 !important;
    font-size: 0.8rem !important;
  }

  ul {
    padding-left: 0 !important;
  }

  .caption {
    font-size: 0.8rem !important;
  }

  .app__button {
    background: #000000 !important;
    border-radius: 64px;
  }

  .app__button:first-child {
    margin-right: 1rem;
  }

  .link__header {
    color: rgba(24, 30, 75, 0.78) !important;
  }

  .reserved {
    font-size: 0.8rem;
  }

  .curved__blob {
    top: -7rem;
    right: -12rem;
  }
  .huge__blob {
    top: -17rem;
    left: -13rem;
    z-index: -1;
  }
`;
