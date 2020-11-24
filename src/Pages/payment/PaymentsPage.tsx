import { Button } from "@material-ui/core";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { PaymentFailure } from "./payment-failure";
import { PaymentSuccess } from "./payment-success";

const PaymentsPage: React.FC = () => {
  const history = useHistory();

  const handleClick = () => {};

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
