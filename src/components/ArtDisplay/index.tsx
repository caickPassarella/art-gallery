import {
  HighlightDisplayContainer,
  ArtImg,
  ImgWrapper,
} from "./ArtDisplayElements";

import { Plaque } from "../Plaque";
import { ArtPiece } from "../../types/artPiece";

interface ArtDisplayProps {
  pieces: ArtPiece[];
}

export const ArtDisplay = ({ pieces }: ArtDisplayProps) => {
  return (
    <HighlightDisplayContainer>
      {pieces.map((artPiece, index) => {
        return (
          <ImgWrapper key={index}>
            <ArtImg src={artPiece.asset} highlight={artPiece.highlight} />
            <Plaque
              artist={artPiece.artist.name}
              pieceName={artPiece.name}
              pieceDesc={artPiece.description}
            />
          </ImgWrapper>
        );
      })}
    </HighlightDisplayContainer>
  );
};
