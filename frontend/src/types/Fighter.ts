

// src/types/Fighter.ts
export type Fighter = {
  id: string;
  name: string;
  elo: number;
  gamePlayed: number;
  image_url?: string;
};

export type FightersResponse = {
  fighters: Fighter[];
};
