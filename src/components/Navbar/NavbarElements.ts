import styled from "styled-components";
import { FontDefault } from "../../styles/main";

export const NavContainer = styled.nav`
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

export const ListElement = styled(FontDefault).attrs({ as: "li" })`
  list-style: none;
  margin: 20px;
  font-weight: 400;
  cursor: pointer;
  transition: text-shadow 0.3s ease;
  &:hover {
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  }
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
