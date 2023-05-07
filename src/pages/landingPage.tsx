import { useEffect, useState } from "react";
import {
  Container,
  Navbar,
  AboutUs,
  ContactUs,
  Footer,
  SectionTitle,
  ArtDisplay,
  Button,
  ArtistsInfo,
} from "../components";

import { ArtPiece, ArtistInfo } from "../types/artPiece";

interface LandingPageProps {
  artPieces: ArtPiece[];
  artists: ArtistInfo[];
}

export const LandingPage = ({ artPieces, artists }: LandingPageProps) => {
  const [normalArtPiece, setNormalArtPiece] = useState<ArtPiece[]>([]);
  const [highlightArtPiece, setHighlightArtPiece] = useState<ArtPiece[]>([]);

  useEffect(() => {
    const normalArtData = artPieces.filter((art) => !art.highlight);
    const highlightArtData = artPieces.filter((art) => art.highlight);
    setNormalArtPiece(normalArtData.slice(0, 2));
    setHighlightArtPiece([highlightArtData[0]]);
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
        <ArtDisplay plaque={true} artPieces={highlightArtPiece} />
        <ArtDisplay plaque={true} artPieces={normalArtPiece} />
        <Button>Full Gallery</Button>
        <AboutUs artPieces={[artPieces[9]]} />
        <ArtistsInfo artists={artists} artHighlight={artPieces[0].asset} />
      </Container>
    </>
  );
};
