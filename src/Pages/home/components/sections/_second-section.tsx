import { Button, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import classNames from "classnames";
import React from "react";
import img from "../../../../_shared/assets/img/plate.png";
import useStyles from "./styles";
import "./style.css";

export default function SecondSection() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();
  const slides = Array(5).fill(0);
  return (
    <section>
      <div style={{ marginTop: "3rem" }}>
        <Typography
          variant="h4"
          gutterBottom
          className="wow fadeInUp "
          align="center"
        >
          Sleek Variety at its best!
        </Typography>

        <Typography
          variant="subtitle1"
          gutterBottom
          paragraph
          className="wow fadeInUp"
          data-wow-delay="0.3s"
          align="center"
        >
          Lorem Ipsum dolor sit amet
        </Typography>
        <div
          className={
            !isSmallScreen ? "container pt-5" : "container-fluid pt-5 pl-2 pr-2"
          }
        >
          <div className="owl-carousel owl-theme">
            {slides.map((slide) => {
              return (
                <div className="item">
                  <img src={img} alt="food" className="img-fluid" />
                  <div className="description">
                    <div className="description-text">
                      <Typography variant="h6" color="secondary" align="center">
                        Lorem Ipsum
                      </Typography>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-sm-12 d-flex justify-content-center pt-4">
          <Button
            variant="contained"
            color="primary"
            className={classNames(classes.btn, "wow rubberBand")}
            data-wow-delay="0.5s"
            data-wow-iteration="5"
          >
            <Typography
              color="secondary"
              variant="h6"
              className="font-weight-bold"
            >
              LOREM IPSUM
            </Typography>
          </Button>
        </div>
      </div>
    </section>
  );
}
