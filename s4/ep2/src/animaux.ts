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

class Chien extends Animal {
    constructor(public nom: string) {
        super(nom);
    }
     
    seDeplacer() {
        console.log("Le chien " + this.nom + " court");
    }
}

class Chat extends Animal {
    constructor(public nom: string) {
        super(nom);
    }
     
    seDeplacer() {
        console.log("Le chat " + this.nom + " saute");
    }
}

function faireSeDeplacer(animal: IAnimal[]){
    for(let i = 0; i < animal.length; i++){
        animal[i].seDeplacer();
    }
}

// cree un tableau de chien et chat
let tableauAnimaux: IAnimal[] = [new Chien("Rex"), new Chat("Felix")];
faireSeDeplacer(tableauAnimaux);