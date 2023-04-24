import { useEffect, useState } from "react";
import {
  Container,
  Navbar,
  ArtPieceBlock,
  AboutUs,
  ContactUs,
  Footer,
  SectionTitle,
  ArtDisplay,
  Plaque,
} from "../components";

import { ArtPiece } from "../types/artPiece";
import { fetchArtPieces } from "../services/api";

export const LandingPage = () => {
  const [normalArtPiece, setNormalArtPiece] = useState<ArtPiece[]>([]);
  const [highlightArtPiece, setHighlightArtPiece] = useState<ArtPiece[]>([]);

  // Random art rotation until backend is finished for proper rotation.
  useEffect(() => {
    const artnormalArtPiece = async () => {
      const artData = await fetchArtPieces();
      const normalArtData = artData.filter((art) => !art.highlight);
      const highlightArtData = artData.filter((art) => art.highlight);
      setHighlightArtPiece([highlightArtData[0]]);
      setNormalArtPiece(normalArtData.slice(0, 2));
    };
    artnormalArtPiece();
  }, []);

  return (
    <Container>
      <Navbar />
      <SectionTitle
        title="Art Gallery"
        subtitle="Explore the art"
        type="Main"
      />
      <ArtDisplay pieces={highlightArtPiece} />
      <ArtDisplay pieces={normalArtPiece} />
    </Container>
  );
};
