/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "../../assets/img/logo.png";
import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import { Button, Typography } from "@material-ui/core";
import classNames from "classnames";

export default function Header2(props: any) {
  const classes = useStyles();
  const [headerColor, setHeaderColor] = useState<string>("navbar-light");

  const listenScrollEvent = () => {
    if (window.scrollY > 100) {
      setHeaderColor("bg-light");
    } else {
      setHeaderColor("navbar-light");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    if (window.scrollY > 100) {
      setHeaderColor("bg-light");
    }
  }, []);
  return (
    <nav
      className={classNames(
        "navbar navbar-expand-lg",
        headerColor === "bg-light" ? "bg-light" : "navbar-light",
        props.moveUp ? classes.nav : "fixed-top",
        "justify-content-between"
      )}
    >
      <a className="navbar-brand" href="/">
        <img src={logo} alt="logo" className={classes.logo} />
        {headerColor === "navbar-light" && (
          <Typography variant="h6" color="secondary">
            PigeonBolt
          </Typography>
        )}
      </a>
      <Button
        variant={headerColor === "navbar-light" ? "contained" : "outlined"}
        color="primary"
        onClick={() => (window.location.href = "https://shops.pigeonbolt.com")}
        type="submit"
      >
        <Typography
          color={headerColor === "navbar-light" ? "secondary" : "primary"}
          variant="button"
          className="font-weight-bold"
        >
          Shop Login
        </Typography>
      </Button>
    </nav>
  );
}
