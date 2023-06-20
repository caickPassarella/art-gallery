import {
  PlaqueArea,
  TextWrapper,
  PieceName,
  Artist,
  PieceDesc,
} from "./PlaqueElements";

import { IconList } from "../IconList";
import { Zoom } from "../../assets";

interface PlaqueProps {
  artist: String;
  pieceName: String;
  pieceDesc: String;
}

export const Plaque: React.FC<PlaqueProps> = ({
  artist,
  pieceName,
  pieceDesc,
}) => {
  return (
    <>
      <PlaqueArea>
        <TextWrapper>
          <Artist>{artist}</Artist>
          <PieceName>{pieceName}</PieceName>
          <PieceDesc>{pieceDesc}</PieceDesc>
        </TextWrapper>
        <IconList icons={[Zoom]} height={"20px"} />
      </PlaqueArea>
    </>
  );
};
