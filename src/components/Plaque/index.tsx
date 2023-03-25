import {
  PlaqueContainer,
  PlaqueArea,
  TextWrapper,
  H1,
  H2,
  P,
} from "./PlaqueElements";

type Props = {
  artist: String;
  pieceName: String;
  pieceDesc: String;
};

export const Plaque = ({ artist, pieceName, pieceDesc }: Props) => {
  return (
    <PlaqueContainer>
      <PlaqueArea>
        <TextWrapper>
          <H2>{artist}</H2>
          <H1>{pieceName}</H1>
          <P>{pieceDesc}</P>
        </TextWrapper>
      </PlaqueArea>
    </PlaqueContainer>
  );
};
