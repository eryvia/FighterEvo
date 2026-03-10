import { SelectionBox } from "./comps/SelectionBox";
import { useState, useEffect } from "react";
//import FighterList from "./comps/FigtherList";
import { fetchMatch } from "./api/fetchMatch";
import { fetchFighters } from "./api/fetchFighters";
import type { Fighter } from "./types/Fighter";
import type { Option } from "./comps/SelectionBox";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./comps/Navbar";
import Home from "./comps/pages/Home";
import Leaderboard from "./comps/pages/Leaderboard";

export default function App() {

  //stored my fighters
  const [fighterA, setFighterA] = useState<Fighter | null>(null);
  const [fighterB, setFighterB] = useState<Fighter | null>(null);

  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    fetch2Fighters(setFighterA, setFighterB);
  }, []);

  const handleSelect = async (picked: Option) => {
    if (!fighterA || !fighterB) return;

    setSelectedOption(picked);

    const result = await fetchMatch({
      aId: fighterA.id,
      bId: fighterB.id,
      picked,
    });


    setIsShown(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    setFighterA(result.nextA);
    setFighterB(result.nextB);

    setSelectedOption(null);
    setIsShown(false);
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/evo" element={
          <>
            <div style={{
              display: "flex",
              height: "100vh",
              width: "100%",
              position: "relative",
              overflow: "hidden",
            }}>
              <SelectionBox
                fighter={fighterA?.name ?? "Unknown"}
                option="a"
                elo={fighterA?.elo ?? 0}
                imageUrl={fighterA?.imageUrl}
                isShown={isShown}
                selectedOption={selectedOption}
                onSelect={handleSelect}
              />

              {/* VS divider */}
              <div style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                background: "#0a0a0a",
                border: "3px solid #333",
                boxShadow: "0 0 30px rgba(0,0,0,0.8)",
                fontWeight: 900,
                fontSize: "1.1rem",
                letterSpacing: "1px",
                color: "#fff",
                userSelect: "none",
              }}>
                VS
              </div>

              <SelectionBox
                fighter={fighterB?.name ?? "Unknown"}
                option="b"
                elo={fighterB?.elo ?? 0}
                imageUrl={fighterB?.imageUrl}
                isShown={isShown}
                selectedOption={selectedOption}
                onSelect={handleSelect}
              />
            </div>
            {/*<FighterList />*/}
          </>
        } />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}


function fetch2Fighters(setFighterA: (name: Fighter) => void, setFighterB: (name: Fighter) => void) {
  fetchFighters()
    .then((fighters) => {
      console.log("Fetched Fighters:", fighters);

      setFighterA(fighters[0]);
      setFighterB(fighters[1]);

    })
    .catch(console.error);
}


