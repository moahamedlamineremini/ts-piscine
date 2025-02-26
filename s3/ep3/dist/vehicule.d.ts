interface Vehicule {
    marque: string;
    annee: number;
}
declare function isVehicule(obj: any): obj is Vehicule;
declare function afficherVehicule(vehicule: Vehicule): void;
declare let voiture: {
    marque: string;
    annee: number;
};
