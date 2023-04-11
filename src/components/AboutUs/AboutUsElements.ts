import styled from "styled-components";
import { SecondaryBGColor } from "../../styles/colors";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Container = styled.div`
  background-color: ${SecondaryBGColor};
  margin-top: 80px;
  padding: 25px 80px;
`;
