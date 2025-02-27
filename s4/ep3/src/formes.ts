abstract class Forme {
    abstract calculerSurface(): number; // Méthode abstraite    
}

class Rectangle extends Forme {
    largeur: number;
    hauteur: number;
    constructor(largeur: number, hauteur: number) {
        super();
        this.largeur = largeur;
        this.hauteur = hauteur;
    }
    calculerSurface(): number {
        return this.largeur * this.hauteur;
    }
}

class Cercle extends Forme {
    rayon: number;
    constructor(rayon: number) {
        super();
        this.rayon = rayon;
    }
    calculerSurface(): number {
        return Math.PI * this.rayon * this.rayon;
    }
}

const rectangle = new Rectangle(10, 20);
console.log(rectangle.calculerSurface()); // 200

const cercle = new Cercle(5);
console.log(cercle.calculerSurface()); // 78.53981633974483