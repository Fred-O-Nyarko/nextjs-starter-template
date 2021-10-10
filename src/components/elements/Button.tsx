import React from "react";
import styled from "styled-components";

interface ButtonProps {
  size?: string;
  variant?: "outlined" | "filled";
  raised?: boolean;
  text?: string;
  icon?: boolean;
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
  onClick,
}: ButtonProps) => {
  return (
    <StyledDiv onClick={onClick}>
      <div className="content">
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

  .content {
    display: flex;
    padding: 0.5rem 1.2rem;
  }
`;
