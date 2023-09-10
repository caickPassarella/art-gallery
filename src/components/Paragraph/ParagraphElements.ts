import styled from "styled-components";
import { FontDefault } from "../../styles/main";

export const P = styled(FontDefault)`
  font-family: "Roboto";
  line-height: 130%;
  margin-bottom: 50px;
`;

export const PTitle = styled(FontDefault).attrs({ as: "h3" })`
  font-size: 2em;
`;
