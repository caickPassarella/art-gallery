import {
  HighlightDisplayContainer,
  ArtImg,
  ImgWrapper,
} from "./ArtDisplayElements";

import { Plaque } from "../Plaque";
import { ArtPieceProps } from "../../types/artPiece";

export const ArtDisplay = ({ artPieces }: ArtPieceProps) => {
  console.log(artPieces);
  if (artPieces.length === 0) {
    return null; // or return some default component or message
  }
  return (
    <HighlightDisplayContainer>
      {artPieces.map((piece, index) => {
        return (
          <ImgWrapper key={index}>
            <ArtImg src={piece.asset} highlight={piece.highlight} />
            <Plaque
              artist={piece.artist.name}
              pieceName={piece.name}
              pieceDesc={piece.description}
            />
          </ImgWrapper>
        );
      })}
    </HighlightDisplayContainer>
  );
};
