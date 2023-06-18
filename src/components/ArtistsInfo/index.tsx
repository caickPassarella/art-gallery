import { useState, useEffect } from "react";
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
  const [currentArtistPiece, setCurrentArtistPiece] = useState<ArtPiece>();

  const currentArtist = artists[currentPage];

  useEffect(() => {
    setCurrentArtistPiece(
      artHighlight.find(
        (artPiece) => currentArtist.name === artPiece.artist.name
      )
    );
  }, [artHighlight, currentArtist.name]);

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
            <BrandSlogan name="Abstract Purple" slogan="Vicent Van Gogh" />
          </PaginationWrapper>
        </Wrapper>
        {currentArtistPiece && <ArtShowcase src={currentArtistPiece.asset} />}
      </Container>
    </>
  );
};
