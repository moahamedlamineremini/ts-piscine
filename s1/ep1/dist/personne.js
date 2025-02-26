"use strict";
//Implémentation d'une fonction d'affichage
function afficherPersonne(Personne) {
    console.log("Bonjour, je m'appelle " + Personne.nom
        + " et j'ai " + Personne.age + " ans.");
}
//Création d'un objet et appel de la fonction et appeler la fonction afficherPersonne
let personne1 = { nom: "Mohamed", age: 25 };
afficherPersonne(personne1);
