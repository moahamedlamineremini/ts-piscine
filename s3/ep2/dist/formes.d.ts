declare class Rectangle {
    largeur: number;
    hauteur: number;
    calculerSurface(): number;
    constructor(largeur: number, hauteur: number);
}
declare class Cercle {
    rayon: number;
    calculerSurface(): number;
    constructor(rayon: number);
}
declare function afficherSurface(forme: Rectangle | Cercle): void;
declare let r: Rectangle;
declare let c: Cercle;
