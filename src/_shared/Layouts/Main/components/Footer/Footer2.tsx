import { Button, Divider, Grid, Typography } from "@material-ui/core";
import React from "react";
import PrivacyPolicy from "./components/privacy-policy";
import ScrollDialog from "./components/scroll-dialog";
import ServiceConditions from "./components/service-conditions";
import TermsAndConditions from "./components/terms-and-conditions";
import useStyles from "./styles";

export default function Footer2() {
  const classes = useStyles();
  const date = new Date();
  const [open, setOpen] = React.useState<boolean>(false);
  const [title, setTitle] = React.useState<String>("");
  const [children, setChildren] = React.useState<Function>();

  const privacyRef = React.useRef("Privacy Policy");
  const termsRef = React.useRef("Terms and Conditions");
  const serviceRef = React.useRef("Service Conditions");

  function handleClick() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }
  return (
    <React.Fragment>
      <ScrollDialog
        open={open}
        handleClose={handleClose}
        title={title}
        children={children}
      />
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
            lg={1}
            md={1}
            sm={1}
            direction="column"
            className="p-1"
          ></Grid>
          <Grid
            item
            xs={12}
            lg={3}
            md={3}
            sm={3}
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
                <a href="https://play.google.com/store/apps/details?id=com.nyeova.pigeonbolt.client">
                  Android App
                </a>
              </li>
              <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                <a href="https://apps.apple.com/us/app/pigeonbolt/id1546397948">
                  iOS App
                </a>
              </li>
              <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                <a href="https://play.google.com/store/apps/details?id=com.nyeova.pigeonbolt.courier">
                  Courier Android App
                </a>
              </li>
              <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                <a href="https://apps.apple.com/us/app/pigeonbolt-courier/id1547093544">
                  Courier iOS App
                </a>
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
              <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                <span style={{ color: "white", paddingRight: "0.5rem" }}>
                  Join our Loyal Customer program
                </span>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() =>
                    (window.location.href =
                      "https://newsletters.pigeonbolt.com")
                  }
                  type="submit"
                >
                  <Typography
                    color={"secondary"}
                    variant="caption"
                    className="font-weight-bold"
                  >
                    Join
                  </Typography>
                </Button>
              </li>
            </ul>
          </Grid>

          <Grid container justify="space-between" className="mt-2 mb-2">
            <Typography
              color="secondary"
              variant="subtitle1"
              onClick={() => {
                handleClick();
                setTitle(privacyRef.current);
                setChildren(PrivacyPolicy);
              }}
              className={classes.policies}
            >
              Privacy Policy
            </Typography>

            <Typography
              color="secondary"
              variant="subtitle1"
              onClick={() => {
                handleClick();
                setTitle(termsRef.current);
                setChildren(TermsAndConditions);
              }}
              className={classes.policies}
            >
              Terms and Conditions
            </Typography>

            <Typography
              color="secondary"
              variant="subtitle1"
              onClick={() => {
                handleClick();
                setTitle(serviceRef.current);
                setChildren(ServiceConditions);
              }}
              className={classes.policies}
            >
              Service Conditions
            </Typography>
          </Grid>

          <Divider
            color="primary"
            style={{ width: "100%", margin: "0.5rem 0" }}
          />
          <Grid container justify="space-between">
            <Typography color="secondary" variant="subtitle1">
              <span>&copy;</span>
              {date.getFullYear()} Nyeova Systems LLC.
            </Typography>

            <Typography color="secondary" variant="subtitle1">
              Contact: +233-559-627-280
            </Typography>

            <Typography color="secondary" variant="subtitle1">
              Support Mail:{" "}
              <a href="mailto:info@pigeonbolt.com">info@pigeonbolt.com</a>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
