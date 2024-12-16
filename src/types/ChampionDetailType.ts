export interface Info {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
}

export interface Image {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface ChampionDetail {
  id: string;
  name: string;
  title: string;
  blurb: string;
  info: Info;
  image: Image;
}

export interface ChampionDetailData {
  [key: string]: ChampionDetail;
}
