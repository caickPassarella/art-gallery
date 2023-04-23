import {
  PlaqueContainer,
  PlaqueArea,
  TextWrapper,
  PieceName,
  Artist,
  PieceDesc,
} from "./PlaqueElements";

import { IconList } from "../IconList";
import { Favorite, Zoom } from "../../assets";

interface PlaqueProps {
  artist: String;
  pieceName: String;
  pieceDesc: String;
}

export const Plaque = ({ artist, pieceName, pieceDesc }: PlaqueProps) => {
  return (
    <PlaqueContainer>
      <PlaqueArea>
        <TextWrapper>
          <Artist>{artist}</Artist>
          <PieceName>{pieceName}</PieceName>
          <PieceDesc>{pieceDesc}</PieceDesc>
        </TextWrapper>
        <IconList icons={[Favorite, Zoom]} height={"20px"} />
      </PlaqueArea>
    </PlaqueContainer>
  );
};
