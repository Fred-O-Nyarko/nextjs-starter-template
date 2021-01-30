import { Button, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import classNames from "classnames";
import React from "react";
import useStyles from "./styles";
import bakery from "../../../../_shared/assets/category/bakery.jpg";
import comfort from "../../../../_shared/assets/category/comfort.png";
import grocery from "../../../../_shared/assets/category/grocery.jpg";
import liquor from "../../../../_shared/assets/category/liquor.jpeg";
import luxury from "../../../../_shared/assets/category/luxury.png";
import virtualKitchen from "../../../../_shared/assets/category/virtualKitchen.png";
import "./style.css";

export default function SecondSection() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();
  // const slides = Array(5).fill(0);
  const items = [
    {
      image: luxury,
      caption: "Luxury Dining",
    },

    {
      image: comfort,
      caption: "Comfort Dining",
    },
    {
      image: grocery,
      caption: "Groceries",
    },
    {
      image: bakery,
      caption: "Bakeries",
    },
    {
      image: liquor,
      caption: "Liquor",
    },
    {
      image: virtualKitchen,
      caption: "Virtual Kitchens",
    },
  ];
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
          A list of categories we work with on PigeonBolt.
        </Typography>
        <div
          className={
            !isSmallScreen ? "container pt-5" : "container-fluid pt-5 pl-2 pr-2"
          }
        >
          <div className="owl-carousel owl-theme h-100">
            {items.map((item) => {
              return (
                <div className="item p-0">
                  <img src={item.image} alt="food" className="h-100" />
                  <div className="description">
                    <div className="description-text">
                      <Typography variant="h6" color="secondary" align="center">
                        {item.caption}
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
              CHECK OUT!
            </Typography>
          </Button>
        </div>
      </div>
    </section>
  );
}
