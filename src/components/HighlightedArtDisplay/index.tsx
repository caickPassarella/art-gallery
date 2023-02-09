import {
  HighlightDisplayContainer,
  ArtImg,
} from "./HighlightedArtDisplayElements";
import { Art8 } from "../../images";

export const HighlightedArtDisplay = () => {
  return (
    <HighlightDisplayContainer>
      <ArtImg src={Art8} />
    </HighlightDisplayContainer>
  );
};
