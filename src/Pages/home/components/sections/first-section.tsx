import {
  Grid,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import "animate.css";
import classNames from "classnames";

export default function FirstSection() {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const keypoints = [
    {
      icon: "ion:fast-food-outline",
      headerText: "Hungry?",
      subText: `Luxury Dining - Restaurants that meet our standards of quality in taste and presentation to bring fine dining to you without compromise.\n
                Comfort Dining - Restaurants that bring the warmth of delicious food and affordability`,
      animate: 0.1,
    },

    {
      icon: "dashicons:carrot",
      headerText: "Need ingredients?",
      subText: "Grocery - Your shopping list made easy to be your own chef",
      animate: 0.2,
    },
    {
      icon: "mdi:muffin",
      headerText: "Cravings kick in??",
      subText:
        "Bakery - Baked goods and confectionaire delights for your sweet or savory cravings.",
      animate: 0.3,
    },
    {
      icon: "mdi:dog",
      headerText: "Pet Food & Pet Care Products",
      subText:
        "Coming soon! Your pet is going to love you for thinking of them.",
      animate: 0.4,
    },
    {
      icon: "fa-solid:road",
      headerText: "Pigeon Journey!",
      subText:
        "Be a part of the collective and Register as a Member to begin your PigeonJourney. Only members get exclusive insider information about the journey.",
      animate: 0.5,
    },
  ];

  return (
    <section>
      <div
        className={!isSmallScreen ? "container mt-4" : "container-fluid mt-4"}
      >
        <Typography
          variant="h4"
          gutterBottom
          paragraph
          className="wow fadeInUp"
          align="center"
        >
          Why PigeonBolt?
        </Typography>
        <Grid container item xs={12}>
          <Grid
            container
            item
            xs={12}
            md={6}
            direction="column"
            className={!isSmallScreen ? "pr-lg-4 p-sm-0" : "pr-4 pl-4"}
          >
            {keypoints.map((keypoint: any, index) => {
              return (
                <Grid
                  container
                  alignItems="center"
                  direction="row"
                  wrap="nowrap"
                  key={index}
                  className={classNames(classes.keyPoint, `wow fadeInLeft`)}
                  data-wow-delay={`${keypoint.animate}s`}
                >
                  <Grid className={classes.iconContainer}>
                    <span
                      className="iconify"
                      data-inline="false"
                      data-icon={keypoint.icon}
                      style={{
                        color: "#ffa023",
                        fontSize: isSmallScreen ? "2rem" : "3rem",
                      }}
                    ></span>
                  </Grid>
                  <Grid className={classes.keypointText}>
                    <Typography variant="h6" color="textPrimary">
                      {keypoint.headerText}
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                      {keypoint.subText}
                    </Typography>
                  </Grid>
                </Grid>
              );
            })}
            <div
              className={classNames(classes.buttonContainer, "col-sm-12 p2")}
            >
              <Button
                variant="contained"
                color="primary"
                className={classNames(classes.btn, "wow bounceInUp")}
                data-wow-delay="0.5s"
              >
                <Typography
                  color="secondary"
                  variant="h6"
                  className="font-weight-bold"
                >
                  LET US SERVE YOU
                </Typography>
              </Button>
            </div>
          </Grid>
          <Grid
            container
            item
            xs={12}
            md={6}
            justify="flex-end"
            alignItems="center"
            className={classNames("p-1", classes.imageContainer)}
            style={{}}
          ></Grid>
        </Grid>
      </div>
    </section>
  );
}
