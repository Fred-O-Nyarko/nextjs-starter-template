/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";

export const useMediaQuery = (
  query: string,
  whenTrue?: string,
  whenFalse?: string
) => {
  if (typeof window === "undefined" || typeof window.matchMedia === "undefined")
    return whenFalse;

  const mediaQuery = window.matchMedia(query);
  const [match, setMatch] = React.useState(!!mediaQuery.matches);

  React.useEffect(() => {
    const handler = () => setMatch(!!mediaQuery.matches);
    mediaQuery.addListener(handler);
    return () => mediaQuery.removeListener(handler);
  }, []);

  return match;
};
