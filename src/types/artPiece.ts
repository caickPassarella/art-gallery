export interface ArtPiece {
  id: number;
  asset: string;
  name: string;
  description: string;
  year: number;
  highlight: boolean;
  artist: {
    name: string;
    birthyear: number;
    deathYear?: number;
  };
}
