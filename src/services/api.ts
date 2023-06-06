import { ArtPiece, ArtistInfo } from "../types/artPiece";

export const fetchArtPieces = async (): Promise<ArtPiece[]> => {
  const response = await fetch("/artPieces.json");
  const data = await response.json();
  return data.artPieces;
};

export const fetchArtistsInfo = async (): Promise<ArtistInfo[]> => {
  const response = await fetch("/artistInfo.json");
  const data = await response.json();
  return data.artists;
};
