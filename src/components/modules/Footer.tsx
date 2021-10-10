import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Root>
      <section>
        <div className="footer__content">
          <div className="main__content">
            <div className="branding"></div>
            <div className="links"></div>
            <div className="social__apps"></div>
          </div>
          <div className="bottom">
            <h6 className="h6">
              All rights reserved {new Date().getFullYear()} PigeonUltra™
            </h6>
          </div>
        </div>
      </section>
    </Root>
  );
};

export default Footer;

const Root = styled.div`
  width: 100%;
  border-top: 1px solid #eaeaea;
  /* position: absolute;
  bottom: 0;
  left: 0; */

  .footer__content {
    display: flex;
    width: 100%;
  }

  .bottom {
    width: 100%;
    text-align: center;
  }
`;
