/* eslint-disable import/no-anonymous-default-export */
const DEV = process.env.NODE_ENV !== "production";
export default {
  DEV,
  URLS: {
    BASE_URL: DEV ? "staging.pigeonbolt.com" : "api.pigeonbolt.com",
    ROOT: "/",
    PRIVACY_POLICY: "privacy-policy",
    TERMS_AND_CONDITIONS: "terms",
    SERVICE_CONDITIONS: "service-conditions",
    PAYMENT_SUCCES: "/payments/success",
    PAYMENT_FAILURE: "/payments/failure",
    FORGOT_PASSWORD: "/forgot-password",
    RESET_PASSWORD: `/reset-password`,
    FAQS: "/faqs",
    ABOUT: "/about",
    CAREERS: '/careers',
    NOT_FOUND: "/not-found",
  },
};
