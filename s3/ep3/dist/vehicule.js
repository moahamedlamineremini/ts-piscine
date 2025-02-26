"use strict";
function isVehicule(obj) {
    if (obj.marque && obj.annee) {
        return true;
    }
    else {
        return false;
    }
}
function afficherVehicule(vehicule) {
    if (isVehicule(vehicule)) {
        console.log("Véhicule : " + vehicule.marque + " de l'année " + vehicule.annee + " est valide.");
    }
    else {
        console.log("Objet invalide pour un véhicule.");
    }
}
let voiture = { marque: "Toyota", annee: 2019 };
afficherVehicule(voiture);
