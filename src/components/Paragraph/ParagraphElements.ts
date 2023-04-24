import styled from "styled-components";
import { FontDefault } from "../../styles/main";
import { SecondaryBGColor } from "../../styles/colors";

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const P = styled(FontDefault)`
  font-family: "Roboto";
  line-height: 130%;
  margin-bottom: 50px;
`;

export const PTitle = styled(FontDefault).attrs({ as: "h3" })`
  font-size: 2.2em;
`;
