import { useEffect, useState } from "react";
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

import {
  Art0,
  Art1,
  Art2,
  Art3,
  Art4,
  Art5,
  Art6,
  Art7,
  Art8,
} from "../images";

import { selectRandomIndex } from "../utils";

export const LandingPage = () => {
  const [currentArt, setCurrentArt] = useState(Art8);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const randomArt = selectRandomIndex([
      Art0,
      Art1,
      Art2,
      Art3,
      Art4,
      Art5,
      Art6,
      Art7,
      Art8,
    ]);
    setCurrentArt(randomArt);
    setImgLoaded(true);
  }, []);

  return (
    <Container>
      <Navbar />
      <SectionTitle
        title="Art Gallery"
        subtitle="Explore the art"
        type="Main"
      />
      {imgLoaded ? <HighlightedArtDisplay src={currentArt} /> : null}

      {/* <ArtPieceBlock />
    <AboutUs />
    <ContactUs />
    <Footer /> */}
    </Container>
  );
};
