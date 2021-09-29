import styled from "styled-components";

const Background = styled.div<{
  height?: string;
  width?: string;
  backgroundImage?: string;
  backgroundSize?: string;
  backgroundRepeat?: "repeat" | "no-repeat";
  backgroundColor?: any;
}>`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: ${({ backgroundSize }) => backgroundSize};
  background-repeat: ${({ backgroundRepeat }) =>
    backgroundRepeat ?? "no-repeat"};
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const Overlay = styled.div<{
  backgroundColor: string;
  height: string;
  width?: string;
}>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  position: absolute;
  height: ${({ height }) => height ?? "100%"};
  width: ${({ width }) => width ?? "100%"};
`;
export { Background, Overlay };
