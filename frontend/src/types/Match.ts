import type { Fighter } from "./Fighter";

export type MatchResult = {
  nextA: Fighter;
  nextB: Fighter;
  winnerId: string;
  FighterA_Elo: number;
  loserId: string;
  FighterB_Elo: number;
  delta: Record<string, number>; 
};