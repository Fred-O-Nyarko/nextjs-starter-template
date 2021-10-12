/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";
import Image from "next/image";
interface ButtonProps {
  size?: string;
  variant?: "outlined" | "filled";
  raised?: boolean;
  text?: string;
  icon?: boolean;
  iconPath?: string;
  circular?: boolean;
  iconPosition?: "left" | "right" | "center";
  onClick: (...args: any) => typeof args;
}

const Button = ({
  size,
  variant,
  raised,
  text,
  icon,
  iconPosition,
  circular,
  className,
  iconPath,
  onClick,
}: ButtonProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <StyledDiv onClick={onClick} className={className} circular={circular}>
      <div
        className={`content  ${
          variant === "outlined" ? "outlined" : "filled"
        } ${circular && " circular"}`}
      >
        {text && <div className="text">{text}</div>}
        {icon && (
          <Image
            className="icon"
            alt=""
            src={iconPath ?? ""}
            width={40}
            height={40}
            layout="intrinsic"
          />
        )}
      </div>
    </StyledDiv>
  );
};

export default Button;

const StyledDiv = styled.div<{ circular?: boolean }>`
  cursor: pointer;

  border-radius: 5px;

  transition: 0.3s ease-in-out all;
  filter: drop-shadow(0px, 4px, 4px rgba(242, 170, 76, 0.4));
  box-shadow: 0px, 4px, 4px rgba(242, 170, 76, 0.4);

  .circular {
    border-radius: 50% !important;
    padding: 1rem !important;
    box-shadow: 0px 15px 30px rgba(242, 170, 76, 0.3);
  }
  .content {
    display: flex;
    padding: 1rem 1.5rem;
  }

  .filled {
    color: #fff;
    background-color: #f2aa4c;
  }

  .outlined {
    background-color: transparent;
    border-color: #f2aa4c;
    border-width: 1px;
    border-style: solid;
  }

  content:hover {
    box-shadow: 0px 15px 30px rgba(242, 170, 76, 0.3);
  }
`;
