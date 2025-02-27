"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["Nord"] = 0] = "Nord";
    Direction[Direction["Sud"] = 1] = "Sud";
    Direction[Direction["Est"] = 2] = "Est";
    Direction[Direction["Ouest"] = 3] = "Ouest";
})(Direction || (Direction = {}));
function vecteurDirection(direction) {
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
function deplacer(point, direction) {
    const [dx, dy] = vecteurDirection(direction);
    return [point[0] + dx, point[1] + dy];
}
/*
- Définissez un point initial (par exemple, [5, 5]).
- Appliquez la fonction deplacer avec différentes valeurs de Direction (par exemple, Direction.Nord, Direction.Est, etc.) et affichez les nouveaux points obtenus dans la console.
*/
const pointInitial = [5, 5];
const point1 = deplacer(pointInitial, Direction.Nord);
console.log(point1); // [5, 6]
const point2 = deplacer(pointInitial, Direction.Sud);
console.log(point2); // [5, 4]
