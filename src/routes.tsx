/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Modules from "./";

const Routes = () => {
  let location = useLocation();
  let background = location.state && location.state.background;

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
        <Route
          path={Modules.Shared.Constants.URLS.ROOT}
          exact
          component={Modules.Home}
        />
        <Route
          path={Modules.Shared.Constants.URLS.PAYMENT_SUCCESS_URL}
          component={Modules.Payment.Success}
        />
        <Route
          path={Modules.Shared.Constants.URLS.PAYMENY_FAILURE_URL}
          component={Modules.Payment.Failure}
        />
        <Route
          path={Modules.Shared.Constants.URLS.RESET_PASSWORD_URL}
          component={Modules.Password.Reset}
        />
        <Route
          path={Modules.Shared.Constants.URLS.FORGOT_PASSWORD_URL}
          component={Modules.Password.Forgot}
        />
        <Route path="*" component={Modules.NotFound} />

        <Route
          path="/:name"
          children={
            <Modules.Shared.Components.Modal data={data} open={!!background} />
          }
        />

      </Switch>
      {background && (
        <Route
          path="/:name"
          children={
            <Modules.Shared.Components.Modal data={data} open={!!background} />
          }
        />
      )}
    </div>
  );
};

export default Routes;
