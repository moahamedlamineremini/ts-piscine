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

const direction = Direction.Nord;
const vecteur = vecteurDirection(direction);
console.log(vecteur); 
const direction1 = Direction.Sud;
const vecteur1 = vecteurDirection(direction1);
console.log(vecteur1); 


