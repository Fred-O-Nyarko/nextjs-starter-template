import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Swipercore, { Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/swiper.scss";
import kfc from "../../../../_shared/assets/img/kfc.png";
import pizza from "../../../../_shared/assets/img/pizza.png";
import pizza_2 from "../../../../_shared/assets/img/pizza_2.png";
import papaye from "../../../../_shared/assets/img/papaye.png";

Swipercore.use([Navigation]);

export default function FourthSection() {
  const imageUrls = [
    { name: kfc },
    { name: pizza },
    { name: pizza_2 },
    { name: papaye },
  ];
  return (
    <section>
      <Grid
        container
        alignItems="center"
        justify="center"
        className="container"
        style={{ marginTop: "3rem" }}
      >
        <Typography variant="h4" align="center">
          LOREM IPSUM
        </Typography>
        <Grid
          container
          direction="row"
          style={{ marginTop: "3rem" }}
          justify="space-around"
          alignContent="center"
        >
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            id="items-carousel"
            autoplay
            loop
            navigation
          >
            {imageUrls.map((imageUrl, index) => {
              return (
                <SwiperSlide id="item-carousel-slide" key={index}>
                  <div className="center">
                    <img
                      src={imageUrl.name}
                      alt=""
                      className="responsive-img"
                      style={{
                        maxHeight: "7rem",
                        width: "auto",
                        height: "100%",
                      }}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Grid>
      </Grid>
    </section>
  );
}
