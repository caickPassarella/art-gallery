export interface ArtPiece {
  asset: string;
  name: string;
  description: string;
  year: number;
  artist: {
    name: string;
    birthyear: number;
    deathYear?: number;
  };
}
