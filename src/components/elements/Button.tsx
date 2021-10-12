import React from "react";
import styled from "styled-components";

interface ButtonProps {
  size?: string;
  variant?: "outlined" | "filled";
  raised?: boolean;
  text?: string;
  icon?: boolean;
  rounded?: boolean;
  iconPosition?: "left" | "right";
  onClick: (...args: any) => typeof args;
}

const Button = ({
  size,
  variant,
  raised,
  text,
  icon,
  iconPosition,
  rounded,
  className,
  onClick
}: ButtonProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <StyledDiv onClick={onClick} className={className}>
      <div
        className={`content  ${variant === "outlined" ? "outlined" : "filled"}`}
      >
        {text && <div className="text">{text}</div>}
        {icon && <img className="icon" />}
      </div>
    </StyledDiv>
  );
};

export default Button;

const StyledDiv = styled.div`
  cursor: pointer;
  border-radius: 5px;
  border-color: #f2aa4c;
  border-width: 1px;
  border-style: solid;
  transition: 0.3s ease-in-out all;
  filter: drop-shadow(0px, 4px, 4px rgba(242, 170, 76, 0.4));
  box-shadow: 0px, 4px, 4px rgba(242, 170, 76, 0.4);
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
  }

  :hover {
    box-shadow: 0px 15px 30px rgba(242, 170, 76, 0.3);
  }
`;
