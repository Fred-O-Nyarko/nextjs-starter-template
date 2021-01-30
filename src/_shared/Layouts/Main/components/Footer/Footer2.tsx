import { Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

export default function Footer2() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid container className={classes.row}>
        <Grid
          item
          xs={12}
          sm={4}
          md={4}
          lg={4}
          direction="column"
          className="p-1"
        >
          <Typography
            color="secondary"
            variant="h6"
            className="font-weight-bold"
            gutterBottom
            paragraph
          >
            PigeonBolt App
          </Typography>
          <Typography variant="subtitle1" color="secondary">
            Enjoy the best experience with timely deliveries on the PigeonBolt
            App now!
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          lg={4}
          md={4}
          sm={4}
          direction="column"
          className="p-1"
        >
          <Typography
            variant="h6"
            className="font-weight-bold"
            color="secondary"
          >
            Links
          </Typography>
          <ul className="list-group">
            <li className="list-group-item bg-transparent border-0 p-0 mb-2">
              <a href="/">Android App</a>
            </li>
            <li className="list-group-item bg-transparent border-0 p-0 mb-2">
              <a href="/">iOS App</a>
            </li>
            <li className="list-group-item bg-transparent border-0 p-0 mb-2">
              <a href="/">Courier App</a>
            </li>
            <li className="list-group-item bg-transparent border-0 p-0 mb-2">
              <a href="shops.pigeonbolt.com" target="_blank">
                Shops Portal
              </a>
            </li>
          </ul>
        </Grid>
        <Grid
          item
          xs={12}
          lg={4}
          md={4}
          sm={4}
          direction="column"
          className="p-1"
        >
          <Typography
            variant="h6"
            className="font-weight-bold"
            color="secondary"
          >
            Let's Connect!
          </Typography>

          <ul className="list-group">
            <li className="list-group-item bg-transparent border-0 p-0 mb-2">
              <a href="https://www.facebook.com/pigeonboltapp">
                <i className="fa fa-facebook mr-1"></i> Facebook
              </a>
            </li>
            <li className="list-group-item bg-transparent border-0 p-0 mb-2">
              <a href="https://twitter.com/PigeonBoltApp">
                <i className="fa fa-twitter mr-1"></i> Twitter
              </a>
            </li>
            <li className="list-group-item bg-transparent border-0 p-0 mb-2">
              <a href="https://www.instagram.com/pigeonboltapp/?hl=en">
                <i className="fa fa-instagram mr-1"></i> Instagram
              </a>
            </li>
          </ul>
        </Grid>
      </Grid>
    </Grid>
  );
}
