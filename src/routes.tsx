import React from "react";
import HomePage from "./Pages/home/index";
import { Route, Switch, useLocation } from "react-router-dom";
import { RouteWithLayout } from "./_shared/components";
import { Main as MainLayout } from "./_shared/Layouts/Main";
import { PaymentSuccess } from "./Pages/payment/payment-success";
import { PaymentFailure } from "./Pages/payment/payment-failure";
// import PrivacyPolicy from "./Pages/Policies&Conditions/PrivacyPolicy";
// import TermsAndConditions from "./Pages/Policies&Conditions/Terms&Conditions";
// import ServiceConditions from "./Pages/Policies&Conditions/ServiceConditions";
import { ResetPassword } from "./Pages/ForgotPassword/ResetPassword";
import { ForgotPassword } from "./Pages/ForgotPassword/ForgotPassword";
// import NotFound from "./Pages/NotFound/NotFound";
import Modal from './_shared/Layouts/Main/components/Footer/components/Dialog'

const Routes = () => {
  let location = useLocation();

  // This piece of state is set when one of the
  // gallery links is clicked. The `background` state
  // is the location that we were at when one of
  // the gallery links was clicked. If it's there,
  // use it as the location for the <Switch> so
  // we show the gallery in the background, behind
  // the modal.
  let background = location.state && location.state.background;
  console.log(location, 'location');
  console.log(background, 'background');

  const data = {
    privacy: true,
    terms: false,
    service: false

  }

  return (
    <div>
      <Switch location={background || location}>
        <RouteWithLayout
          component={HomePage}
          exact
          layout={MainLayout}
          path="/"
        />
        <Route path="/payments/success" component={PaymentSuccess} />
        <Route path="/payments/failure" component={PaymentFailure} />
        <Route path="/reset-password" component={ResetPassword} />
        <Route path="/forgot-password" component={ForgotPassword} />
        {/* <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-and-conditions" component={TermsAndConditions} />
      <Route path="/service-conditions" component={ServiceConditions} /> */}
        {/* <Route path="*" component={NotFound} /> */}
      </Switch>

      {background && <Route path="/:name" exact children={<Modal open={true} data={data} />} />}
    </div>
  );

};

export default Routes;
