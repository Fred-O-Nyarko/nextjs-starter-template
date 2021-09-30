import { Button, Divider, Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import { Components, Constants } from "../..";

export default function Footer2() {
  const classes = useStyles();
  const date = new Date();

  const initialData = {
    privacy: false,
    terms: false,
    service: false,
  };

  const [data, setData] = React.useState({
    privacy: false,
    terms: false,
    service: false,
  });

  const [open, setOpen] = React.useState(false);

  function handleClick(url: string) {
    setOpen(true);
    switch (url) {
      case Constants.URLS.PRIVACY_POLICY:
        setData({ ...initialData, privacy: true });
        break;
      case Constants.URLS.TERMS_AND_CONDITIONS:
        setData({ ...initialData, terms: true });
        break;
      case Constants.URLS.SERVICE_CONDITIONS:
        setData({ ...initialData, service: true });
        break;

      default:
        setData({ ...initialData, privacy: true });
    }
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <React.Fragment>
      <Components.Modal data={data} open={open} close={handleClose} />
      <Grid container className={classes.root}>
        <Grid container className={classes.row}>
          <Grid
            item
            xs={12}
            sm={3}
            md={3}
            lg={3}
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
              PigeonUltra™ App
            </Typography>
            <Typography variant="subtitle2" color="secondary">
              Enjoy the best experience with timely deliveries on the
              PigeonUltra™ App now!
            </Typography>
          </Grid>
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
              App Links
            </Typography>
            <ul className="list-group">
              <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                <a href="https://play.google.com/store/apps/details?id=com.nyeova.pigeonbolt.client">
                  Client Android App
                </a>
              </li>
              <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                <a href="https://apps.apple.com/us/app/pigeonbolt/id1546397948">
                  Client iOS App
                </a>
              </li>
              <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                <a href="https://play.google.com/store/apps/details?id=com.nyeova.pigeonbolt.courier">
                  Fleet Android App
                </a>
              </li>
              <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                <a href="https://apps.apple.com/us/app/pigeonbolt-courier/id1547093544">
                  Fleet iOS App
                </a>
              </li>
              <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                <a href="shops.pigeonultra.com" target="_blank">
                  Shops Portal
                </a>
              </li>
            </ul>
          </Grid>
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
              Let's Connect!
            </Typography>

            <ul className="list-group">
              <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                <a href="https://www.facebook.com/PigeonUltraApp">
                  <i className="fa fa-facebook mr-1"></i> Facebook
                </a>
              </li>
              <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                <a href="https://twitter.com/PigeonUltraApp">
                  <i className="fa fa-twitter mr-1"></i> Twitter
                </a>
              </li>
              <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                <a href="https://www.instagram.com/pigeonultraapp/?hl=en">
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
                    window.open("https://newsletters.pigeonbolt.com", "_blank")
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
              Our Company
            </Typography>

            <ul className="list-group">
              <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                <a href="https://www.facebook.com/PigeonUltraApp">About us</a>
              </li>
              <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                <a href="https://twitter.com/PigeonUltraApp">Contact</a>
              </li>
              <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                <a href="https://www.instagram.com/pigeonultraapp/?hl=en">
                  Careers
                </a>
              </li>
            </ul>
          </Grid>

          <Grid container justify="space-between" className="mt-4">
            <Link
              to={{
                pathname: Constants.URLS.ROOT,
                search: `?${Constants.URLS.PRIVACY_POLICY}=0`,
                state: true,
              }}
            >
              <Typography
                color="secondary"
                variant="subtitle2"
                className={classes.policies}
                onClick={() => handleClick(Constants.URLS.PRIVACY_POLICY)}
              >
                Privacy Policy
              </Typography>
            </Link>

            <Link
              to={{
                pathname: "/",
                search: `${Constants.URLS.TERMS_AND_CONDITIONS}=1`,
                state: true,
              }}
            >
              <Typography
                color="secondary"
                variant="subtitle2"
                className={classes.policies}
                onClick={() => handleClick(Constants.URLS.TERMS_AND_CONDITIONS)}
              >
                Terms and Conditions
              </Typography>
            </Link>

            <Link
              to={{
                pathname: "/",
                search: `?${Constants.URLS.SERVICE_CONDITIONS}=1`,
                state: true,
              }}
            >
              <Typography
                color="secondary"
                variant="subtitle2"
                className={classes.policies}
                onClick={() => handleClick(Constants.URLS.SERVICE_CONDITIONS)}
              >
                Service Conditions
              </Typography>
            </Link>

            <Link
              to={{
                pathname: "/faqs",
              }}
            >
              <Typography
                color="secondary"
                variant="subtitle2"
                className={classes.policies}
              >
                FAQs
              </Typography>
            </Link>
          </Grid>

          <Divider
            color="primary"
            style={{ width: "100%", margin: "0.5rem 0" }}
          />
          <Grid container justify="space-between">
            <Typography color="secondary" variant="subtitle2">
              <span>&copy;</span>
              {date.getFullYear()} Nyeova Systems LLC.
            </Typography>

            <Typography color="secondary" variant="subtitle2">
              Contact: +233-559-627-280
            </Typography>

            <Typography color="secondary" variant="subtitle2">
              Inquiries:{" "}
              <a href="mailto:info@pigeonultra.com">info@pigeonultra.com</a>
            </Typography>
            <Typography color="secondary" variant="subtitle2">
              Support Mail:{" "}
              <a href="mailto:support@pigeonultra.com">
                support@pigeonultra.com
              </a>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
