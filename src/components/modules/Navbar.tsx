import React from "react";
import styled from "styled-components";
import { routes } from "../../constants/routes";
import Link from "next/link";
import Image from "next/image";
import logo from "./assets/logos/orange.png";
import Button from "../elements";

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
          />
        </div>

        <ul className="links">
          {routes.map((route, index) => {
            return (
              <li>
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
              text="Im a button !"
            />
          </li>
        </ul>
      </div>
    </Root>
  );
}

export default Navbar;

const Root = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 999;
  .navbar {
    width: 100%;
    padding: 1rem 4.125rem;
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
    align-items: center;
    justify-content: flex-end;
  }

  .links {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    flex-basis: 80%;
  }

  li {
    list-style-type: none;
  }

  .link {
    font-weight: 700;
    color: #5e6282;
    margin: 0 2rem;
  }
`;
