import {
  Container,
  Navbar,
  ArtPieceBlock,
  AboutUs,
  ContactUs,
  Footer,
  SectionTitle,
  HighlightedArtDisplay,
} from "../components";

export const LandingPage = () => (
  <Container>
    <Navbar />
    <SectionTitle title="Art Gallery" subtitle="Explore the art" type="Main" />
    <HighlightedArtDisplay />
    {/* <ArtPieceBlock />
    <AboutUs />
    <ContactUs />
    <Footer /> */}
  </Container>
);
