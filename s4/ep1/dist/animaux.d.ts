interface IAnimal {
    nom: string;
    seDeplacer(): void;
}
declare class Animal implements IAnimal {
    nom: string;
    constructor(nom: string);
    seDeplacer(): void;
}
declare let animal: Animal;
