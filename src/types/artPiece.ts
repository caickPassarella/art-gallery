export interface ArtPiece {
  asset: string;
  name: string;
  description: string;
  year: number;
  highlight?: boolean;
  artist: {
    name: string;
    birthyear: number;
    deathYear?: number;
  };
}
