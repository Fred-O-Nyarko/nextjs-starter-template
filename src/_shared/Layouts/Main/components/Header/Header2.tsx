/* eslint-disable jsx-a11y/anchor-is-valid */
import { Typography } from "@material-ui/core";
import logo from "../../../../assets/img/logo.png";
import React from "react";
import useStyles from "./styles";

export default function Header2() {
  const classes = useStyles();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
      <a className="navbar-brand" href="#">
        <img src={logo} alt="logo" className={classes.logo} />
        {/* <Typography>PigeonBolt</Typography> */}
      </a>
      <button
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
        id="navbarSupportedContent"
      >
        <form className="form-inline my-2 my-lg-0">
          {/* <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          /> */}
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            LOGIN
          </button>
        </form>
      </div>
    </nav>
  );
}
