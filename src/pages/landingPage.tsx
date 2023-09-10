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
    setHighlightArtPiece(highlightArtData);
  }, [artPieces]);

  return (
    <>
      <Container align="normal" bgColor="#FEEA83">
        <Navbar />
      </Container>
      <Container bgColor="#FEEA83">
        <SectionTitle
          title="Art Gallery"
          subtitle="Explore the art"
          type="Main"
        />
        <ArtDisplay plaque={true} artPieces={highlightArtPiece.slice(0, 1)} />
        <ArtDisplay plaque={true} artPieces={normalArtPiece} />
        <Button>Full Gallery</Button>
        <AboutUs artPieces={[artPieces[9]]} />
        <ArtistsInfo artists={artists} artHighlight={artPieces} />
        <ContactUs />
      </Container>
    </>
  );
};
