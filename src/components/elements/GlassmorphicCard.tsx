import React from "react";
import styled from "styled-components";

interface GlassMorphicCardProps {
  className?: string;
  children?: React.ReactNode
}
const GlassMorphicCard: React.FC<GlassMorphicCardProps> = ({
  className,
  children
}) => {
  return <Root className={className}>{children}</Root>;
};

export default GlassMorphicCard;

const Root = styled.div`
  background-color: rgba(255, 255, 255, 0.006);
  --webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  border-radius: 8px;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.1);
  transition: 0.3s all ease-out;

  :hover {
    box-shadow: 20px 20px 22px rgba(0, 0, 0, 0.2);
  }
`;
