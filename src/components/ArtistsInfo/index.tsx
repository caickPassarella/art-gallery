import { useState } from "react";
import { SectionTitle, Paragraph, Pagination } from "../../components";
import {
  Container,
  Wrapper,
  ArtShowcase,
  ArtistText,
  BoldText,
  PaginationWrapper,
} from "./ArtistsInfoElements";

import { ArtistInfo } from "../../types/artPiece";

interface ArtistsInfoProps {
  artHighlight: string;
  artists: ArtistInfo[];
}

export const ArtistsInfo = ({ artHighlight, artists }: ArtistsInfoProps) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const currentArtist = artists[currentPage];

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

        <ArtShowcase src={artHighlight} />
      </Container>
    </>
  );
};
