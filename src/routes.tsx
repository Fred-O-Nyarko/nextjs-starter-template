/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import HomePage from "./modules/home";
import Modules from "./module_exports";

const Routes = () => {
  let location = useLocation();
  // let show = location.state;
  const previousLocation = useRef(location)
  // const modals = [
  //   '/privacy-policy',
  //   '/terms',
  //   '/service-conditions'
  // ]

  // const isModal = (background && previousLocation.current !== location) || modals.includes(location.pathname)

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


  const searchParams = new URLSearchParams(location.search);

  const privacyUrl = searchParams.get(Modules.Shared.Constants.URLS.PRIVACY_POLICY)
  const termsUrl = searchParams.get(Modules.Shared.Constants.URLS.TERMS_AND_CONDITIONS);
  const serviceConditionsUrl = searchParams.get(Modules.Shared.Constants.URLS.SERVICE_CONDITIONS);


  const [show, setShow] = useState(termsUrl || serviceConditionsUrl || privacyUrl)

  // console.log('show', show)
  // console.log(location.search);

  console.log(privacyUrl);


  function handleClose() {
    setShow('0')
  }


  useEffect(() => {

    if ((privacyUrl === '1') && show) {
      setData({ ...initialData, privacy: true })
    }
    if ((termsUrl === '1') && show) {
      setData({ ...initialData, terms: true })
    }

    if ((serviceConditionsUrl === '1') && show) {
      setData({ ...initialData, service: true })

    }
  }, [location.search]);


  const paths = Object.values(Modules.Shared.Constants.URLS)


  return (
    <React.Fragment>
      <Switch location={show ? previousLocation.current : location}>
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
        {/* <Route
          path="/:name"

          children={
            <Modules.Shared.Components.Modal data={data} open={open} />
          }
        /> */}
        {/* <Route path="*" to={Modules.NotFound} /> */}

      </Switch>
      { show &&
        <Modules.Shared.Components.Modal data={data} open={show === '1'} close={handleClose} />


      }
    </React.Fragment>
  );
};

export default Routes;
