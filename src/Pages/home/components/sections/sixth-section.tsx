import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import "./style.css";

export default function SixthSection() {
  const classes = useStyles();
  return (
    <section>
      <div className={classes.banner}>
        <div className="container">
          <Grid container justify="space-evenly" alignItems="center">
            <Grid container item xs={4}>
              <Typography variant="h4" color="secondary">
                Lorem Ipsum Dolor Sit
              </Typography>

              <Typography
                variant="h4"
                color="secondary"
                className="ml4"
                style={{ width: "auto" }}
              >
                <span className="letters letters-1">Amet1</span>
                <span className="letters letters-2">Amet2</span>
                <span className="letters letters-3">Amet3</span>
              </Typography>
            </Grid>

            <Button
              variant="contained"
              color="secondary"
              className={classes.btn}
              style={{ marginLeft: "2rem", width: "auto" }}
              endIcon={
                <span
                  className="iconify"
                  data-inline="false"
                  data-icon="eva:cloud-download-outline"
                  style={{ color: "#FFA023", fontSize: "24px" }}
                ></span>
              }
            >
              <Typography color="primary">Lorem Ipsum</Typography>
            </Button>
          </Grid>
        </div>
      </div>
    </section>
  );
}
