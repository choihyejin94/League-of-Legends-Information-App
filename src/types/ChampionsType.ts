export interface Image {
  "full": string;
  "sprite": string;
  "group": string;
  "x": number;
  "y": number;
  "w": number;
  "h": number;
}

export interface Champions {
  id: string;
  name: string;
  title: string;
  image: Image;
}

export interface ChampionsData {
  [key: string]: Champions;
}