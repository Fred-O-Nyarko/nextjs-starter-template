import React from "react";
import styled from "styled-components";

const Section: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children }) => {
  return <StyledSection>{children}</StyledSection>;
};

export default Section;

const StyledSection = styled.div`
  margin-top: 9.5rem !important;
  /* height: 100vh; */
  color: #14183e !important;
`;
