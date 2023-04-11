import styled from "styled-components";
import { PrimaryFontColor } from "../../styles/colors";
import { FontDefault } from "../../styles/main";

export const ButtonStyle = styled(FontDefault).attrs({ as: "button" })`
  background-color: #ffffff;
  color: ${PrimaryFontColor};
  height: 50px;
  width: 300px;
  border: none;
  cursor: pointer;
`;
