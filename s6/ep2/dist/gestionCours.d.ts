export interface Etudiant {
    id: number;
    nom: string;
    niveau: string;
}
export interface Cours {
    code: string;
    titre: string;
    niveau: NiveauCours;
}
export interface Professeur {
    id: number;
    nom: string;
    matiere: string;
}
export declare enum NiveauCours {
    Debutant = 0,
    Intermediaire = 1,
    Avance = 2
}
type Inscription = [Etudiant, Cours];
export declare class GestionCours {
    etudiants: Etudiant[];
    cours: Cours[];
    inscriptions: Inscription[];
    ajouterCours(nouveauCours: Cours): void;
    ajouterEtudiant(nouvelEtudiant: Etudiant): void;
    inscrireEtudiant(coursCode: string, etudiant: Etudiant): void;
    afficherInscriptions(): void;
    private notifierInscription;
}
export {};
