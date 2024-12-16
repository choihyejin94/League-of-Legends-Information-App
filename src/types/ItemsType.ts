export interface Image{
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
}

export interface Item {
    name: string;
    plaintext: string;
    image: Image;
}

export interface ItemData {
    [id: string]: Item;
}