"use strict";
class Forme {
}
class Rectangle extends Forme {
    constructor(largeur, hauteur) {
        super();
        this.largeur = largeur;
        this.hauteur = hauteur;
    }
    calculerSurface() {
        return this.largeur * this.hauteur;
    }
}
class Cercle extends Forme {
    constructor(rayon) {
        super();
        this.rayon = rayon;
    }
    calculerSurface() {
        return Math.PI * this.rayon * this.rayon;
    }
}
const rectangle = new Rectangle(10, 20);
console.log(rectangle.calculerSurface()); // 200
const cercle = new Cercle(5);
console.log(cercle.calculerSurface()); // 78.53981633974483
