import styled from "styled-components";
import { PrimaryFontColor } from "../../styles/colors";
import { FontDefault } from "../../styles/main";

export const ButtonStyle = styled(FontDefault).attrs({ as: "button" })`
  text-align: center;
  background-color: #ffffff;
  font-size: 1.4em;
  color: ${PrimaryFontColor};
  height: 50px;
  width: 300px;
  border: none;
  padding-top: 4px;
  cursor: pointer;
`;
