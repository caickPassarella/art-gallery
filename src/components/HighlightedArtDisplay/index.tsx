import {
  HighlightDisplayContainer,
  ArtImg,
  ImgWrapper,
} from "./HighlightedArtDisplayElements";

import { Plaque } from "../Plaque";

type Props = {
  src: string;
  artist: String;
  pieceName: String;
  pieceDesc: String;
};

export const HighlightedArtDisplay = ({
  src,
  artist,
  pieceName,
  pieceDesc,
}: Props) => {
  return (
    <HighlightDisplayContainer>
      <ImgWrapper>
        <ArtImg src={src} />
        <Plaque artist={artist} pieceName={pieceName} pieceDesc={pieceDesc} />
      </ImgWrapper>
    </HighlightDisplayContainer>
  );
};
