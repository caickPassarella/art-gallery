import styled from "styled-components";
import { FontDefault } from "../../styles/main";

export const Container = styled.section`
  background-color: #ffffff;
  width: 100%;
  display: flex;
`;
export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 45px;
`;

export const ArtShowcase = styled.img`
  flex: 1;
  object-fit: cover;
  min-width: 50%;
  height: 850px;
`;

export const ArtistText = styled(FontDefault)`
  font-family: "Roboto";
  line-height: 130%;
  margin-bottom: 25px;
`;

export const BoldText = styled.span`
  font-weight: bold;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  align-items: flex-end;
`;
