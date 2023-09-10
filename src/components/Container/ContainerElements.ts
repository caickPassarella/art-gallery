import styled from "styled-components";

type Props = {
  align?: string;
  direction?: string;
  bgColor?: string;
};

export const Wrapper = styled.div<Props>`
  background-color: ${(props) => props.bgColor};
  display: flex;
  align-items: ${(props) => props.align};
  flex-direction: ${(props) => props.direction};
`;

Wrapper.defaultProps = {
  bgColor: "transparent",
  align: "center",
  direction: "column",
};
