import React from "react";
import PropTypes from "prop-types";

// TODO: Add header and Footer to layout

interface IProps {
  children: React.ReactNode;
}

const Main: React.FC<IProps> = (props) => {
  const { children } = props;
  return (
    <>
      <main>{children}</main>
    </>
  );
};

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
