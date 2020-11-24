import React from "react";
import HomePage from "./Pages/home/index";
import { Redirect, Route, Switch } from "react-router-dom";
import { RouteWithLayout } from "./_shared/components";
import { Main as MainLayout } from "./_shared/Layouts/Main";
import { Main as PaymentLayout } from "./_shared/Layouts/Payment";
import PaymentPage from "./Pages/payment/index";
import { PaymentSuccess } from "./Pages/payment/payment-success";
import { PaymentFailure } from "./Pages/payment/payment-failure";

const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout
        component={HomePage}
        exact
        layout={MainLayout}
        path="/"
      />
      <RouteWithLayout
        component={PaymentPage}
        layout={PaymentLayout}
        path="/payments"
        exact
      />

      <Route path="/payments/success" exact component={PaymentSuccess} />
      <Route path="/payments/failure" exact component={PaymentFailure} />

      {/* <Redirect to="not-found" /> */}
    </Switch>
  );
};

export default Routes;
