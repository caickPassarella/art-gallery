import { useEffect, useState } from "react";
import {
  Container,
  Navbar,
  AboutUs,
  ContactUs,
  Footer,
  SectionTitle,
  ArtDisplay,
  Plaque,
  Button,
} from "../components";

import { ArtPiece, ArtPieceProps } from "../types/artPiece";

export const LandingPage = ({ artPieces }: ArtPieceProps) => {
  const [normalArtPiece, setNormalArtPiece] = useState<ArtPiece[]>([]);
  const [highlightArtPiece, setHighlightArtPiece] = useState<ArtPiece[]>([]);

  useEffect(() => {
    const normalArtData = artPieces.filter((art) => !art.highlight);
    const highlightArtData = artPieces.filter((art) => art.highlight);
    setHighlightArtPiece([highlightArtData[0]]);
    setNormalArtPiece(normalArtData.slice(0, 2));
  }, [artPieces]);

  return (
    <>
      <Container>
        <Navbar />
      </Container>
      <Container align="center">
        <SectionTitle
          title="Art Gallery"
          subtitle="Explore the art"
          type="Main"
        />
        <ArtDisplay artPieces={highlightArtPiece} />
        <ArtDisplay artPieces={normalArtPiece} />
        <Button>Full Gallery</Button>
        <AboutUs artPieces={[artPieces[0]]} />
      </Container>
    </>
  );
};
