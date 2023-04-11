import styled from "styled-components";
import { FontDefault } from "../../styles/main";
import { SecondaryBGColor } from "../../styles/colors";

export const Container = styled.div`
  display: flex;
  background-color: ${SecondaryBGColor};
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const P = styled(FontDefault)`
  font-family: "Roboto";
  line-height: 130%;
  width: 50%;
`;

export const PTitle = styled(FontDefault).attrs({ as: "h3" })`
  font-size: 2.2em;
`;
