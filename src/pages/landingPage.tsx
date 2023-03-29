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

import { selectRandomHighlightArt } from "../utils/artPiece";
import { ArtPiece } from "../types/artPiece";
import { fetchArtPieces } from "../services/api";

export const LandingPage = () => {
  const [currentArt, setCurrentArt] = useState<ArtPiece | "loading">("loading");

  // Random art rotation until backend is finished for proper rotation.
  useEffect(() => {
    const currentRandomArt = async () => {
      const artData = await fetchArtPieces();
      const randomHighlightArt = selectRandomHighlightArt(artData);
      setCurrentArt(randomHighlightArt);
    };
    currentRandomArt();
  }, []);

  return (
    <Container>
      <Navbar />
      <SectionTitle
        title="Art Gallery"
        subtitle="Explore the art"
        type="Main"
      />
      {currentArt !== "loading" ? (
        <HighlightedArtDisplay
          src={currentArt.asset}
          artist={currentArt.artist.name}
          pieceName={currentArt.name}
          pieceDesc={currentArt.description}
        />
      ) : null}

      {/* <ArtPieceBlock />
    <AboutUs />
    <ContactUs />
    <Footer /> */}
    </Container>
  );
};
