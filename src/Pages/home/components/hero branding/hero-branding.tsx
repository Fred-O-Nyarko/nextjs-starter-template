import { Typography, Grid } from "@material-ui/core";
import React from "react";
import "./styles.css";

export default function HeroBranding() {
  const brandItems = [
    { icon: "jam:store", text: "diversity" },
    { icon: "wpf:alarm-clock", text: "timely" },
    { icon: "mdi:bike-fast", text: "fast delivery" },
    { icon: "mdi:cellphone-iphone", text: "order with app" },
  ];
  return (
    <div className="container">
    <Grid
      container
      alignItems="flex-start"
      justify="space-between"
      style={{ marginTop: "2rem" }}
    >
      {brandItems.map((brandItem: any, index) => {
        return (
          <div className="hero-brand-item" key={index}>
            <span
              className="iconify"
              data-inline="false"
              data-icon={brandItem.icon}
              style={{ color: "#ffa023", fontSize: "22px" }}
            ></span>
            <Typography className="hero-brand-text">
              {brandItem.text}
            </Typography>
          </div>
        );
      })}
    </Grid>
    </div>
  );
}
