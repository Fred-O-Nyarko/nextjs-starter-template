import React from "react";
import styled from "styled-components";
import Image from "next/image";

const Landing = () => {
  return (
    <Root>
      <div className="main__section">
        <div className="left__section">
          <h1 className="huge__text">
            The <span className="primary">Fastest</span> In <br />{" "}
            <span className="primary">Delivering</span> Your Food
          </h1>
        </div>
        <div className="right__section">
          <div className="confetti__waves">
            <Image
              src="/assets/images/confetti_waves.svg"
              alt=""
              width={115}
              height={90}
              layout="fixed"
            />
          </div>
          <Image
            alt="landing-image"
            src="/assets/images/pizza.png"
            height={501}
            width={511}
            layout="intrinsic"
          />
        </div>
      </div>
      <div className="bottom__section">buttom</div>
    </Root>
  );
};

export default Landing;

const Root = styled.section`
  display: flex;
  flex-direction: column;

  .main__section {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .confetti__waves {
    left: calc(100% - 7.184rem) !important;
    top: 0 !important;
    position: absolute !important;
  }

  .left__section {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }

  .huge__text {
    font-size: 3.5rem;
    line-height: 4rem;
  }

  .primary {
    color: #f2aa4c;
  }

  .right__section {
    position: relative;
  }
`;
