import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { LandingPage } from "./pages/landingPage";
import { fetchArtPieces, fetchArtistsInfo } from "./services/api";
import { ArtPiece, ArtistInfo } from "./types/artPiece";

function App() {
  const [ArtPieces, setArtPieces] = useState<ArtPiece[]>([]);
  const [Artists, setArtists] = useState<ArtistInfo[]>([]);

  useEffect(() => {
    const fetchArtPiece = async () => {
      const artData = await fetchArtPieces();
      setArtPieces(artData);
    };

    const fetchArtists = async () => {
      const artistData = await fetchArtistsInfo();
      setArtists(artistData);
    };
    fetchArtPiece();
    fetchArtists();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {ArtPieces.length > 0 && Artists.length > 0 && (
          <Route
            path="/"
            element={<LandingPage artPieces={ArtPieces} artists={Artists} />}
          />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
