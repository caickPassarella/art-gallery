import { ArtPiece } from "../types/artPiece";

export const selectRandomHighlightArt = (arr: ArtPiece[]): ArtPiece => {
  const highlightedPieces = arr.filter((piece) => piece.highlight === true);
  const originalArr = highlightedPieces.slice();

  let randomIndex = Math.floor(Math.random() * highlightedPieces.length);
  let randomItem = highlightedPieces[randomIndex];
  highlightedPieces.splice(randomIndex, 1);

  // Reset array after a full rotation
  if (highlightedPieces.length === 0) {
    highlightedPieces.splice(0, highlightedPieces.length, ...originalArr);
  }

  return randomItem;
};
