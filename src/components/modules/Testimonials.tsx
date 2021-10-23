import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Testimonials = () => {
  return (
    <StyledDiv>
      <h1 className="text-capitalize text-left fw-bold mb-5">
        What our clients say
      </h1>
      <div className="container">
        <div className="row">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            breakpoints={{
              "640": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "768": {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              "1024": {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            loop
            autoplay
            pagination={{
              clickable: true,
            }}
            id="swiper-1"
            modules={[Autoplay, Pagination]}
          >
            {[0, 0, 0, 0].map((testimonial, idx) => (
              <SwiperSlide key={idx}>
                <div className="testimonial__card d-flex flex-column ">
                  <div className="rating mb-4">
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
                  <h6 className="h6 testimonial fw-400 mb-4 message">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lacus, elementum non et quis aliquam. Ullamcorper cursus
                    laoreet semper.
                  </h6>

                  <div className="row">
                    <div className="col-lg-3">
                      <Image
                        src="/assets/images/client.png"
                        width={50}
                        height={50}
                        layout="intrinsic"
                        alt=""
                      />
                    </div>
                    <div className="col">
                      <div className="row flex-column">
                        <div className="col ">
                          <h5 className="h5">Frederick Obeng</h5>
                        </div>
                        <div className="col">Kumasi, GH</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="container">
        <h5 className="text-uppercase text-center fw-bold my-5 h5 partners">
          Proud Partners
        </h5>
        <div className="row">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            centeredSlides={true}
            autoplay
            loop
            modules={[Autoplay]}
          >
            {[0, 0, 0, 0].map((partner, idx) => (
              <SwiperSlide key={idx}>
                <div className="d-flex justify-content-center">
                  <Image
                    src="/assets/images/mc.png"
                    alt=""
                    width={78.84}
                    height={80}
                    layout="intrinsic"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="container">
        <h5 className="text-uppercase text-center fw-bold my-5 h5 location">
          Shop Locations
        </h5>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15882.403521202412!2d-0.15159847387137526!3d5.625787334426484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf84ed3dc314b1%3A0x86ed9f85229f7fbe!2sTeshi%2C%20Accra!5e0!3m2!1sen!2sgh!4v1634123381945!5m2!1sen!2sgh"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </StyledDiv>
  );
};

export default Testimonials;

const StyledDiv = styled.div`
  margin-top: 11rem !important;

  .testimonial__card {
    padding: 3.25rem 2.375rem;
    background: #fff;
    border: 1px solid #ebebeb;
    border-radius: 10px;
    transition: box-shadow 0.3s;
  }

  .testimonial__card:hover {
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.03),
      0px 14.8148px 18.8519px rgba(0, 0, 0, 0.0227778),
      0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0182222);
  }

  .testimonial {
    line-height: 1.75rem !important;
  }

  .partners,
  .location {
    color: rgba(24, 30, 75, 0.78) !important;
  }

  #swiper-1 .swiper-wrapper {
    padding-bottom: 4rem !important;
  }

  .swiper-pagination-bullet-active {
    background: #f2aa4c !important;
  }

  @media (max-width: 767.98px) {
    .message {
      font-size: 0.8rem !important;
    }
  }
`;
