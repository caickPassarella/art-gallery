import {
  NavContainer,
  NavList,
  ListElement,
  ItemWrapper,
  VerticalDivider,
} from "./NavbarElements";
import { Favorite, Search } from "../../assets";
import { IconList, BrandSlogan } from "../index";

export const Navbar: React.FC = () => (
  <NavContainer>
    <NavList>
      <ListElement>Home</ListElement>
      <ListElement>Artists</ListElement>
      <ListElement>About us</ListElement>
      <ListElement>Contact</ListElement>
    </NavList>
    <ItemWrapper>
      <IconList height="30px" icons={[Search, Favorite]} />
      <VerticalDivider />
      <BrandSlogan name="Simplistik" slogan="Contemporary art, simplified" />
    </ItemWrapper>
  </NavContainer>
);
