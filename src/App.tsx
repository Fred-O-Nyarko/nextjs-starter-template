/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Modal from "./_shared/Layouts/Main/components/Footer/components/Dialog";
import { ForgotPassword } from "./Pages/ForgotPassword/ForgotPassword";
import { ResetPassword } from "./Pages/ForgotPassword/ResetPassword";
import HomePage from "./Pages/home";
import { PaymentFailure } from "./Pages/payment/payment-failure";
import { PaymentSuccess } from "./Pages/payment/payment-success";
import NotFound from "./Pages/NotFound/NotFound";

const App = () => {
  let location = useLocation();

  let background = location.state && location.state.background;
  console.log(location, "location");

  const initialData = {
    privacy: false,
    terms: false,
    service: false,
  };

  const [data, setData] = useState({
    privacy: false,
    terms: false,
    service: false,
  });

  useEffect(() => {
    location.pathname === "/privacy-policy"
      ? setData({ ...initialData, privacy: true })
      : location.pathname === "/terms"
        ? setData({ ...initialData, terms: true })
        : location.pathname === "/service-conditions"
          ? setData({ ...initialData, service: true })
          : setData({ ...initialData });
  }, [location.pathname]);

  return (
    <div>
      <Switch location={background || location}>
        <Route path="/" exact component={HomePage} />
        <Route path="/payments/success" component={PaymentSuccess} />
        <Route path="/payments/failure" component={PaymentFailure} />
        <Route path="/reset-password" component={ResetPassword} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="*" component={NotFound} />
      </Switch>
      {background && (
        <Route
          path="/:name"
          children={<Modal data={data} open={!!background} />}
        />
      )}
    </div>
  );
};

export default App;
