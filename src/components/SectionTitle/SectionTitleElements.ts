import styled from "styled-components";
import { Container } from "../index";
import { PrimaryFontColor } from "../../styles/colors";
import { FontDefault } from "../../styles/main";

type Props = {
  type: string;
};

export const TitleContainer = styled(Container)`
  margin: 50px;
`;

export const Title = styled(FontDefault).attrs({ as: "h1" })<Props>`
  font-size: ${(props) => (props.type === "Main" ? "6em" : "3.5em")};

  color: ${PrimaryFontColor};
`;

export const SubTitle = styled(FontDefault).attrs({ as: "h2" })<Props>`
  font-family: "Roboto";
  font-size: ${(props) => (props.type === "Main" ? "2.4em" : "1.4em")};

  color: ${PrimaryFontColor};
`;
