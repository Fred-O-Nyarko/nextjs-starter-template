import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Swipercore, { Navigation, EffectFade, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/swiper-bundle.css";
import "swiper/swiper.scss";
import "./styles.css";
import { Button, Grid, makeStyles, Typography } from "@material-ui/core";

import img from "../../../../../_shared/assets/img/plate.png";
import classNames from "classnames";
import "animate.css";

Swipercore.use([Navigation, EffectFade, Autoplay]);

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0rem 1rem",
    height: "auto",
    transition: "all .3s ease-in-out",
  },

  left: {
    flex: 0.5,
  },
  right: {
    flex: 0.5,
  },

  registerBtn: {
    backgroundColor: theme.palette.primary.main,
    filter: "drop-shadow(3px 2px 13px rgba(0, 0, 0, 0.25))",
    padding: "0.8rem 3rem",
    borderRadius: "40px",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#ab6100",
    },
  },

  img: {
    width: "100%",
    height: "auto",
    maxWidth: "390px",
  },

  mainText: {
    fontWeight: 700,
    color: "#222",
  },
}));

const SlideContent = () => {
  const classes = useStyles();

  // const [timeout, setTimeout] = useState(false)

  //   useEffect(() => {
  //     var timer = setInterval(() => {
  //       setTimeout(!timeout);
  //       console.log(timeout);
  //     }, 4000)

  // //  clearInterval(timer)

  //   }, [])

  return (
    <Grid container className={classes.root}>
      <Grid
        container
        className={classes.left}
        direction="column"
        justify="center"
        alignItems="flex-start"
      >
        <Typography
          variant="h3"
          align="left"
          gutterBottom
          paragraph
          className={classNames(
            "animate__animated animate__fadeInLeft",
            classes.mainText
          )}
        >
          LOREM IPSUM DOLOR SIT <span style={{ color: "#FFA023" }}>SIQUE</span>
        </Typography>

        <Typography
          align="left"
          variant="subtitle1"
          color="textSecondary"
          gutterBottom
          paragraph
          className="animate__animated animate__fadeInLeft animate__delay-1s"
        >
          Eget feugiat dui imperdiet et auctor vel viverra vestibulum. Urna
          proin a, at facilisi pretium pellentesque
        </Typography>

        <Button
          className={classNames(
            classes.registerBtn,
            "animate__animated animate__bounceInUp animate__delay-2s"
          )}
        >
          <Typography variant="button" color="secondary">
            Register
          </Typography>
        </Button>
      </Grid>
      <Grid
        container
        className={classNames(
          classes.right,
          "animate__animated animate__fadeInRight"
        )}
        alignItems="center"
        justify="center"
      >
        <img src={img} alt="slide" className={classes.img} />
      </Grid>
    </Grid>
  );
};

export const MainCarousel = () => {
  return (
    <div className="container">
      <Swiper
        // effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        wrapperTag="ul"
        tag="section"
        id="main"
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        loop
        watchSlidesVisibility
      >
        <SwiperSlide tag="li">
          <SlideContent />
        </SwiperSlide>
        <SwiperSlide tag="li">
          <SlideContent />
        </SwiperSlide>
        <SwiperSlide tag="li">
          <SlideContent />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
