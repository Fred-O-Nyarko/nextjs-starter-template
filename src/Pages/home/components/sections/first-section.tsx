import { Grid, Typography, Button } from "@material-ui/core";
import React from "react";
import useStyles from "../../styles";
import img from "../../../../_shared/assets/img/uber.png";
import "animate.css";
import classNames from "classnames";

export default function FirstSection() {
  const classes = useStyles();
  const keypoints = [
    {
      icon: "mdi:bike-fast",
      headerText: "Dolor amet, senectus",
      subText:
        "Lectus consequat orci commodo sed a blandit venenatis porttitor urna. Lectus consequat orci commodo sed a blandit ",
      animate: 0.1,
    },

    {
      icon: "mdi:bike-fast",
      headerText: "Dolor amet, senectus",
      subText:
        "Lectus consequat orci commodo sed a blandit venenatis porttitor urna. Lectus consequat orci commodo sed a blandit ",
      animate: 0.2,
    },
    {
      icon: "mdi:bike-fast",
      headerText: "Dolor amet, senectus",
      subText:
        "Lectus consequat orci commodo sed a blandit venenatis porttitor urna. Lectus consequat orci commodo sed a blandit ",
      animate: 0.3,
    },
    {
      icon: "mdi:bike-fast",
      headerText: "Dolor amet, senectus",
      subText:
        "Lectus consequat orci commodo sed a blandit venenatis porttitor urna. Lectus consequat orci commodo sed a blandit ",
      animate: 0.4,
    },
  ];

  return (
    <section className="container">
      <Grid container item xs={12} style={{ marginTop: "3rem" }}>
        <Grid
          container
          item
          xs={7}
          direction="column"
          justify="space-between"
          className=""
        >
          <Typography
            variant="h4"
            gutterBottom
            paragraph
            className="wow fadeInUp"
          >
            AMET ALIQUET AME
          </Typography>
          {keypoints.map((keypoint: any, index) => {
            return (
              <Grid
                container
                alignItems="center"
                justify="space-between"
                direction="row"
                wrap="nowrap"
                key={index}
                className={classNames(classes.keyPoint, `wow fadeInLeft`)}
                data-wow-delay={`${keypoint.animate}s`}
              >
                <Grid item className={classes.iconContainer}>
                  <span
                    className="iconify"
                    data-inline="false"
                    data-icon={keypoint.icon}
                    style={{
                      color: "#ffa023",
                      fontSize: "34.56999969482422px",
                    }}
                  ></span>
                </Grid>
                <Grid item className={classes.keypointText}>
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
          <div className={classes.buttonContainer}>
            <Button
              variant="contained"
              color="primary"
              className={classNames(classes.btn, "wow bounceInUp")}
              endIcon={
                <span
                  className="iconify"
                  data-inline="false"
                  data-icon="ic:twotone-read-more"
                  style={{ color: "#fafafa", fontSize: "24px" }}
                ></span>
              }
              data-wow-delay="0.5s"
            >
              <Typography color="secondary">Read More</Typography>
            </Button>
          </div>
        </Grid>
        <Grid container item xs={5} justify="flex-end" alignItems="center">
          <img src={img} alt="" className="responsive-img" />
        </Grid>
      </Grid>
    </section>
  );
}
