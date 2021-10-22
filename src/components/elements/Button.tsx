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
  iconStyles?: { width: number; height: number };
  iconPosition?: "left" | "right" | "center";
  onClick: (...args: any) => typeof args;
}

const Button = ({
  size,
  variant,
  raised,
  text,
  icon,
  iconStyles,
  iconPosition,
  circular,
  className,
  iconPath,
  onClick,
}: ButtonProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <StyledDiv onClick={onClick} circular={circular} iconPath={iconPath}>
      <div
        className={`btn__content ${className}  ${
          variant === "outlined" ? "outlined" : "filled"
        } ${circular && " circular"}`}
      >
        {text && <div className="text">{text}</div>}
        {icon && (
          <Image
            className="icon"
            alt=""
            src={iconPath ?? ""}
            width={iconStyles?.width ?? 20}
            height={iconStyles?.height ?? 20}
            layout="intrinsic"
          />
        )}
      </div>
    </StyledDiv>
  );
};

export default Button;

const StyledDiv = styled.div<{ circular?: boolean; iconPath?: string }>`
  cursor: pointer;
  width: auto !important;
  transition: 0.3s all ease-in-out;
  filter: drop-shadow(0px, px, 4px rgba(242, 170, 76, 0.4));
  box-shadow: 0px, 6px, 6px rgba(242, 170, 76, 0.4);
  .circular {
    border-radius: 50% !important;
    padding: 1rem !important;
    box-shadow: 0px 15px 30px rgba(242, 170, 76, 0.3);
  }
  .btn__content {
    display: flex;
    padding: 0.5rem 1rem;
    align-items: center;
    border-radius: 5px;
  }

  .text {
    font-size: inherit;
    margin-right: ${({ iconPath }) => (iconPath ? "0.8rem" : "unset")};
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

  .btn__content:hover {
    box-shadow: 0px 15px 30px rgba(242, 170, 76, 0.3);
  }
`;
