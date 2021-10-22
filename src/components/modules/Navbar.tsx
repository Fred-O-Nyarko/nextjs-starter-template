import React from "react";
import styled from "styled-components";
import { routes } from "../../constants/routes";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../elements";

function Navbar() {
  return (
    <Nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a href="#" className="navbar-brand">
          <div className="logo">
            <Image
              src="/assets/logos/orange.png"
              width={137}
              height={95}
              layout="intrinsic"
              alt="logo"
            />
          </div>
        </a>
        <div className="collapes navbar-collapse justify-content-end">
          <ul className="navbar-nav align-items-center">
            {routes.map((route, index) => {
              return (
                <li key={index} className="nav-item">
                  <StyledLink href={route.route}>
                    <a
                      className="nav-link"
                      style={{ color: (index === 0 && "#F2AA4C") as string }}
                    >
                      {route.text}
                    </a>
                  </StyledLink>
                </li>
              );
            })}
            <li className="nav-item">
              <Button
                onClick={() => console.log("clicked")}
                text="Login as Shop"
                className="login__btn"
              />
            </li>
          </ul>
        </div>
      </div>
    </Nav>
  );
}

export default Navbar;

const StyledLink = styled(Link)`
  display: block;
  padding: 0.5rem 1rem;
  text-decoration: none;
  -webkit-transition: color 0.15s ease-in-out,
    background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;
`;

const Nav = styled.nav`
  .nav-link {
    font-weight: 700;
    font-size: 0.8rem;
    margin: 0 1rem;
    transition: 0.2s ease-in;
    color: rgba(24, 30, 75, 0.78);
  }

  li:last-child {
    margin-right: 0;
  }

  .nav-link:hover {
    color: #f2aa4c;
  }

  .login__btn {
    font-size: 0.8rem;
  }

  @media (max-width: 767.98px) {
    .navbar-nav {
      display: none;
    }
    .logo {
      width: 7rem !important;
    }
  }
`;
