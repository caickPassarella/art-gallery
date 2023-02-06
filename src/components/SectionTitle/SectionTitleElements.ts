import styled from "styled-components";
import { PrimaryFontColor } from "../../styles/colors";

type Props = {
  type: string;
};

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1<Props>`
  font-family: "Bebas Neue";
  font-weight: 400;
  font-size: ${(props) => (props.type === "Main" ? "96px" : "64px")};
  letter-spacing: 0.055em;

  color: ${PrimaryFontColor};
`;

export const SubTitle = styled.h2<Props>`
  font-family: "Roboto";
  letter-spacing: 0.055em;
  font-weight: 300;
  font-size: ${(props) => (props.type === "Main" ? "40px" : "32px")};

  color: ${PrimaryFontColor};
`;
