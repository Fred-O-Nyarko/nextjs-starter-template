import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const PaymentsPage: React.FC = () => {
  return (
    <div>
      Payments Page
      <Button variant="contained">
        <Link to="/payments/success" target="_blank">
          Pay
        </Link>
      </Button>
    </div>
  );
};

export default PaymentsPage;
