"use strict";
// interfaces
function afficherInfoProfessionelle(personne) {
    if ("poste" in personne) {
        console.log("Employé: " + personne.nom + " travaille comme " + personne.poste);
    }
    else {
        console.log("Client: " + personne.nom + " est associé à l'entreprise " + personne.etreprise);
    }
}
let employe1 = { nom: "Mohamed", etreprise: "facebook" };
let employe2 = { nom: "Ahmed", poste: "Développeur" };
afficherInfoProfessionelle(employe1); // Client: Mohamed est associé à l'entreprise facebook
afficherInfoProfessionelle(employe2); // Employé: Ahmed travaille comme Développeur
