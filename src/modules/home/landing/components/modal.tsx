import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Grid, IconButton, Typography } from "@material-ui/core";

import ios from "../../../_shared/assets/img/logos/IOS.svg";
import android from "../../../_shared/assets/img/logos/android.svg";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #646464",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "auto",
  },
  img: {
    height: "2.5rem",
    width: "100%",
  },
}));

export default function TransitionsModal(props: any) {
  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <div className={classes.paper}>
            <Typography id="transition-modal-title" variant="h4" align="center">
              Choose Platform
            </Typography>
            <Grid container>
              <Grid container item xs={7} justify="center" alignItems="center">
                <IconButton
                  aria-label="android"
                  onClick={() =>
                  (window.location.href =
                    "https://play.google.com/store/apps/details?id=com.nyeova.pigeonbolt.client")
                  }
                >
                  <img src={android} alt="android" className={classes.img} />
                </IconButton>
              </Grid>
              <Grid container item xs={5} justify="center" alignItems="center">
                <IconButton
                  aria-label="ios"
                  onClick={() =>
                  (window.location.href =
                    "https://apps.apple.com/us/app/pigeonbolt/id1546397948")
                  }
                >
                  <img src={ios} alt="ios" className={classes.img} />
                </IconButton>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
