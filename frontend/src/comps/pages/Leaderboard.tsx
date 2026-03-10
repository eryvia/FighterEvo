import { useEffect, useState } from "react";
import { fetchFighters } from "../../api/fetchFighters";
import type { Fighter } from "../../types/Fighter";
import { PrintFighters } from "./Leaderboard-fighters/fetchLeaderboard";

export default function Leaderboard() {
    const [fighters, setFighters] = useState<Fighter[]>([]);
    
    useEffect(() => {
        fetchFighters()
            .then(setFighters)
            .catch(err => console.error("Failed to fetch fighters", err));
    }, []);
    
  return (
    <div style={{ padding: "2rem", color: "#fff" }}>
      <h1>Leaderboard</h1>
        <PrintFighters fighters={fighters} />
    </div>
  );
}


