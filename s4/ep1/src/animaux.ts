interface IAnimal {
    nom: string;
    seDeplacer(): void;
}


class Animal implements IAnimal {
    constructor(public nom: string) {
        this.nom = nom;
    }
     
    seDeplacer() {
        console.log("L'animal " + this.nom + " se déplace");
    }
}


let animal = new Animal("Leo");
animal.seDeplacer();
