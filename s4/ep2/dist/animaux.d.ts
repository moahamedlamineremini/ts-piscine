interface IAnimal {
    nom: string;
    seDeplacer(): void;
}
declare class Animal implements IAnimal {
    nom: string;
    constructor(nom: string);
    seDeplacer(): void;
}
declare class Chien extends Animal {
    nom: string;
    constructor(nom: string);
    seDeplacer(): void;
}
declare class Chat extends Animal {
    nom: string;
    constructor(nom: string);
    seDeplacer(): void;
}
declare function faireSeDeplacer(animal: IAnimal[]): void;
declare let tableauAnimaux: IAnimal[];
