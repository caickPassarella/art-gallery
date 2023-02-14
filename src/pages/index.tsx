import {
  Container,
  Navbar,
  ArtPieceBlock,
  AboutUs,
  ContactUs,
  Footer,
  SectionTitle,
  HighlightedArtDisplay,
  Plaque,
} from "../components";

import { Art8 } from "../images";

export const LandingPage = () => (
  <Container>
    <Navbar />
    <SectionTitle title="Art Gallery" subtitle="Explore the art" type="Main" />
    <HighlightedArtDisplay src={Art8} />
    {/* <ArtPieceBlock />
    <AboutUs />
    <ContactUs />
    <Footer /> */}
  </Container>
);
