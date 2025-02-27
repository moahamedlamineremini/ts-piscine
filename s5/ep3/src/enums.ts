enum Direction {
    Nord,
    Sud,
    Est,
    Ouest
}

function vecteurDirection(direction: Direction): [number, number] {
    switch (direction) {
        case Direction.Nord:
            return [0, 1];
        case Direction.Sud:
            return [0, -1];
        case Direction.Est:
            return [1, 0];
        case Direction.Ouest:
            return [-1, 0];
    }
}

function deplacer(
    point: [number, number],
    direction: Direction
  ): [number, number] {
    const [dx, dy] = vecteurDirection(direction);
    return [point[0] + dx, point[1] + dy];
  }


/*
- Définissez un point initial (par exemple, [5, 5]).
- Appliquez la fonction deplacer avec différentes valeurs de Direction (par exemple, Direction.Nord, Direction.Est, etc.) et affichez les nouveaux points obtenus dans la console.
*/

const pointInitial: [number, number] = [5, 5];
const point1 = deplacer(pointInitial, Direction.Nord);
console.log(point1); // [5, 6]
const point2 = deplacer(pointInitial, Direction.Sud);
console.log(point2); // [5, 4]
