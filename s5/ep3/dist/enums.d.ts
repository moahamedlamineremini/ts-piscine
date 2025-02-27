declare enum Direction {
    Nord = 0,
    Sud = 1,
    Est = 2,
    Ouest = 3
}
declare function vecteurDirection(direction: Direction): [number, number];
declare function deplacer(point: [number, number], direction: Direction): [number, number];
declare const pointInitial: [number, number];
declare const point1: [number, number];
declare const point2: [number, number];
