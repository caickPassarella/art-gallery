import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { LandingPage } from "./pages/landingPage";
import { fetchArtPieces } from "./services/api";
import { ArtPiece } from "./types/artPiece";

function App() {
  const [ArtPieces, setArtPieces] = useState<ArtPiece[]>([]);

  useEffect(() => {
    const fetchArtPiece = async () => {
      const artData = await fetchArtPieces();
      setArtPieces(artData);
    };
    fetchArtPiece();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {ArtPieces.length > 0 && (
          <Route path="/" element={<LandingPage artPieces={ArtPieces} />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
