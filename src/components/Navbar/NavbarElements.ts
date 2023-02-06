import styled from "styled-components";

const fontDefault = styled.p`
  font-family: "Bebas Neue";
  font-style: normal;
  letter-spacing: 0.055em;
  font-size: 24px;
  line-height: 29px;
`;

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

export const ListElement = styled(fontDefault)`
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

export const BrandName = styled(fontDefault)`
  font-size: 32px;
`;

export const BrandSlogan = styled(fontDefault)`
  font-size: 16px;
  font-weight: 400;
`;

export const BrandWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
