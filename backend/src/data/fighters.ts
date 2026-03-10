import { Fighter } from "../types/match";

//Just a promo for SATABASE
export const fighters: Fighter[] = [
  { id: "phos", name: "Phosphophyllite", elo: 123, gamePlayed: 10, imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.zerochan.net%2FPhosphophyllite.full.2207666.png&f=1&nofb=1&ipt=51ce22e127ba4b1f76925e4a5b016349f4bf92e80b7c050eb1016e1926e234b2" },
  { id: "asta", name: "Asta", elo: 42, gamePlayed: 5, imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F942654.jpg&f=1&nofb=1&ipt=658765008e66f84dac552ad54ff30bb09c63eb02fadfbf027dfd941b35b2c3cd" },
  { id: "naruto", name: "Naruto", elo: 80, gamePlayed: 7, imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnaruto-official.com%2Fabout%2Fhero.webp&f=1&nofb=1&ipt=68adcc650595e59469710b12c95e4a6ab9a072696dac15aac82bbafe9f671895" },
  { id: "luffy", name: "Luffy", elo: 160, gamePlayed: 12, imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.wallpapersden.com%2Fimage%2Fdownload%2Fanime-one-piece-hd-monkey-luffy-painting_bWtrZWqUmZqaraWkpJRnZWVlrWZnbW0.jpg&f=1&nofb=1&ipt=d19e985d0ac9025d798eaa9e08350bac7f9ff346a614a9ccb611e60f8e61efde" },
];

export function getFighter(id: string) {  
  return fighters.find(f => f.id === id);
}
