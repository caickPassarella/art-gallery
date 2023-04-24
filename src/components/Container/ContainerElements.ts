import styled from "styled-components";
import { primaryBGColor } from "../../styles/colors";

type Props = {
  align?: string;
};

export const Wrapper = styled.div<Props>`
  background-color: ${primaryBGColor};
  display: flex;
  align-items: ${(props) => (props.align === "center" ? "center" : "normal")};
  flex-direction: column;
`;
