import { Fighter } from "../types/match";

//Just a promo for SATABASE
export const fighters: Fighter[] = [
  { id: "phos", name: "Phosphophyllite", elo: 1000, gamePlayed: 0, imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.zerochan.net%2FPhosphophyllite.full.2207666.png&f=1&nofb=1&ipt=51ce22e127ba4b1f76925e4a5b016349f4bf92e80b7c050eb1016e1926e234b2" },
  { id: "asta", name: "Asta", elo: 790, gamePlayed: 0, imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F942654.jpg&f=1&nofb=1&ipt=658765008e66f84dac552ad54ff30bb09c63eb02fadfbf027dfd941b35b2c3cd" },
  { id: "naruto", name: "Naruto", elo: 720, gamePlayed: 0, imageUrl: "https://galaxypfp.com/wp-content/uploads/2025/10/naruto-pfp.webp" },
  { id: "luffy", name: "Luffy", elo: 840, gamePlayed: 0, imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.wallpapersden.com%2Fimage%2Fdownload%2Fanime-one-piece-hd-monkey-luffy-painting_bWtrZWqUmZqaraWkpJRnZWVlrWZnbW0.jpg&f=1&nofb=1&ipt=d19e985d0ac9025d798eaa9e08350bac7f9ff346a614a9ccb611e60f8e61efde" },
  { id: "wou", name: "Wonder Of You", elo: 1400, gamePlayed: 0, imageUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2382762/ss_9922ce424ca9bf9aad6cdd88a979da6dcc058577.1920x1080.jpg?t=1705639151" },
  { id: "subaru", name: "Subaru Natsuki", elo: 1000, gamePlayed: 0, imageUrl: "https://i1.sndcdn.com/artworks-WcerKONPOLBXuijt-FAxkvg-t1080x1080.png" },
  { id: "agni", name: "Agni", elo: 900, gamePlayed: 0, imageUrl: "https://miro.medium.com/v2/1*7PU3iSCqrm7rGAiif81BBg.jpeg" },
  { id: "agni-ev", name: "Agni (Evaken)", elo: 1200, gamePlayed: 0, imageUrl: "https://i.pinimg.com/originals/56/d3/fc/56d3fc037bc6f6fd4ade7d834c0d0781.jpg" },
  { id: "god", name: "God", elo: 2000, gamePlayed: 0, imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Michelangelo%2C_Creation_of_Adam_04.jpg" },
  { id: "shido", name: "Shido", elo: 100, gamePlayed: 1100, imageUrl: "https://i.ytimg.com/vi/KydBJfu-U4c/maxresdefault.jpg" },
  { id: "yaldabaoth", name: "Yaldabaoth", elo: 1600, gamePlayed: 0, imageUrl: "https://samurai-gamers.com/wp-content/uploads/2017/05/yaldabaoth-final-boss.jpg" },
];

export function getFighter(id: string) {  
  return fighters.find(f => f.id === id);
}
