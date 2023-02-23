export const selectRandomIndex = (arr: string[]): string | null => {
  const originalArr = arr.slice();

  let randomIndex = Math.floor(Math.random() * arr.length);
  let randomItem = arr[randomIndex];
  arr.splice(randomIndex, 1);

  if (arr.length === 0) {
    arr.splice(0, arr.length, ...originalArr);
  }

  return randomItem;
};
