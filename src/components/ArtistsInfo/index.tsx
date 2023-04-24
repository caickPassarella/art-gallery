import { SectionTitle, Paragraph } from "../../components";
import { Container, ArtistWrapper, ArtShowcase } from "./ArtistsInfoElements";

interface ArtistsInfoProps {
  artHighlight: string;
}

export const ArtistsInfo = ({ artHighlight }: ArtistsInfoProps) => {
  return (
    <>
      <SectionTitle
        title="Artists"
        subtitle="Discover more about our feature artists"
        type="Section"
      />
      <Container>
        <ArtistWrapper>
          <SectionTitle
            title="Vincent Van Gogh"
            subtitle="Dutch Painter"
            type="Section"
          />
          <Paragraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis magna in metus mattis dapibus at in nulla. Vestibulum id felis tincidunt, facilisis tellus id, volutpat nulla." />
        </ArtistWrapper>
        <ArtShowcase src={artHighlight} />
      </Container>
    </>
  );
};
