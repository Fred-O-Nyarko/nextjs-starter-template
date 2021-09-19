import {
  Box,
  Button,
  Grid,
  IconButton,
  Link,
  TextField,
  Typography,
  useTheme,
} from "@material-ui/core";
import React, { useRef } from "react";
import useStyles from "./styles";
import logo from "../../../../assets/img/logo.png";
import classNames from "classnames";

const Footer = () => {
  const classes = useStyles();
  const theme = useTheme();
  const leftItems = ["SITE MAP", "PRIVACY", "COOKIE SETTINGS", "TERMS"];
  const rightItemsHeader = ["SOME TITLE", "SOME TITLE", "SOME TITLE"];
  const rightItemsLinks = [
    { linkName: "Lorem Ipsum", path: "/" },
    { linkName: "Lorem Ipsum", path: "/" },
    { linkName: "Lorem Ipsum", path: "/" },
    { linkName: "Lorem Ipsum", path: "/" },
  ];
  const nameRef = useRef("");
  const emailRef = useRef("");
  const messageRef = useRef("");

  return (
    <Grid container className={classes.root}>
      <div className="container">
        <Grid
          container
          item
          className={classes.content}
          alignItems="flex-start"
        >
          <Grid container item xs={6} direction="column">
            <Typography variant="h5" gutterBottom>
              Lorem Ipsum
            </Typography>
            <Typography
              variant="subtitle2"
              color="textSecondary"
              gutterBottom
              paragraph
            >
              This is some wonderful text here and I just suck at content
              creation{" "}
            </Typography>
            <form className={classes.form} noValidate>
              <Grid
                container
                direction="row"
                item
                xs={12}
                // style={{ marginBottom: "0.5rem" }}
              >
                <Grid item xs={6} style={{ paddingRight: "0.5rem" }}>
                  <TextField
                    id="outlined-helperText"
                    label="Full Name"
                    placeholder="eg. Nana Yaw"
                    variant="outlined"
                    size="small"
                    fullWidth
                    onChange={(val) => (nameRef.current = val.target.value)}
                    required
                  />
                </Grid>
                <Grid item xs={6} style={{ paddingLeft: "0.5rem" }}>
                  <TextField
                    id="outlined-helperText"
                    label="Email"
                    placeholder="eg. example@example.com"
                    variant="outlined"
                    size="small"
                    fullWidth
                    onChange={(val) => (emailRef.current = val.target.value)}
                    required
                  />
                </Grid>
              </Grid>
              <Grid
                container
                direction="column"
                justify="space-between"
                style={{ marginTop: "1rem" }}
              >
                <TextField
                  id="outlined-helperText"
                  label="Message"
                  placeholder="Send us a message..."
                  variant="outlined"
                  size="small"
                  multiline
                  rows={3}
                  onChange={(val) => (messageRef.current = val.target.value)}
                  required
                />
                <Button
                  variant="contained"
                  color="primary"
                  style={{ margin: "1rem 0rem", width: "50%" }}
                  className={classes.btn}
                  onClick={() => {
                    console.log(nameRef, emailRef, messageRef);
                  }}
                >
                  <Typography variant="button" color="secondary">
                    Send
                  </Typography>
                </Button>

                <Typography variant="subtitle2" color="textSecondary">
                  **Nunc suspendisse aliquet posuere tellus maecenas imperdiet
                  vitae aliquam amet. Nisi enim vestibulum.Nunc suspendisse
                  aliquet posuere tellus maecenas imperdiet vitae aliquam amet.
                  Nisi enim vestibulum.
                </Typography>
              </Grid>
            </form>
          </Grid>
          <Grid
            container
            item
            xs={6}
            direction="column"
            style={{ paddingLeft: "4rem" }}
          >
            <Grid container alignItems="center" justify="space-between">
              {rightItemsHeader.map((header, key) => {
                return (
                  <Grid
                    container
                    item
                    xs={4}
                    direction="column"
                    key={key}
                    alignItems="flex-start"
                  >
                    <Typography
                      variant="h6"
                      color="textPrimary"
                      gutterBottom
                      align="center"
                    >
                      {header}
                    </Typography>
                    {rightItemsLinks.map((rightItemLink, key) => {
                      return (
                        <Link
                          href={rightItemLink.path}
                          key={key}
                          className={classes.link}
                        >
                          <Typography
                            variant="subtitle2"
                            color="textSecondary"
                            align="left"
                            className={classes.link}
                          >
                            {rightItemLink.linkName}
                          </Typography>
                        </Link>
                      );
                    })}
                  </Grid>
                );
              })}
            </Grid>
            <Box marginBottom={theme.spacing(1)} />
            <Grid container>
              <img
                src={logo}
                className={classNames(classes.logo, "responsive-img")}
                alt="logo"
              />

              <img
                src={logo}
                className={classNames(classes.logo, "responsive-img")}
                alt="logo"
              />

              <img
                src={logo}
                className={classNames(classes.logo, "responsive-img")}
                alt="logo"
              />
            </Grid>
            <Box marginBottom={theme.spacing(1)} />
            <Grid container>
              <IconButton
                style={{ fontSize: "2rem" }}
                onClick={() =>
                  (window.location.href = "https://twitter.com/PigeonBoltApp")
                }
              >
                <span
                  className={classNames("iconify", classes.icon)}
                  data-inline="false"
                  data-icon="entypo-social:twitter-with-circle"
                />
              </IconButton>
              <IconButton
                style={{ fontSize: "2rem" }}
                onClick={() =>
                  (window.location.href =
                    "https://www.instagram.com/pigeonboltapp/")
                }
              >
                <span
                  className={classNames("iconify", classes.icon)}
                  data-inline="false"
                  data-icon="entypo-social:instagram-with-circle"
                />
              </IconButton>
              <IconButton
                style={{ fontSize: "2rem" }}
                onClick={() =>
                  (window.location.href =
                    "https://www.facebook.com/pigeonboltapp")
                }
              >
                <span
                  className={classNames("iconify", classes.icon)}
                  data-inline="false"
                  data-icon="bx:bxl-facebook-circle"
                />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </div>

      <hr className={classes.hr} />
      <div className="container">
        <Grid container className={classes.footerMid}>
          <Grid
            container
            item
            xs={6}
            alignItems="center"
            justify="space-between"
          >
            {leftItems.map((item, key) => {
              return (
                <Link className={classes.link} key={key}>
                  <Typography
                    variant="subtitle2"
                    color="textSecondary"
                    className={classes.link}
                  >
                    {item}
                  </Typography>
                </Link>
              );
            })}
          </Grid>
          <Grid
            container
            item
            xs={6}
            alignItems="center"
            justify="space-evenly"
          >
            <Typography variant="subtitle2" color="textSecondary">
              © PigeonUltra 2020
            </Typography>
            <Link className={classes.link}>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                className={classes.link}
              >
                HODAN HOGAN
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </div>
      <Grid container className={classes.footerEnd}>
        <div className="container">
          <Typography variant="caption" color="secondary" align="center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book.
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default Footer;
