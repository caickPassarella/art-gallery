import { ArtPiece } from "../types/artPiece";

export const fetchArtPieces = async (): Promise<ArtPiece[]> => {
  const response = await fetch("/artPieces.json");
  const data = await response.json();
  return data.artPieces;
};
