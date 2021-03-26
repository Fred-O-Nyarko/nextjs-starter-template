import { Grid, IconButton, makeStyles, Typography } from "@material-ui/core";
import { Clear } from "@material-ui/icons";
import classNames from "classnames";
import BellIcon from "react-bell-icon";
import React from "react";

const Banner = (props: any) => {
  const useStyles = makeStyles(() => ({
    root: {
      widht: "100%",
      backgroundColor: "#ffa023",
      transition: "all .3s ease-in-out",
    },
    content: {
      padding: "0.5rem",
      transition: "all .3s ease-in-out",
    },
    close: {
      display: "flex",
      justifyContent: "flex-end",
    },
    span: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  }));

  const classes = useStyles();

  return (
    <React.Fragment>
      <nav className={props.className} data-wow-delay="0.3s">
        <Grid className={classNames(classes.root, "fixed-top")}>
          <Grid
            className={classes.content}
            container
            justify="space-between"
            alignItems="center"
          >
            <Grid item xs>
              <span className={classes.span}>
                <Typography color="secondary" align="center" variant="h6">
                  {props.message}
                </Typography>
                <BellIcon
                  width="25"
                  active={true}
                  animate={true}
                  color="#fff"
                  style={{ marginLeft: "2rem" }}
                />
              </span>
            </Grid>
            <Grid item xs={1} className={classes.close}>
              <IconButton onClick={props.handleClick}>
                <Clear color="secondary" />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </nav>
    </React.Fragment>
  );
};

export default Banner;
