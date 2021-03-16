import React from "react";
import HomePage from "./Pages/home/index";
import { Route, Switch } from "react-router-dom";
import { RouteWithLayout } from "./_shared/components";
import { Main as MainLayout } from "./_shared/Layouts/Main";
import { PaymentSuccess } from "./Pages/payment/payment-success";
import { PaymentFailure } from "./Pages/payment/payment-failure";
import PrivacyPolicy from "./Pages/Policies&Conditions/PrivacyPolicy";
import TermsAndConditions from "./Pages/Policies&Conditions/Terms&Conditions";
import ServiceConditions from "./Pages/Policies&Conditions/ServiceConditions";
import { ResetPassword } from "./Pages/ResetPassword/ResetPassword";

const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout
        component={HomePage}
        exact
        layout={MainLayout}
        path="/"
      />
      <Route path="/payments/success" exact component={PaymentSuccess} />
      <Route path="/payments/failure" exact component={PaymentFailure} />
      <Route path="/reset-password" exact component={ResetPassword} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-and-conditions" component={TermsAndConditions} />
      <Route path="/service-conditions" component={ServiceConditions} />
      {/* <Redirect to="not-found" /> */}
    </Switch>
  );
};

export default Routes;
