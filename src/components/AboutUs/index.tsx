import { SectionTitle } from "../SectionTitle";
import { Paragraph } from "../Paragraph";
import { ArtDisplay } from "../ArtDisplay";
import { ArtPieceProps } from "../../types/artPiece";

import { Container, Wrapper } from "./AboutUsElements";

export const AboutUs = ({ artPieces }: ArtPieceProps) => {
  return (
    <Wrapper>
      <Container>
        <SectionTitle title="About us" type="Section" />
        <Paragraph
          title="WHY"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue nibh, commodo posuere ligula vel, tristique suscipit elit. Sed pretium lacus ut turpis iaculis cursus. Nullam tincidunt tortor tellus, vel mollis ligula tincidunt."
        />
      </Container>
      <Container>
        <ArtDisplay artPieces={artPieces} />
      </Container>
    </Wrapper>
  );
};
