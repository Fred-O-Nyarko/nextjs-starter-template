/* eslint-disable jsx-a11y/anchor-is-valid */
// import { Typography } from "@material-ui/core";
import logo from "../../../../assets/img/logo.png";
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
      {/* <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse float-right justify-content-end"
      >
        <form className="form-inline my-2 my-lg-0">
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            LOGIN
          </button>
        </form>
      </div> */}

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
