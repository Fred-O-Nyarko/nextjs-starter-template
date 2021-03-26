import { Button, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import classNames from "classnames";
import React, { useState } from "react";
import useStyles from "./styles";
import bakery from "../../../_shared/assets/category/bakery.jpg";
import comfort from "../../../_shared/assets/category/comfort.png";
import grocery from "../../../_shared/assets/category/grocery.jpg";
import liquor from "../../../_shared/assets/category/liquor.jpeg";
import luxury from "../../../_shared/assets/category/luxury.png";
import virtualKitchen from "../../../_shared/assets/category/virtualKitchen.png";
import petcare from "../../../_shared/assets/category/petcare.jpg";
import "./style.css";
import TransitionsModal from "../../landing/components/modal";

export default function SecondSection() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();

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
      caption: "Wine & Liquor",
    },
    {
      image: virtualKitchen,
      caption: "Virtual Kitchens",
    },
    {
      image: petcare,
      caption: "Pet care products",
    },
  ];

  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <section>
      <TransitionsModal open={open} handleClose={handleClose} />

      <div style={{ marginTop: "10rem" }}>
        <Typography
          variant="h3"
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
            onClick={handleClick}
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
