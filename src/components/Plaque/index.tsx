import {
  PlaqueContainer,
  PlaqueArea,
  TextWrapper,
  H1,
  H2,
  P,
} from "./PlaqueElements";

import { IconList } from "../IconList";
import { Favorite, Zoom } from "../../assets";

type Props = {
  artist: String;
  pieceName: String;
  pieceDesc: String;
};

export const Plaque = ({ artist, pieceName, pieceDesc }: Props) => {
  return (
    <PlaqueContainer>
      <PlaqueArea>
        <TextWrapper>
          <H2>{artist}</H2>
          <H1>{pieceName}</H1>
          <P>{pieceDesc}</P>
        </TextWrapper>
        <IconList icons={[Favorite, Zoom]} height={"20px"} />
      </PlaqueArea>
    </PlaqueContainer>
  );
};
