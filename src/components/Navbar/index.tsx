import {
  NavContainer,
  NavList,
  ListElement,
  IconWrapper,
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
    <IconWrapper>
      <IconList icons={[Favorite, Search]} />
    </IconWrapper>
  </NavContainer>
);
