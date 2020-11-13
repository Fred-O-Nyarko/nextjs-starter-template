import Grid from "@material-ui/core/Grid/Grid";
import IconButton from "@material-ui/core/IconButton/IconButton";
import useStyles from "./styles";
import React from "react";
import classNames from "classnames";

const Social = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column" alignItems="center" justify="center" className={classes.root}>
      
      <IconButton>
        <span
          className={classNames("iconify", classes.icon)}
          data-inline="false"
          data-icon="entypo-social:twitter-with-circle"
        />
      </IconButton>
      <IconButton>
        <span
          className={classNames("iconify", classes.icon)}
          data-inline="false"
          data-icon="entypo-social:instagram-with-circle"
        />
      </IconButton>
      <IconButton>
        <span
          className={classNames("iconify", classes.icon)}
          data-inline="false"
          data-icon="bx:bxl-facebook-circle"
        />
      </IconButton>
    </Grid>
  );
};

export default Social;
