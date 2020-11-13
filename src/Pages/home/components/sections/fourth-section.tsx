import { Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

export default function FourthSection() {
  const classes = useStyles();
  const cardItems = [
    {
      icon: "fa-solid:users",
      title: "TITLE HERE",
      text: `Viverra sed cras ultrices gravida. Iaculis at mi massa semper amet ullamcorper. Netus lorem eleifend dolor scelerisque egestas nunc at. Ac dui proin
  eleifend dolor scelerisque egestas nunc at. Ac dui proin.`,
    },
    {
      icon: "emojione-monotone:handshake",
      title: "TITLE HERE",
      text: `Viverra sed cras ultrices gravida. Iaculis at mi massa semper amet ullamcorper. Netus lorem eleifend dolor scelerisque egestas nunc at. Ac dui proin
    eleifend dolor scelerisque egestas nunc at. Ac dui proin.`,
    },
    {
      icon: "heroicons-solid:badge-check",
      title: "TITLE HERE",
      text: `Viverra sed cras ultrices gravida. Iaculis at mi massa semper amet ullamcorper. Netus lorem eleifend dolor scelerisque egestas nunc at. Ac dui proin
    eleifend dolor scelerisque egestas nunc at. Ac dui proin.`,
    },
  ];
  return (
    <section className="container" style={{ marginTop: "3rem" }}>
      <Grid container alignItems="center" justify="center">
        <Typography variant="h4" align="center">
          LOREM IPSUM
        </Typography>
        <Grid container direction="row" style={{ marginTop: "3rem" }} justify="space-around" alignContent="center">
          {cardItems.map((cardItem, index) => {
            return (
              <Grid
                container
                item
                xs={4}
                direction="column"
                className={classes.cardItem}
                wrap="nowrap"
                justify="center"
                alignItems="center"
                key={index}
              >
                <span
                  className="iconify"
                  data-inline="false"
                  data-icon={cardItem.icon}
                  style={{ color: "#FFA023", fontSize: "5rem", paddingBottom:"1rem" }}
                ></span>
                <Typography variant="h6" gutterBottom paragraph>{cardItem.title}</Typography>
                <Typography variant="subtitle2" color="textSecondary" align="center">
                  {cardItem.text}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </section>
  );
}
