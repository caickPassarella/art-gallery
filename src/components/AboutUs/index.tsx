import {
  SectionTitle,
  Paragraph,
  ArtDisplay,
  IconList,
} from "../../components";
import { ArtPieceProps } from "../../types/artPiece";

import { Pinterest, Instagram } from "../../assets";

import {
  Container,
  Wrapper,
  ParagraphWrapper,
  SocialsWrapper,
  BrandName,
} from "./AboutUsElements";

export const AboutUs: React.FC<ArtPieceProps> = ({ artPieces }) => {
  return (
    <Wrapper>
      <Container>
        <SectionTitle title="About us" type="Section" />
        <ParagraphWrapper>
          <Paragraph
            title="WHY"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue nibh, commodo posuere ligula vel, tristique suscipit elit. Sed pretium lacus ut turpis iaculis cursus. Nullam tincidunt tortor tellus, vel mollis ligula tincidunt."
          />
          <Paragraph
            title="Gallery"
            text="Condimentum. Pellentesque pulvinar accumsan enim, eu commodo ipsum condimentum eget. Quisque vulputate velit non sagittis congue. Nullam tristique metus non lorem hendrerit egestas. Proin placerat dui eget turpis ultricies hendrerit. Maecenas maximus condimentum."
          />
          <SocialsWrapper>
            <BrandName>SIMPLISTIK</BrandName>
            <IconList height="35px" icons={[Pinterest, Instagram]} />
          </SocialsWrapper>
        </ParagraphWrapper>
      </Container>
      <Container>
        <ArtDisplay plaque={false} artPieces={artPieces} />
      </Container>
    </Wrapper>
  );
};
