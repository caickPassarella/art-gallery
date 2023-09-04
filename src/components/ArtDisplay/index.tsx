import {
  HighlightDisplayContainer,
  PieceWrapper,
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
            <ArtFrame
              src={piece.frame}
              artImage={piece.asset}
              highlight={piece.highlight}
            />
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
