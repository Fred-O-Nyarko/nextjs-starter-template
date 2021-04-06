/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import HomePage from "./modules/home";
import Modules from "./module_exports";

const Routes = () => {
  let location = useLocation();
  let background = location.state && location.state.background;
  const previousLocation = useRef(location)
  const modals = [
    '/privacy-policy',
    '/terms',
    '/service-conditions'
  ]

  const isModal = (background && previousLocation.current !== location) || modals.includes(location.pathname)


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

  console.log(location.pathname);
  console.log(background, location, previousLocation.current);
  console.log(isModal);


  useEffect(() => {
    location.pathname === "/privacy-policy"
      ? setData({ ...initialData, privacy: true })
      : location.pathname === "/terms"
        ? setData({ ...initialData, terms: true })
        : location.pathname === "/service-conditions"
          ? setData({ ...initialData, service: true })
          : setData({ ...initialData });
  }, [location.pathname]);

  useEffect(() => {
    if (!background) {
      previousLocation.current = location;
    }
  })

  const paths = Object.values(Modules.Shared.Constants.URLS)
  console.log(paths);


  return (
    <React.Fragment>
      <Switch location={isModal ? previousLocation.current : location}>
        <Route
          exact={paths.includes(location.pathname) ? true : false}
          // exact
          path={Modules.Shared.Constants.URLS.ROOT}
        // component={Modules.Home}
        >
          {paths.includes(location.pathname) ? <HomePage /> : <Redirect to={Modules.Shared.Constants.URLS.NOT_FOUND} />}
        </Route>
        <Route
          path={Modules.Shared.Constants.URLS.PAYMENT_SUCCES}
          component={Modules.Payment.Success}
        />
        <Route
          path={Modules.Shared.Constants.URLS.PAYMENT_FAILURE}
          component={Modules.Payment.Failure}
        />
        <Route
          path={Modules.Shared.Constants.URLS.RESET_PASSWORD}
          component={Modules.Password.Reset}
        />
        <Route
          path={Modules.Shared.Constants.URLS.FORGOT_PASSWORD}
          component={Modules.Password.Forgot}
        />
        <Route
          path={Modules.Shared.Constants.URLS.FAQS}
          component={Modules.FAQs}
        />
        <Route
          path={Modules.Shared.Constants.URLS.NOT_FOUND}
          component={Modules.NotFound}
        />
        <Route
          path="/:name"

          children={
            <Modules.Shared.Components.Modal data={data} open={isModal} />
          }
        />
        {/* <Route path="*" to={Modules.NotFound} /> */}

      </Switch>
      { isModal && <Route
        path="/:name"

      >
        <Modules.Shared.Components.Modal data={data} open={isModal} />

      </Route>
      }
    </React.Fragment>
  );
};

export default Routes;
