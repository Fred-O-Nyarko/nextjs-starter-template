import { Button, Typography } from "@material-ui/core";
import React from "react";
import "./style.css";
import fail from "../../_shared/assets/icons/close.svg";
import "./style.css";
export const PaymentFailure: React.FC = () => {
  const handleClick = () => {
    window.close();
  };
  return (
    <div className="root">
      <div className="container pos">
        <div className="content">
          <div className="container">
            <div className="status w-100 d-flex flex-column justify-content-center align-items-center">
              <div className="icon">
                <img src={fail} alt="" className="vector" />
              </div>
              <Typography
                variant="h4"
                className="typography-2"
                gutterBottom
                paragraph
              >
                Payment Failed
              </Typography>

              <Typography
                variant="h6"
                className="sub-text text-secondary"
                gutterBottom
                paragraph
                align="left"
              >
                Lorem Ipsum: Lorem Ipsum dolor
              </Typography>

              <Button
                size="large"
                variant="contained"
                color="primary"
                className="action"
                onClick={handleClick}
              >
                <Typography color="secondary">Close</Typography>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
