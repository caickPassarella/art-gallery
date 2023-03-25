import { ArtPiece } from "../types/artPiece";

export const selectRandomArt = (arr: any[]): ArtPiece => {
  const originalArr = arr.slice();

  let randomIndex = Math.floor(Math.random() * arr.length);
  let randomItem = arr[randomIndex];
  arr.splice(randomIndex, 1);

  // Reset array after a full rotation
  if (arr.length === 0) {
    arr.splice(0, arr.length, ...originalArr);
  }

  return randomItem;
};
