import styled from "styled-components";
import { PrimaryFontColor } from "./colors";

export const Title = styled.h1`
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 96px;
  line-height: 115px;
  letter-spacing: 0.055em;

  color: ${PrimaryFontColor};
`;

export const SectionHeader = styled(Title)`
  font-size: 36px;
  line-height: 43px;

  color: ${PrimaryFontColor};
`;

export const SubTitle = styled(SectionHeader)`
  font-family: "Roboto";
  font-weight: 300;
  font-size: 40px;

  color: ${PrimaryFontColor};
`;
