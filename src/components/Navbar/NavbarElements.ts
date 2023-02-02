import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ListElement = styled.li`
  list-style: none;
  margin: 20px;
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.055em;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const VerticalDivider = styled.div`
  border-left: 4px solid black;
  height: 44px;
  margin: 0 30px;
`;
