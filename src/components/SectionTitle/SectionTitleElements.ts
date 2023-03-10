import styled from "styled-components";
import { PrimaryFontColor } from "../../styles/colors";
import { FontDefault } from "../../styles/main";

type Props = {
  type: string;
};

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px;
`;

export const Title = styled(FontDefault).attrs({ as: "h1" })<Props>`
  font-size: ${(props) => (props.type === "Main" ? "96px" : "64px")};

  color: ${PrimaryFontColor};
`;

export const SubTitle = styled(FontDefault).attrs({ as: "h2" })<Props>`
  font-family: "Roboto";
  font-size: ${(props) => (props.type === "Main" ? "40px" : "32px")};

  color: ${PrimaryFontColor};
`;
