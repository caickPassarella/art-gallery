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

export interface ArtistInfo {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  info: { label: string; value: string }[];
}

export interface ArtPieceProps {
  artPieces: ArtPiece[];
  plaque?: boolean;
}
