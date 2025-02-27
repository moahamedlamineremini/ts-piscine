"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GestionCours = exports.NiveauCours = void 0;
var NiveauCours;
(function (NiveauCours) {
    NiveauCours[NiveauCours["Debutant"] = 0] = "Debutant";
    NiveauCours[NiveauCours["Intermediaire"] = 1] = "Intermediaire";
    NiveauCours[NiveauCours["Avance"] = 2] = "Avance";
})(NiveauCours || (exports.NiveauCours = NiveauCours = {}));
function searchbycode(tableau, propriete, valeur) {
    return tableau.find((element) => element[propriete] === valeur);
}
class GestionCours {
    etudiants = [];
    cours = [];
    inscriptions = [];
    ajouterCours(nouveauCours) {
        this.cours.push(nouveauCours);
    }
    ajouterEtudiant(nouvelEtudiant) {
        this.etudiants.push(nouvelEtudiant);
    }
    inscrireEtudiant(coursCode, etudiant) {
        const courses = searchbycode(this.cours, "code", coursCode);
        if (!courses) {
            console.log("the courses are not defined");
        }
        else {
            this.inscriptions.push([etudiant, courses]);
            console.log(` ${etudiant.nom} a été inscrit au cours ${courses.titre}.`);
            this.notifierInscription(etudiant, courses);
        }
    }
    afficherInscriptions() {
        this.inscriptions.forEach(([etudiant, cours]) => {
            console.log(`- ${etudiant.nom} est inscrit au cours "${cours.titre}" (${NiveauCours[cours.niveau]})`);
        });
    }
    notifierInscription(etudiant, cours) {
        Promise.resolve().then(() => require("./moduleNotification")).then((module) => {
            module.notifier(`${etudiant.nom} a été inscrit au cours ${cours.titre}`);
        });
    }
}
exports.GestionCours = GestionCours;
