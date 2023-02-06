import {
  Container,
  Navbar,
  ArtPieceBlock,
  AboutUs,
  ContactUs,
  Footer,
  SectionTitle,
} from "../components";

export const LandingPage = () => (
  <Container>
    <Navbar />
    <SectionTitle title="Art Gallery" subtitle="Explore the art" type="Main" />
    {/* <ArtPieceBlock />
    <AboutUs />
    <ContactUs />
    <Footer /> */}
  </Container>
);
