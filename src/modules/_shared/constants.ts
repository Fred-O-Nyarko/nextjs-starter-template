/* eslint-disable import/no-anonymous-default-export */
const DEV = process.env.NODE_ENV !== "production";
export default {
  DEV,
  URLS: {
    BASE_URL: DEV ? "csma.pigeonbolt.com" : "api.pigeonbolt.com",
    ROOT: "/",
    PRIVACY_POLICY_URL: "/privacy-policy",
    TERMS_AND_CONDITIONS_URL: "/terms",
    SERVICE_CONDITIONS_URL: "/service-conditions",
    PAYMENT_SUCCESS_URL: "/payments/success",
    PAYMENY_FAILURE_URL: "/payments/failure",
    FORGOT_PASSWORD_URL: "/forgot-password",
    RESET_PASSWORD_URL: DEV
      ? `http://localhost:${window.location.port}/reset-password`
      : "https://pigeonbolt.com/reset-password",
  },
};
