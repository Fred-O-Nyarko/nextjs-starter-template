import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Button, GlassMorphicCard } from "../elements";
import { K } from "../../constants";

const Landing = () => {
  const isServer = typeof window === "undefined";
  const WOW = !isServer ? require("wowjs") : null;

  React.useEffect(() => {
    new WOW.WOW().init();
  });

  return (
    <Root className="container-fluid ">
      <div className="row landing__main">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="d-flex flex-column h-100 left__section">
            <h1
              className="h1 fw-bold main__text wow fadeIn"
              data-wow-duration="2s"
            >
              The <span className="primary">Fastest</span> In <br />
              <span className="primary">Delivering</span> Your Food
            </h1>

            <h5
              className=" h5 sub__text fw-medium mt-5 wow fadeInUp"
              data-wow-delay="1s"
            >
              Our job is to fill your tummy with delicious food with super quick
              delivery.
            </h5>
            <Button
              text="Get Started"
              className="cta__button mt-5 wow bounceIn"
              data-wow-delay="3s"
              onClick={() => console.log("clicked")}
            />
          </div>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="position-relative d-flex justify-content-center ">
            <div className="wow slideInRight" data-wow-duration="1s">
              <Image
                alt="landing-image"
                src="/assets/images/pizza.png"
                height={501}
                width={511}
                layout="intrinsic"
                className="img-fluid img "
              />
            </div>
            {K.CONFETTIS.map((confetti, index) => (
              <div
                className={`wow fadeIn ${confetti.className}`}
                key={index}
                data-wow-delay="1s"
                data-wow-duration="2s"
              >
                <Image
                  src={confetti.src}
                  alt="confetti"
                  width={confetti.width}
                  height={confetti.height}
                  layout="intrinsic"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="row mt-5 flex-nowrap align-items-center">
        <div
          className=" col-lg-3 wow fadeIn"
          data-wow-duration="2s"
          data-wow-delay="1s"
        >
          <Image
            alt="lady with food"
            src="/assets/images/lady_with_food.png"
            layout="intrinsic"
            width={313}
            height={215}
          />
        </div>

        {[0, 0, 0].map((card, index) => (
          <div
            className="col-lg-3 card__child wow fadeInUp"
            key={index}
            data-wow-delay={`${index / 2}s`}
            data-wow-duration=".5s"
          >
            <GlassMorphicCard className="card">
              <div className="content">
                <div className="card__image">
                  <Image
                    alt="card image"
                    src="/assets/images/food1.png"
                    layout="intrinsic"
                    width={97.55}
                    height={89.62}
                  />
                </div>
                <div className="card__details">
                  <h5 className="card__header fw-bold">
                    Special Friedrice and Egg
                  </h5>
                  <div className="rating">
                    {[0, 0, 0, 0, 0].map((star, index) => (
                      <Image
                        src="/assets/icons/emojione_star.svg"
                        width={20}
                        height={20}
                        layout="intrinsic"
                        key={index}
                        alt=""
                      />
                    ))}
                  </div>
                  <h6 className="price">GHS 45.00</h6>
                  <div className="button__section">
                    <Button
                      text="Order now"
                      onClick={() => console.log()}
                      className="order__now"
                      icon
                      iconPath="/assets/icons/cart.svg"
                    />
                  </div>
                </div>
              </div>
            </GlassMorphicCard>
          </div>
        ))}
      </div>
    </Root>
  );
};

export default Landing;

const Root = styled.div`
  .cta__button {
    width: fit-content;
    border-radius: 64px !important;
    padding: 0.8rem 2.5rem !important;
  }

  .left__section {
    margin-top: 15% !important;
  }
  .confetti__waves {
    left: calc(100% - 7.184rem);
    top: 0;
    position: absolute;
  }
  .confetti__heart__filled {
    left: calc(100% - 9rem);
    bottom: 0;
    position: absolute;
  }

  .confetti__heart__outlined {
    left: calc(100% - 100rem);
    bottom: 0;
    position: absolute;
  }

  .confetti__hexagon__filled {
    left: calc(100% - 44.184rem);
    bottom: 1rem;
    position: absolute;
  }

  .confetti__hexagon__outlined {
    left: calc(100% - 42.184rem);
    bottom: 25rem;
    position: absolute;
  }

  .main__text {
    font-size: 3.5rem;
    line-height: 4rem;
    color: rgba(24, 30, 75, 0.78) !important;
  }

  .sub__text {
    font-size: 1rem;
    line-height: 1.5rem;
  }
  .primary {
    color: #f2aa4c;
  }

  .content {
    display: grid;
    place-items: center;
    height: 100%;
  }

  .lady__with__food {
    grid-column: span 1;
  }

  .item__cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 4rem;
  }

  .card {
    position: relative;
    /* width: 14.125rem; */
    height: 100%;
    max-height: 9.75rem;
    max-width: 16.625rem;
    max-width: 100%;
    padding: 1.5rem 2.5rem;
    border: none !important;
  }

  .card__child {
    margin-right: 2rem;
  }
  .card__child:last-child {
    margin-right: 0;
  }

  .card__image {
    position: absolute;
    top: -30%;
    left: -13%;
  }

  .card__details {
    display: flex;
    flex-direction: column;
    flex-wrap: no-wrap;
    margin-top: 1rem;
  }
  .card__header {
    font-size: 0.8rem;
    color: rgba(24, 30, 75, 0.78) !important;
    font-weight: 600 !important;
  }
  .price {
    font-size: 0.8rem !important;
    font-weight: 600;
  }
  .button__section {
    width: fit-content;
    position: absolute;
    right: 0;
    bottom: 0;
    border-radius: 5px 0 !important;
  }

  .sub__text {
    font-weight: 500;
    color: #1018206b;
  }
  @media (max-width: 991.98px) {
  }
  @media (min-width: 992px) {
  }

  @media (max-width: 767.98px) {
  }

  @media (max-width: 767.98px) {
    .main__section {
      flex-wrap: wrap-reverse;
      justify-content: center;
    }
    .main__text {
      font-size: 2rem;
      line-height: 2rem;
      text-align: center;
      margin: 0.5rem 0;
    }
    .left__section {
      align-items: center;
    }
    .sub__text {
      font-size: 0.8rem;
      text-align: center;
      line-height: 1rem;
      font-weight: 500;
    }
    .confetti__waves {
      left: calc(100% - 5.184rem);
    }
    .confetti__heart__filled {
      left: calc(100% - 4rem);
    }

    .confetti__heart__outlined {
      /* left: calc(100% - 22rem); */
    }

    .landing__main {
      display: flex;
      flex-direction: column-reverse;
      justify-content: space-between;
      flex-wrap: no-wrap;
    }

    .sub__text,
    .cta__button {
      margin-top: 1rem !important;
    }
  }

  .order__now {
    border-radius: 5px 0px !important;
    font-size: 0.8rem;
    padding: 6px 14px !important;
  }
`;
