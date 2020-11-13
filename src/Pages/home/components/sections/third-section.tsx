import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import img from "../../../../_shared/assets/img/chef.png";
import classNames from "classnames";

export default function ThirdSection() {
  const classes = useStyles();
  return (
    <section>
      <Grid
        container
        style={{ marginTop: "10rem" }}
        className={classes.bgImage}
      >
        <div className="container">
          <Grid
            container
            className={classes.sectionContainer}
            alignItems="center"
            justify="center"
          >
            <Grid container item xs={6}>
              <img
                src={img}
                alt=""
                className={classNames("responsive-img", classes.imageAbsolute)}
              />
            </Grid>
            <Grid
              container
              item
              xs={6}
              direction="column"
              alignItems="flex-start"
              justify="center"
            >
              <Typography
                variant="h3"
                className={classes.textWhite}
                gutterBottom
                paragraph
                align="left"
              >
                Lorem Ipsum
              </Typography>

              <Typography
                variant="subtitle1"
                className={classes.textWhite}
                align="left"
              >
                Eget feugiat dui{" "}
                <span style={{ color: "#FFA023" }}>imperdiet</span> et auctor
                vel viverra vestibulum. Urna proin a, at facilisi pretium{" "}
                <span style={{ color: "#FFA023" }}>pellentesque</span>
              </Typography>
              <div className={classes.buttonContainer}>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classNames(classes.btn, classes.outlinedBtn)}
                  style={{ width: "100%" }}
                  endIcon={
                    <span
                      className="iconify"
                      data-inline="false"
                      data-icon="eva:cloud-download-outline"
                      style={{ color: "#fafafa", fontSize: "24px" }}
                    ></span>
                  }
                >
                  <Typography color="secondary">Lorem Ipsum</Typography>
                </Button>

                <Button
                  variant="contained"
                  color="primary"
                  className={classes.btn}
                  style={{ marginLeft: "2rem", width: "100%" }}
                  endIcon={
                    <span
                      className="iconify"
                      data-inline="false"
                      data-icon="eva:cloud-download-outline"
                      style={{ color: "#fafafa", fontSize: "24px" }}
                    ></span>
                  }
                >
                  <Typography color="secondary">Lorem Ipsum</Typography>
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </section>
  );
}
