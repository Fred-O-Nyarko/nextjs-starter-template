import React from "react";
import styled from "styled-components";
import { routes } from "../../constants/routes";
import Link from "next/link";
import Image from "next/image";
import {Button} from "../elements";

function Navbar() {
  return (
    <Root>
      <div className="navbar">
        <div className="logo__container">
          <Image
            src="/assets/logos/orange.png"
            width={147}
            height={105}
            layout="intrinsic"
            alt="logo"
          />
        </div>

        <ul className="nav__links">
          {routes.map((route, index) => {
            return (
              <li key={index}>
                <Link href={route.route}>
                  <a
                    className="link"
                    style={{ color: (index === 0 && "#F2AA4C") as string }}
                  >
                    {route.text}
                  </a>
                </Link>
              </li>
            );
          })}
          <li className="link">
            <Button
              onClick={() => console.log("clicked")}
              text="Login as Shop"
            />
          </li>
        </ul>
      </div>
    </Root>
  );
}

export default Navbar;

const Root = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 999;
  .navbar {
    width: 100%;
    display: flex;
  }
  .logo__container {
    display: flex;
    width: 100%;
    align-items: center;
    flex-basis: 20%;
  }


  .nav__links {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    flex-basis: 80%;
    transition: .2s ease-in all
  }

  li {
    list-style-type: none;
  }

  .link {
    font-weight: 700;
    margin: 0 2rem;
    transition: 0.2s ease-in;
  }

  li:last-child{
    margin-right: 0
  }

  .link:hover {
    color: #f2aa4c;
  }

  @media (max-width: 767.98px){
  	.nav__links{
      display: none
    }
  }
`;
