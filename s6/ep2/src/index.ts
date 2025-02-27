import { GestionCours, Etudiant, Cours, NiveauCours } from "./gestionCours";

const gestion = new GestionCours();

gestion.ajouterCours({ code: "TS101", titre: "Introduction à TypeScript", niveau: NiveauCours.Debutant });
gestion.ajouterCours({ code: "JS201", titre: "JavaScript Avancé", niveau: NiveauCours.Intermediaire });

gestion.ajouterEtudiant({ id: 1, nom: "Alice Dupont", niveau: "Licence" });
gestion.ajouterEtudiant({ id: 2, nom: "Bob Martin", niveau: "Master" });

gestion.inscrireEtudiant("TS101", { id: 1, nom: "Alice Dupont", niveau: "Licence" });
gestion.inscrireEtudiant("JS201", { id: 2, nom: "Bob Martin", niveau: "Master" });

gestion.afficherInscriptions();