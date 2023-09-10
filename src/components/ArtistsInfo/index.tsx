import { useState, useEffect, useMemo } from "react";
import {
  SectionTitle,
  Paragraph,
  Pagination,
  BrandSlogan,
} from "../../components";
import {
  Container,
  Wrapper,
  ArtShowcase,
  ArtistText,
  BoldText,
  PaginationWrapper,
} from "./ArtistsInfoElements";

import { ArtistInfo, ArtPiece } from "../../types/artPiece";

interface ArtistsInfoProps {
  artHighlight: ArtPiece[];
  artists: ArtistInfo[];
}

export const ArtistsInfo: React.FC<ArtistsInfoProps> = ({
  artHighlight,
  artists,
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentArtistPiece, setCurrentArtistPiece] = useState<string>();

  const currentArtist = artists[currentPage];

  const artistPiecesMap = useMemo(() => {
    const map = new Map<string, string>();
    artHighlight.forEach((artPiece) => {
      map.set(artPiece.artist.name, artPiece.asset);
    });
    return map;
  }, [artHighlight]);

  useEffect(() => {
    setCurrentArtistPiece(artistPiecesMap.get(currentArtist.name));
  }, [artistPiecesMap, currentArtist.name]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <SectionTitle
        title="Artists"
        subtitle="Discover more about our featured artists"
        type="Section"
      />
      <Container>
        <Wrapper>
          <SectionTitle
            title={currentArtist.name}
            subtitle={currentArtist.subtitle}
            type="Section"
          />
          <Paragraph text={currentArtist.description} />
          {currentArtist.info.map((item, index) => (
            <ArtistText key={index}>
              <BoldText>{item.label} </BoldText>
              {item.value}
            </ArtistText>
          ))}
          <PaginationWrapper>
            <Pagination
              numOfPages={artists.length}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </PaginationWrapper>
        </Wrapper>
        {currentArtistPiece && <ArtShowcase src={currentArtistPiece} />}
      </Container>
    </>
  );
};

// <BrandSlogan name="Abstract Purple" slogan="Vicent Van Gogh" />
