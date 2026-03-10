import type { Fighter } from "../../../types/Fighter"

export function PrintFighters({ fighters }: { fighters: Fighter[] }) {
    return (
        <>
            {fighters.map((f: Fighter) => (
                <div key={f.id} style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
                    <img src={f.imageUrl} alt={f.name} style={{ width: "50px", height: "50px", borderRadius: "50%", marginRight: "1rem" }} />
                    <div>
                        <div>{f.name}</div>
                        <div>Elo: {f.elo}</div>
                        <div>Games Played: {f.gamePlayed}</div>
                    </div>
                </div>
            ))}
        </>
    )
}

