import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Button, GlassMorphicCard } from "../elements";
import { K } from "../../constants";

const Landing = () => {
  return (
    <Root>
      <div className="main__section">
        <div className="left__section">
          <h1 className="main__text">
            The <span className="primary">Fastest</span> In{" "}<br />
            <span className="primary">Delivering</span> Your Food
          </h1>

          <h5 className="sub__text">
            Our job is to fill your tummy with delicious food with super quick
            delivery.
          </h5>
          <Button text="Get Started" onClick={() => console.log("clicked")} />
        </div>
        <div className="right__section">
          <Image
            alt="landing-image"
            src="/assets/images/pizza.png"
            height={501}
            width={511}
            layout="intrinsic"
          />
          {K.CONFETTIS.map((confetti, index) => (
            <div className={confetti.className} key={index}>
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
      <div className="bottom__section">
        <div className="lady__with__food">
          <Image
            alt="lady with food"
            src="/assets/images/lady_with_food.png"
            layout="intrinsic"
            width={333}
            height={235}
          />
        </div>

        <div className="item__cards">
          {[0, 0, 0].map((card, index) => (
            <GlassMorphicCard className="card" key={index}>
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
                  <h5 className="card__header">Special Friedrice and Egg</h5>
                  <div className="rating">
                    {[0, 0, 0, 0, 0].map((star, index) => (
                      <Image
                        src="/assets/icons/emojione_star.svg"
                        width={20}
                        height={20}
                        layout="intrinsic"
                        key={index}
                      />
                    ))}
                  </div>
                  <h6 className="price">GHS 45.00</h6>
                  <div className="button">
                    <Button text="Order now" onClick={() => console.log()} />
                  </div>
                </div>
              </div>
            </GlassMorphicCard>
          ))}
        </div>
      </div>
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
    transition: 0.2s all ease-in-out;
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
    left: calc(100% - 38.184rem);
    bottom: 25rem;
    position: absolute;
  }

  .left__section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 25vh;
  }

  .main__text {
    font-size: 3.5rem;
    line-height: 4rem;
  }

  .sub__text {
    font-size: 1.5rem;
    line-height: 1.5rem;
  }
  .primary {
    color: #f2aa4c;
  }

  .right__section {
    position: relative;
  }

  .bottom__section {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 1.2rem;
    margin-top: 2rem;
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
    /* height: 8.75rem; */
    max-width: 100%;
    padding: 1.5rem 2.5rem;
  }
  .card__image {
    position: absolute;
    width: 100%;
    top: -13%;
    left: -13%;
  }

  .card__details {
    margin-top: 4rem;
  }
  .card__header {
    font-size: 1.2rem;
  }
  .price {
    font-size: 1rem;
    font-weight: 600;
  }
  .button {
    width: fit-content;
    position: absolute;
    right: 0;
    bottom: 0;
  }

  .sub__text{
    font-weight: 500;
    color: #1018206B;
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
      /* left: calc(100% - 3.184rem); */
    }
    .confetti__heart_filled {
      /* left: calc(100% - 3rem); */
    }

    .content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-wrap: no-wrap;
    }
  }
`;
