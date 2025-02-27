"use strict";
class Animal {
    constructor(nom) {
        this.nom = nom;
        this.nom = nom;
    }
    seDeplacer() {
        console.log("L'animal " + this.nom + " se déplace");
    }
}
class Chien extends Animal {
    constructor(nom) {
        super(nom);
        this.nom = nom;
    }
    seDeplacer() {
        console.log("Le chien " + this.nom + " court");
    }
}
class Chat extends Animal {
    constructor(nom) {
        super(nom);
        this.nom = nom;
    }
    seDeplacer() {
        console.log("Le chat " + this.nom + " saute");
    }
}
function faireSeDeplacer(animal) {
    for (let i = 0; i < animal.length; i++) {
        animal[i].seDeplacer();
    }
}
// cree un tableau de chien et chat
let tableauAnimaux = [new Chien("Rex"), new Chat("Felix")];
faireSeDeplacer(tableauAnimaux);
