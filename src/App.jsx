import { useRef, useState } from "react";
import MainButton from "./components/MainButton";
import ImagePanel from "./components/ImagePanel";
import bgMusic from "/msc.mp3";

function App() {
  const [page, setPage] = useState(false);
  const audioRef = useRef(null);

  function handleStart() {
    setPage(true);

    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.warn("Navegador pode ter bloqueado o autoplay:", err);
      });
    }
  }

  return (
    <div className="starry-bg min-h-screen w-full flex items-center justify-center">
      <audio ref={audioRef} src={bgMusic} loop />

      {!page ? (
        <MainButton onClick={handleStart} />
      ) : (
        <ImagePanel />
      )}
    </div>
  );
}

export default App;
