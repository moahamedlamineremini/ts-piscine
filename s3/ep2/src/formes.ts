class Rectangle {
    largeur: number;
    hauteur: number;
    calculerSurface() {
        return this.largeur * this.hauteur;
    }

    constructor(largeur: number, hauteur: number) {
         this.largeur = largeur;
         this.hauteur = hauteur;
      }

}



class Cercle {
    rayon: number;
    calculerSurface() {
         return Math.PI * this.rayon * this.rayon;
      }

      constructor(rayon: number) {
            this.rayon = rayon;
         }
}

function afficherSurface(forme: Rectangle | Cercle): void {
    if(forme instanceof Rectangle) {
         console.log("Ceci est un rectangle de surface " + forme.calculerSurface());
         } else if(forme instanceof Cercle) {
               console.log("Ceci est un cercle de surface " + forme.calculerSurface());
             }
}

let r = new Rectangle(10, 5);
let c = new Cercle(3);
afficherSurface(r);  
afficherSurface(c);  