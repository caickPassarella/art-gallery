import {
  HighlightDisplayContainer,
  ArtImg,
  ImgWrapper,
} from "./HighlightedArtDisplayElements";

import { Plaque } from "../Plaque";

type Props = {
  src: string;
};

export const HighlightedArtDisplay = ({ src }: Props) => {
  return (
    <HighlightDisplayContainer>
      <ImgWrapper>
        <ArtImg {...{ src }} />
        <Plaque />
      </ImgWrapper>
    </HighlightDisplayContainer>
  );
};
