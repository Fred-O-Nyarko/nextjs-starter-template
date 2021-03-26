import { Button, Typography } from "@material-ui/core";
import React from "react";
import "./style.css";
import success from "../_shared/assets/icons/Vector.svg";

const PaymentSuccess: React.FC = () => {
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
                <img src={success} alt="" className="vector" />
              </div>
              <Typography
                variant="h4"
                className="typography"
                gutterBottom
                paragraph
              >
                Payment Successful
              </Typography>

              <Typography
                variant="h6"
                className="sub-text text-secondary"
                gutterBottom
                paragraph
                align="center"
              >
                Please close and return to the app to track your order
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

export default PaymentSuccess