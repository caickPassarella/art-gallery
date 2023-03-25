import styled from "styled-components";
import { FontDefault } from "../../styles/main";

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 35px;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ListElement = styled(FontDefault)`
  list-style: none;
  margin: 20px;
  font-weight: 400;
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const VerticalDivider = styled.div`
  border-left: 4px solid black;
  height: 44px;
  margin: 0 30px;
`;
