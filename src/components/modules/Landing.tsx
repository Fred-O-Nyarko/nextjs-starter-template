import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Button, GlassMorphicCard } from "../elements";
import { K } from "../../constants";

const Landing = () => {
  return (
    <Root className="container ">
      <div className="row landing__main">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="d-flex flex-column h-100 left__section">
            <h1 className="h1 fw-bold main__text">
              The <span className="primary">Fastest</span> In <br />
              <span className="primary">Delivering</span> Your Food
            </h1>

            <h5 className=" h5 sub__text fw-medium mt-5">
              Our job is to fill your tummy with delicious food with super quick
              delivery.
            </h5>
            <Button
              text="Get Started"
              className="cta__button mt-5"
              onClick={() => console.log("clicked")}
            />
          </div>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="position-relative d-flex justify-content-center">
            <Image
              alt="landing-image"
              src="/assets/images/pizza.png"
              height={501}
              width={511}
              layout="intrinsic"
              className="img-fluid img"
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
      </div>
      
      <div className="row mt-5">
        <div className=" col-lg-3">
          <Image
            alt="lady with food"
            src="/assets/images/lady_with_food.png"
            layout="intrinsic"
            width={333}
            height={235}
          />
        </div>

        
          {[0, 0, 0].map((card, index) => (
              <div className="col-lg-3" key={index}>
            <GlassMorphicCard className="card" >
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
                <div className="">
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
  }

  .left__section{
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
  }

  .sub__text {
    font-size: 1.5rem;
    line-height: 1.5rem;
  }
  .primary {
    color: #f2aa4c;
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
    max-height: 8.75rem;
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

    .sub__text, .cta__button{
        margin-top: 1rem !important
    }
  }
`;
