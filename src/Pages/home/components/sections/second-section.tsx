import { Button, Grid, Typography } from "@material-ui/core";
import classNames from "classnames";
import React from "react";
import phone from "../../../../_shared/assets/img/Devices/Apple/iphone.png";
import useStyles from "./styles";

export default function SecondSection() {
  const classes = useStyles();
  return (
    <section className="container">
      <Grid container item xs={12} style={{ marginTop: "3rem" }}>
        <Grid container item xs={6}>
          <img src={phone} alt="" className="responsive-img" />
        </Grid>
        <Grid
          item
          container
          xs={6}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Typography
            variant="h4"
            gutterBottom
            paragraph
            className="wow fadeInUp"
          >
            AMET ALIQUET AME
          </Typography>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            align="center"
            gutterBottom
            paragraph
            className="wow fadeInRight"
            data-wow-delay="0.1s"
          >
            Lectus consequat orci commodo sed a blandit venenatis porttitor
            urna. Lectus consequat orci commodo sed a blandit venenatis
            porttitor urna. Lectus consequat orci commodo sed a blandit
            venenatis porttitor urna.
          </Typography>
          <Grid
            container
            justify="space-around"
            alignItems="center"
            style={{ padding: "1.8rem" }}
          >
            <span
              className="iconify wow fadeInUp"
              data-inline="false"
              data-icon="logos:google-play"
              style={{ fontSize: "50px" }}
              data-wow-delay="0.2s"
            ></span>
            <span
              className="iconify wow fadeInUp"
              data-inline="false"
              data-icon="logos:apple-app-store"
              style={{ fontSize: "56px" }}
              data-wow-delay="0.3s"
            ></span>
          </Grid>

          <Button
            variant="contained"
            color="primary"
            className={classNames(classes.btn, "wow bounceInUp")}
            data-wow-delay="0.4s"
            endIcon={
              <span
                className="iconify"
                data-inline="false"
                data-icon="eva:cloud-download-outline"
                style={{ color: "#fafafa", fontSize: "24px" }}
              ></span>
            }
          >
            <Typography color="secondary">Download</Typography>
          </Button>
        </Grid>
      </Grid>
    </section>
  );
}
