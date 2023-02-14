import {
  PlaqueContainer,
  PlaqueArea,
  TextWrapper,
  H1,
  H2,
  P,
} from "./PlaqueElements";
export const Plaque = ({}) => {
  return (
    <PlaqueContainer>
      <PlaqueArea>
        <TextWrapper>
          <H2>Artist name</H2>
          <H1>Piece name</H1>
          <P>Piece description</P>
        </TextWrapper>
      </PlaqueArea>
    </PlaqueContainer>
  );
};
