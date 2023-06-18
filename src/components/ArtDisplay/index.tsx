import {
  HighlightDisplayContainer,
  ArtImg,
  PieceWrapper,
  FrameWrapper,
  ArtFrame,
} from "./ArtDisplayElements";

import { Plaque } from "../Plaque";
import { ArtPieceProps } from "../../types/artPiece";

export const ArtDisplay: React.FC<ArtPieceProps> = ({ artPieces, plaque }) => {
  if (artPieces.length === 0) {
    return null;
  }
  return (
    <HighlightDisplayContainer>
      {artPieces.map((piece, index) => {
        return (
          <PieceWrapper key={index}>
            <FrameWrapper>
              <ArtImg src={piece.asset} highlight={piece.highlight} />
              <ArtFrame src={piece.frame} highlight={piece.highlight} />
            </FrameWrapper>
            {plaque === false ? null : (
              <Plaque
                artist={piece.artist.name}
                pieceName={piece.name}
                pieceDesc={piece.description}
              />
            )}
          </PieceWrapper>
        );
      })}
    </HighlightDisplayContainer>
  );
};
