export interface ArtPiece {
  id: number;
  asset: string;
  name: string;
  frame: string;
  description: string;
  year: number;
  highlight: boolean;
  artist: {
    name: string;
    birthyear: number;
    deathYear?: number;
  };
}

export interface ArtPieceProps {
  artPieces: ArtPiece[];
  plaque?: boolean;
}
