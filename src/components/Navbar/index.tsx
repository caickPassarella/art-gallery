import {
  NavContainer,
  NavList,
  ListElement,
  ItemWrapper,
  VerticalDivider,
  BrandName,
  BrandSlogan,
  BrandWrapper,
} from "./NavbarElements";
import { Favorite, Search } from "../../images";
import { IconList } from "../IconList";

export const Navbar = () => (
  <NavContainer>
    <NavList>
      <ListElement>Home</ListElement>
      <ListElement>Artists</ListElement>
      <ListElement>About us</ListElement>
      <ListElement>Contact</ListElement>
    </NavList>
    <ItemWrapper>
      <IconList icons={[Search, Favorite]} />
      <VerticalDivider />
      <BrandWrapper>
        <BrandName>Simplistik</BrandName>
        <BrandSlogan>Contemporary art, simplified</BrandSlogan>
      </BrandWrapper>
    </ItemWrapper>
  </NavContainer>
);
